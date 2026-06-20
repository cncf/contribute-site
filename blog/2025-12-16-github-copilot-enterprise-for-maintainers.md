---
title: "Now Available: Free GitHub Copilot Enterprise for CNCF Maintainers"
date: 2025-12-16
authors: [idvoretskyi]
tags: [maintainers, services, projects]
---

We are excited to officially roll out **GitHub Copilot Enterprise** to CNCF project maintainers!

As highlighted during the [CNCF Maintainers Summit in Atlanta](https://contribute.cncf.io/blog/2025/11/08/maintainer-summit-update-from-the-project-staff) back in November, this offering is tailored to help reduce maintainer burnout by automating the repetitive parts of software development. This post outlines the specific features available to you, best practices for sustainable usage, and the step-by-step process to request access today.

<!-- truncate -->

## What's Included in the Bundle?

Eligible maintainers will receive access to the full Enterprise suite, which includes:

1. **Copilot Coding Agent:** This autonomous agent acts as a virtual pair programmer. You can assign it complex tasks—like "refactor this module to use the new API" or "fix the bug described in Issue cncf/contribute-site#402"—and it will attempt to implement the solution, allowing you to focus on high-level design.
2. **Copilot Code Review:** A massive time-saver for maintainers. This tool analyzes pull requests to identify bugs, suggest improvements, and ensure code consistency before a human reviewer even looks at the diff.
3. **Contextual Chat:** Ask questions about your specific project ("How does our retry logic handle 503 errors?") and receive answers grounded in your codebase and documentation.

## Sustainable Innovation: Using "Auto Mode"

With great power comes great resource consumption. Copilot Enterprise offers access to "heavy," high-parameter models that are computationally expensive.

To align with our community's values of sustainability, we strongly recommend using the **Auto mode** for model selection in your VS Code or IDE settings.

* **How it works:** Auto mode dynamically selects the most efficient model for your specific prompt. It uses lighter models for simple completions and reserves the heavy models for complex architectural queries.
* **Benefit:** This ensures you get the performance you need without unnecessary energy consumption.

## Eligibility

This benefit is strictly for **official CNCF project maintainers**.

* We validate eligibility against the official [CNCF Maintainers list](https://maintainers.cncf.io/).
* Please ensure your project's `MAINTAINERS.md` or `OWNERS` file is up to date and reflects your current status before applying.

## How to Apply

We have streamlined the process through the CNCF Service Desk.

1. **Visit the Service Desk:** Navigate to [https://servicedesk.cncf.io/](https://servicedesk.cncf.io/).
2. **Submit a Request:** Select the **Program Management** category.
3. **Provide Details:** In your ticket, please provide your GitHub handle.
   * *Optional:* You may also include the GitHub handles of other maintainers on your project that you would like to enroll in the same request.

**Activation:** CNCF staff will verify your status against our maintainer records and provision the license. You will receive a notification once access is enabled.

If you have any questions or run into issues during the setup, please comment on your Service Desk ticket. Happy coding!
