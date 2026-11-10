#!/usr/bin/env node
// Refresh the Project Pavilion kiosk snapshot in src/data/pavilion-kiosks.json
// from the kiosk directory Google Sheet embedded on the KubeCon event page,
// and each project's repository, maturity and description from the CNCF
// landscape. A project the landscape has no description for gets its GitHub
// repository's description (set GITHUB_TOKEN to avoid GitHub's rate limit).
// Keeps the `event` and `repoLookup` blocks; replaces `rows`, `syncedAt` and
// `projects`. If the landscape can't be fetched, the previous `projects` are
// kept.
//
// Usage: npm run sync:pavilion

import { readFileSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

import {
  buildDirectory,
  findConflicts,
  formatTime,
  rowsFromCsv,
} from '../src/components/PavilionMap/schedule.mjs';
import {
  githubRepo,
  landscapeItems,
  matchProjects,
} from '../src/components/PavilionMap/repos.mjs';

const LANDSCAPE_URL =
  'https://raw.githubusercontent.com/cncf/landscape/master/landscape.yml';

const dataFile = fileURLToPath(
  new URL('../src/data/pavilion-kiosks.json', import.meta.url),
);
const data = JSON.parse(readFileSync(dataFile, 'utf8'));
const url = `https://docs.google.com/spreadsheets/d/${data.event.sheetId}/gviz/tq?tqx=out:csv`;

const response = await fetch(url);
if (!response.ok) {
  console.error(`Fetching ${url} failed: HTTP ${response.status}`);
  process.exit(1);
}
const rows = rowsFromCsv(await response.text());
if (!rows || rows.length === 0) {
  console.error(
    'The sheet is missing the expected columns or has no rows; snapshot not updated.',
  );
  process.exit(1);
}

const { entries, warnings } = buildDirectory(rows, data.event);
for (const w of warnings) {
  console.warn(`warning: ${w.project}: ${w.reason}: ${JSON.stringify(w.text)}`);
}
const conflicts = findConflicts(entries);
for (const c of conflicts) {
  console.warn(
    `warning: kiosk ${c.kiosk} is double-booked on ${c.day} ${formatTime(c.start)}–${formatTime(c.end)}: ${c.projects.join(' and ')}`,
  );
}

const names = Array.from(new Set(entries.map((e) => e.project))).sort();
let projectCount = Object.keys(data.projects ?? {}).length;

// A repository's description from the GitHub API, or undefined.
async function githubDescription(repo) {
  const headers = { Accept: 'application/vnd.github+json' };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  try {
    const response = await fetch(`https://api.github.com/repos/${repo}`, {
      headers,
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const description = (await response.json()).description?.trim();
    return description || undefined;
  } catch (error) {
    console.warn(`note: no GitHub description for ${repo} (${error.message})`);
    return undefined;
  }
}

try {
  const landscapeResponse = await fetch(LANDSCAPE_URL);
  if (!landscapeResponse.ok) {
    throw new Error(`HTTP ${landscapeResponse.status}`);
  }
  const items = landscapeItems(yaml.load(await landscapeResponse.text()));
  const { projects, missing } = matchProjects(names, items, data.repoLookup);
  for (const name of missing) {
    console.warn(
      `note: no repository for ${JSON.stringify(name)}; add it to repoLookup if it has one`,
    );
  }
  for (const project of Object.values(projects)) {
    const repo = githubRepo(project.repo);
    if (!project.description && repo) {
      project.description = await githubDescription(repo);
    }
  }
  data.projects = projects;
  delete data.repos;
  projectCount = Object.keys(projects).length;
} catch (error) {
  console.warn(
    `warning: fetching ${LANDSCAPE_URL} failed (${error.message}); keeping the previous project details`,
  );
}

data.syncedAt = new Date().toISOString();
data.rows = rows;
writeFileSync(dataFile, `${JSON.stringify(data, null, 2)}\n`);
execFileSync('npx', ['prettier', '--write', dataFile], { stdio: 'inherit' });

console.log(
  `Synced ${rows.length} rows (${entries.length} placed on the map, ${warnings.length} warnings, ${conflicts.length} double bookings) and ${projectCount} project repositories to ${dataFile}`,
);
