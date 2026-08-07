---
title: Agent skills
description: Repository-specific skills for agentic workflows in contribute-site.
---

# Agent skills

This folder contains lightweight, repository-specific skills for agents working in this project. Each skill documents when to use it, the repo context it depends on, and the review or output format it should follow.

## Current skills

- [Pull request review](./pull-request-review)
- [Skill improvement](./skill-improvement)

## Intended workflow

The pull request review skill is set up for maintainer intake and incoming contribution triage. By default it assumes:

- validation runs inside the repo's devcontainer
- the default assignee is the person reviewing, yourself
- review summaries include local validation evidence

Use these skills as repeatable playbooks for tasks that happen often in this repository:

- content and blog review
- documentation quality checks
- PR triage and change review
- repo-specific build and verification steps

Keep each skill focused on a single job so it can be reused by humans and agents alike.
