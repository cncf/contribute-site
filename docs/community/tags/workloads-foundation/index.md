---
title: TAG Workloads Foundation
tags:
  - workloads-foundation
  - tag
---

# TAG Workloads Foundation

TAG Workloads Foundation defines and advances practices and standards for fundamental cloud native workload execution environments and their related lifecycle management within cloud native systems, applications, and architectures.

## Mission Statement

To define and advance practices and standards for fundamental cloud native workload execution environments and their related lifecycle management within cloud native systems, applications, and architectures. This supports the CNCF's technical vision by addressing critical problems faced by adopters and contributing to a robust cloud native ecosystem.

## Leadership

### Chairs

| Name | GitHub | Organization | Term |
|------|--------|--------------|------|
| Marlow Warnicke | [@catblade](https://github.com/catblade) | NVIDIA | 2026-06-09 to 2028-06-30 |
| Paco Xu | [@pacoxu](https://github.com/pacoxu) | DaoCloud | 2025-07-01 to 2027-06-30 |
| Yuan Tang | [@terrytangyuan](https://github.com/terrytangyuan) | Red Hat | 2025-07-01 to 2027-06-30 |

### Tech Leads

| Name | GitHub | Organization | Term |
|------|--------|--------------|------|
| Hongcai Ren | [@RainbowMango](https://github.com/RainbowMango) | Huawei | 2025-07-02 to 2027-06-30 |
| Kante Yin | [@kerthcet](https://github.com/kerthcet) | Hiverge | 2025-07-02 to 2027-06-30 |
| Pavan Madduri | [@pmady](https://github.com/pmady) | W.W.Grainger | 2026-07-07 to 2028-07-06 |
| Rajas Kakodkar | [@rajaskakodkar](https://github.com/rajaskakodkar) | Broadcom | 2025-07-02 to 2027-06-30 |
| Stephen Rust | [@srust](https://github.com/srust) | Akamai | 2026-07-07 to 2028-07-06 |

### TOC Liaisons

- Alex Chircop ([@chira001](https://github.com/chira001))
- Jeremy Rickard ([@jeremyrickard](https://github.com/jeremyrickard))
- Joseph Sandoval ([@jrsapi](https://github.com/jrsapi))
- Chad Beaudin ([@chadbeaudin](https://github.com/chadbeaudin))

## Meetings

**TAG Workloads Foundation Meetings**

- **Calendar**: [View and join meetings](https://zoom-lfx.platform.linuxfoundation.org/meetings/tag-workloads-foundation?view=list)
- **Recordings**: [YouTube Channel](https://www.youtube.com/@CNCFTAGWorkloadsFoundation)
- **Meeting Notes**: [View notes](https://notes.cncf.io/s/1aNdplhtl)

All meetings are open to the public. No registration required - simply join the meeting from the calendar link.

## Communication Channels

### Slack

Join the CNCF Slack workspace and connect with the TAG:

- **Channel**: [#tag-workloads-foundation](https://cloud-native.slack.com/archives/C08K71W9HAS)
- **CNCF Slack Invite**: [slack.cncf.io](https://slack.cncf.io)

### Mailing List

- **Subscribe**: [cncf-tag-workloads-foundation](https://lists.cncf.io/g/cncf-tag-workloads-foundation)
- Use for announcements, discussions, and coordination

## Focus Areas

TAG Workloads Foundation works on fundamental aspects of cloud native workload execution:

### Workload Execution Environments

- Container runtime interfaces and standards
- Virtual machine and container integration
- Sandboxing and isolation technologies
- Runtime security models

### Lifecycle Management

- Workload deployment patterns
- Update and rollback strategies
- Scaling and scheduling
- Health checking and self-healing

### Resource Management

- CPU and memory allocation
- Storage provisioning and management
- Network resource allocation
- GPU and specialized hardware

### Workload Types

- Stateless and stateful workloads
- Batch and job processing
- Long-running services
- Event-driven workloads

### Standards and APIs

- Workload specification standards
- Runtime interface definitions
- Portability across platforms
- Interoperability between systems

## Subprojects

### Batch
The cloud-native batch scheduling ecosystem is fragmented — different projects tackle job scheduling, queueing, and resource management in incompatible ways. The Batch subproject brings together maintainers and users across the ecosystem to reduce that fragmentation: aligning on common Kubernetes APIs and primitives, developing best practices, and improving outcomes for batch workloads — whether HPC, AI/ML, data analytics, or CI — in cloud-native environments.

In scope:

To reduce fragmentation in the k8s batch ecosystem: congregate leads and users from different external and internal projects and user groups (CNCF TAGs, k8s sub-projects focused on batch-related features such as topology-aware scheduling) in the batch ecosystem to gather requirements, validate designs and encourage reutilization of core K8s APIs.

The following recommendations for enhancements:

* Additions to the batch API group, currently including Job and CronJob resources that benefit batch use cases such as HPC, AI/ML, data analytics and CI.
* Primitives for job-level queueing, not limited to the k8s Job resource. Long-term, this could include multi-cluster support.
* Primitives to control and maximize utilization of resources in fixed-size clusters (on-prem) and elastic clusters (cloud).
* Benchmarking models for Batch systems
* Data Locality
* User Stories
* Scheduling support for specialized hardware (Accelerators, NUMA, Networking, etc.)

Out of scope:

* Addition of new API kinds that serve a specialized type of workload. The focus should be on general APIs that specialized controllers can build on top of.
* Uses of the batch APIs as support for serving workloads (eg. backups, upgrades, migrations). These can be served by existing SIGs.
* Proposals that duplicate the functionality of core kubernetes components (job-controller, kube-scheduler, cluster-autoscaler).
* Job workflows or pipelines. Mature third party frameworks serve these use cases with the current kubernetes primitives. But additional primitives to support these frameworks could be in scope.

Deliverable(s) or exit criteria:

* Maintaining a landscape document for currently available projects (already published-relocated and maintained)
* Data Locality project-deliverables TBD, but something that helps in this space (already in process)
* Benchmarking suite for Batch systems (already in process)
* User stories published doc for Batch systems (already in process)

- **Subproject Leads**: Alex Scammon ([@stackedsax](https://github.com/stackedsax)), Marlow Warnicke ([@catblade](https://github.com/catblade)), Abhishek Malvankar ([@asm582](https://github.com/asm582))
- [Mailing List](https://lists.cncf.io/g/cncf-tag-workloads-foundation)

## Initiatives

View current and past initiatives:

- [Active Initiatives](https://github.com/cncf/toc/issues?q=state%3Aopen+label%3Akind%2Finitiative+label%3Atag%2Fworkloads-foundation)
- [All Initiatives](https://github.com/cncf/toc/issues?q=label%3Akind%2Finitiative+label%3Atag%2Fworkloads-foundation)

## Getting Involved

We welcome contributions from anyone interested in cloud native workload execution:

### Attend Meetings

Join our regular meetings to hear about ongoing work and participate in discussions. Check the [meeting calendar](https://zoom-lfx.platform.linuxfoundation.org/meetings/tag-workloads-foundation?view=list) for details.

### Contribute to Initiatives

Browse [active initiatives](https://github.com/cncf/toc/issues?q=state%3Aopen+label%3Akind%2Finitiative+label%3Atag%2Fworkloads-foundation) and volunteer to help with specific deliverables.

### Share Your Experience

- Present workload management use cases or lessons learned at TAG meetings
- Write blog posts about workload execution patterns and practices
- Contribute to white papers and best practices documents

### Join the Conversation

- Participate in [Slack discussions](https://cloud-native.slack.com/archives/C08K71W9HAS)
- Engage on the [mailing list](https://lists.cncf.io/g/cncf-tag-workloads-foundation)
- Comment on GitHub issues in the [TOC repository](https://github.com/cncf/toc)

## Resources

- [Charter](charter.md)
- [TAG Governance](../../governance/tech-group-governance.md)
- [CNCF TOC Repository](https://github.com/cncf/toc)
- [All TAGs](../index.md)

## Related TAGs

- [TAG Infrastructure](../infrastructure/index.md) - Infrastructure supporting workload execution
- [TAG Developer Experience](../developer-experience/index.md) - Developer tools and frameworks for workloads
