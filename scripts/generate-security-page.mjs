#!/usr/bin/env node
/**
 * Generates docs/security/index.md — the CNCF project security contacts page
 * used for CRA (EU Cyber Resilience Act) Steward Reporting.
 *
 * Data sources:
 *   1. https://github.com/cncf/automation/blob/main/utilities/dot-project/ONBOARDED.md
 *      — the list of orgs with a `.project` repository.
 *   2. Each org's `.project` repo `project.yaml` (schema v1.0.0), which holds
 *      security.policy.path plus fallback contact fields.
 *   3. Each project's SECURITY.md (security.policy.path), which prescribes the
 *      primary vulnerability reporting mechanism (GHSA form or email).
 *
 * Archived projects are excluded.
 *
 * Run: node scripts/generate-security-page.mjs
 * Regenerated daily by .github/workflows/generate-security-page.yml.
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const ONBOARDED_URL =
  'https://raw.githubusercontent.com/cncf/automation/main/utilities/dot-project/ONBOARDED.md';
const PROJECT_YAML_URL = (org) =>
  `https://raw.githubusercontent.com/${org}/.project/HEAD/project.yaml`;

const OUTPUT_FILE = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
  'docs',
  'security',
  'index.md',
);

const CONCURRENCY = 10;
const FETCH_RETRIES = 3;
const MISSING = '⚠️ Missing';

const MATURITY_ORDER = ['graduated', 'incubating', 'sandbox'];
const MATURITY_LABELS = {
  graduated: 'Graduated',
  incubating: 'Incubating',
  sandbox: 'Sandbox',
  unknown: 'Unknown maturity',
};

async function fetchText(url, { allow404 = false } = {}) {
  let lastError;
  for (let attempt = 1; attempt <= FETCH_RETRIES; attempt++) {
    try {
      const res = await fetch(url, {
        headers: {
          'user-agent': 'cncf-contribute-site security-page generator',
        },
      });
      if (res.status === 404 && allow404) return null;
      if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
      return await res.text();
    } catch (err) {
      lastError = err;
      if (attempt < FETCH_RETRIES) {
        await new Promise((r) => setTimeout(r, 1000 * attempt));
      }
    }
  }
  throw lastError;
}

/** Parse the ONBOARDED.md table into [{ org, onboarded }]. */
function parseOnboarded(markdown) {
  const rows = [];
  for (const line of markdown.split('\n')) {
    // | 1 | [org](https://github.com/org) | [org/.project](...) | 2026-08-02 |
    const m = line.match(
      /^\|\s*\d+\s*\|\s*\[([^\]]+)\]\([^)]+\)\s*\|\s*\[[^\]]+\]\([^)]+\)\s*\|\s*([\d-]+)\s*\|/,
    );
    if (m) rows.push({ org: m[1].trim(), onboarded: m[2].trim() });
  }
  if (rows.length === 0) {
    throw new Error(
      'No onboarded organizations parsed from ONBOARDED.md — format changed?',
    );
  }
  return rows;
}

/** Latest maturity phase from a project.yaml maturity_log. */
function currentMaturity(maturityLog) {
  if (!Array.isArray(maturityLog) || maturityLog.length === 0) return 'unknown';
  const sorted = [...maturityLog].sort((a, b) =>
    String(a.date ?? '').localeCompare(String(b.date ?? '')),
  );
  return String(sorted[sorted.length - 1].phase ?? 'unknown').toLowerCase();
}

async function fetchProject({ org, onboarded }) {
  const text = await fetchText(PROJECT_YAML_URL(org), { allow404: true });
  const base = {
    org,
    onboarded,
    name: org,
    maturity: 'unknown',
    policyUrl: null,
    advisoryUrl: null,
    email: null,
    hasProjectYaml: false,
  };
  if (text === null) return base;

  let data;
  try {
    data = yaml.load(text);
  } catch (err) {
    console.warn(
      `WARN: could not parse project.yaml for ${org}: ${err.message}`,
    );
    return base;
  }
  if (!data || typeof data !== 'object') return base;

  const security = data.security ?? {};
  return {
    ...base,
    hasProjectYaml: true,
    name:
      typeof data.name === 'string' && data.name.trim()
        ? data.name.trim()
        : org,
    maturity: currentMaturity(data.maturity_log),
    policyUrl: security.policy?.path ?? null,
    advisoryUrl: security.contact?.advisory_url ?? null,
    email: security.contact?.email ?? null,
  };
}

