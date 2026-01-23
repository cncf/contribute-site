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
| Danielle Tal | [@miao0miao](https://github.com/miao0miao) | - | 2025-07-01 to 2026-06-30 |
| Paco Xu | [@pacoxu](https://github.com/pacoxu) | DaoCloud | 2025-07-01 to 2027-06-30 |
| Yuan Tang | [@terrytangyuan](https://github.com/terrytangyuan) | Red Hat | 2025-07-01 to 2027-06-30 |

### Tech Leads

| Name | GitHub | Organization | Term |
|------|--------|--------------|------|
| Alexander D. Kanevskiy | [@kad](https://github.com/kad) | Intel | 2025-07-02 to 2026-06-30 |
| Hongcai Ren | [@RainbowMango](https://github.com/RainbowMango) | Huawei | 2025-07-02 to 2027-06-30 |
| Kante Yin | [@kerthcet](https://github.com/kerthcet) | Hiverge | 2025-07-02 to 2027-06-30 |
| Rajas Kakodkar | [@rajaskakodkar](https://github.com/rajaskakodkar) | Broadcom | 2025-07-02 to 2027-06-30 |
| Stephen Rust | [@srust](https://github.com/srust) | Akamai | 2025-07-02 to 2026-06-30 |

### TOC Liaisons

- Alex Chircop ([@chira001](https://github.com/chira001))
- Kevin Wang ([@kevin-wangzefeng](https://github.com/kevin-wangzefeng))

## Meetings

**TAG Workloads Foundation Meetings**

- **Calendar**: [View and join meetings](https://zoom-lfx.platform.linuxfoundation.org/meetings/tag-workloads-foundation?view=list)
- **Recordings**: [YouTube Channel](https://www.youtube.com/@CNCFTAGWorkloadsFoundation)

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
To enhance collaboration among projects, improve interoperability, and empower users to efficiently leverage batch systems in cloud-native environments.

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
