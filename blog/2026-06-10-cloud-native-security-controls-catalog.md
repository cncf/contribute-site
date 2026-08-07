---
title: "Cloud Native Security Controls Catalog: Refreshed, Structured, and Machine-Readable"
date: 2026-07-08
authors: [sonupreetam, jpower432, hbraswelrh, eddie-knight]
tags: [security, community]
---

Revised security guidance has been released by CNCF advisors to streamline cloud-native project security assessments.

Initially created in 2022 by CNCF's TAG Security and Compliance (TAG-SC), the Cloud Native Security Controls Catalog (CNSC Catalog) is a direct, actionable list of controls mapped to [NIST SP 800-53 Rev. 5](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf). To incorporate emerging technologies, tools, and research, a new version of the catalog has been created and released in 2026.

<!-- truncate -->

## What is the CNSC Catalog?

The catalog incorporates guidance from TAG-SC's [Cloud Native Security Whitepaper](https://www.cncf.io/blog/2022/05/18/announcing-the-refreshed-cloud-native-security-whitepaper/) (CNSWP) and the [Software Supply Chain Security Paper](https://github.com/cncf/tag-security/blob/main/community/working-groups/supply-chain-security/supply-chain-security-paper/CNCF_SSCP_v1.pdf) (SSCSP) in a way that can be rapidly referenced. Each entry assigns a unique identifier to discrete guidance and includes a reference to external guidance from NIST SP 800-53.

Previous versions of the catalog were delivered in a proprietary format hosted by TAG-SC, increasing complexity for readers. The updated version now utilizes the best practices and schemas provided by the OpenSSF's [Gemara](https://gemara.openssf.org/) project. This approach allows users to harness the CNSC Catalog using tools that are already compatible for similar efforts using Gemara, such as the [Open Source Project Security Baseline](https://baseline.openssf.org/) or the [FINOS Common Cloud Controls](https://github.com/finos/common-cloud-controls) project.

The existing controls are now organized into family groupings that span the complete cloud-native lifecycle. Each entry provides a unique identifier, title, objective statement, and family classification.

Here is an example from the Deploy family:

| Field | Value |
|:---|:---|
| **ID** | CNSC-57 |
| **Title** | Trust Confirmation |
| **Objective** | Trust confirmation verifies the image has a valid signature from an authorized source |
| **Group** | Deploy |
| **Applicability** | CNSWP-v1.0, CNSWP-v2.0 |

Project maintainers can leverage these guidelines as a ready-made foundation for a project-specific hardening guide for creating security controls aligned with TAG-SC guidance. Each guideline maps to a corresponding NIST SP 800-53 Rev. 5 control, giving regulated end-users a clear picture of how cloud-native security practices align with the standards they are required to satisfy.

The catalog is maintained in version control and accepts contributions through standard pull request workflows with full review history and traceability preserved.

## What's Next

With Milestone 1 complete, the next step is putting the catalog to work. The near-term goal is to support CNCF project maintainers in creating project-specific hardening guides using the guidance most relevant to their project's footprint.

If you are interested in this work and would like to provide feedback or get involved, please reach out on [GitHub](https://github.com/cncf/toc/issues/1910), in the `#initiative-cloud-native-security-controls-catalog` channel on [CNCF Slack](https://cloud-native.slack.com/), or through [TAG Security and Compliance public calendar meetings](https://www.cncf.io/calendar/).

## References

- [Cloud Native Security Controls Catalog Initiative (cncf/toc#1910)](https://github.com/cncf/toc/issues/1910)
- [OSPS Baseline](https://baseline.openssf.org/)
- [Common Cloud Controls](https://github.com/finos/common-cloud-controls)
- [Gemara](https://gemara.openssf.org/)
- [Cloud Native Security Controls Catalog Phase I (cncf/tag-security#635)](https://github.com/cncf/tag-security/issues/635)
