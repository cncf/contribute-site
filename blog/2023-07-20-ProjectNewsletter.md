---
title: Cloud Native Project Monthly (CNPM) July 2023
date: 2023-07-20
authors: [castrojo]
tags: [cncf, project-newsletter, mentorship]
---

Welcome to the July 2023 edition of the Cloud Native Project Monthly newsletter! This month features LFX Mentorship Term 3 applications, etcd usage survey, GitHub Merge Queues, and expanded Artifact Hub support.

<!-- truncate -->

## 🎓 Mentoring

:::tip Now Open
The LFX Mentorship 2023 Term 03, September - November is open for project ideas!
:::

**Timeline:**
- **Project proposals due:** July 27, 2023
- **Mentee applications open:** Aug 2 - 15, 2023
- **Application review/admission decisions/HR paperwork:** Aug 16 - 29, 2023

**Did you know** that previous proposals can be used? If your Google Summer of Code proposal was declined and you didn't participate in LFX Term 2, this is a great way to reuse the content and submit.

All project levels welcome! Sandbox, Incubating, and Graduated projects can all participate.

[Submit Project Ideas](https://github.com/cncf/mentoring/tree/main/programs/lfx-mentorship/2023/03-Sep-Nov)

## 📊 Etcd Usage Survey

:::info Project Survey
The etcd project wants to hear from you!
:::

Data compiled from the survey will help guide the project's strategic direction and prioritize work, particularly around support for uses outside of Kubernetes.

[Take the Usage Survey](https://www.surveymonkey.com/r/etcdusage23)

## 🔀 GitHub Merge Queues

:::note Now Generally Available
GitHub Merge Queues are now [generally available](https://github.blog/2023-07-12-github-merge-queue-is-generally-available/)!
:::

The merge queue workflow allows busy teams to land changes into the main branch more efficiently. It does this by creating an independent branch of each approved change which is then added to a queue. As an item is added to the queue it is branched along with the upstream changes that are ahead of that merge in the queue, allowing for continuous merging while enforcing all the status checks.

[Watch the video for more](https://www.youtube.com/watch?v=XEZMgohmtts)

## 📦 Artifact Hub Expands Artifact Support

:::tip Discover More Artifacts
Artifacthub.io is an indexer of cloud native deployment artifacts.
:::

It doesn't host these artifacts, but allows projects to index their artifacts so that it's more discoverable by users. This is handy if you publish your artifacts in multiple registries, or have a collection that you'd like to recommend to your users. Each entry also includes a social integration card so that you can embed the information in your README or website.

**Supported Artifact Types:**

Over the past year Artifact Hub has gained support for more than just container images. You can also register:
- Helm charts and plugins
- Falco configurations
- Open Policy Agent (OPA) and Gatekeeper policies
- OLM operators
- Tinkerbell actions
- kubectl plugins
- Tekton tasks and pipelines
- KEDA scalers
- CoreDNS plugins
- Keptn integrations
- Container images
- Kubewarden policies
- Kyverno policies
- Knative client plugins
- Backstage plugins
- Argo templates
- KubeArmor policies

## 🤝 Contribute!

Want to contribute to August's newsletter? [Contact us](mailto:projects@cncf.io) to share your updates!

## References

- [LFX Mentorship 2023 Term 03](https://github.com/cncf/mentoring/tree/main/programs/lfx-mentorship/2023/03-Sep-Nov)
- [Etcd Usage Survey](https://www.surveymonkey.com/r/etcdusage23)
- [GitHub Merge Queue Announcement](https://github.blog/2023-07-12-github-merge-queue-is-generally-available/)
- [GitHub Merge Queue Video](https://www.youtube.com/watch?v=XEZMgohmtts)
- [Artifact Hub](https://artifacthub.io)
