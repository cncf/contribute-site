---
title: Cloud Native Project Monthly (CNPM) February 2024
date: 2024-02-21
authors: [castrojo]
tags: [cncf, project-newsletter, resources]
---

Welcome to the February 2024 edition of the Cloud Native Project Monthly newsletter! This month features important updates on certification changes, resource provider policies, sustainability initiatives, and mentorship programs.

<!-- truncate -->

## 📝 Certification Expiration Changes

:::info Policy Update 2024
The Linux Foundation has announced a certification policy change effective 2024. This update includes revisions to exam eligibility requirements and a new retake policy, providing candidates with greater flexibility and support.
:::

These changes are part of the Linux Foundation's commitment to maintaining the integrity and relevance of its certification programs within the evolving landscape of technology.

[Learn More](https://training.linuxfoundation.org/certification-policy-change-2024/)

## 🗃️ Resource Provider Mega Thread

There's a lot of news this month around resources provided to projects! Please read as your project may be impacted or could benefit from this news:

### OCI Credits Now Available for Projects

:::tip New Resource
Oracle has kindly donated $3 million in OCI credits for CNCF projects. These credits are now available for all CNCF projects!
:::

We encourage you to investigate adding OCI to your CI/CD pipelines. Check out this [blog post](https://www.cncf.io/blog/2024/02/02/oracle-oci-credits-are-now-available-to-cncf-projects-here-is-what-you-need-to-know/) for more information!

### Equinix Updates

The folks at Equinix have asked us to remind projects using their resources that they are bare metal! That means that any machines you have that sit idle, or even off, are still taking up resources and burning carbon for no reason. Equinix and CNCF Staff are double-checking that all the usage is valid and that resources are not stale/orphaned.

If you have an Equinix footprint, please take a few minutes and ensure the machines your project is using are what is needed. If you have any Equinix-specific questions or want help right-sizing machines, don't hesitate to reach out to [equinix@cncf.io](mailto:equinix@cncf.io).

### New Policy on Resource Usage

:::caution Important Policy Change
To be good stewards of the resources donated to us by various providers, we need to change how we're handling out and monitoring project usage of cloud/provider resources.
:::

**TL;DR:**

- CNCF will have hosted GHA Runners for you to use across all our major providers. If a provider/architecture/shape doesn't exist, please contact CNCF staff, and we will add it.
- Unless there are extenuating circumstances, you should shape your CI to work within GitHub Actions. Resources just for CI/CD must be re-requested and approved by CNCF Staff.
- Non-ephemeral resources need to be re-requested every six months. At seven months, those resources are subject to deletion.
- This will go into effect in September 2024, with staff reaching out to projects over the coming months to discuss their usage and identify a path forward.

**Note from Jeefy:** These changes are definitely a departure from how things have normally been handled, and it will also be a big lift from some projects. But we've also grown past what we can manage "the old way." This gives us a much more sustainable model across the board. Thanks for helping us and your fellow projects out.

### GitHub Action Runners

The CNCF team has been working on supplementing the provided GitHub runners with hosted runners within our various providers. If your project is part of the CNCF's GitHub Enterprise account, you should already have access to some.

To use these runners, see the [syntax provided by GitHub](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idruns-on) and use the name of the runner provided (ex. equinix-4cpu-16gb). We will be adding different types of runners over the next few months. If you would like any specific shape, size, or vendor platform, please reach out to us in [ServiceDesk](https://cncfservicedesk.atlassian.net/servicedesk/customer/portal/1).

### Join the LFX Insights v3 Beta Pilot Program

LFX is piloting a new tool for maintainers to learn about community growth trends and project velocity trends. Many early adopters have already boarded Insights, and we invite you to join them. [Learn more about Insights v3 here](https://docs.linuxfoundation.org/lfx/insights/v3-beta-version-current) and contact Daniel Krook on Slack to start onboarding now.

### Use Scarf to Measure Project Adoption

Scarf is now available to CNCF projects to learn about the adoption patterns of their projects through anonymized usage metrics. The Linux Foundation has partnered with Scarf to provide projects with licenses for their entire team, as well as hands-on support from Scarf. [Learn more about using Scarf here](https://about.scarf.sh/post/the-linux-foundation-is-partnering-with-scarf-for-oss-usage-analytics).

## 🔋 Sustainability Survey

:::info Help Shape the Future
Participate in the [CNCF Sustainability Survey](https://www.surveymonkey.com/r/YW5QK6D) to help shape the future of sustainability practices within cloud-native computing.
:::

Your input will contribute to developing environmentally conscious solutions in the CNCF ecosystem.

## 📋 TechDocs: TechDocsCon CFP

:::info Monthly Office Hours
On the last Wednesday of each month, the TechDocs team hosts Open Office Hours for anyone to drop in with questions about technical documentation.

**Next session:** Feb 28, 2024, at 8:00 AM PST
:::

You can find details on how to join us on the [public calendar](https://tockify.com/cncf.public.events/).

## ☀️ Google Summer of Code 2024

CNCF has been accepted as a mentoring organization for 2024! 🎉 Thanks everyone for all your support and proposals!

Now we've been accepted as an org, feel free to [update or add any project proposals](https://github.com/cncf/mentoring/blob/main/programs/summerofcode/2024.md) up until March 11 when we make our request for project slots.

[Check Out the Timeline](https://developers.google.com/open-source/gsoc/timeline)

## ✍️ Upcoming CFP Deadlines

Here are the upcoming deadlines for CFPs:

- [CloudNativeHacks](https://events.linuxfoundation.org/kubecon-cloudnativecon-europe/program/cloudnativehacks/) - February 24
- [KCD Pune](https://sessionize.com/kcd-pune-2024) - March 4
- [AI_Dev](https://events.linuxfoundation.org/ai-dev-europe/program/cfp/) - March 5
- [KCD Islamabad](https://sessionize.com/kubernetes-community-day-islamabad) - March 9
- [StrimziCon](https://sessionize.com/strimzicon-2024/) - March 10
- [KCD Shanghai](https://sessionize.com/kubernetes-community-day-islamabad) - March 17
- [KCD Munich](https://sessionize.com/kcd-munich-2024-cfp) - March 31
- [CloudNativeSecurityCon](https://events.linuxfoundation.org/cloudnativesecuritycon-north-america/program/cfp/) - March 31
- [KCD Zurich](https://sessionize.com/kcd-zurich-2024) - March 31
- [KCD Czech + Slovak](https://sessionize.com/kcd-czech-slovak-2024) - March 31
- [WasmCon](https://events.linuxfoundation.org/wasmcon/program/cfp/) - March 31
- [KCD Italy](https://sessionize.com/kcd-italy-2024) - April 4

## 🤝 Contribute!

Want to contribute to March's newsletter? [Contact us](mailto:projects@cncf.io) to share your updates!

## References

- [LF Certification Policy Change](https://training.linuxfoundation.org/certification-policy-change-2024/)
- [Oracle OCI Credits Blog Post](https://www.cncf.io/blog/2024/02/02/oracle-oci-credits-are-now-available-to-cncf-projects-here-is-what-you-need-to-know/)
- [CNCF Service Desk](https://cncfservicedesk.atlassian.net/servicedesk/customer/portal/1)
- [GitHub Actions Workflow Syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)
- [LFX Insights v3 Documentation](https://docs.linuxfoundation.org/lfx/insights/v3-beta-version-current)
- [Scarf Partnership Announcement](https://about.scarf.sh/post/the-linux-foundation-is-partnering-with-scarf-for-oss-usage-analytics)
- [CNCF Sustainability Survey](https://www.surveymonkey.com/r/YW5QK6D)
- [Google Summer of Code 2024](https://github.com/cncf/mentoring/blob/main/programs/summerofcode/2024.md)
- [Google Summer of Code Timeline](https://developers.google.com/open-source/gsoc/timeline)
