---
title: 'Migrating Your Slack Workspace to the CNCF Cloud-Native Workspace'
date: 2026-07-13
description:
  "A guide for CNCF project maintainers on migrating an existing Slack workspace
  to the CNCF's shared cloud-native workspace."
---

## Overview

The [cloud-native workspace](https://cloud-native.slack.com) is owned and
operated by the CNCF in partnership with the Linux Foundation and Salesforce. It
offers the following benefits:

- **No cost to projects** — operation is covered by an agreement between the
  Linux Foundation and Salesforce
- **Unlimited message history** — workspace message history is not restricted by
  plan
- **Dedicated administration** — handled by the CNCF Projects Team, reachable
  via `#slack-admin-support`,
  [`#slack-faq`](https://cloud-native.slack.com/archives/C091NUGP5KN), and the
  [CNCF Service Desk](https://servicedesk.cncf.io)
- **Content moderation** — inappropriate messages flagged by the "Report To
  Slack" mechanism are reported to the CNCF Projects Team for deletion
- **Community proximity** — places your project and community at the heart of a
  community of cloud native projects, closer to CNCF staff

New members can join via
[communityinviter.com](https://communityinviter.com/apps/cloud-native/cncf)
(also accessible at [slack.cncf.io](https://slack.cncf.io/)).

### Channels of note

| Channel                | Purpose                                                        |
| ---------------------- | -------------------------------------------------------------- |
| `#maintainers-circle`  | Project maintainers collaborate with each other and CNCF staff |
| `#cncf-mentoring`      | New contributors participate in mentoring programs             |
| `#slack-faq`           | Tactical questions about the workspace                         |
| `#slack-admin-support` | Administrative requests                                        |

:::note

CNCF does not mandate chat platforms — individual projects can choose their own
communication tools. However, migrating to the cloud-native workspace is
strongly encouraged and is part of the standard
[project onboarding process](https://github.com/cncf/sandbox/blob/main/.github/ISSUE_TEMPLATE/project-onboarding.md).

:::

## Migration planning

You can migrate your project's workspace using the following plan, which
includes both community and technical work.

### Community work

1. **Announce the migration** — Let your community know that their workspace is
   being migrated to the CNCF's cloud-native workspace. Dates and times can be
   coordinated with your partner in the CNCF Projects Team.

2. **Set expectations** — Let the members of your project workspace know that:
   - The CNCF Projects Team sends invitations to members who are not already in
     the cloud-native workspace.
   - Channel names in the new workspace use the project name as a prefix (for
     example, `#general` becomes `#<project-name>-general`).

### Technical preparation

Working with your CNCF Projects Team partner:

1. **Select channels** — Decide which channels need to be migrated
2. **Rename channels** — Ensure that those channel names are renamed on the
   source workspace to include a project prefix (this avoids name clashes with
   other CNCF projects in the cloud-native workspace)
3. **Export workspace data** — Ask a workspace Owner to carry out a workspace
   export using
   [Slack's built-in export functionality](https://slack.com/help/articles/201658943-Export-your-workspace-data)
4. **Import into cloud-native workspace** — The CNCF Projects Team imports the
   exported data into the cloud-native workspace using
   [Slack's native import mechanism](https://slack.com/help/articles/217872578-Import-data-from-one-Slack-workspace-to-another)

## Optional: Backing up private channels and DMs

:::info

This section is optional and applies only if project members want to preserve
private channel history or direct messages before migration.

:::

Slack's built-in workspace export **only includes public channel history**.
Private channels and direct messages are not included in the standard export.

If project members wish to preserve private content before migration, the CNCF
recommends using [slackdump](https://github.com/rusq/slackdump) — a command-line
tool that backs up data locally with no fees or third-party storage involved.

For detailed instructions, see the official CNCF guide:
**[HOWTO Backup Private Channels and DMs from Slack](https://github.com/cncf/foundation/blob/main/policies-guidance/slack-backup.md)**

The backup guide also covers viewer tools for reviewing exported data
(SlackLogViewer, Slackdump2Html, slack-export-viewer).

## Related resources

- [CNCF Slack Guidelines](https://github.com/cncf/foundation/blob/main/policies-guidance/slack-guidelines.md)
  — Code of Conduct enforcement, reporting, channel conduct
- [CNCF Slack Backup Guide](https://github.com/cncf/foundation/blob/main/policies-guidance/slack-backup.md)
  — Backing up private channels and DMs
- [CNCF Service Desk](https://servicedesk.cncf.io) — Channel creation requests
  and migration support
- [CNCF Code of Conduct](https://github.com/cncf/foundation/blob/main/code-of-conduct.md)
  — Community standards that apply to all Slack interactions
- [Join the cloud-native workspace](https://communityinviter.com/apps/cloud-native/cncf)
