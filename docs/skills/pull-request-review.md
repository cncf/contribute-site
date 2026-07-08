---
title: Pull request review
description: A repo-specific skill for reviewing pull requests in contribute-site.
---

# Pull request review

Use this skill when a pull request changes any part of this repository and needs a repo-aware review before merge.

## Purpose

This skill helps an agent review changes in a consistent, repo-aware way before a PR is merged. It is designed for the contribute-site workflow, where changes are frequently content-heavy but can also touch build, config, and documentation infrastructure.

## When to use it

Use this skill for PRs that affect:

- blog posts and author metadata
- documentation pages under `docs/`
- site configuration or build-related files
- contributor guidance and maintainer content
- scripts, CI workflows, or other repo automation
- any change that may affect the Docusaurus site or generated content

## Inputs

The agent should collect:

- the PR number or branch name
- the target branch
- any user-specified review scope, if provided

## Review workflow

1. Confirm the PR context, target branch, and whether the user wants a full-repo review or a narrower scope.
2. Assign it to yourself to work on it
3. Review the diff and identify the changed files and their likely impact.
4. Check content quality, structure, and consistency with repo conventions.
5. Validate the change in the repository's devcontainer (`.devcontainer/devcontainer.json`) when possible, using the repo's standard commands such as `npm run build` and `npm run typecheck`.
6. Produce a concise review summary with clear findings and include the validation evidence from the local run.

## Repo-specific checks

Reviewers should pay particular attention to:

- Docusaurus-compatible Markdown and plain Markdown usage
- blog post frontmatter, including `title`, `date`, `authors`, and `tags`
- authors referenced in blog content that must exist in `blog/authors.yml`
- generated TechDocs content under `docs/techdocs/`; do not hand-edit it
- broken internal links and markdown formatting issues
- build correctness with `npm run build`
- changes to workflows, scripts, or automation that may affect CI or local build behavior
- any edits to files under `.github/` that may change PR or review expectations
- correct usage of [CNCF Glossary](https://glossary.cncf.io/)

## Suggested output format

Use this structure for the review result:

1. Summary
2. Maintainer handoff
   - PR status
   - assignee if assigned
3. Findings
   - blocking issues
   - non-blocking suggestions
4. Validation
   - commands run
   - outcome
   - environment used (host or devcontainer)
5. Recommendation
   - approve, request changes, or comment only

## Guardrails

- Do not assume the PR number or branch without verifying it.
- Do not attempt destructive actions such as reverting, merging, or pushing to `main` without confirming the exact change and user intent.
- If a PR is already merged, explain that GitHub does not allow reopening it and offer a fresh reviewable PR path if appropriate.
- Prefer the smallest useful validation step first, then escalate to full-site validation when needed.
- For full-repo reviews, treat build, content, and workflow changes as equally important; do not focus only on docs text.
- Under no circumstance merge PRs by you or your operator - review only