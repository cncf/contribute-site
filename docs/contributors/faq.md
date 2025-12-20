---
id: faq
title: Frequently Asked Questions
description:
  'Common questions from new contributors to CNCF projects, compiled from
  community discussions'
sidebar_position: 3
keywords:
  - faq
  - frequently asked questions
  - new contributor
  - open source
  - cncf
  - help
tags:
  - faq
  - new contributor
  - getting started
  - open source
---

This FAQ was compiled from real conversations in the CNCF #cncf-new-contributors
Slack channel spanning November 2023 through late 2025, representing the
collective wisdom of over 850 community members and 2,200+ messages.

## Getting Started

### Q: I'm completely new. Where do I start?

**A:** Start with these foundational steps:

1. **Read the contributor guide** -
   [Start Contributing to Open Source](getting-started.md) on this site
2. **Browse the CNCF Landscape** -
   [landscape.cncf.io](https://landscape.cncf.io/) to see all projects
3. **Pick ONE project** that genuinely interests you
4. **Join its Slack channel** and introduce yourself
5. **Clone the repo** and try to get it running locally
6. **Find a "good first issue"** on [CLOTributor](https://clotributor.dev/)

:::tip Start Small

Don't try to contribute to multiple projects at once. Pick one, understand it
deeply, and make your first contribution there.

:::

### Q: Do I need to be an expert in Go/Kubernetes/etc. to contribute?

**A:** No! While many CNCF projects use Go, expertise isn't required to start
contributing.

**What you need:**

- **Genuine interest** in the project
- **Willingness to learn**
- **Basic programming knowledge** (for code contributions)
- **Good communication skills**

**How to approach the learning curve:**

- Start with small contributions (docs, tests, bug fixes)
- Read code reviews to see how experienced contributors work
- Ask questions when stuck (with specific details)
- Use the project as your learning environment

:::info Non-Code Contributions

Many valuable contributions don't require coding at all: documentation, testing,
design, translation, community management, and more.

:::

### Q: Which CNCF project should I choose?

**A:** Choose based on **interest**, not necessarily your current skills.

**Consider:**

- **What problems interest you?** (Networking, security, observability, etc.)
- **What do you want to learn?** Let your curiosity drive you
- **What tools do you already use?** You'll understand the context better
- **Which communities seem welcoming?** Join their Slack and observe

**Good starter projects for beginners:**

- **Kubernetes:** Large community, excellent documentation, many entry points
- **Prometheus:** Well-structured, clear contribution guidelines
- **Envoy:** Active community, good for learning C++
- **Helm:** Good for learning Go and package management
- **Smaller graduated projects:** Often more approachable than the largest
  projects

:::caution Choose One

Resist the urge to contribute to multiple projects initially. Master the
contribution workflow in one project first.

:::

### Q: I don't know Go. Can I still contribute to Kubernetes?

**A:** Yes! Kubernetes has many non-Go contribution opportunities:

- **Documentation** (Markdown, Hugo)
- **Website** (HTML, CSS, JavaScript)
- **Testing** (writing test cases, manual testing)
- **Issue triage** (reproducing bugs, labeling issues)
- **Translation** (localizing docs into other languages)
- **Community management** (helping new contributors)

**If you want to learn Go through Kubernetes:**

1. Start by reading the codebase
2. Review PRs to see patterns
3. Take on small Go issues labeled "good first issue"
4. Learn Go basics from [go.dev/tour](https://go.dev/tour/)
5. Study the Kubernetes codebase as examples of production Go

## Finding Issues

### Q: How do I find a good first issue?

**A:** Use these strategies:

**Tool-based discovery:**

- [CLOTributor](https://clotributor.dev/) - Aggregates "good first issues"
  across CNCF projects
- GitHub labels: "good first issue", "help wanted", "beginner-friendly"
- Project issue trackers with "needs-help" or similar labels

**Manual exploration:**

- Read project documentation and find gaps or errors
- Use the project and note confusing parts
- Look at recent issues and see if any are approachable
- Check project meetings notes for mentioned tasks

**Proactive approach:**

- Attend community meetings and listen for pain points
- Read Slack discussions for untracked work
- Review recent PRs and see if similar work is needed elsewhere
- Ask maintainers: "I'd like to contribute. What would be most helpful?"

:::tip Create Your Own Issues

If you find a bug or documentation gap while using the project, file an issue
yourself and then propose to fix it. This shows initiative!

:::

### Q: All the "good first issues" seem too hard. What do I do?

**A:** This is common. Here's what to do:

**Perspective shift:**

- "Good first issue" doesn't mean "easy"—it means "good for first-time
  contributors to this project"
- These issues are well-scoped and documented, not necessarily simple
- The difficulty is relative to the project's complexity

**Strategies:**

1. **Start with docs/tests** - Often more approachable than core code
2. **Ask for guidance** - Comment on the issue asking for pointers
3. **Pair with someone** - Find another contributor to work with
4. **Build prerequisite knowledge** - Spend time understanding the codebase
   first
5. **Create your own "issue"** - Fix typos, improve examples, update outdated
   docs

**Reality check:**

- Your first contribution might take weeks. That's normal.
- You might fail several times before succeeding. That's part of learning.
- The difficulty is intentional—CNCF projects are production systems used by
  millions.

### Q: How do I claim an issue?

**A:** Every project is slightly different, but generally:

**Standard approach:**

1. **Read the issue carefully** - Make sure you understand it
2. **Check if it's assigned** - Look for assignee or recent comments
3. **Comment on the issue** - Express interest: "I'd like to work on this. Is it
   available?"
4. **Wait for confirmation** - A maintainer should respond
5. **Ask clarifying questions** - Before starting, make sure you understand the
   requirements
6. **Start working** - Once confirmed, fork the repo and begin

**Important:**

- Don't submit a PR without commenting first (it might be assigned or
  inappropriate)
- Don't claim multiple issues at once
- If you claim an issue but can't complete it, comment to release it
- Projects may have time limits (e.g., "must have PR within 2 weeks")

:::caution Don't Ghost

If you claim an issue but realize you can't complete it, let the maintainers
know. It's much better than leaving them wondering.

:::

## Technical Questions

### Q: How do I set up my development environment?

**A:** Most CNCF projects have a `CONTRIBUTING.md` or `DEVELOPMENT.md` file.

**General setup pattern:**

1. **Read the contributing guide** - Look for environment setup instructions
2. **Install dependencies** - Usually listed in the repo (Go, Docker,
   Kubernetes, etc.)
3. **Clone and fork** - Fork on GitHub, clone locally
4. **Run the build** - Follow instructions to build from source
5. **Run tests** - Verify your environment works (`make test` or similar)
6. **Start small** - Make a trivial change and ensure the build/test cycle works

**Common requirements:**

- **Git** and **GitHub account** with 2FA enabled
- **Programming language** (Go, Python, Rust, etc.)
- **Docker** for containerized development
- **Kubernetes** (Minikube, Kind, or K3s) for cloud-native projects
- **Make** for build automation

:::tip Use Codespaces or Dev Containers

Many projects now support GitHub Codespaces or VS Code Dev Containers for
instant development environments.

:::

### Q: I can't get the project to build. What do I do?

**A:** Build issues are frustrating but common. Here's the process:

**Debugging steps:**

1. **Re-read the setup instructions** - You might have missed a step
2. **Check prerequisites** - Verify versions of Go, Docker, etc. match
   requirements
3. **Search existing issues** - Someone else likely had the same problem
4. **Check your environment** - OS, architecture, available resources
5. **Try a clean build** - Delete build artifacts and caches, start fresh

**Where to ask for help:**

- **Project Slack** - Usually the fastest response (check pins for setup help
  channels)
- **GitHub Discussions** - If the project uses Discussions
- **GitHub Issues** - Only if it seems like a genuine project bug

**When asking for help, include:**

- Your OS and version
- Relevant software versions (Go, Docker, etc.)
- The exact command you ran
- The complete error message (use code blocks or pastebin for long errors)
- What you've already tried

:::caution Be Specific

"It doesn't work" won't get helpful responses. Include error messages, logs, and
what you've tried.

:::

### Q: How do I write a good commit message?

**A:** Most CNCF projects follow conventional commit practices.

**Standard format:**

```text
<type>: <short description>

<longer explanation if needed>

Fixes #<issue number>
```

**Common types:**

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `test:` - Test additions or fixes
- `refactor:` - Code restructuring without behavior change
- `chore:` - Build process, dependencies, etc.

**Good examples:**

```text
fix: resolve nil pointer panic in pod controller

The controller would crash when processing pods without
status.podIP set. Added nil check before dereferencing.

Fixes #12345
```

```text
docs: add troubleshooting section to installation guide

Users frequently ask about certificate errors during installation.
Added a dedicated troubleshooting section addressing the most
common issues.

Fixes #67890
```

**Project-specific conventions:**

- Some projects require issue numbers in commit messages
- Some use different formats (e.g., Kubernetes uses its own conventions)
- **Always check the project's CONTRIBUTING.md** for their specific requirements

:::info Sign Your Commits

Many projects require [signed commits (DCO)](https://github.com/apps/dco). Use
`git commit -s` to automatically sign.

:::

## Pull Requests

### Q: How do I create a pull request?

**A:** Follow this workflow:

**Before creating the PR:**

1. **Fork the repository** on GitHub
2. **Clone your fork** locally
3. **Create a feature branch** - `git checkout -b fix-issue-123`
4. **Make your changes**
5. **Test thoroughly** - Run all relevant tests
6. **Commit with a good message** - Follow project conventions
7. **Push to your fork** - `git push origin fix-issue-123`

**Creating the PR:**

1. **Navigate to the original repo** on GitHub
2. **Click "New Pull Request"**
3. **Select your fork and branch**
4. **Write a descriptive title** - Similar to commit message format
5. **Fill out the PR template** - Most projects have one
6. **Link the related issue** - Use "Fixes #123" in the description
7. **Submit the PR**

**After submission:**

- Watch for CI checks and fix any failures
- Respond to review feedback promptly
- Be patient—reviews take time

:::tip PR Templates

Most projects have PR templates. Fill them out completely—it helps reviewers
understand your change.

:::

### Q: My PR hasn't been reviewed. What should I do?

**A:** Lack of review is frustrating but common. Maintainers are often
volunteers with limited time.

**Timeline expectations:**

- **First response:** 2-7 days is typical
- **Full review:** Could take weeks depending on complexity
- **Merging:** After review approval, could be immediate or take days

**What to do while waiting:**

#### Week 1: Be patient

- Ensure CI passes
- Check that your PR follows all guidelines
- Make sure you filled out the template completely

#### Week 2: Gentle ping

- Comment: "Friendly ping for review when maintainers have time"
- Check if you need to request review from specific people
- Verify no one asked questions you missed

#### Week 3+: Escalate thoughtfully

- Ask in the project Slack channel (politely)
- Attend the project meeting and mention it briefly
- Check if there's a specific reviewer you should request
- Consider: "Is there anything I can do to help move this forward?"

**Things that help:**

- Smaller PRs get reviewed faster
- PRs addressing known issues get priority
- PRs with good tests and documentation are easier to review
- Being responsive to feedback shows commitment

**Things that don't help:**

- Multiple pings per week
- Demanding immediate attention
- Complaining about response time
- Tagging random maintainers

:::caution Understand Priorities

Bug fixes and requested features get more attention than unsolicited
refactoring. Make sure your contribution aligns with project priorities.

:::

### Q: My PR got negative feedback. What do I do?

**A:** Code review feedback is normal and not personal. Here's how to handle it:

**Understand the nature of feedback:**

- **Technical concerns** - "This could cause a memory leak"
- **Style/convention issues** - "We use camelCase here, not snake_case"
- **Scope concerns** - "This PR does too many things"
- **Architectural concerns** - "This approach doesn't fit our design"

**How to respond:**

1. **Don't take it personally** - It's about the code, not you
2. **Read carefully** - Make sure you understand the concern
3. **Ask questions** - If unclear, ask for clarification
4. **Learn from it** - Each review makes you a better contributor
5. **Make the changes** - If you agree, update your PR
6. **Discuss respectfully** - If you disagree, explain your reasoning with
   evidence

**If the feedback seems harsh:**

- Remember: Text lacks tone. They're probably not being mean, just direct.
- Most maintainers are trying to help, even if it doesn't feel that way
- If feedback is truly inappropriate, contact the project's Code of Conduct
  committee

**If you're asked to make major changes:**

- It's okay to ask for guidance: "I'm not sure how to approach this. Could you
  point me in the right direction?"
- It's okay to say: "This is beyond my current skills. Would someone be able to
  take over, or could I tackle this in smaller steps?"

:::info Learning Opportunity

Negative feedback often teaches more than positive feedback. Each criticism is a
chance to improve.

:::

### Q: Can I contribute by reviewing other people's PRs?

**A:** Absolutely! PR review is one of the most valuable contributions.

**Benefits of reviewing:**

- **Learn the codebase** faster than any other method
- **Understand project standards** by seeing what maintainers approve/reject
- **Build relationships** with other contributors and maintainers
- **Help reduce maintainer burden** - they'll notice and appreciate it
- **Improve your own code** by seeing common mistakes

**How to review effectively:**

1. **Start with docs PRs** - Lower stakes, easier to review
2. **Check for obvious issues** - Typos, broken links, formatting
3. **Test the changes** - Pull the PR locally and verify it works
4. **Be constructive** - Point out issues but also suggest solutions
5. **Ask questions** - "Why did you choose this approach?" is valuable
6. **Highlight good things** - "I like how you handled X" encourages
   contributors

**What to look for:**

- Does the PR solve the stated problem?
- Are there tests covering the changes?
- Is the documentation updated?
- Does it follow project conventions?
- Are there edge cases not handled?

:::tip Start with Documentation PRs

Documentation PRs are great for learning how to review. They're less intimidating
and still very valuable.

:::

## Career and Learning

### Q: Will contributing to CNCF projects help my career?

**A:** Yes, absolutely. Here's how:

**Direct career benefits:**

- **Demonstrates skills** - Real contributions to production systems
- **Proves collaboration ability** - Working with distributed teams
- **Shows communication skills** - Explaining technical concepts clearly
- **Builds public portfolio** - GitHub contributions are visible to employers
- **Signals commitment** - Consistent contributions show dedication

**Networking benefits:**

- **Meet industry professionals** - Maintainers often work at major tech
  companies
- **Join exclusive communities** - Access to Slack channels, meetings,
  conferences
- **Get mentorship** - Experienced contributors often help newcomers
- **Discover opportunities** - Jobs are frequently posted in project channels

**Learning benefits:**

- **Production code patterns** - See how real systems are built
- **Code review experience** - Learn from experts reviewing your work
- **Complex problem solving** - Tackle issues used by millions
- **Best practices** - Learn testing, CI/CD, documentation standards

**Reality check:**

- One PR won't land you a job
- Consistent, quality contributions over months/years matter most
- Quality matters more than quantity
- Building relationships is as important as code contributions

:::info Employers Notice

Many companies actively recruit from open source contributors. Kubernetes,
Prometheus, and other major projects are well-recognized on resumes.

:::

### Q: How do I learn Go (or another language) through CNCF projects?

**A:** Using CNCF projects to learn is effective but challenging.

**Recommended learning path:**

1. **Learn basics first** - Complete [Tour of Go](https://go.dev/tour/) or
   equivalent for your language
2. **Read CNCF project code** - Pick a small project or well-isolated component
3. **Review PRs** - See how experienced Go developers write code
4. **Make small changes** - Start with tests, docs, small bug fixes
5. **Ask questions** - "Why was this implemented this way?" in Slack/discussions
6. **Read language style guides** - E.g.,
   [Effective Go](https://go.dev/doc/effective_go)

**What works:**

- Reading code reviews to see patterns and idioms
- Starting with test contributions (simpler than production code)
- Finding mentors in the project Slack
- Attending working group meetings to ask questions

**What doesn't work:**

- Jumping straight into complex issues without language fundamentals
- Asking the community to teach you basic language concepts
- Expecting maintainers to provide detailed tutoring

**CNCF-specific Go learning resources:**

- Study the Kubernetes codebase - production-quality Go code
- Read the Go standard library - linked from CNCF projects frequently
- Explore smaller graduated projects - more approachable than Kubernetes

:::caution Learn the Basics First

Don't expect the project community to teach you language fundamentals. Learn
basic syntax and concepts first, then use the project to level up.

:::

### Q: Should I contribute to multiple projects at once?

**A:** Generally, no—especially when starting out.

**Why focus on one project:**

- **Different contribution workflows** - Each project has unique processes
- **Different technical contexts** - Deep understanding takes time
- **Community relationships** - Building trust requires consistent presence
- **Better learning** - Depth beats breadth for skill development
- **Faster progress** - You'll get PRs merged faster when you understand the
  system

**When to expand to multiple projects:**

- After several successful contributions to your first project
- When you're confident in the contribution workflow
- If projects are closely related (e.g., Prometheus and Grafana)
- If you're specifically exploring different technologies

**How to contribute to multiple projects sustainably:**

- Designate one as your "primary" project
- Contribute to others opportunistically (found a bug, have specific expertise)
- Don't commit to major features in multiple projects simultaneously
- Be honest about bandwidth with each community

:::info Depth Over Breadth

One substantial contribution to a single project is more valuable than
superficial contributions to ten projects.

:::

## Community and Culture

### Q: I'm getting imposter syndrome. Is this normal?

**A:** Absolutely normal—nearly universal, in fact. Imposter syndrome affects
contributors at all levels.

**Common signs:**

- Feeling like you don't belong
- Worrying that you'll be "found out" as incompetent
- Attributing success to luck rather than skill
- Comparing yourself unfavorably to others

**Reality check:**

- **Everyone started as a beginner** - The most prolific contributors weren't
  born knowing Kubernetes
- **Maintainers want you to succeed** - They invest time reviewing because they
  want more contributors
- **Your perspective is valuable** - Newcomers see things that veterans miss
- **Small contributions matter** - Typo fixes and test improvements are valuable

**Strategies that help:**

1. **Celebrate small wins** - Keep a list of your merged PRs
2. **Remember everyone struggles** - Look at early commits from people you
   admire
3. **Ask questions without shame** - Smart people ask questions
4. **Find community** - Connect with other newcomers
5. **Take breaks** - Burnout amplifies imposter syndrome

:::tip Your Questions Help Others

When you ask a "basic" question, you're often exposing a documentation gap that
will help hundreds of future contributors.

:::

### Q: How do I handle rejection or criticism?

**A:** Rejection and criticism are part of open source. Here's how to handle
them:

**Types of rejection:**

- **"Not right now"** - Feature might be good but timing is wrong
- **"Not aligned with goals"** - Feature doesn't fit project direction
- **"Not the right approach"** - Implementation needs different design
- **"Not enough resources"** - Maintainers can't commit to reviewing/maintaining

**How to respond:**

1. **Don't take it personally** - It's about the code/feature, not you
2. **Ask for clarification** - "Can you help me understand the concern?"
3. **Learn from it** - "What would a better approach look like?"
4. **Accept it gracefully** - "Thanks for considering it. I understand."
5. **Consider alternatives** - Could it work as a plugin? Different project?

**When criticism feels unfair:**

- Take a break before responding (don't reply when emotional)
- Re-read the comments objectively (ask a friend to review)
- Engage calmly: "I'd like to understand this concern better..."
- If truly inappropriate, contact Code of Conduct committee

**Learn from rejection:**

- Why didn't the feature fit? (Understand project goals better)
- What was wrong with the approach? (Improve your design thinking)
- How could you have proposed it better? (Communication skills)

:::info Rejection ≠ Failure

Many experienced contributors have had PRs rejected. It's feedback, not a
judgment of your worth.

:::

### Q: What should I do if I witness or experience harassment?

**A:** CNCF projects follow the
[CNCF Code of Conduct](https://github.com/cncf/foundation/blob/main/code-of-conduct.md).

**If you experience or witness inappropriate behavior:**

1. **Your safety comes first** - Don't feel obligated to engage
2. **Document it** - Save screenshots, links, timestamps
3. **Report it** - Contact the Code of Conduct committee at
   [conduct@cncf.io](mailto:conduct@cncf.io)
4. **Report to project** - Most projects have local CoC contacts (check
   CONTRIBUTING.md)
5. **Talk to someone** - Don't handle it alone; reach out to trusted community
   members

**What's covered by CoC:**

- Harassment, discrimination, or exclusionary behavior
- Personal attacks or insults
- Unwelcome sexual attention
- Trolling, inflammatory comments, or sustained disruption
- Publishing others' private information

**CNCF takes CoC violations seriously:**

- Reports are confidential
- The committee investigates thoroughly
- Actions range from warnings to permanent bans
- Retaliation against reporters is itself a violation

:::caution You Don't Have to Tolerate Harassment

The CNCF community aims to be welcoming and inclusive. If someone makes you
uncomfortable, it's not your responsibility to just deal with it.

:::

## Program-Specific Questions

### Q: Should I apply for GSoC/LFX Mentorship?

**A:** Yes, if you're eligible! These programs provide structured mentorship and
sometimes stipends.

**LFX Mentorship:**

- **Three terms per year** (Spring, Summer, Fall)
- **Stipends provided** based on location
- **3-6 month projects** with dedicated mentor
- **Any contributor level** - from beginners to experienced
- **Application required** - Including project proposal

**Google Summer of Code:**

- **Annual program** (Summer)
- **Stipends provided** based on location
- **Usually 12-week projects**
- **For students and newcomers**
- **Competitive** - Requires strong proposal

**Benefits:**

- Dedicated mentor guidance
- Structured project with clear goals
- Financial support
- Community recognition
- Resume boost

**Requirements:**

- Time commitment (usually 20-40 hours/week)
- Strong proposal showing understanding of project
- Usually some prior contribution to the project
- Regular communication with mentor

**How to increase acceptance chances:**

1. **Contribute beforehand** - Show you understand the project
2. **Engage with mentors** - Ask questions, attend meetings
3. **Write a strong proposal** - Clear problem, approach, timeline
4. **Be realistic** - Don't promise more than you can deliver

:::info Start Early

Successful applicants usually start engaging with projects 1-2 months before
applications open.

:::

### Q: What is a TAG (Technical Advisory Group)?

**A:** TAGs are groups within CNCF that focus on specific areas and provide
guidance.

**What TAGs do:**

- Provide technical guidance to CNCF projects
- Develop best practices and reference architectures
- Coordinate cross-project efforts
- Represent end-user and contributor interests

**Active TAGs include:**

- **TAG Contributor Strategy** - Helping projects grow healthy contributor bases
- **TAG Security** - Security assessments, best practices
- **TAG App Delivery** - Application deployment and management
- **TAG Network** - Networking technologies
- **TAG Storage** - Storage solutions
- **TAG Runtime** - Container runtime topics

**How to get involved:**

- **Attend meetings** - All TAG meetings are open (check
  [CNCF calendar](https://www.cncf.io/calendar/))
- **Join discussions** - TAGs usually have Slack channels
- **Review documents** - TAGs produce papers and guidelines
- **Contribute to initiatives** - TAGs have working groups with specific
  projects

**Benefits:**

- Learn about cloud-native technologies across projects
- Meet contributors from different projects
- Influence direction of cloud-native ecosystem
- Access to expertise and mentorship

:::tip Lower Barrier to Entry

TAG meetings are often less intimidating than project meetings and welcome new
contributors.

:::

## Practical Tips

### Q: What if I don't have a powerful computer?

**A:** You can still contribute! Many contribution types don't require running
complex builds.

**Low-resource contributions:**

- **Documentation** - Just needs a text editor
- **Website work** - Often lighter than main project
- **Issue triage** - Reading and categorizing issues
- **Testing** - Many projects have hosted test environments
- **Community work** - Helping in Slack, organizing events

**For code contributions with limited resources:**

- **Use GitHub Codespaces** - Free tier includes 60 hours/month
- **Use cloud-based dev environments** - Gitpod, AWS Cloud9
- **Work on smaller projects** - Not all CNCF projects are massive
- **Focus on specific components** - Don't try to build everything
- **Contribute to Go projects** - Generally lighter than Java/Node projects

**What you can do with a modest machine:**

- Most documentation sites build in seconds
- Smaller tools and utilities (not Kubernetes itself)
- Frontend work (many sites are static)
- Writing and reviewing code without running locally

:::info Cloud Development Environments

GitHub Codespaces and similar tools have democratized contributions—you no
longer need a powerful local machine.

:::

### Q: How can I attend meetings if I'm in a different timezone?

**A:** Timezones are challenging for global projects, but there are strategies:

**Async participation:**

- **Read meeting notes** - Posted after meetings
- **Comment on agendas** - Add topics before meetings
- **Watch recordings** - Many meetings are recorded
- **Engage in Slack** - Async discussion continues between meetings

**Finding accessible meetings:**

- **Some projects rotate times** - To accommodate different regions
- **Sub-groups may have different times** - Find one that works for you
- **SIG/WG meetings vary** - Different groups meet at different times

**When attending is important:**

- **Request recording** - Ask if meetings can be recorded
- **Propose alternative times** - For specific discussions
- **Attend asynchronously** - Some projects use issues/PRs for decision-making
- **Find regional groups** - Community groups in your timezone

**Making the most of it:**

- Attend even one meeting if possible—helps build relationships
- Be active in async channels so people know you
- Schedule 1:1s with mentors at mutually convenient times

:::tip Written Communication Matters More

In global communities, written communication in issues, PRs, and Slack is often
more important than meeting attendance.

:::

### Q: My PR was merged! What do I do next?

**A:** Congratulations! Here's what comes next:

**Immediate follow-up:**

1. **Celebrate!** - Seriously, take a moment to feel proud
2. **Thank the reviewers** - Acknowledge their time and feedback
3. **Monitor for issues** - Watch for any problems caused by your change
4. **Update tracking systems** - Close related issues if not auto-closed

**Planning next steps:**

- **Take another issue in the same area** - Build on your knowledge
- **Help others** - Review PRs similar to yours
- **Attend a project meeting** - Introduce yourself, mention your contribution
- **Update your resume/LinkedIn** - Mention your open source contribution
- **Write about it** - Blog post or social media sharing your experience

**Building momentum:**

- **Become a regular contributor** - Aim for consistent small contributions
- **Expand your scope** - Gradually take on more complex issues
- **Build relationships** - Engage with other contributors
- **Consider mentorship** - Help newcomers with their first PRs

**Long-term growth:**

- **Specialize in an area** - Become the expert in a component
- **Take on larger features** - With trust comes bigger opportunities
- **Join a working group** - Get involved in planning and design
- **Consider maintainership** - Eventually, you might become a maintainer

:::tip Keep the Momentum

Don't stop after one PR! Your second contribution is often easier and faster
than your first.

:::

## Essential Resources

### Starting Points

| Resource                                                             | Description                                       |
| -------------------------------------------------------------------- | ------------------------------------------------- |
| [CNCF Contributors Portal](https://contribute.cncf.io/contributors/) | Main starting point for all contribution guidance |
| [CLOTributor](https://clotributor.dev/)                              | Find good first issues across all CNCF projects   |
| [CNCF Landscape](https://landscape.cncf.io/)                         | Visual map of all CNCF and cloud-native projects  |
| [CNCF Calendar](https://www.cncf.io/calendar/)                       | All community meetings across the ecosystem       |

### Mentorship and Learning

| Resource                                                                                                                                    | Description                               |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| [CNCF Mentoring](https://github.com/cncf/mentoring)                                                                                         | GSoC, LFX, and other mentorship programs  |
| [KubeByExample](https://kubebyexample.com/)                                                                                                 | Interactive learning paths for Kubernetes |
| [CNCF YouTube](https://www.youtube.com/@cncf)                                                                                               | Thousands of recorded talks and tutorials |
| [Intro to Open Source Course](https://kubebyexample.com/learning-paths/intro-open-source-lesson-1-what-open-source-and-why-should-you-care) | Comprehensive course on contributing      |

### Kubernetes-Specific

| Resource                                                                    | Description                            |
| --------------------------------------------------------------------------- | -------------------------------------- |
| [Kubernetes Slack](https://slack.k8s.io/)                                   | Join the Kubernetes Slack workspace    |
| [K8s Contributor Guide](https://kubernetes.dev/)                            | Official contributor documentation     |
| [SIG List](https://github.com/kubernetes/community/blob/master/sig-list.md) | All Kubernetes Special Interest Groups |

### Community and Events

| Resource                                                                                | Description                      |
| --------------------------------------------------------------------------------------- | -------------------------------- |
| [Community Groups](https://community.cncf.io/)                                          | Local meetups and KCDs worldwide |
| [TAG Contributor Strategy](https://github.com/cncf/tag-contributor-strategy)            | Initiatives to help contributors |
| [CNCF Blog Guidelines](https://github.com/cncf/foundation/blob/main/policies-guidance/blog-guidelines.md) | How to write for the CNCF blog   |
| [KubeCon Events](https://events.linuxfoundation.org/)                                   | Flagship conferences             |

### Go Language Resources

| Resource                                        | Description             |
| ----------------------------------------------- | ----------------------- |
| [Tour of Go](https://go.dev/tour/)              | Interactive tutorial    |
| [Go by Example](https://gobyexample.com/)       | Practical examples      |
| [Effective Go](https://go.dev/doc/effective_go) | Official Go style guide |

## Quick Reference Card

### Your First Week

- [ ] Read [Start Contributing to Open Source](getting-started.md)
- [ ] Browse the [CNCF Landscape](https://landscape.cncf.io/)
- [ ] Pick ONE project that interests you
- [ ] Join its Slack channel and introduce yourself
- [ ] Clone the repo and get it running locally
- [ ] Find a "good first issue" on [CLOTributor](https://clotributor.dev/)

### Your First Month

- [ ] Make your first contribution (docs, tests, or small code fix)
- [ ] Attend a project community meeting
- [ ] Subscribe to the project mailing list
- [ ] Review other people's PRs
- [ ] Ask questions when stuck (specific questions get better answers!)
- [ ] Set up your development environment properly

### Your First Quarter

- [ ] Become a regular contributor to one project
- [ ] Help other newcomers in Slack
- [ ] Consider applying for GSoC/LFX if eligible
- [ ] Attend a local meetup or KCD
- [ ] Write a blog post about your journey
- [ ] Start reviewing PRs regularly

### Your First Year

- [ ] Establish yourself as a trusted contributor
- [ ] Consider expanding to a second project
- [ ] Mentor newer contributors
- [ ] Speak at a meetup or conference
- [ ] Consider leadership opportunities (SIG role, working group, etc.)

## Community Wisdom

Collected quotes from experienced contributors in the channel:

> "Start slow. By doing PR reviews to see what is being changed and where."

> "Pick an area of their interest and narrow down the projects."

> "The underrated way to learn a new language is from code reviews!"

> "It's often better to talk to maintainers ahead of time and figure out ideas
> about projects."

> "More specific the question, easier to answer!"

> "There are a lot of things that people talk about but don't end up as an
> issue. If you can pay attention and pick some stuff and use that to open an
> issue and PR, you are on the next step of the journey."

> "Matching projects to your existing skills is the wrong way to approach it...
> interests should drive your skills development."

> "The idea is to be able to modify some code and build things and then run it.
> That's the first step. If you can't do this then no amount of looking at code
> will help."

> "I don't think your machine will be a hurdle in your learning as long as you
> are keen to learn."

---

**Special thanks** to dims, Daniel Krook, Calum Murray, Emily Fox, Chris
Aniszczyk, Leo L., Tim Bannister, and the countless community members who
generously share their knowledge with newcomers every day.

**Last updated:** December 2025
