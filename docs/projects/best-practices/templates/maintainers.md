---
title: 'Maintainer List Template'
sidebar_label: Maintainer List
---

| Audience of this HowTo | Audience of CONTRIBUTING.md | Required by CNCF |
| ---------------------- | --------------------------- | ---------------- |
| Maintainers            | Contributors                | Yes, Sandbox     |

This HowTo is for new CNCF projects to set up their MAINTAINERS file for the
first time. The purpose of a MAINTAINERS file is to show who currently approves
changes in the project, and in most cases leads it as well.

This template is based on the [KubeVirt Maintainer file].

## Fill out the template

The
[MAINTAINERS.md template](https://github.com/cncf/project-template/blob/main/MAINTAINERS.md)
is located in the CNCF
[project-template repository](https://github.com/cncf/project-template).

Copy the template file into your repository.

There are instructions for filling out the template that look like the example
below:

![screenshot of the CONTRIBUTING.md template, there is a link to instructions, and a warning emoji with text explaining how to fill out this section of the template](/img/maintainers/sample-instructions.png)

Some links are specific to your project. Search for the word TODO in the
markdown for links that need to be customized. When you finish editing the
template, remove the Instruction links that explain how to fill out the
template. Also remove any ⚠️ prompts and their explanatory text.

## Template Details

This is a project-facing document that names the people who currently approve
changes and lead the project. Keep it consistent with your project's governance
process, but do not treat it as a replacement for the machine-readable CNCF
maintainer record.

All new CNCF projects must use the
[.project process](https://github.com/cncf/automation/tree/main/utilities/dot-project).
The active CNCF roster is generated from `maintainers.yaml` in the project's
`.project` repository. A single-project repository keeps that file at its root.
A multi-project repository uses `org.yaml` and a separate project directory for
each `maintainers.yaml`. See
[how to update CNCF maintainer records](/maintainers/lifecycle/maintainer-records/).
Do not edit the generated
[CNCF .project maintainer list](https://github.com/cncf/foundation/blob/main/project-maintainers-.project.csv).

Projects not yet using `.project` remain on the
[legacy CNCF maintainer list](https://github.com/cncf/foundation/blob/main/project-maintainers.csv)
and should follow that list's update process.

Fill this in with each Maintainer's current employer affiliation, and (if
applicable) any specific project areas led by that maintainer.

For most projects, the list of people in the maintainers file will be identical
to the list of approvers in the project's primary repository root. It will sync
with an OWNERS file.

However, some projects have multiple key repositories, and as such will use the
file to aggregate the maintainers across them. Projects that have a different
leadership structure, such as an elected Steering Committee, will instead list
those members in the file.

Your project may also list a few people who are not code approvers in
MAINTAINERS, so that those people can speak for the project with CNCF staff.
Most commonly, this would include assigned community managers.

[MAINTAINERS.md template]:
  https://github.com/cncf/project-template/blob/main/MAINTAINERS.md
[project-template repository]: https://github.com/cncf/project-template

[KubeVirt Maintainer file]:
