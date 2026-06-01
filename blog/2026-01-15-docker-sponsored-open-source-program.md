---
title: "Applying for the Docker Sponsored Open Source Program: A Guide for CNCF Maintainers"
date: 2026-01-15
authors: [idvoretskyi]
tags: [maintainers, services, projects]
---

Maintaining a CNCF project involves managing critical infrastructure at scale, including publishing trusted images and ensuring dependencies remain secure. To support these efforts, the CNCF-Docker partnership ([announced in 2025](https://www.cncf.io/announcements/2025/09/18/cncf-expands-infrastructure-support-for-project-maintainers-through-partnership-with-docker/?ajs_aid=38a0ac94-4c51-44af-8634-9bad4b7f9ab8)) enables CNCF projects to access Docker's Sponsored Open Source (DSOS) program. DSOS provides essential infrastructure and security tools specifically for non-commercial open-source maintainers.

Here is what you need to know about the benefits, eligibility, and how to apply.

<!-- truncate -->

## Key Benefits for Your Project

Joining the DSOS program offers several high-impact advantages for project maintainership:

* **Unlimited Image Pulls:** Removes rate limits for your users on Docker Hub.
* **"Sponsored OSS" Status:** Gains a verified badge for greater trust and visibility.
* **Advanced Security:** Access to **Docker Scout** for vulnerability analysis and policy enforcement.
* **Automated Workflows:** Streamlined image builds directly from your source code.
* **Insights:** Access to Docker usage metrics and community engagement data.

## Important Technical Considerations

### 1. Transitioning to an Organization Account

If your project currently publishes images under a personal Docker ID, you must convert it to an organization account.

* This conversion is free.
* A second Docker user account is required to act as the "Owner" of the organization.
* The email addresses for the organization and the owner account must be the same to ensure proper access control.

### 2. Paid Subscription Conflict

DSOS and paid Docker subscriptions are mutually exclusive. If your project currently pays for a subscription, you must transition off that plan before you can join the DSOS program.

## How to Apply

Applications must be submitted via the [CNCF ServiceDesk](https://servicedesk.cncf.io/) rather than directly to Docker. This workflow ensures the request comes from an official CNCF project and prioritizes the request with Docker.

### What happens after approval?

Once approved, benefits are granted at the project level for **one year**. Renewals are available as long as the project remains active, non-commercial, and continues to meet the eligibility criteria.

---

*For more information on the application process, visit the CNCF maintainer documentation or reach out via the standard CNCF support channels.*
