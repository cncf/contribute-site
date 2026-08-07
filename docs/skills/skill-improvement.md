---
name: skill-improvement
version: "1.0"
last_updated: 2026-07-08
tags: [skills, improvement, documentation]
description: "The skill-improvement mandate — every agent session must produce a skill file update alongside the work. Use when completing a task and deciding whether to write a skill update, or when creating or updating a skill file."
metadata:
  type: procedure
---

# Skill Improvement Mandate

Every agent session must produce two outputs:

1. **The work** — the PR, fix, or content improvement
2. **The learning** — what a future agent should know

Output 1 without Output 2 leaves the repository no smarter. The loop only compounds if agents write back.

## Contents
- [Before You Mark Work Complete](#before-you-mark-work-complete)
- [What Counts as a Learning Worth Writing Back](#what-counts-as-a-learning-worth-writing-back)
- [Where to Write It](#where-to-write-it)
- [Which Skill File to Update](#which-skill-file-to-update)
- [How to Commit It](#how-to-commit-it)

---

## Before You Mark Work Complete

Run this checklist before opening a PR for review or marking an issue done:

- [ ] Did I discover any workaround, non-obvious pattern, or convention?
- [ ] Is there a skill file for the area I worked in?
- [ ] If yes — did I update it?
- [ ] If no — did I create one?
- [ ] Is the skill file committed in the same PR? (Not a follow-up. Same PR.)

If all five are checked, the task is complete. If any are unchecked, finish them first.

---

## What Counts as a Learning Worth Writing Back

**Write it:**

| Category | Example |
|---|---|
| Upstream config workaround | "Docusaurus v3 requires social values to be either plain usernames or fully qualified URLs. LinkedIn bare domains break the build." |
| Non-obvious correctness requirement | "Prettier proseWrap must be set to 'always' for markdown files to avoid formatting lint check errors." |
| Convention not obvious from code | "TechDocs content under docs/techdocs/ is generated and gitignored. Never edit it directly." |
| Trial-and-error discovery | "Docusaurus onBrokenLinks must be kept as 'warn' to prevent the build from failing due to external unauthenticated domains." |
| Project-internal fact correction | "All blog authors must exist in blog/authors.yml. If you add a blog post, you must update authors.yml first." |

Project-internal fact drift is a first-class failure mode. When an agent writes documentation about the repository setup, workflows, or metadata and gets it wrong, that is a skill failure. The fix is always the same: read the configuration/source files, update the relevant skill file, and ensure future agents can check.

**Do NOT write:**

| Category | Example |
|---|---|
| One-off task note | "Use commit message docs: update blog publish date for this PR" |
| Obvious developer knowledge | "Run git status to see changed files" |
| Ephemeral state | "The Netlify preview is currently pending due to branch queue" |
| Contradiction of another skill | If a skill says X and you want to say not-X, update that skill to say not-X — do not add a conflicting document. |

---

## Where to Write It

Write all skills to the `docs/skills/` directory in this repository.

If the directory is missing (for example in a clean workspace), recreate it.

---

## Which Skill File to Update

Use the closest matching existing skill. Only create a new skill when the change introduces a new reusable domain that has no existing home.

```
Changed a workflow or script?    -> docs/skills/ (or update AGENTS.md)
Reviewed a pull request?         -> docs/skills/pull-request-review.md
New domain or workflow?         -> docs/skills/<area>.md
```

---

## How to Commit It

The skill update goes in the same commit or same PR as the implementation. Not in a follow-up PR, and not deferred for later.

```bash
# Stage both the work and the skill update together
git add blog/2026-07-08-something.md docs/skills/pull-request-review.md
git commit -m "docs: add blog post on empowering non-code contributors

Update pull-request-review.md to incorporate formatting checks.

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```
