#!/usr/bin/env node
/**
 * Splits the single llms.txt written by @signalwire/docusaurus-plugin-llms-txt
 * into a short root index plus one llms.txt per top-level section, following
 * the Agent-Friendly Docs spec's progressive-disclosure pattern:
 * https://agentdocsspec.com/spec/web/content-discoverability/
 *
 * Runs after `docusaurus build` (see the `_build` script in package.json):
 *   node scripts/split-llms-txt.mjs [build-dir]
 */

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { pathToFileURL } from 'node:url';

const H2 = /^## (.+)$/;
const SUBHEADING = /^#{3,} /;
const LINK = /^- \[([^\]]*)\]\(([^)\s]+)\)(?::\s*(.*))?$/;
// Agents truncate llms.txt files beyond this many characters:
// https://agentdocsspec.com/spec/web/content-discoverability/
const SIZE_LIMIT = 50_000;

export function splitLlmsTxt(text) {
  const lines = text.split('\n');
  const firstHeading = lines.findIndex((line) => H2.test(line));
  if (firstHeading === -1) return { root: text, sections: [] };

  const rootLines = lines.slice(0, firstHeading);
  const sections = [];
  for (const section of parseSections(lines.slice(firstHeading))) {
    const split = splitSection(section);
    if (!split) {
      rootLines.push(`## ${section.title}`, ...section.lines);
      continue;
    }
    rootLines.push(...split.rootLines);
    sections.push(split.file);
  }
  return { root: rootLines.join('\n'), sections };
}

// Groups the lines that follow the preamble into `## Title` sections, keeping
// each section's body lines verbatim.
function parseSections(lines) {
  const sections = [];
  for (const line of lines) {
    const heading = H2.exec(line);
    if (heading) {
      sections.push({ title: heading[1].trim(), lines: [] });
    } else {
      sections.at(-1).lines.push(line);
    }
  }
  return sections;
}

// Returns the root replacement and the per-section file for a section that has
// more than its landing page, or null when the section should stay inline:
// too few pages, already split, or links the script cannot resolve.
function splitSection({ title, lines }) {
  const linkLines = lines.filter((line) => LINK.test(line));
  if (linkLines.length < 2) return null;
  if (linkLines.some(isIndexLink)) return null;

  const firstLinkAt = lines.findIndex((line) => LINK.test(line));
  const href = LINK.exec(lines[firstLinkAt])[2];
  if (!URL.canParse(href)) return null;
  const firstLink = new URL(href);
  const slug = firstLink.pathname
    .split('/')
    .filter(Boolean)[0]
    ?.replace(/\.md$/, '');
  if (!slug) return null;
  const isLanding = firstLink.pathname === `/${slug}.md`;

  // The intro is the section's own text: everything before its first link,
  // stopping early at a subsection heading so that stays with its pages.
  const firstSubheadingAt = lines.findIndex((line) => SUBHEADING.test(line));
  const introEnd =
    firstSubheadingAt !== -1 && firstSubheadingAt < firstLinkAt
      ? firstSubheadingAt
      : firstLinkAt;
  const intro = lines.slice(0, introEnd);
  const body = lines.slice(introEnd);
  const description =
    intro.filter((line) => line.trim() !== '').join(' ') ||
    LINK.exec(lines[firstLinkAt])[3] ||
    title;
  const indexUrl = `${firstLink.origin}/${slug}/llms.txt`;

  const rootLines = [`## ${title}`, ...intro];
  if (isLanding) rootLines.push(lines[firstLinkAt]);
  rootLines.push(
    `- [${title} index](${indexUrl}): Links to all ${linkLines.length} pages in this section.`,
    '',
  );

  const content = [
    `# ${title}`,
    '',
    `> ${description}`,
    '',
    ...body.map(demoteHeading),
  ].join('\n');

  return { rootLines, file: { path: `${slug}/llms.txt`, content } };
}

// `### Sub` becomes `## Sub` inside a section file, where the section is the H1.
function demoteHeading(line) {
  return SUBHEADING.test(line) ? line.slice(1) : line;
}

// A link this script wrote on an earlier run, marking the section as split.
function isIndexLink(line) {
  return LINK.exec(line)[2].endsWith('/llms.txt');
}

function main(dir = 'build') {
  const rootPath = join(dir, 'llms.txt');
  const { root, sections } = splitLlmsTxt(readFileSync(rootPath, 'utf8'));
  for (const { path, content } of sections) {
    const target = join(dir, path);
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, content);
  }
  writeFileSync(rootPath, root);
  for (const { path, content } of [
    { path: 'llms.txt', content: root },
    ...sections,
  ]) {
    if (content.length > SIZE_LIMIT) {
      console.warn(
        `[split-llms-txt] warning: ${path} is ${content.length} characters, ` +
          `over the ${SIZE_LIMIT.toLocaleString('en-US')}-character limit ` +
          'agents apply to llms.txt; split this section further',
      );
    }
  }
  console.log(
    `[split-llms-txt] wrote ${sections.length} section indexes; ` +
      `root llms.txt is now ${root.length} characters`,
  );
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  main(process.argv[2]);
}
