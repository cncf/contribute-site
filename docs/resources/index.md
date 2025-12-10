---
title: "Resources"
type: single
---

## [servicedesk.cncf.io](https://servicedesk.cncf.io/)

This is the main portal you should use to get support, you should receive a response within 48 hours.

## [maintainers.cncf.io](http://maintainers.cncf.io/)

All CNCF maintainers are listed in this file, if you are a maintainer of a CNCF Project and need to add yourself follow these TODO: instructions.

### What happens if I want to use a tool or service not listed here?

Projects are welcome to use their own tools in the CNCF, we are a strong supporter of choice and flexibility. If you're interested in using a new tool and want CNCF to officially support it, please file a ticket and we will see what we can do to help!

### I have a project I want to donate to the CNCF

Awesome! To contribute your project to CNCF or discuss how CNCF can help your project, email info@cncf.io and read the [TOC repo] for further information. 

### How much budget is available for projects?

The CNCF doesn't set a fixed amount of budget for each project and will work with you best on your needs.

### How do I file a security CVE as a project?

GitHub has also recently improved the ability to do security disclosures and generate CVEs, we recommend projects use [GitHub Security Advisories][github-security-advisories]. As a backup, you can submit a CVE using the [MITRE CVE submission form][mitre-cve-form] (The CNCF is currently not a CNA).

### How do I create a security disclosure process, e.g., SECURITY.MD file?

It is recommended that CNCF projects create a security disclosure process to make it easier for adopters to report issues.

There is no one set way, you can look at other CNCF projects for examples:

- [Envoy SECURITY.md][envoy-security]
- [etcd security README][etcd-security]

Google has also put together a set of templates that may be useful:

- [Google OSS Vulnerability Guide][google-vuln-guide]

### How do I share credentials, passwords, or other confidential information?

The CNCF doesn't enforce the projects to use any specific tool for sharing credentials, passwords or other confidential information, however we recommend using [Keybase][keybase] or applying for 1Password's [free open source plan][1password-oss].

### How can I use the computing infrastructure provided by the CNCF?

The CNCF prefers projects evaluate using our [Community Cluster][cncf-cluster] first. We have partnered with various providers that offer discounted or free services for CNCF projects. For example, CNCF projects may use the credits offered by [Amazon Web Services][aws-credits] or [Oracle][oracle-credits] for their upstream testing, CI/CD, and other purposes. See the [Tools](#tools) sections on this page for more details.

To benefit from one of these offers, please submit the Service Desk ticket with a detailed description of the request, including the purpose, a list of the desired services, and a rough cost.

Code being run must be 100 percent open source and must not include any sensitive data.

Please note that available computing resources are limited so we may ask you to reduce your usage when there is high demand for the available credits. Specifically, please consider shutting down the unused computing resources, use automation to terminate the bare metal/virtual machines if they are not intended to be used 24/7, use spot instances if applicable etc. Please estimate your budget to use no more than $3000/month USD in AWS or Oracle credits. If you expect higher resource usage on a regular basis, please consider using the [CNCF Cluster][cncf-cluster] instead.

The CNCF expects fair usage of the allocated resources and credits, and reserves the right to terminate any allocated infrastructure resources and revoke the access to them in the case of violation of these rules.

### My project is affected by the [Docker Hub rate limits policy changes][docker-rate-limits], what can I do?

In 2020, Docker announced the changes to [image retention][docker-retention] and [data pull rates][docker-pull-rates].

The CNCF has reached an agreement with Docker that these limits can be eliminated for CNCF projects - if your project is affected by these changes, please consider applying to the [Docker Expanded Support for Open Source Software Projects][docker-oss-program] program via the [form][docker-oss-form].

NOTE: To have your application processed correctly by Docker, please explicitly mention that your project is hosted by CNCF. Also, please note that the approval process may take a few weeks.

### How do I get GitHub project and team management for my project?

Each CNCF project can decide on its own how to manage GitHub invites and teams. Some are small enough and just do it manually, others use automated systems like these:

- [Kubernetes org management][k8s-org]
- [Cilium team manager][cilium-team]
- [GitHub Settings App][github-settings-app]
- [GitHub Safe Settings][github-safe-settings]

### My builds are slow, I would like to have expanded capacity for GitHub Actions, what can I do?

The CNCF has a special partnership with GitHub, please file a [Service Desk][service-desk-login] ticket and we can expand the amount of hosted runner minutes. Note, some projects have also expanded their build capacity by using the CNCF Cluster via [GHA External Runners][github-self-hosted-runners].

### I don't have a Service Desk account

If you are a maintainer, head to the [Service Desk][service-desk-login] website and try to log in, if you can't find an account, email info@cncf.io and one will be created for you.

#### I am a Kubernetes SIG chair and I don't have a Service Desk account

The CNCF Service Desk policy for the Kubernetes community is defined at [Kubernetes Steering repo][k8s-steering-service-desk].

### I changed my email and lost my Service Desk access. What can I do to get it back?

Email info@cncf.io and one will be created for you.

### I am not happy with the level of service from CNCF staff, what can I do to escalate?

If you aren't happy with the service provided by CNCF staff or with a resolution of an issue, you have a couple of options. If it's a technical matter, you can appeal to the [Technical Oversight Committee][cncf-toc]. If it's a budget-related matter you can appeal to the CNCF [Developer Representatives][cncf-devreps] on the Governing Board.

<!-- Reference-style links -->
[TOC repo]: https://github.com/cncf/toc#projects
[github-security-advisories]: https://help.github.com/en/github/managing-security-vulnerabilities/about-github-security-advisories#cve-identification-numbers
[mitre-cve-form]: https://cve.mitre.org/cve/request_id.html
[envoy-security]: https://github.com/envoyproxy/envoy/blob/main/SECURITY.md
[etcd-security]: https://github.com/etcd-io/etcd/blob/main/security/README.md
[google-vuln-guide]: https://github.com/google/oss-vulnerability-guide
[keybase]: https://keybase.io/
[1password-oss]: https://github.com/1Password/1password-teams-open-source
[cncf-cluster]: https://github.com/cncf/cluster
[aws-credits]: https://www.cncf.io/announcement/2019/11/19/cloud-native-computing-foundation-receives-200000-in-credits-from-amazon-web-services-aws/
[oracle-credits]: https://www.cncf.io/blog/2024/02/02/oracle-oci-credits-are-now-available-to-cncf-projects-here-is-what-you-need-to-know/
[docker-rate-limits]: https://www.docker.com/increase-rate-limits
[docker-retention]: https://www.docker.com/blog/scaling-dockers-business-to-serve-millions-more-developers-storage/
[docker-pull-rates]: https://www.docker.com/blog/scaling-docker-to-serve-millions-more-developers-network-egress/
[docker-oss-program]: https://www.docker.com/blog/expanded-support-for-open-source-software-projects/
[docker-oss-form]: https://www.docker.com/community/open-source/application/
[k8s-org]: https://github.com/kubernetes/org
[cilium-team]: https://github.com/cilium/team-manager
[github-settings-app]: https://github.com/apps/settings
[github-safe-settings]: https://github.com/github/safe-settings
[service-desk-login]: https://cncfservicedesk.atlassian.net/servicedesk/customer/portal/1/user/login
[github-self-hosted-runners]: https://docs.github.com/en/actions/hosting-your-own-runners/about-self-hosted-runners
[k8s-steering-service-desk]: https://github.com/kubernetes/steering/blob/main/operations/service-desk.md
[cncf-toc]: https://github.com/cncf/toc
[cncf-devreps]: https://github.com/cncfdevreps/issues