async function mapWithConcurrency(items, limit, fn) {
  const results = new Array(items.length);
  let next = 0;
  async function worker() {
    while (next < items.length) {
      const i = next++;
      results[i] = await fn(items[i]);
    }
  }
  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, worker),
  );
  return results;
}

/** github.com blob/tree URLs -> raw.githubusercontent.com, others unchanged. */
function toRawUrl(url) {
  return url.replace(
    /^https?:\/\/github\.com\/([^/]+)\/([^/]+)\/(?:blob|tree)\//,
    'https://raw.githubusercontent.com/$1/$2/',
  );
}

// Absolute GHSA links like https://github.com/org/repo/security/advisories[/new]
const GHSA_ABSOLUTE_RE =
  /https?:\/\/github\.com\/[\w.-]+\/[\w.-]+\/security\/advisories(?:\/new)?/;
// Relative or textual references ("open a security advisory", "security/advisories")
const GHSA_RELATIVE_RE = /security\/advisories/;
const EMAIL_RE = /(?:mailto:)?([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/;
const EMAIL_DENYLIST = /@(?:example\.(?:com|org)|users\.noreply\.github\.com)$/;
const LINKED_POLICY_RE =
  /https?:\/\/github\.com\/[\w.-]+\/[\w.-]+\/blob\/[^\s)"'<>]*SECURITY\.md/i;

function firstEmailMatch(text) {
  let offset = 0;
  let rest = text;
  while (rest.length > 0) {
    const m = rest.match(EMAIL_RE);
    if (!m) return null;
    const email = m[1];
    if (!EMAIL_DENYLIST.test(email)) {
      return { index: offset + m.index, email };
    }
    const advance = m.index + m[0].length;
    offset += advance;
    rest = rest.slice(advance);
  }
  return null;
}

/**
 * Determine the primary reporting mechanism a SECURITY.md prescribes.
 * When both a GHSA link and an email appear, whichever the document
 * mentions first wins.
 */
function extractReporting(text, policyUrl) {
  const ghsaAbsolute = text.match(GHSA_ABSOLUTE_RE);
  const ghsaRelative = text.match(GHSA_RELATIVE_RE);
  const emailMatch = firstEmailMatch(text);

  const ghsaIndex = ghsaAbsolute?.index ?? ghsaRelative?.index ?? Infinity;
  const emailIndex = emailMatch?.index ?? Infinity;
  if (ghsaIndex === Infinity && emailIndex === Infinity) return null;

  if (emailIndex < ghsaIndex) {
    return { kind: 'email', value: emailMatch.email };
  }
  if (ghsaAbsolute) {
    return { kind: 'ghsa', value: ghsaAbsolute[0] };
  }
  // Relative reference: point at the repo hosting the SECURITY.md
  const repo = policyUrl.match(/^https?:\/\/github\.com\/([^/]+)\/([^/]+)\//);
  if (repo) {
    return {
      kind: 'ghsa',
      value: `https://github.com/${repo[1]}/${repo[2]}/security/advisories/new`,
    };
  }
  return null;
}

async function resolveReporting(p) {
  if (!p.policyUrl) return { ...p, reporting: fallbackReporting(p) };

  const text = await fetchText(toRawUrl(p.policyUrl), {
    allow404: true,
  }).catch(() => null);

  // project.yaml metadata is often auto-detected; the declared SECURITY.md
  // may not exist. Never publish a dead policy link.
  if (text === null) {
    console.warn(`WARN: SECURITY.md unreachable for ${p.org}: ${p.policyUrl}`);
    return { ...p, policyUrl: null, reporting: fallbackReporting(p) };
  }

  let reporting = extractReporting(text, p.policyUrl);

  // Some SECURITY.md files just point at an org-level policy — follow once
  if (!reporting) {
    const linked = text.match(LINKED_POLICY_RE);
    if (linked && linked[0] !== p.policyUrl) {
      const linkedText = await fetchText(toRawUrl(linked[0]), {
        allow404: true,
      }).catch(() => null);
      if (linkedText) reporting = extractReporting(linkedText, linked[0]);
    }
  }

  if (!reporting) {
    console.warn(`WARN: no reporting mechanism found in ${p.policyUrl}`);
    reporting = fallbackReporting(p);
  }
  return { ...p, reporting };
}

function fallbackReporting(p) {
  if (p.advisoryUrl) return { kind: 'ghsa', value: p.advisoryUrl };
  if (p.email) return { kind: 'email', value: p.email };
  return null;
}

function mdEscape(text) {
  return String(text).replace(/\|/g, '\\|');
}

function reportingCell(reporting) {
  if (!reporting) return MISSING;
  if (reporting.kind === 'email') {
    return `[${mdEscape(reporting.value)}](mailto:${reporting.value})`;
  }
  return `[GitHub Security Advisory](${reporting.value})`;
}

function projectRow(p) {
  const name = `[${mdEscape(p.name)}](https://github.com/${p.org})`;
  const policy = p.policyUrl ? `[Security policy](${p.policyUrl})` : MISSING;
  return `| ${name} | ${policy} | ${reportingCell(p.reporting)} |`;
}

function maturitySection(label, projects) {
  const lines = [
    `## ${label}`,
    '',
    '| Project | Security policy | Report a vulnerability |',
    '| --- | --- | --- |',
  ];
  for (const p of projects) lines.push(projectRow(p));
  return lines.join('\n');
}

function generateMarkdown(projects) {
  const today = new Date().toISOString().slice(0, 10);
  const total = projects.length;
  const withPolicy = projects.filter((p) => p.policyUrl).length;
  const withReporting = projects.filter((p) => p.reporting).length;

  const byMaturity = new Map();
  for (const p of projects) {
    const key = MATURITY_ORDER.includes(p.maturity) ? p.maturity : 'unknown';
    if (!byMaturity.has(key)) byMaturity.set(key, []);
    byMaturity.get(key).push(p);
  }
  for (const list of byMaturity.values()) {
    list.sort((a, b) =>
      a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }),
    );
  }

  const sections = [];
  for (const key of [...MATURITY_ORDER, 'unknown']) {
    const list = byMaturity.get(key);
    if (list?.length)
      sections.push(maturitySection(MATURITY_LABELS[key], list));
  }

  return `---
title: Project Security Contacts
description: >-
  Security policies and vulnerability reporting channels for CNCF projects, in
  support of CRA Steward Reporting requirements.
---

<!--
  GENERATED FILE — DO NOT EDIT BY HAND.
  Regenerate with: npm run generate:security
  Source: scripts/generate-security-page.mjs
-->

_Last updated: ${today}_

This page lists the security policy and vulnerability reporting channel for
each active CNCF project. The reporting channel is taken from each project's
own security policy (\`SECURITY.md\`), discovered through the project's
[\`.project\` repository](https://github.com/cncf/automation/tree/main/utilities/dot-project)
metadata. It supports the CNCF's obligations as an open source steward under
the [EU Cyber Resilience Act (CRA)](https://eur-lex.europa.eu/eli/reg/2024/2847/oj).

Of the ${total} active projects with a \`.project\` repository: ${withPolicy}
publish a security policy and ${withReporting} provide a vulnerability
reporting channel.

:::info Report a vulnerability

To report a vulnerability in a CNCF project, use the project's vulnerability
reporting link below. If a project has no reporting channel listed, contact
[security@cncf.io](mailto:security@cncf.io).

:::

Entries marked **${MISSING}** indicate the project has not yet published the
relevant security metadata. Maintainers can fix this by adding a
\`SECURITY.md\` to their project and referencing it from \`project.yaml\` in
their \`.project\` repository — see the
[schema documentation](https://github.com/cncf/automation/blob/main/utilities/dot-project/SCHEMA.md).

${sections.join('\n\n')}
`;
}

async function main() {
  console.log('Fetching ONBOARDED.md ...');
  const onboarded = parseOnboarded(await fetchText(ONBOARDED_URL));
  console.log(`Found ${onboarded.length} onboarded organizations.`);

  const projects = await mapWithConcurrency(
    onboarded,
    CONCURRENCY,
    fetchProject,
  );
  const missingYaml = projects.filter((p) => !p.hasProjectYaml);
  if (missingYaml.length > 0) {
    console.warn(
      `WARN: no readable project.yaml for ${missingYaml.length} org(s): ` +
        missingYaml.map((p) => p.org).join(', '),
    );
  }

  const active = projects.filter((p) => p.maturity !== 'archived');
  console.log(
    `Resolving reporting channels from SECURITY.md for ${active.length} active projects ` +
      `(${projects.length - active.length} archived excluded) ...`,
  );
  const resolved = await mapWithConcurrency(
    active,
    CONCURRENCY,
    resolveReporting,
  );

  await fs.mkdir(path.dirname(OUTPUT_FILE), { recursive: true });
  await fs.writeFile(OUTPUT_FILE, generateMarkdown(resolved));
  console.log(`Wrote ${OUTPUT_FILE} (${resolved.length} projects).`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
