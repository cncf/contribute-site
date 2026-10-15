---
title: "Sub-projects in CNCF Projects: FAQ"
---

# Sub-projects in CNCF Projects: FAQ

A sub-project is a distinct part of a CNCF project, such as a component, tool, plugin or SDK, that sits within the parent project's governance. The [TOC due diligence guide](https://github.com/cncf/toc/blob/main/operations/dd-toc-guide.md#sub-projects) describes two kinds: sub-projects packaged with the main project, and sub-projects that are independent but related to it, such as SDK reference implementations. A sub-project is part of its parent CNCF project rather than a separate CNCF project, and its leadership and maturity status are documented in the parent project's governance.

## A project applied to the CNCF Sandbox, but may fit better as a sub-project of an existing CNCF project. What happens?

During Sandbox review, the TOC may suggest that a project would fit better as a sub-project of an existing CNCF project, for example when it mainly extends or serves that project. The TOC's feedback is recorded as a comment on the application issue (see [how Sandbox applications are reviewed](https://github.com/cncf/sandbox#how-applications-are-reviewed)). The [Sandbox application guidance](https://github.com/cncf/sandbox#sandbox) already asks projects that are primarily Operators for another open source project to first contact that project about joining it as a sub-project.

The decision to join stays with the two communities. If both agree, the steps for a project outside CNCF joining as a sub-project apply.

## A project outside CNCF wants to join a CNCF project as a sub-project. How does that work?

A CNCF project can adopt an existing open source project as a sub-project. The decision is made through the parent project's own governance. Both communities are expected to follow their own governance processes and record the decision, for example as a documented maintainer vote in a public issue. The incoming project then goes through the onboarding steps described below: moving its repositories to a CNCF-owned GitHub organization and meeting CNCF policies and Sandbox onboarding standards.

