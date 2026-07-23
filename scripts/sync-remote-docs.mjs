#!/usr/bin/env node

import {mkdir, writeFile} from 'node:fs/promises';
import path from 'node:path';

const remoteDocs = [
  {
    name: 'awards',
    sourceUrl: 'https://raw.githubusercontent.com/cncf/awards/main/README.md',
    targetPath: 'docs/community/awards.md',
    frontmatter: {
      title: 'Community Awards',
      description:
        'Individuals and organizations that have made significant contributions to the cloud native ecosystem',
      sidebar_position: 7,
    },
  },
];

const frontmatterLines = (frontmatter) =>
  ['---', ...Object.entries(frontmatter).map(([key, value]) => `${key}: ${JSON.stringify(value)}`), '---', ''].join('\n');

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      'user-agent': 'cncf-contribute-site-sync/1.0',
      accept: 'text/plain, text/markdown;q=0.9, */*;q=0.1',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }

  return response.text();
}

async function syncDoc(doc) {
  const body = await fetchText(doc.sourceUrl);
  const output = `${frontmatterLines(doc.frontmatter)}${body.replace(/^\uFEFF/, '')}`;
  const targetAbsolutePath = path.resolve(doc.targetPath);

  await mkdir(path.dirname(targetAbsolutePath), {recursive: true});
  await writeFile(targetAbsolutePath, output);

  console.log(`Synced ${doc.name}: ${doc.sourceUrl} -> ${doc.targetPath}`);
}

for (const doc of remoteDocs) {
  await syncDoc(doc);
}