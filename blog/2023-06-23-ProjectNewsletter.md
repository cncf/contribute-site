---
title: Cloud Native Project Monthly (CNPM) June 2023
date: 2023-06-23
authors: [castrojo]
tags: [cncf, project-newsletter]
---

Welcome to the June 2023 edition of the Cloud Native Project Monthly newsletter! This month features updates on Maintainers' Circle sessions, DevStats affiliations, security audit insights, Sheriff for repo access, and mentoring programs.

<!-- truncate -->

## 🤝 Upcoming Maintainers' Circle

:::info Special Session
**Date:** Wednesday, June 28th at 10 am PT  
**Topic:** Defining and managing the roles in your Project with Paris Pittman
:::

[More details here](https://github.com/cncf/tag-contributor-strategy/tree/main/maintainers-circle#community-management)

## 📊 DevStats Affiliation

:::tip Data Source
Ever wondered where DevStats affiliations come from?
:::

They're in these repositories:
- [github.com/cncf/gitdm](https://github.com/cncf/gitdm)
- [openprofile.dev](https://openprofile.dev)

These may be useful to you! If you haven't updated these recently, these affiliations are what DevStats looks for.

## 🔐 TOC Meeting with AdaLogics

If you're curious about the goals + processes for security audits, the Technical Oversight Meeting for 6/20 might be useful for you! This is a recorded meeting with Adalogics and some project maintainers.

- [Recording](https://youtu.be/v2v8TuY9Ijc)
- [Presentation](https://docs.google.com/presentation/d/16XmBqV7f9t9yIETbDdzJt_Qa0VHSWRFCVXWvfs0Hwec/edit#slide=id.g25ca91f87f_0_0)

## 👮 New Sheriff in Town - Repo Access Permissions

:::caution Important Change
Sheriff is being used to centralize repo access control for the CNCF org on GitHub.
:::

When you want to grant access to your project repos to maintainers and collaborators, please submit a pull request to update the config.yaml file in the [cncf/people](https://github.com/cncf/people) repo.

Sheriff runs once per hour from a GitHub Action on cncf/people, and it will undo any changes to repo permissions that are made via a repo's settings.yml file. Using Sheriff makes it easy for us to review who has access to all community repos in the CNCF org. Sheriff also allows us to structure our teams to reflect team roles and Sheriff teams are cross platform.

## 🎓 Mentoring

LFX Term 02 - 2023 June - August has kicked off, thanks to all the mentors who are participating (55 of you!)!

It's early yet, but [Term 03 - 2023 September - November](https://github.com/cncf/mentoring/tree/main/programs/lfx-mentorship/2023/03-Sep-Nov) is open for project proposals—we're excited to see what you're interested in working on!

## 📊 CNCF Project Summary Table

:::info Landscape Feature
A lesser-known part of the CNCF Landscape is the [Project Summary Table](https://landscape.cncf.io/summary).
:::

Part of the Landscape are fields that allow projects to define both [typical and business use cases](https://github.com/cncf/landscape/blob/master/landscape.yml#L188-L231).

## 📺 gRPC

Don't miss your chance to join key customers, project leads, and contributors at the upcoming gRPC Conf 2023. [Submit your CFP today](https://events.linuxfoundation.org/archive/2020/kubecon-cloudnativecon-north-america/program/cfp/#submit-your-talk)!

**CFP closes:** Sunday, July 2

## 🤝 Contribute!

Want to contribute to July's newsletter? [Contact us](mailto:projects@cncf.io) to share your updates!

## References

- [Maintainers' Circle](https://github.com/cncf/tag-contributor-strategy/tree/main/maintainers-circle)
- [CNCF GitDM](https://github.com/cncf/gitdm)
- [Open Profile](https://openprofile.dev)
- [TOC Meeting Recording](https://youtu.be/v2v8TuY9Ijc)
- [AdaLogics Presentation](https://docs.google.com/presentation/d/16XmBqV7f9t9yIETbDdzJt_Qa0VHSWRFCVXWvfs0Hwec/edit)
- [CNCF People Repository](https://github.com/cncf/people)
- [LFX Mentorship Program](https://github.com/cncf/mentoring/tree/main/programs/lfx-mentorship)
- [CNCF Landscape](https://landscape.cncf.io/summary)
- [gRPC Conf 2023 CFP](https://events.linuxfoundation.org/archive/2020/kubecon-cloudnativecon-north-america/program/cfp/)
