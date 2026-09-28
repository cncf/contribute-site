import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { splitLlmsTxt } from '../scripts/split-llms-txt.mjs';

const SCRIPT = fileURLToPath(
  new URL('../scripts/split-llms-txt.mjs', import.meta.url),
);
const FIXTURE = readFileSync(
  new URL('./fixtures/llms-root.txt', import.meta.url),
  'utf8',
);

const PREAMBLE = `# CNCF Contributors

> Guides for contributing to and maintaining CNCF projects.

- [CNCF Contributors](https://contribute.cncf.io/index.md)
`;

describe('splitLlmsTxt', () => {
  it('leaves a file without sections untouched', () => {
    const { root, sections } = splitLlmsTxt(PREAMBLE);
    assert.equal(root, PREAMBLE);
    assert.deepEqual(sections, []);
  });

  it('leaves a section with only its landing page inline', () => {
    const text = `${PREAMBLE}
## Project Security Contacts

Security policies and vulnerability reporting channels for CNCF projects.

- [Project Security Contacts](https://contribute.cncf.io/security.md): Security policies and vulnerability reporting channels for CNCF projects.
`;
    const { root, sections } = splitLlmsTxt(text);
    assert.equal(root, text);
    assert.deepEqual(sections, []);
  });

  const SKILLS = `## Agent skills

Repository-specific skills for agentic workflows in contribute-site.

- [Agent skills](https://contribute.cncf.io/skills.md): Repository-specific skills for agentic workflows in contribute-site.

### pull-request-review

A repo-specific skill for reviewing pull requests in contribute-site.

- [Pull request review](https://contribute.cncf.io/skills/pull-request-review.md): A repo-specific skill for reviewing pull requests in contribute-site.

### skill-improvement

- [Skill Improvement Mandate](https://contribute.cncf.io/skills/skill-improvement.md): Every agent session must produce a skill file update.
`;

  it('moves a section with more pages into its own index file', () => {
    const { root, sections } = splitLlmsTxt(`${PREAMBLE}\n${SKILLS}`);

    assert.equal(
      root,
      `${PREAMBLE}
## Agent skills

Repository-specific skills for agentic workflows in contribute-site.

- [Agent skills](https://contribute.cncf.io/skills.md): Repository-specific skills for agentic workflows in contribute-site.
- [Agent skills index](https://contribute.cncf.io/skills/llms.txt): Links to all 3 pages in this section.
`,
    );

    assert.deepEqual(sections, [
      {
        path: 'skills/llms.txt',
        content: `# Agent skills

> Repository-specific skills for agentic workflows in contribute-site.

- [Agent skills](https://contribute.cncf.io/skills.md): Repository-specific skills for agentic workflows in contribute-site.

## pull-request-review

A repo-specific skill for reviewing pull requests in contribute-site.

- [Pull request review](https://contribute.cncf.io/skills/pull-request-review.md): A repo-specific skill for reviewing pull requests in contribute-site.

## skill-improvement

- [Skill Improvement Mandate](https://contribute.cncf.io/skills/skill-improvement.md): Every agent session must produce a skill file update.
`,
      },
    ]);
  });

  it('links only the index when a section has no landing page', () => {
    const text = `${PREAMBLE}
## Notes

- [First note](https://contribute.cncf.io/notes/first.md): One.
- [Second note](https://contribute.cncf.io/notes/second.md): Two.
`;
    const { root, sections } = splitLlmsTxt(text);

    assert.equal(
      root,
      `${PREAMBLE}
## Notes

- [Notes index](https://contribute.cncf.io/notes/llms.txt): Links to all 2 pages in this section.
`,
    );
    assert.equal(sections.length, 1);
    assert.equal(sections[0].path, 'notes/llms.txt');
    assert.match(
      sections[0].content,
      /^# Notes\n\n> One\.\n\n- \[First note\]/,
    );
  });

  // LOCKED: regression for cncf/contribute-site#428 (self-review): a second
  // pass re-split every already-split section, overwriting each section index
  // with a two-link stub and rewriting the root to say "all 2 pages".
  it('is a no-op on a root it has already split', () => {
    const once = splitLlmsTxt(`${PREAMBLE}\n${SKILLS}`);
    const twice = splitLlmsTxt(once.root);
    assert.equal(twice.root, once.root);
    assert.deepEqual(twice.sections, []);
  });

  it('leaves a section inline when its first link is not an absolute URL', () => {
    const text = `${PREAMBLE}
## Notes

- [First note](/notes/first.md): One.
- [Second note](/notes/second.md): Two.
`;
    const { root, sections } = splitLlmsTxt(text);
    assert.equal(root, text);
    assert.deepEqual(sections, []);
  });

  describe('on plugin output', () => {
    const linkLines = (text) =>
      text.split('\n').filter((l) => l.startsWith('- ['));
    const { root, sections } = splitLlmsTxt(FIXTURE);

    it('keeps the preamble and one block per section in the root', () => {
      assert.ok(root.startsWith(FIXTURE.slice(0, FIXTURE.indexOf('\n## '))));
      assert.deepEqual(
        root.split('\n').filter((l) => l.startsWith('## ')),
        [
          '## Blog',
          '## Community',
          '## Project Security Contacts',
          '## Agent skills',
        ],
      );
    });

    it('writes one index per multi-page section, each a valid llms.txt', () => {
      assert.deepEqual(
        sections.map((s) => s.path),
        ['blog/llms.txt', 'community/llms.txt', 'skills/llms.txt'],
      );
      for (const { content } of sections) {
        const lines = content.split('\n');
        assert.match(lines[0], /^# .+/);
        assert.equal(lines[1], '');
        assert.match(lines[2], /^> .+/);
        assert.ok(!lines.some((l) => l.startsWith('### ')), 'no H3 left');
      }
    });

    it('keeps every original page link exactly once across the files', () => {
      const original = linkLines(FIXTURE);
      const kept = [
        ...linkLines(root).filter((l) => !l.includes('/llms.txt)')),
        ...sections.flatMap((s) => linkLines(s.content)),
      ];
      // Landing pages appear in both the root and their section index.
      const landings = sections.map(
        (s) => `- [${s.content.split('\n')[0].slice(2)}](`,
      );
      const deduped = kept.filter(
        (l, i) =>
          !(landings.some((p) => l.startsWith(p)) && kept.indexOf(l) !== i),
      );
      assert.deepEqual(deduped.sort(), original.sort());
    });

    it('shrinks the root', () => {
      assert.ok(
        root.length < FIXTURE.length / 2,
        `${root.length} vs ${FIXTURE.length}`,
      );
    });
  });
});

describe('split-llms-txt CLI', () => {
  it('rewrites <dir>/llms.txt in place and writes the section indexes', () => {
    const dir = mkdtempSync(join(tmpdir(), 'split-llms-'));
    writeFileSync(join(dir, 'llms.txt'), FIXTURE);

    const stdout = execFileSync(process.execPath, [SCRIPT, dir], {
      encoding: 'utf8',
    });

    const { root, sections } = splitLlmsTxt(FIXTURE);
    assert.equal(readFileSync(join(dir, 'llms.txt'), 'utf8'), root);
    for (const { path, content } of sections) {
      assert.equal(readFileSync(join(dir, path), 'utf8'), content);
    }
    assert.match(stdout, /3 section index(es)?/);
  });

  // LOCKED: regression for cncf/contribute-site#428 (self-review): running the
  // CLI twice on the same build directory clobbered the section indexes.
  it('leaves the build directory unchanged when run a second time', () => {
    const dir = mkdtempSync(join(tmpdir(), 'split-llms-'));
    writeFileSync(join(dir, 'llms.txt'), FIXTURE);
    const run = () =>
      execFileSync(process.execPath, [SCRIPT, dir], { encoding: 'utf8' });

    run();
    const { sections } = splitLlmsTxt(FIXTURE);
    const snapshot = ['llms.txt', ...sections.map((s) => s.path)].map((p) =>
      readFileSync(join(dir, p), 'utf8'),
    );

    const stdout = run();
    const after = ['llms.txt', ...sections.map((s) => s.path)].map((p) =>
      readFileSync(join(dir, p), 'utf8'),
    );
    assert.deepEqual(after, snapshot);
    assert.match(stdout, /0 section index(es)?/);
  });

  it('fails loudly when the root llms.txt is missing', () => {
    const dir = mkdtempSync(join(tmpdir(), 'split-llms-'));
    assert.ok(!existsSync(join(dir, 'llms.txt')));
    assert.throws(() =>
      execFileSync(process.execPath, [SCRIPT, dir], {
        encoding: 'utf8',
        stdio: 'pipe',
      }),
    );
  });
});
