---
title: Maintainer Summit North America 2026 Update from the Projects Staff
date: 2026-11-08
authors:
  [
    krook,
    idvoretskyi,
    castrojo,
    jeefy,
    mrbobbytables,
    nate-double-u,
    riaankleinhans,
    robertkielty,
  ]
tags: [maintainers, community, projects, services]
---

Hello maintainers! Here's a roundup of the resources and process changes
made available to you and your projects since the
[last North American Maintainer Summit in Atlanta](./2025-11-08-maintainer-summit-update-from-the-project-staff.md).

If you're not attending in person this year please make sure to take the
[2H 2026 survey](https://maintainers-survey.cncf.io)!

This is your chance to
tell us how we're doing, gauge your understanding of the benefits of hosting a
project at the CNCF, and influence our priorities in 2027.

- [New services since the last Maintainer Summit in Atlanta](/blog/2026/11/08/maintainer-summit-update-from-the-project-staff#new-services-since-the-last-maintainer-summit-in-atlanta)
- [Reminder about other services available to you](/blog/2026/11/08/maintainer-summit-update-from-the-project-staff#reminder-about-other-services-available-to-you)
- [Upcoming dates of interest](/blog/2026/11/08/maintainer-summit-update-from-the-project-staff#upcoming-dates-of-interest)
- [Please fill out the survey so we can serve you better](/blog/2026/11/08/maintainer-summit-update-from-the-project-staff#please-fill-out-the-survey-so-we-can-serve-you-better)

<!-- truncate -->

## New services since the last Maintainer Summit in Atlanta

### `.project` for project metadata

[`.project`](https://github.com/cncf/automation/tree/main/utilities/dot-project)
is a standardized metadata repository in each project's GitHub organization. Its
`maintainers.yaml` file is the source of truth for maintainer rosters, and CNCF
automation uses it for mailing list sync, Service Desk access, the Landscape,
and governance audits.

At present, 223 of 228 projects (97.8%) have completed the
rollout, and about 86% of maintainers have connected their GitHub handle to
their Linux Foundation ID (LFID).

Projects can also
[scope Service Desk access to a smaller team](./2026-09-30-cloud-native-project-monthly-september-2026.md#new-scoping-service-desk-access-to-a-smaller-team)
by adding a `servicedesk` team to `maintainers.yaml`.

:::info Action required

- Link your GitHub handle and verify your primary email address at
  [openprofile.dev](https://openprofile.dev/). Without that connection, you
  could miss out on project maintainer mailing lists and Service Desk access.
- Check your details in the
  [CNCF `.project` maintainer list](https://github.com/cncf/foundation/blob/main/project-maintainers-.project.csv).
- If your project has an open `.project` PR from CNCF staff, please review and
  merge it.

:::

Learn more in
[Introducing `.project`](./2026-04-22-introducing-dot-project-for-maintainers.md).

### GitHub Copilot Enterprise

[GitHub Copilot Enterprise is available to CNCF project maintainers at no cost](./2025-12-16-github-copilot-enterprise-for-maintainers.md).
It includes the Copilot coding agent, Copilot code review, and contextual chat.

Legacy Copilot Business seats were
[phased out in April 2026](./2026-03-17-sunsetting-github-copilot-business.md).
Eligibility is validated against
[maintainers.cncf.io](https://maintainers.cncf.io/). Request a seat via the
[Service Desk](https://servicedesk.cncf.io/).

Please continue to use this resource responsibly.

### Docker Sponsored Open Source Program and Docker Hardened Images

[CNCF projects can apply to the Docker Sponsored Open Source (DSOS) Program](./2026-01-15-docker-sponsored-open-source-program.md)
through the Service Desk. Benefits include unlimited Docker Hub image pulls,
Sponsored OSS status, Docker Scout, automated builds, and usage metrics.

[Docker Hardened Images](./2026-01-21-docker-hardened-images-for-cncf-projects.md)
are also free to use. They are minimal, non-root base images that include SBOMs
and SLSA Level 3 build provenance.

### Kusari Inspector

Kusari offers its
[Inspector product to all CNCF projects at no cost](./2025-12-17-cloud-native-project-monthly-december-2025.md#️-kusari-inspector-free-for-projects).
Inspector shows versions, licenses, and security risks for direct and transitive
dependencies.

Sign up at
[us.kusari.cloud/signup](https://us.kusari.cloud/signup).

### Kapa.ai documentation assistants

[CNCF has partnered with Kapa.ai](./2026-04-09-reducing-support-tax-cncf-kapa-ai.md)
to provide AI documentation assistants to projects at all maturity levels.

Assistants are grounded in your project's docs, code, issues, and chat archives.
They can be embedded in your docs site, installed as a chat bot, or deployed as
a hosted MCP server.

Request access via the Service Desk.

### GPU runners for GitHub Actions

Thanks to NVIDIA and several partners,
[dedicated GPU runners are available for CNCF GitHub Actions](./2026-10-27-cloud-native-project-monthly-october-2026.md#gpu-runners-now-available-for-cncf-github-actions)
on a project-by-project basis.

File a
[Service Desk ticket](https://servicedesk.cncf.io/) to request access.

### Prow without running Prow

[Prow-GitHub-Actions](https://github.com/cncf/prow-github-actions) lets projects
use Prow features without hosting Prow.

It supports `OWNERS` files with
blunderbuss, built-in and custom slash commands, label management, and issue and
PR lifecycle management.

### LFX Insights

[LFX Insights](https://insights.linuxfoundation.org/) added Health Score v2 and
a **Healthiest** sorting option for project lists and collections. Active
contributor badges now use the same rolling 365-day window as the dashboards.

LFX is also working toward broader project data coverage and validation, along
with Insights API access and future MCP and CLI integrations. The API is in
closed alpha; wider access and delivery dates have not been confirmed.

### LFX Self Serve

[LFX Self Serve](https://app.lfx.dev/) added mobile ballots, participation
progress, and vote-close summaries to project voting. Committee administrators
can now edit committee details and open public committee profiles directly.

Feature availability depends on your project's onboarding and your role.

### LFX Project Control Center meetings

[Projects that have moved their meetings to PCC](./2026-03-19-cloud-native-project-monthly-march-2026.md#pcc-adoption-gathers-momentum-streamline-your-projects-meetings)
schedule meetings without opening Service Desk tickets.

[new instructional video](https://www.youtube.com/watch?v=KOSRy4c4Yv8) covers
linking PCC meetings to your project's YouTube channel for automatic uploads.

### LFX MCP Server

The
[LFX MCP Server](./2026-09-30-cloud-native-project-monthly-september-2026.md#lfx-mcp-is-now-available-to-the-community---connect-your-ai-assistant-to-lfx-self-serve)
connects AI assistants such as Claude, Cursor, GitHub Copilot, and Goose to LFX
Self Serve using your own LFID and existing permissions.

Request access on the
[lfx-mcp repo](https://github.com/linuxfoundation/lfx-mcp).

### Agent-friendly docs and TechDocs support

[AFDocs](https://afdocs.dev) scores your documentation site against the
Agent-Friendly Documentation Spec. Your project's
[CLOMonitor report](https://clomonitor.io/docs/topics/checks/#agent-readiness)
now includes an Agent Readiness section.

The CNCF TechDocs team can help you
update your site. Open a Service Desk ticket, join Tech Writers Office Hours on
the fourth Wednesday of each month, or ask in `#techdocs` on CNCF Slack.

[Docsy has also joined the Linux Foundation](./2026-10-27-cloud-native-project-monthly-october-2026.md#docsy-joins-the-linux-foundation).

### Open Community Groups

[Cloud Native Community Groups have migrated from Bevy to Open Community Groups](./2026-05-29-cloud-native-project-monthly-may-2026.md#cloud-native-community-groups-migration),
an open source platform with a built-in Call for Speakers workflow.

You can
[contribute to the platform](https://github.com/cncf/open-community-groups).

### Akrites CVE Numbering Authority

In October the CVE Program
[added Akrites SIRT as a CVE Numbering Authority (CNA)](https://www.cve.org/Media/News/item/news/2026/10/27/Akrites-Added-as-CNA).

Its scope covers projects directly attached to the Linux Foundation or any of
its sub-foundations (including the CNCF), unless the project has a Supplier CNA of its own.

We have seen multiple projects having an issue getting CVE numbers so we will be rolling out a new ticket type in Service Desk where projects can request them.

## Reminder about other services available to you

- The newly relaunched [contribute.cncf.io resource page](https://contribute.cncf.io/resources/services/)
  lists everything that's available to projects and maintainers.
- [Service Desk](https://servicedesk.cncf.io/) is where you can make a variety
  of requests, ask questions, and connect with CNCF staff.
- [LFX Insights](https://insights.linuxfoundation.org/) provides project
  velocity, contributor dependency, and organizational reliance data.
- Please keep your project's `.project/maintainers.yaml` current. This is how we
  validate Maintainer Summit registrations, grant Service Desk access, and keep
  maintainer mailing lists accurate.

## Upcoming dates of interest

We now have a new [Call for Papers page that lists upcoming opportunities](https://contribute.cncf.io/events/cfp). Please bookmark it and check back regularly.

:::warning Deadlines

| Date                           | Call to action                                                                                                                                                          |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1 December 2026, 23:59 CET** | [Submit to the CNCF Maintainer Summit Europe CFP](https://sessionize.com/maintainer-summit-eu-2027/)                                                                    |
| **2 December 2026**            | [Request a Project Kiosk for KubeCon + CloudNativeCon Europe](https://events.linuxfoundation.org/kubecon-cloudnativecon-europe/features-add-ons/project-opportunities/) |

:::

## Please fill out the survey so we can serve you better

Yes, another reminder 🙂. Please make sure to take the
[maintainer survey](https://maintainers-survey.cncf.io)! This is your chance to
tell us how we're doing, gauge your understanding of the benefits of hosting a
project at the CNCF, and influence our priorities in 2027.

See you at Maintainer Summit and have a great rest of your KubeCon +
CloudNativeCon North America!
