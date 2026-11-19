---
title: CI/CD
description: CI resources and tooling CNCF provides to hosted projects
---

CNCF covers CI needs for hosted projects. Projects choose their own CI platform;
CNCF staff recommend [GitHub Actions](https://github.com/features/actions) where
possible.

## Available options

| Option                                     | What you get                                                                                                                                                                                         | How to get it                                                                 |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| GitHub Actions on CNCF's GitHub Enterprise | Larger runners, and runners hosted across environments using [Actions Runner Controller](https://github.com/actions/actions-runner-controller)                                                       | [CNCF Service Desk](https://servicedesk.cncf.io)                              |
| [Prow GitHub Actions][pga]                 | Prow-style chat-ops (`/lgtm`, `/approve`, `/retest`, `/ok-to-test`), reviewers from OWNERS files, automatic merging, and label sync, running as a GitHub Actions workflow. Maintained by CNCF staff. | Add the workflow to your repository. See [Get started](#prow-github-actions). |
| [Prow][prow]                               | The Kubernetes-based CI system used by Kubernetes                                                                                                                                                    | [CNCF Service Desk](https://servicedesk.cncf.io)                              |
| Other CI platforms                         | Projects may use the platform that fits their needs                                                                                                                                                  | [CNCF Service Desk](https://servicedesk.cncf.io)                              |

## Prow GitHub Actions

[@cncf/prow-github-actions](https://github.com/cncf/prow-github-actions) brings
Prow's chat-ops and project management to a GitHub Actions workflow, with no
cluster to run.

1. Copy
   [`templates/workflow-templates/prow.yml`](https://github.com/cncf/prow-github-actions/blob/main/templates/workflow-templates/prow.yml)
   to `.github/workflows/prow.yml`. If your policy forbids
   `pull_request_target`, use
   [`prow-pull-request.yml`](https://github.com/cncf/prow-github-actions/blob/main/templates/workflow-templates/prow-pull-request.yml)
   instead.
2. Run the `label-sync` job once from **Actions → Prow → Run workflow** so the
   labels exist.
3. Optional: add a `prow.yaml` to the repository, or to your organization's
   `.github` repository, for label families and `needs-*` rules.

:::tip

Setting up a whole organization? Start with
[Prow for your organization](https://github.com/cncf/prow-github-actions/blob/main/docs/prow-for-your-org.md).

:::

See the
[installing guide](https://github.com/cncf/prow-github-actions/blob/main/docs/installing.md),
[command reference](https://github.com/cncf/prow-github-actions/blob/main/docs/commands.md),
and
[configuration](https://github.com/cncf/prow-github-actions/blob/main/docs/configuration.md)
for details.

[pga]: https://github.com/cncf/prow-github-actions
[prow]: https://docs.prow.k8s.io/
