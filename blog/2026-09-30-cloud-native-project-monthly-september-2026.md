---
title: Cloud Native Project Monthly (CNPM) September 2026 Newsletter
date: 2026-09-30
authors: [krook, idvoretskyi, castrojo, jeefy, mrbobbytables, nate-double-u, riaankleinhans, robertkielty]
tags: [maintainers, community, projects, services, newsletter]
---

Welcome to the September 2026 edition of the Cloud Native Project Monthly (CNPM) Newsletter.

We hope you enjoyed KubeCon + CloudNativeCon China this month and we look forward to seeing many of you at [KubeCon + CloudNativeCon North America](https://events.linuxfoundation.org/kubecon-cloudnativecon-north-america/register/) in a few short weeks!

Please take a moment to complete the [2H 2026 Maintainer Survey](https://maintainers-survey.cncf.io). Your feedback helps us improve the tools, workflows, and support programs that directly affect how CNCF projects operate, scale, and onboard maintainers.

* [`.project` Updates](/blog/2026/09/30/cloud-native-project-monthly-september-2026#project-updates)
* [New GitHub Features for Handling Low-Quality or Spam Contributions](/blog/2026/09/30/cloud-native-project-monthly-september-2026#new-github-features-for-handling-low-quality-or-spam-contributions)
* [KubeCon + CloudNativeCon 2026 and other Event CFPs, Scholarships, and Travel Funding Deadlines](/blog/2026/09/30/cloud-native-project-monthly-september-2026#kubecon--cloudnativecon-2026-and-other-event-cfps-scholarships-and-travel-funding-deadlines)
* [LFX MCP is Now Available to the Community - Connect Your AI Assistant to LFX Self Serve](/blog/2026/09/30/cloud-native-project-monthly-september-2026#lfx-mcp-is-now-available-to-the-community---connect-your-ai-assistant-to-lfx-self-serve)
* [Please Complete the 2H 2026 Maintainer Survey](/blog/2026/09/30/cloud-native-project-monthly-september-2026#please-complete-the-2h-2026-maintainer-survey)
* [See You Next Month](/blog/2026/09/30/cloud-native-project-monthly-september-2026#see-you-next-month)

<!-- truncate -->

## `.project` Updates

**Where we are today:**

* **221** CNCF projects now have a `.project` repository as the canonical source for their maintainer roster - up from 195 last month.
* **217** of those (**98%**) are fully activated on downstream automation - CNCF mailing list sync and Jira Service Desk customer sync run against their `.project/maintainers.yaml`.
* **4** projects have a `.project` repo but are still in audit / roster alignment before activation.
* Coverage spans the whole foundation: **32** Graduated, **38** Incubating, and **151** Sandbox projects.

**Maintainer coverage:**

* **2,322** maintainer entries are currently listed across all `.project/maintainers.yaml` files (**2,198** unique people), up from 1,708 last month.
* **1,908 (82.2%)** are matched to an LF profile in [OpenProfile](https://openprofile.dev/) with their GitHub handle connected - these get automatic access to the CNCF service desk and mailing lists.
* **414 (17.8%)** are **not yet linked** - either they don't have an OpenProfile account, or their profile doesn't have the GitHub handle listed in `.project/maintainers.yaml` connected. These maintainers miss out on automated access until they sign in to [OpenProfile](https://openprofile.dev/) and connect their GitHub account.

For maintainers, this update reduces access-management overhead and helps projects keep their roster and access boundaries aligned with the people who actually maintain the project.

Maintainer checklist:

* Confirm your GitHub handle is connected in your project's `.project/maintainers.yaml`
* Review whether a scoped `servicedesk` team is a better fit than broad access
* Verify your OpenProfile data is current so downstream automation remains accurate

### New: scoping service desk access to a smaller team

By default, **every** maintainer in your `.project/maintainers.yaml` gets CNCF Service Desk access. For larger projects, that's often more people than you want in a support channel with CNCF staff.

You can now scope it. Add a `servicedesk` team to your `maintainers.yaml` alongside your maintainers team, and list only the handles who should have Service Desk access:

```yaml
teams:
  - name: maintainers
    members:
      - alice
      - bob
      - carol
  - name: servicedesk
    members:
      - alice
      - bob
```

How it behaves:

* **No `servicedesk` team** → all maintainers keep Service Desk access. Nothing changes for you.
* **`servicedesk` team present** → only the listed handles get access.
* A handle must appear in **both** teams - someone listed only under `servicedesk` is ignored, since Service Desk access is a maintainer entitlement.
* The team name is flexible: `servicedesk`, `service-desk`, and `service_desk` all work.
* If the team is present but resolves to nobody, access stays **unchanged** rather than being revoked - a typo can't lock your project out.

OpenTelemetry is the first project using this, scoping Service Desk access from 161 maintainers down to a 19-person team.

Note: this affects **Service Desk only**. Mailing list membership still follows the full maintainer roster.

**How maintainers can help right now:**

1. Sign in to [OpenProfile](https://openprofile.dev/) and confirm your profile info is up to date.
2. Connect the GitHub account that's listed for you in your project's `.project/maintainers.yaml`.
3. Make sure the primary email on your profile is current - CNCF automation uses it for mailing-list and service-desk provisioning.
4. If your project has an open `.project` PR from CNCF staff, please review and merge - it aligns the roster with your `MAINTAINERS` file.
5. Consider whether a scoped `servicedesk` team makes sense for your project.

For technical background, see [Introducing `.project` for maintainers](/blog/2026/04/22/introducing-dot-project-for-maintainers).

## New GitHub Features for Handling Low-Quality or Spam Contributions

These updates are aimed at reducing maintainer burden when projects receive repetitive spam, low-quality submissions, or blocked-user activity that would otherwise require manual cleanup.

### Close all open contributions from blocked users

When blocking a user, you can now [automatically close or remove all of their issues, pull requests, and discussions](https://github.blog/changelog/2026-08-27-close-all-open-contributions-authored-by-a-blocked-user).
This eliminates the need for manual cleanup, making it much easier to handle spam comments and slop PRs.

### Block users directly from security advisories

You can now [block a user directly from the security advisories page](https://github.blog/changelog/2026-08-25-block-users-directly-from-security-advisories). This update streamlines moderation and makes it much easier to handle repetitive spam submissions.

## KubeCon + CloudNativeCon 2026 and other Event CFPs, Scholarships, and Travel Funding Deadlines

Check out this [separate blog with deadlines, project benefits, and communications for maintainers](https://contribute.cncf.io/blog/scholarships-and-travel-funding-deadlines-september-2026).

:::tip Maintainer Summit NA

**[Register for the Maintainer Summit today!](https://events.linuxfoundation.org/kubecon-cloudnativecon-north-america/features-add-ons/maintainer-summit/#registration)**

Attendance at the Maintainer Summit requires separate registration for KubeCon + CloudNativeCon North America.

:::

## LFX MCP is Now Available to the Community - Connect Your AI Assistant to LFX Self Serve

If you use Claude, Cursor, GitHub Copilot, Goose, or another AI assistant, you can now connect it directly to LFX Self Serve through the new LFX MCP Server. Once connected with your own LFID, your assistant can work on your behalf across projects, groups, meetings, and membership - anything your role already lets you see and do in LFX.

For projects and maintainers, this can reduce repetitive admin work across meetings, groups, and project operations while keeping access aligned with the permissions you already have in LFX.

To get access open an issue on the [lfx-mcp repo](https://github.com/linuxfoundation/lfx-mcp) using the LFX MCP access request form, and we'll confirm once it's set up.

Full setup steps for Claude Desktop, Claude Code, and other clients are in the [community access guide](https://github.com/linuxfoundation/lfx-mcp/blob/main/docs/community-access.md). We'd love for you to give it a try and tell us what you think!

## Please Complete the 2H 2026 Maintainer Survey

We're entering the final quarter of the year, and that means another [maintainer survey](https://maintainers-survey.cncf.io). We run them twice a year to measure maintainer awareness of available resources, including support from CNCF staff, Linux Foundation tools, the Technical Oversight Committee (TOC), and the Technical Advisory Groups (TAGs). This is your chance to provide feedback to make sure the CNCF remains the best place for maintainers to host a cloud native project.

:::tip Take the Maintainer Survey

**Help us help you**: [maintainers-survey.cncf.io](https://maintainers-survey.cncf.io)

:::

## See You Next Month

Please let us know if you have any suggestions for future newsletter content by sending an email to [projects@cncf.io](mailto:projects@cncf.io).

You can also continue discussions with other maintainers in the #maintainer-circle Slack channel.

🫶 Daniel, Jeefy, Bob, Nate, Jorge, Riaan, Ihor, Robert and the rest of the CNCF staff