If you are unsure whether a project is better suited to joining as a sub-project or applying to the CNCF Sandbox on its own, reach out to the TOC early for feedback at [cncf-private-toc@lists.cncf.io](mailto:cncf-private-toc@lists.cncf.io). Once both communities have made their decision and there are no open questions, the remaining steps, such as repository and asset transfers, are handled through a [CNCF ServiceDesk](https://github.com/cncf/servicedesk) request.

## Does the sub-project need to move its repositories into the parent project's GitHub organization?

The sub-project's repositories need to end up under a CNCF-owned GitHub organization, as with all CNCF projects (see the [Sandbox project onboarding checklist](https://github.com/cncf/sandbox/blob/main/.github/ISSUE_TEMPLATE/project-onboarding.md)). Most commonly, this is done by transferring them into the parent project's existing organization.

If the sub-project would prefer to keep a separate GitHub organization, or if there are other assets to transfer to CNCF, such as a domain or logo, open a ticket with the [CNCF ServiceDesk](https://github.com/cncf/servicedesk).

## An existing CNCF project wants to join another CNCF project as a sub-project. How does that work?

This situation is expected to be rare. At Sandbox application time, the TOC already considers whether a project is better suited to join an existing CNCF project as a sub-project rather than apply on its own, as described above, so most cases where this would apply are caught before a project becomes a separate CNCF project.

If it does come up, both projects' maintainers are expected to agree through their own governance processes and record the decision. Because the joining project's code, trademarks and repositories are already held by CNCF, most of the onboarding steps are already in place.

Since the joining project would no longer be a separate CNCF project, this also affects its CNCF status, such as its maturity level and its entry on the CNCF Landscape. Please raise it with the TOC at [cncf-private-toc@lists.cncf.io](mailto:cncf-private-toc@lists.cncf.io) before making it final, so the TOC can look at the specific case.

## What standards does an incoming sub-project need to meet?

Joining as a sub-project is not a shortcut around the standards expected of projects applying to the CNCF Sandbox. An incoming sub-project becomes part of a CNCF project, so it follows the same policies that apply to all CNCF code:

- The incoming code is received like any other code contribution, under DCO (or CLA, where the parent project uses one). See the [CNCF charter, section 11](https://github.com/cncf/foundation/blob/main/charter.md#11-ip-policy).
- The code follows the [CNCF IP Policy](https://github.com/cncf/foundation/blob/main/charter.md#11-ip-policy), and dependencies follow the [CNCF Allowlist License Policy](https://github.com/cncf/foundation/blob/main/policies-guidance/allowed-third-party-license-policy.md), or a license exception is filed.
- Trademark and logo assets are transferred to the Linux Foundation, as the [CNCF charter](https://github.com/cncf/foundation/blob/main/charter.md#11-ip-policy) requires for projects added to CNCF.
- The sub-project is brought up to Sandbox onboarding standards, including a Code of Conduct, SECURITY.md and GOVERNANCE.md. See the [Sandbox project onboarding checklist](https://github.com/cncf/sandbox/blob/main/.github/ISSUE_TEMPLATE/project-onboarding.md).

For help with any of these steps, open a ticket with the [CNCF ServiceDesk](https://github.com/cncf/servicedesk).

## How should the parent project document its sub-projects?

The parent project's governance should list its sub-projects and describe their leadership, contribution, maturity status, and the process for adding and removing them. The TOC looks for this when projects apply to move levels: listing all sub-projects is required for Incubation and Graduation, and documenting their leadership, maturity status and add/remove process is suggested for Incubation and required for Graduation. See the [governance review template guide](https://github.com/cncf/toc/blob/main/operations/project-reviews/governance-review-template-guide.md) and the [Incubation](https://github.com/cncf/toc/blob/main/.github/ISSUE_TEMPLATE/template-incubation-application.md) and [Graduation](https://github.com/cncf/toc/blob/main/.github/ISSUE_TEMPLATE/template-graduation-application.md) application templates.

How a sub-project is governed depends on the size and needs of the project. Some sub-projects have their own code owners, maintainers or governance, while others simply follow the parent project's governance and maintainers. Either approach can work, as long as the parent project documents it clearly.

Projects that want a more structured model can use the [GOVERNANCE-subprojects.md template](https://github.com/cncf/project-template/blob/main/GOVERNANCE-subprojects.md) in the CNCF project template repository as a reference and adapt it to their size and needs.

## Are there examples of how other CNCF projects handle sub-projects?

Several CNCF projects document their own approach, at different levels of formality. These may help as references, though each project should choose what fits its own governance and maturity:

- Kubernetes: [rules for SIG and donated repositories](https://github.com/kubernetes/community/blob/main/github-management/kubernetes-repositories.md)
- Kubeflow: [sub-project process and maturity levels](https://github.com/kubeflow/community/tree/master/subprojects)
- OpenTelemetry: [donation process](https://github.com/open-telemetry/community/blob/main/guides/contributor/donations.md)
- Tekton: [proposing and adopting projects](https://github.com/tektoncd/community/blob/main/process/projects.md)
- OpenEBS: [adding and removing sub-projects](https://github.com/openebs/community/blob/develop/GOVERNANCE.md#adding-and-removing-sub-projects)

## Are sub-projects included in the TOC's due diligence?

When a project applies to move levels, it lists all of its sub-projects in the application, whether or not they are packaged with the main project. The [Incubation](https://github.com/cncf/toc/blob/main/.github/ISSUE_TEMPLATE/template-incubation-application.md) and [Graduation](https://github.com/cncf/toc/blob/main/.github/ISSUE_TEMPLATE/template-graduation-application.md) application templates include a sub-projects field, and listing all sub-projects is required at both levels.

In the due diligence, sub-projects packaged with the main project are within the scope of the evaluation. Sub-projects that are not packaged are outside its scope, and the due diligence records them as un-evaluated, with the reason. In both cases, the TOC checks that the main project has sufficient governance of its sub-projects. See the [TOC due diligence guide](https://github.com/cncf/toc/blob/main/operations/dd-toc-guide.md#sub-projects).

## Can a sub-project later become its own CNCF project?

Yes. A sub-project that wants to separate from its parent and apply to the CNCF Sandbox must link to a public issue in the parent project's repository showing a formal vote by the parent's maintainers approving the separation. See the [Sandbox application guidance](https://github.com/cncf/sandbox#before-you-apply-common-reasons-applications-are-closed) and the [Sandbox application form](https://github.com/cncf/sandbox/blob/main/.github/ISSUE_TEMPLATE/application.yml).

## What happens when a sub-project is no longer maintained, or the parent wants to archive it?

Archiving a sub-project is decided by the parent project, following the add/remove process documented in its governance. The parent project should update its list of sub-projects and mark the sub-project's repositories as archived, for example by moving them to an archive organization or archiving them on GitHub, so adopters can see its status.

The [TOC archiving process](./archiving.md) applies to CNCF projects as a whole, not to individual sub-projects. For examples of how projects handle this, the [GOVERNANCE-subprojects.md template](https://github.com/cncf/project-template/blob/main/GOVERNANCE-subprojects.md) moves inactive sub-projects to an archive namespace, and [OpenEBS](https://github.com/openebs/community/blob/develop/GOVERNANCE.md#adding-and-removing-sub-projects) moves removed sub-projects to its openebs-archive organization.
