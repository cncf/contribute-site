---
title: "Introducing .project: Standardized Project Metadata, Rolled Out for You"
date: 2026-04-22
authors: [jeefy]
tags: [maintainers, projects, services]
---

CNCF staff will soon begin rolling out a new repository called
[`.project`](https://github.com/cncf/automation/tree/main/utilities/dot-project)
into project GitHub organizations. If you see a new repo appear, do not be
alarmed: this is expected, and there is no action required from maintainers for
the initial rollout.

The short version is that
[`.project`](https://github.com/cncf/automation/tree/main/utilities/dot-project)
is a standardized metadata repository for CNCF projects. It gives each project
a clear, machine-readable home for information like project details,
repositories, maintainers, governance references, security contacts, and other
metadata that CNCF systems rely on.

<!-- truncate -->

## What is [`.project`](https://github.com/cncf/automation/tree/main/utilities/dot-project)?

[`.project`](https://github.com/cncf/automation/tree/main/utilities/dot-project)
is an open source utility that creates and validates a standardized metadata
repository for CNCF projects. In practice, that means each project gets a
dedicated repo that can hold structured information about the project in a
consistent format.

This gives projects a single source of truth for metadata that often ends up
spread across multiple repositories, documents, and manual processes. Rather
than relying on ad hoc updates, CNCF automation can read from this repo and use
the data consistently.

## Why it matters

Many project details are needed in more than one place. With
[`.project`](https://github.com/cncf/automation/tree/main/utilities/dot-project),
CNCF can validate and consume that metadata for tasks like Landscape updates,
governance audits, maintainer roster checks, and other automation workflows.

That improves consistency, reduces manual follow-up, and makes it easier for
project information to stay current over time.

:::tip No action required for rollout
The initial rollout is being handled by CNCF staff. You do not need to create,
bootstrap, or configure your project's
[`.project`](https://github.com/cncf/automation/tree/main/utilities/dot-project)
repository yourself.
:::

## What maintainers should expect

For maintainers, the main thing to know is that CNCF staff will create and
bootstrap the
[`.project`](https://github.com/cncf/automation/tree/main/utilities/dot-project)
repository for your project. In other words: no migration to plan, no setup to
perform, and no immediate work to do. The main request is simply not to be
surprised when a new `.project` repository shows up in your organization.

Some projects have already had
[`.project`](https://github.com/cncf/automation/tree/main/utilities/dot-project)
rolled out, including [@grpc/.project](https://github.com/grpc/.project) and
[@project-dalec/.project](https://github.com/project-dalec/.project). These
examples show what the generated repository looks like in practice.

When metadata changes need to flow downstream, the automation can also open
Landscape updates automatically. You can see one example in this generated
[@cncf/landscape pull request](https://github.com/cncf/landscape/pull/4734/changes).

## Open source and open to contributions

[`.project`](https://github.com/cncf/automation/tree/main/utilities/dot-project)
is open source, and pull requests are welcome. If you have ideas for
improvements or see something that could work better, contributions are
encouraged.

:::info Questions
If you have questions about the rollout, contact
[projects@cncf.io](mailto:projects@cncf.io).
:::

## References

- [`.project` utility in @cncf/automation](https://github.com/cncf/automation/tree/main/utilities/dot-project)
- [@grpc/.project](https://github.com/grpc/.project)
- [@project-dalec/.project](https://github.com/project-dalec/.project)
- [Example generated @cncf/landscape pull request](https://github.com/cncf/landscape/pull/4734/changes)
- [Contact the CNCF Projects team](mailto:projects@cncf.io)
