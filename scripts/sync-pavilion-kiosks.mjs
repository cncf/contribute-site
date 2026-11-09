#!/usr/bin/env node
// Refresh the Project Pavilion kiosk snapshot in src/data/pavilion-kiosks.json
// from the kiosk directory Google Sheet embedded on the KubeCon event page.
// Keeps the `event` block; replaces `rows` and `syncedAt`.
//
// Usage: npm run sync:pavilion

import { readFileSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

import {
  buildDirectory,
  findConflicts,
  formatTime,
  rowsFromCsv,
} from '../src/components/PavilionMap/schedule.mjs';

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

data.syncedAt = new Date().toISOString();
data.rows = rows;
writeFileSync(dataFile, `${JSON.stringify(data, null, 2)}\n`);
execFileSync('npx', ['prettier', '--write', dataFile], { stdio: 'inherit' });

console.log(
  `Synced ${rows.length} rows (${entries.length} placed on the map, ${warnings.length} warnings, ${conflicts.length} double bookings) to ${dataFile}`,
);
