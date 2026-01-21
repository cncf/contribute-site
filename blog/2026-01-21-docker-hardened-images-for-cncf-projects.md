---
title: "Now Available: Free Docker Hardened Images for the CNCF Projects"
date: 2026-01-21
authors: [idvoretskyi]
tags: [maintainers, services, projects, security]
---

Last year, the CNCF and Docker announced an expanded partnership through the **Docker Sponsored Open Source (DSOS) Program** to increase infrastructure and tooling support available to CNCF project maintainers. Since then, Docker has made Docker Hardened Images (DHI) freely available to all developers.

We are highlighting this update for the benefit of the CNCF maintainer community, as DHI can be used by CNCF projects as a secure and transparent foundation for shipping container images.

<!-- truncate -->

## What are Docker Hardened Images?

Docker Hardened Images are minimal, security-focused container base images designed to reduce inherited risk in downstream projects. They are built and maintained with security and transparency as defaults, featuring:

* **Minimal attack surface**: Only required components are included.
* **Non-root execution**: Images run as non-root by default.
* **Supply Chain Security**: Includes published **SBOMs** and **SLSA Level 3** build provenance.
* **Active Maintenance**: Ongoing patching and rebuilds are performed as vulnerabilities are disclosed.
* **Open Standards**: All images are reproducible, open source, and licensed under **Apache 2.0**, making them compatible with CNCF governance and distribution models.

## Benefits for CNCF Maintainers

For CNCF project maintainers, using Docker Hardened Images can:

* **Reduce Maintenance Burden**: Lower the number of base-image CVEs maintainers must patch, freeing time for feature development.
* **Operational Efficiency**: Eliminate the need to maintain custom hardened base images.
* **Improve Transparency**: Build greater trust for downstream users.
* **Consistent Baselines**: Provide a well-maintained security baseline with minimal effort.

## Here's How to Get Started

As a CNCF project maintainer, you can start using Docker Hardened Images today for free. We encourage you to explore the documentation and bring DHI into your workflows.

To learn more, please join the upcoming Docker-hosted CNCF community call:

* **Date**: January 23
* **Time**: 4 pm UTC / 5 pm CET / 8 am PST
* **Registration**: [Sign up here](https://dockr.ly/4qpSTRu)

This session will be a technical walkthrough and developer-focused discussion featuring the team behind Docker Hardened Images, as well as maintainers sharing their experiences. They will be available to dive into technical questions from the community.

### Agenda

1. **Introduction** to DHI
2. **Demos**
3. **CNCF maintainer's experience**
4. **OSS maintainer's experience**
5. **Q&A**
