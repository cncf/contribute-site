---
title: Understanding Technical and Governance Reviews
description: Why CNCF projects undergo technical and governance reviews
sidebar_position: 6
---

# Understanding Technical and Governance Reviews

CNCF project reviews help maintainers evaluate how their projects are designed,
operated, and governed as they mature.

The General Technical Review (GTR) and Governance Review (GR) examine different
aspects of project maturity. They help projects document their current
practices, identify gaps, and plan improvements.

## General Technical Review (GTR)

The GTR explores a project's technical design and operational readiness. Its
questions follow three phases of the cloud native software lifecycle.

### Day 0 — Planning and design

Questions about project goals, intended users, scope, architecture, and design
decisions help reviewers understand what the project is intended to accomplish
and why it uses its chosen approach.

### Day 1 — Installation and deployment

These questions explore how users install, configure, deploy, and begin using
the project. They help identify challenges that could make adoption or
integration difficult.

### Day 2 — Operations and maintenance

These questions focus on operating software after deployment, including
observability, maintenance, troubleshooting, and other production concerns.

The questions are cumulative across maturity levels. Projects should explain
when a question does not apply to their circumstances.

See the
[official GTR questionnaire](https://github.com/cncf/toc/blob/main/toc_subprojects/project-reviews-subproject/general-technical-questions.md)
for the complete questions and instructions.

## Governance Review (GR)

The Governance Review examines how a project makes decisions, distributes
responsibilities, and operates its community.

### Governance documentation

Reviewers examine whether governance documents are discoverable, clear, current,
and consistent with actual project practices.

### Decision-making and responsibilities

Questions about leadership, role assignments, and decision-making help establish
how contributors participate and how project responsibilities are managed.

### Project neutrality and sustainability

Governance questions help reviewers assess whether project direction, community
practices, and decision-making support transparent, sustainable governance.

### Improvement opportunities

The review can identify strengths, areas requiring improvement, and concerns
that need resolution.

See the
[official Governance Review template](https://github.com/cncf/toc/blob/main/toc_subprojects/project-reviews-subproject/governance-review-template.md)
for the complete assessment criteria.

## Why are these questions asked?

Review questions help maintainers and reviewers understand not only whether a
project has documented practices, but also how those practices support its
users, contributors, and long-term operation.

### Technical review questions

| Question area                      | Why it matters                                                                                                   |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Project goals and scope            | Helps reviewers understand the problems the project solves, its intended users, and what lies outside its scope. |
| Architecture and design            | Explains the project's technical choices and whether the design supports its intended use cases.                 |
| Installation and configuration     | Helps identify barriers to adoption and whether users can deploy the project reliably.                           |
| Upgrades and operational readiness | Explores how adopters can maintain deployments and handle changes over time.                                     |
| Observability and troubleshooting  | Examines how operators identify, investigate, and respond to production problems.                                |

These explanations summarize themes from the
[General Technical Review questionnaire](https://github.com/cncf/toc/blob/main/toc_subprojects/project-reviews-subproject/general-technical-questions.md).
They do not replace the questionnaire or its maturity-specific guidance.

### Governance review questions

| Question area                  | Why it matters                                                                                             |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| Governance discoverability     | Helps contributors understand where project rules and processes are documented.                            |
| Decision-making                | Establishes how technical and organizational decisions are made and recorded.                              |
| Maintainer lifecycle           | Examines how maintainers join, change responsibilities, and leave their roles.                             |
| Vendor neutrality              | Helps assess whether governance supports transparent project direction beyond any single vendor.           |
| Ownership and responsibilities | Checks whether documented roles reflect actual responsibility for code and documentation.                  |
| Contributor participation      | Explores whether contributors have clear ways to participate, communicate, and advance within the project. |

The
[Governance Review template](https://github.com/cncf/toc/blob/main/toc_subprojects/project-reviews-subproject/governance-review-template.md)
provides the specific assessment topics and maturity-level expectations.

## Preparing for reviews

Before beginning a review:

1. Read the applicable review template.
2. Gather current project documentation and supporting evidence.
3. Answer relevant questions with links to existing documentation.
4. Explain any questions that do not apply to the project.
5. Use review findings to identify improvements.

Review expectations and requirements can vary by project maturity level. Always
consult the current CNCF application criteria rather than treating this overview
as an independent checklist.

For details about applying to move levels, see the
[Project Lifecycle documentation](/projects/lifecycle/).
