---
title: Software Supply Chain Security Technical Community Group
sidebar_label: Software Supply Chain Security
tags:
  - supply-chain-security
  - tcg
  - security
---

# Software Supply Chain Security Technical Community Group

The Software Supply Chain Security Technical Community Group (TCG) addresses the security of the software supply chain, from source code to production deployment, including build processes, artifact signing, provenance tracking, and vulnerability management.

## Mission

The Software Supply Chain Security TCG serves as a community rallying point for discussing, sharing knowledge, and coordinating initiatives related to securing the software supply chain in cloud native environments. We aim to make supply chain security accessible, understandable, and actionable for all CNCF projects and the broader community.

## Focus Areas

### Software Bill of Materials (SBOM)

Understanding and managing software composition:

- **SBOM Generation**: Creating comprehensive inventories of software components
- **SBOM Formats**: Working with SPDX, CycloneDX, and other standards
- **SBOM Management**: Storing, distributing, and consuming SBOMs
- **Component Analysis**: Understanding dependencies and transitive dependencies
- **License Compliance**: Tracking and managing software licenses

### Artifact Signing and Verification

Ensuring authenticity and integrity of software artifacts:

- **Signing Tools**: Sigstore, cosign, and other signing solutions
- **Verification Workflows**: Automated verification in CI/CD pipelines
- **Key Management**: Secure storage and rotation of signing keys
- **Trust Roots**: Establishing and maintaining trust chains
- **Signature Distribution**: Making signatures available to consumers

### Provenance and Attestation

Documenting the origin and build process of software:

- **Build Provenance**: Recording how artifacts were built
- **SLSA Framework**: Implementing Supply Chain Levels for Software Artifacts
- **Attestation Formats**: in-toto, SLSA provenance, and other standards
- **Verification**: Validating provenance claims
- **Policy Enforcement**: Using provenance for admission control

### Build Security

Securing the software build process:

- **Build Isolation**: Containerized and sandboxed builds
- **Reproducible Builds**: Ensuring bit-for-bit reproducibility
- **Build Environment Security**: Hardening build infrastructure
- **Dependency Management**: Secure handling of dependencies
- **Build Auditing**: Logging and monitoring build activities

### Vulnerability Management

Identifying and addressing security vulnerabilities:

- **Vulnerability Scanning**: Automated detection of known vulnerabilities
- **Vulnerability Databases**: CVE, OSV, and other sources
- **Remediation Workflows**: Processes for addressing vulnerabilities
- **Risk Assessment**: Prioritizing vulnerabilities based on impact
- **Disclosure**: Responsible vulnerability disclosure practices

### Supply Chain Attacks

Understanding and mitigating supply chain threats:

- **Threat Modeling**: Identifying potential attack vectors
- **Dependency Confusion**: Preventing malicious package substitution
- **Typosquatting**: Detecting and avoiding malicious lookalikes
- **Compromised Dependencies**: Detecting and responding to compromises
- **Insider Threats**: Mitigating risks from trusted parties

## Getting Involved

The Software Supply Chain Security TCG welcomes participation from anyone interested in securing the software supply chain:

### Join the Community

