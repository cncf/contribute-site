---
title: Cloud Native Project Monthly (CNPM) October 2026 Newsletter
date: 2026-10-27
authors:
  [
    krook,
    idvoretskyi,
    castrojo,
    jeefy,
    mrbobbytables,
    nate-double-u,
    riaankleinhans,
    robertkielty,
  ]
tags: [maintainers, community, projects, services, newsletter]
---

Welcome to the October 2026 edition of the Cloud Native Project Monthly (CNPM)
Newsletter.

We look forward to seeing many of you at
[KubeCon + CloudNativeCon North America](https://events.linuxfoundation.org/kubecon-cloudnativecon-north-america/)
in less than two short weeks!

CNCF staff will be at the various
[maintainer-focused activities](https://events.linuxfoundation.org/kubecon-cloudnativecon-north-america/features-add-ons/project-engagement/)
all week.

- [KubeCon NA Maintainer Activities](/blog/2026/10/27/cloud-native-project-monthly-october-2026#kubecon-na-maintainer-activities)
- [Thank You for Helping Us Get `.project` Over the Line](/blog/2026/10/27/cloud-native-project-monthly-october-2026#thank-you-for-helping-us-get-project-over-the-line)
- [Prow Without Running Prow](/blog/2026/10/27/cloud-native-project-monthly-october-2026#prow-without-running-prow)
- [GPU Runners Now Available for CNCF GitHub Actions](/blog/2026/10/27/cloud-native-project-monthly-october-2026#gpu-runners-now-available-for-cncf-github-actions)
- [TechDocs News](/blog/2026/10/27/cloud-native-project-monthly-october-2026#techdocs-news)
- [Upcoming Dates of Interest](/blog/2026/10/27/cloud-native-project-monthly-october-2026#upcoming-dates-of-interest)
- [CNCF Annual Survey](/blog/2026/10/27/cloud-native-project-monthly-october-2026#cncf-annual-survey)
- [Please Complete the 2H 2026 Maintainer Survey](/blog/2026/10/27/cloud-native-project-monthly-october-2026#please-complete-the-2h-2026-maintainer-survey)

<!-- truncate -->

## KubeCon NA Maintainer Activities

There are
[maintainer-focused events happening all week at KubeCon + CloudNativeCon](https://events.linuxfoundation.org/kubecon-cloudnativecon-north-america/features-add-ons/project-engagement/).
Collaborate with your fellow maintainers,
[find new contributors](https://contribute.cncf.io/blog/2026/10/01/from-user-to-contributor-to-maintainer),
and learn about new projects at the CNCF:

- Maintainer Summit is Sunday
- Project Lightning Talks are Monday
- Maintainer Track is Tuesday through Thursday
- Project Pavilion is open Tuesday through Thursday
- [Unconference submissions and Project Pavilion Stage sign-ups open next week](https://github.com/cncf/maintainer-summit/discussions)

We hope to see you there.

## Thank You for Helping Us Get `.project` Over the Line

We’re almost there! With **just five of 228 projects left, the `.project`
rollout is 97.8% complete**. Thank you to everyone who reviewed maintainer
lists, updated project information, and helped get those PRs merged.

A big thank-you also to everyone who connected their GitHub handle to their
Linux Foundation ID (LFID). **Around 86% of maintainers are now connected.**

Haven’t linked yours yet? Please take a moment to visit
[openprofile.dev](https://openprofile.dev/). Without that connection, you could
be missing out on CNCF services, including project maintainer mailing lists and
Service Desk access. While you’re there, check that your primary email address
is up to date.

#### Take a Look at Your Information

You can now check your details in the
[CNCF `.project` maintainer list](https://github.com/cncf/foundation/blob/main/project-maintainers-.project.csv).

If your GitHub handle or maintainer membership needs changing, open a PR in your
project’s `.project` repository. Your name, email, and affiliation come from
your LFID profile.

We’ve also noticed that many maintainers don’t have a work affiliation listed.
Would you like yours included? Add or update it at
[openprofile.dev](https://openprofile.dev/), and it will flow through to the
generated list.

Thanks again for helping us keep these records accurate and in the hands of the
projects they represent.

## Prow Without Running Prow

Have you wanted to use Prow without having to run Prow itself? Well, now you can
with [Prow-GitHub-Actions](https://github.com/cncf/prow-github-actions). It has
full support for:

- [OWNERS files](https://github.com/cncf/prow-github-actions/blob/main/docs/commands.md#owners)
  with
  [blunderbuss](https://docs.prow.k8s.io/docs/components/plugins/approve/approvers/#blunderbuss-selection-mechanism)
  support.
- [built in and your own slash commands](https://github.com/cncf/prow-github-actions/blob/main/docs/commands.md)
- [label management](https://github.com/cncf/prow-github-actions/blob/main/docs/labeling.md)
- [Issue and PR lifecycle management](https://github.com/cncf/prow-github-actions/blob/main/docs/labeling.md#lifecycle-stage-and-status-labels)
- and much more

## GPU Runners Now Available for CNCF GitHub Actions

Thanks to Nvidia and several partners, we're able to roll out dedicated GPU
runners to projects on a project-by-project basis. More info will be available
after KubeCon NA 2026, but short term: If you want GPUs, file a
[Service Desk ticket](https://cncfservicedesk.cncf.io)!

## TechDocs News

### Agent-Friendly Docs

More developers now ask AI coding agents for answers instead of reading docs.
When an agent can’t read your site, it answers from old training data, and your
users get outdated flags and wrong examples. [AFDocs](https://afdocs.dev) checks
your site against the Agent-Friendly Documentation Spec, gives you a score out
of 100, and lists what to fix: things like a Markdown version of each page, an
llms.txt index, and pages short enough for an agent to read in one pass. Run
`npx afdocs check https://your-docs-site --format scorecard` to see where you
stand, or check the new Agent Readiness section of your project’s
[CLOMonitor report](https://clomonitor.io/docs/topics/checks/#agent-readiness).
CNCF’s own sites show how it can be done: the Glossary (Hugo and Docsy)
[went from 59 to 100 across 16 languages](https://github.com/cncf/glossary/pull/3688),
and the contribute site
[applied a similar approach on Docusaurus](https://github.com/cncf/contribute-site/pull/428).

Want help making your docs agent-friendly? The CNCF TechDocs team can help you
update your site. Open a ticket on the
[CNCF Service Desk](https://cncfservicedesk.cncf.io) and ask for help with
agent-friendly docs, bring your site to Tech Writers Office Hours, or ask in
#techdocs on CNCF Slack.

### Docsy Joins the Linux Foundation

Docsy, the Hugo theme behind kubernetes.io, opentelemetry.io, and the CNCF
Glossary, now lives at the Linux Foundation. Google announced the move at Open
Source Summit Europe, alongside the release of Docsy 0.18.0.

More than 2,200 projects use Docsy, and many of them are CNCF projects. Recent
releases also help AI agents read your docs: Docsy sites can publish Markdown
versions of pages and an llms.txt index.

Thank you to Erin McKean and Lisa Carey (Google), who started Docsy, and to
Patrice Chalin (CNCF), who has led the project for the past few years.

- [Release notes](https://www.docsy.dev/blog/2026/0.18.0/)
- [Coverage in The New Stack](https://thenewstack.io/docsy-linux-foundation-agents/)

### Tech Writers Office Hours

Have a question about your project’s docs or website? Bring it to Tech Writers
Office Hours. CNCF technical writers answer questions about your site, your
docs, and how to improve them. Sandbox projects are especially welcome.

- When: Wednesday, October 28, 8:00 to 8:50 am Pacific (15:00 UTC)
- [Join the Zoom call](https://zoom-lfx.platform.linuxfoundation.org/meeting/95471930872?password=db1aa715-a60b-444c-8b14-71d44161a42e)
- [Agenda and notes](https://docs.google.com/document/d/1roexHTLCrErYjNT2NEoRsVnn_YNbQzZ1gyXNK8hXR4Q/edit?usp=sharing)

Office hours run on the fourth Wednesday of every month.

## Upcoming Dates of Interest

| Date                           | Call to action                                                                                                                                                          | Details                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **1 November 2026**            | [Submit a talk to SCaLE 24x](https://www.socallinuxexpo.org/scale/24x/cfp)                                                                                              | Pasadena, 1-4 April 2027. Tracks include Developers, Platform Engineering & DevEx, plus Applied Science and Kernel & Low Level Systems. Acceptances begin 1 December.                                                                                                                                                                                                    |
| **8 November 2026, 23:59 CET** | [Submit a session to FOSS Backstage 2027](https://program.foss-backstage.de/fossback27/cfp)                                                                             | Berlin and online, 2-3 March 2027. Open Source beyond the code: governance, community, project operations, security and resilience. Blind review, and first-time speakers are explicitly encouraged. Speakers get a free pass.                                                                                                                                           |
| **16 November 2026**           | [Submit a FOSDEM 2027 main track talk](https://fosdem.org/2027/news/call-for-main-track/)                                                                               | Brussels, 30-31 January 2027. Talks run 25 or 50 minutes. Devroom submissions open separately once devrooms are announced; Containers, Go and Security are among those accepted.                                                                                                                                                                                         |
| **1 December 2026, 23:59 CET** | [Submit to the CNCF Maintainer Summit Europe CFP](https://sessionize.com/maintainer-summit-eu-2027/)                                                                    | Barcelona, 14 March 2027. Tracks: Main, Growing Contributors, CI/CD/Distribution, and Project Meeting. Open to TOC members, graduated project maintainers and org members, TAG leads, and incubating project maintainers. Notifications 5 January. [Event details](https://events.linuxfoundation.org/kubecon-cloudnativecon-europe/features-add-ons/maintainer-summit/) |
| **2 December 2026**            | [Request a Project Kiosk for KubeCon + CloudNativeCon Europe](https://events.linuxfoundation.org/kubecon-cloudnativecon-europe/features-add-ons/project-opportunities/) | Project Pavilion kiosk and PR support interest form for Barcelona, 16-18 March 2027. Notifications 11 January.                                                                                                                                                                                                                                                           |

## CNCF Annual Survey

LF Research is wrapping up the CNCF Annual Survey. This survey is used to
identify ecosystem changes and drive the direction of the foundation. Questions
are around project usage and technology trends. If you have several minutes of
free time, please [take it](https://www.research.net/r/N7KVJPG)!

## Please Complete the 2H 2026 Maintainer Survey

We're entering the final quarter of the year, so it’s time for another
[maintainer survey](https://maintainers-survey.cncf.io). We run them twice a
year to measure maintainer awareness of available resources, including support
from CNCF staff, Linux Foundation tools, the Technical Oversight Committee
(TOC), and the Technical Advisory Groups (TAGs). This is your chance to provide
feedback to help ensure the CNCF remains the best place for maintainers to host
a cloud native project.

:::tip Take the Maintainer Survey

**Help us help you**:
[maintainers-survey.cncf.io](https://maintainers-survey.cncf.io)

If you’ve already registered for Maintainer Summit (which includes the survey)
there’s no need to fill it out again.

:::

## See You Next Month

Please let us know if you have suggestions for future newsletter content by
emailing [projects@cncf.io](mailto:projects@cncf.io).

You can also continue discussions with other maintainers in the
#maintainer-circle Slack channel.

🫶 Daniel, Jeefy, Bob, Nate, Jorge, Riaan, Ihor, Robert, and the rest of the
CNCF staff
