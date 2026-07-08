---
title: 'Empowering non-code contributors'
description: Easy governance hacks to break down barriers.
date: 2026-07-08
authors: [castrojo]
tags: [community]
---

One of the nicest things about being in the CNCF is projects can generate their own governance. Our layperson description for how CNCF governance works is typically "Do what you say you do on the tin." 

### Have your Governance Match your Community

CNCF Maintainers are Founders, CTO, CEO, Marketing, Tech Lead, VP Sales, HR, and every title under the book. The CNCF constantly bombards you with project opportunites: booths, slots for talks, etc. All of this can be overwheling to maintainers. 

Feel free to expand your governance where it fits. Today's example is to expand a typical boring CODEOWNERS file to empower folks.

First off is something I find myself reminding projects constantly: Your governance is yours to adapt! You can add a few simple lines to your existing documentation to bring in people: 

:::tip[Check out how `bootc` does it]

Defined non-code contributors in [MAINTAINERS.md](https://github.com/bootc-dev/bootc/blob/main/MAINTAINERS.md)

:::

> Examples: CNCF Service Desk tickets, coordinating with CNCF Project and Events teams, and LFX Administration. No code or code review rights.

We're so used to the files in our repositories being only relegated to the code! 

### It's about trust

There are five global KubeCons and tons of [KCDs](https://www.cncf.io/kcds/) - scaling this at the contributor level is difficult, which is why decoupling it from the code is a nice hack. 

This lets you pull in those community managers, project and product managers - they bring in those crucial skills that we all need. And when they are declared in your governance as Contributors it shows that the project is looking at its contributor ladder as a whole. 

Thanks to Kapil Thangavelu who showed me this little word hack at [Cloud Custodian](https://cloudcustodian.io). 

### Git is our source of truth

The CNCF Staff use the files that you put in git as THE source of truth. It determines your event resources, everything. It never hurts to [check the list](https://github.com/cncf/foundation/tree/main) for correctness, it should reflect the state of your project. (Note: the GitHub webui struggles with this file, you need to check it out of the repo or use raw mode).

