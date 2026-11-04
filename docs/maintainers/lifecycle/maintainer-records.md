---
title: Update CNCF Maintainer Records
description:
  Update your project's active maintainer roster and related CNCF records.
---

## Executive Summary

For projects using `.project`, update active maintainer membership in the
project's own `maintainers.yaml` file through the project's documented review
process. CNCF's public `.project` maintainer list is generated and should not be
edited directly. LFID profile details and project governance documentation are
separate records that maintainers must keep current independently.

## Update the Active Maintainer Roster

1. Follow your project's documented process for approving maintainer changes.
2. Update `maintainers.yaml` in the project's `.project` repository and open a
   pull request there.
   - In a single-project repository, the file is at the repository root.
   - In a multi-project repository, `org.yaml` lists projects and each project's
     `maintainers.yaml` is in its own directory.
3. After the change is merged, the CNCF maintainer list is updated by
   automation. Do not open a pull request to edit the generated
   [`.project` maintainer list](https://github.com/cncf/foundation/blob/main/project-maintainers-.project.csv).

The `.project`
[documentation](https://github.com/cncf/automation/tree/main/utilities/dot-project)
describes the repository layouts and metadata format.

### Which Teams Are Included

CNCF's active maintainer roster includes teams named `maintainers`,
`project-maintainers`, or ending in `-maintainers`. A differently named team can
be included by setting `managed: true`; `managed: false` excludes a team.
Emeritus, alumni, past, and former maintainer teams are excluded from the active
roster. Keep those people recognized in the project's public governance or
maintainer documentation instead.

Service Desk membership is handled separately. A `servicedesk`, `service-desk`,
or `service_desk` team can limit access to a subset of active maintainers. Each
person listed there must also belong to an included maintainer team. Without a
Service Desk team, all active maintainers of an eligible project are included.

## Keep Other Records Current

The project roster, each maintainer's LFID profile, and the project's public
maintainer or governance documentation are separate records:

- Update your [LFID profile](https://openprofile.dev/) with your current name,
  primary email address, and affiliation. CNCF uses profile data for the name
  and affiliation shown in the generated list and to match your GitHub handle
  with CNCF services.
- Keep the project's public maintainer or governance documentation accurate.
- If affiliation attribution in Git history needs an update, follow the
  [cncf/gitdm guidance](https://github.com/cncf/gitdm?tab=readme-ov-file#addingupdating-affiliation).
- Contact
  [cncf-maintainer-changes@cncf.io](mailto:cncf-maintainer-changes@cncf.io) for
  help with Service Desk or project mailing-list access, or when a project is
  not yet represented in the `.project` list.

Projects that have not moved to `.project` remain in the
[legacy maintainer list](https://github.com/cncf/foundation/blob/main/project-maintainers.csv).
Do not add new projects to that legacy file; contact CNCF staff to have a
project's maintainer records set up.