- **CNCF Community Groups**: Find us on [community.cncf.io](https://community.cncf.io)
- **CNCF Slack**: Join [slack.cncf.io](https://slack.cncf.io) and look for supply chain security channels
- **Meetings**: Check community.cncf.io for meeting schedules and join links

### Contribute

- **Share Experiences**: Present supply chain security implementations and lessons learned
- **Case Studies**: Document real-world supply chain security examples
- **Participate in Initiatives**: Help create guides, best practices, or tooling assessments
- **Ask Questions**: Learn from others facing similar challenges
- **Provide Feedback**: Shape the direction of supply chain security practices

### Topics for Discussion

Areas where community input is valuable:

- Implementing SLSA levels in practice
- Tooling comparisons and recommendations
- Integration with existing CI/CD pipelines
- Handling legacy systems and gradual adoption
- Policy enforcement with Open Policy Agent or other tools
- Balancing security with developer experience
- Managing supply chain security at scale
- Compliance requirements (NIST SSDF, Executive Order 14028, etc.)

## Organizers

Technical Community Groups are led by community organizers who facilitate meetings, coordinate activities, and ensure the group delivers value to participants.

To become an organizer or learn more about current organizers, check the group's page on [community.cncf.io](https://community.cncf.io) or reach out via the CNCF Slack.

## Key Standards and Frameworks

### SLSA (Supply Chain Levels for Software Artifacts)

Progressive levels of supply chain security assurance:

- **SLSA Build Levels**: L0 (no guarantees) through L3 (hardened builds)
- **Requirements**: Build platform, provenance generation, and verification
- **Adoption Path**: Incremental improvement approach

### SBOM Standards

- **SPDX**: Software Package Data Exchange format
- **CycloneDX**: Lightweight SBOM standard for security use cases
- **SWID**: Software Identification tags

### Signing and Verification

- **Sigstore**: Free signing, verification, and transparency services
- **in-toto**: Framework for securing software supply chains
- **TUF**: The Update Framework for secure software updates

## Resources

### CNCF Resources

- [Technical Community Groups Overview](../index.md)
- [TCG Governance](../../governance/tech-group-governance.md#technical-community-groups)
- [CNCF Community Groups Program](https://github.com/cncf/communitygroups)

### Related CNCF Groups

- [TAG Security and Compliance](../../tags/security-and-compliance/index.md) - Broader security topics
- [TAG Developer Experience](../../tags/developer-experience/index.md) - Developer workflows
- [TAG Infrastructure](../../tags/infrastructure/index.md) - Infrastructure security

### External Resources

- [SLSA Framework](https://slsa.dev/)
- [Sigstore Project](https://www.sigstore.dev/)
- [in-toto Project](https://in-toto.io/)
- [OpenSSF](https://openssf.org/) - Open Source Security Foundation
- [NIST SSDF](https://csrc.nist.gov/Projects/ssdf) - Secure Software Development Framework

## Related CNCF Projects

Several CNCF and related projects focus on supply chain security:

- **Sigstore**: Signing, verification, and transparency
- **in-toto**: Supply chain security framework
- **Falco**: Runtime security and threat detection
- **OPA (Open Policy Agent)**: Policy enforcement
- **Harbor**: Container registry with scanning and signing
- **Notary**: Content trust for Docker
- **SPIFFE/SPIRE**: Workload identity

## Common Use Cases

### Open Source Projects

- Signing releases to prove authenticity
- Generating SBOMs for consumers
- Providing provenance for builds
- Enabling reproducible builds

### Enterprise Adoption

- Meeting compliance requirements
- Securing internal software supply chains
- Vendor software verification
- Risk management and auditing

### CI/CD Integration

- Automated signing in pipelines
- Continuous vulnerability scanning
- Policy-based admission control
- Build attestation generation

## Evolution and Future

As a Technical Community Group, the Software Supply Chain Security TCG may evolve based on community needs:

- **Current State**: Discussion and knowledge-sharing forum
- **Near Term**: Deliver initiatives like implementation guides, tooling assessments, or best practices
- **Long Term**: Potentially evolve into a TAG subproject or merge with TAG Security and Compliance if sustained value is demonstrated

The community drives the direction and pace of this evolution.

## Contact

For questions or to get involved:

- **CNCF Community Groups**: community-groups@cncf.io
- **CNCF Slack**: [slack.cncf.io](https://slack.cncf.io)
- **TAG Security and Compliance**: For related questions, see [TAG Security and Compliance](../../tags/security-and-compliance/index.md)
- **TOC**: For governance questions, reach out via [#toc](https://cloud-native.slack.com/archives/C0MP69YF4)

## Code of Conduct

All participants in the Software Supply Chain Security TCG must adhere to the [CNCF Code of Conduct](https://github.com/cncf/foundation/blob/main/code-of-conduct.md). We are committed to providing a welcoming and inclusive environment for all community members.