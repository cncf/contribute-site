---
title: Security
description: >-
  How to report security vulnerabilities and resources for secure open source
  development in CNCF projects.
---

# Security

The Cloud Native Computing Foundation (CNCF) and its hosted projects take
security seriously. This page explains how to report vulnerabilities and links
to security resources for contributors, maintainers, and adopters.

---

## Reporting a Vulnerability

If you discover a security vulnerability in a **CNCF-hosted project**, report
it directly to that project's security team. Most projects publish a
`SECURITY.md` file at the root of their repository that describes the preferred
disclosure method, response timeline, and supported versions.

If a project does not have a documented process, use the following defaults:

| Situation | Contact |
|---|---|
| Vulnerability in a specific CNCF project | See the project's `SECURITY.md` or email `security@<project-domain>` |
| Vulnerability in CNCF infrastructure or this website | [security@cncf.io](mailto:security@cncf.io) |
| Suspected supply-chain issue across multiple projects | [security@cncf.io](mailto:security@cncf.io) |

:::tip Coordinated Disclosure

CNCF encourages **coordinated (responsible) disclosure**. Please allow
maintainers a reasonable period — typically 90 days — to prepare a fix before
public disclosure.

:::

:::caution Do Not Open Public Issues

Do **not** report security vulnerabilities in public GitHub issues, pull
requests, or Slack channels. Use the private channels listed above.

:::

---

## Security Resources for CNCF Projects

The following resources help CNCF projects build and maintain strong security
postures:

### TAG Security

The [CNCF Technical Advisory Group for Security](https://github.com/cncf/tag-security)
(TAG Security) provides guidance, whitepapers, and security assessments for
CNCF projects. Key deliverables include:

- [Cloud Native Security Whitepaper](https://github.com/cncf/tag-security/blob/main/community/resources/security-whitepaper/v2/cloud-native-security-whitepaper.md)
- [Software Supply Chain Best Practices](https://github.com/cncf/tag-security/blob/main/community/resources/software-supply-chain-best-practices-whitepaper/sscbp-main.md)
- [Security Self-Assessment template](https://github.com/cncf/tag-security/blob/main/assessments/guide/self-assessment.md)

### OpenSSF Best Practices Badge

The [OpenSSF Best Practices Badge](https://www.bestpractices.dev/) recognizes
open source projects that follow security best practices. CNCF projects are
encouraged to achieve at least the **Passing** level before applying for
incubation, and **Silver** or **Gold** before graduation.

### LFX Security

[LFX Security](https://security.lfx.linuxfoundation.org/) is a vulnerability
management dashboard available to all Linux Foundation–hosted projects. It
aggregates dependency vulnerability data, automates security scans, and helps
maintainers prioritize remediation work.

### OpenSSF Scorecard

[OpenSSF Scorecard](https://scorecard.dev/) automatically evaluates a
repository's security hygiene — branch protection, dependency updates, code
review enforcement, and more — and produces a score that can be tracked over
time.

---

## Security Guidelines for Maintainers

The CNCF security guidelines for projects are documented in
[Project Best Practices — Security](/projects/best-practices/security). They
cover:

- Repository access control and two-factor authentication
- Branch protection and code review requirements
- Dependency management and supply-chain security
- Incident response and coordinated disclosure processes
- Badging and continuous improvement

---

## CNCF Security Contacts

| Role | Contact |
|---|---|
| General security inquiries | [security@cncf.io](mailto:security@cncf.io) |
| TAG Security chair | See [TAG Security](https://github.com/cncf/tag-security#leadership) |
| Linux Foundation security team | [security@linuxfoundation.org](mailto:security@linuxfoundation.org) |

---

## References

- [CNCF TAG Security](https://github.com/cncf/tag-security)
- [OpenSSF Best Practices Badge](https://www.bestpractices.dev/)
- [LFX Security](https://security.lfx.linuxfoundation.org/)
- [OpenSSF Scorecard](https://scorecard.dev/)
- [CNCF Cloud Native Security Map](https://cncf.io/blog/2022/08/08/introduction-to-the-cloud-native-security-map/)
- [How to report security vulnerabilities to the Linux Foundation](https://www.linuxfoundation.org/blog/blog/how-to-report-security-vulnerabilities-to-the-linux-foundation)
