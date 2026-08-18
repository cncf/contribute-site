---
title: > 
    How CNCF Projects Use Netlify: Powering Cloud Native Documentation at Scale
date: 2026-08-18
authors: [thisisobate]
tags: [maintainers, community, projects, services]
---

The Cloud Native Computing Foundation (CNCF) stewards over 250 projects that form the backbone of modern cloud infrastructure. Most visitors who browse the documentation, contributor portals, and ecosystem maps serving millions of engineers worldwide rarely notice the shared infrastructure making it all possible: Netlify.

Through an open-source partnership, Netlify provides CNCF projects with hosting and deployment tools that directly support the foundation's mission to make cloud native computing ubiquitous. This article explores how these projects leverage Netlify for everything from basic static hosting to advanced edge computing, highlighting the measurable improvements to contributor experience and documentation quality.

## The Scale of the Partnership

The majority of CNCF projects rely on Netlify for their documentation. This community includes projects at every stage of growth, such as graduated projects like Kubernetes and OpenTelemetry, incubating projects like Knative, and the CNCF's own contributors site.

Each of these projects has different technical requirements, uses different static site generators (Hugo, Docusaurus, MkDocs), and is maintained by independent communities. Netlify's flexibility accommodates all of them within a consistent deployment model.

## Use Case 1: Deploy Previews for Community Contributions

CNCF projects receive documentation contributions from thousands of community members globally. Because of this scale, maintainers must review more than just the text of a pull request; they need to see how it actually renders, ensuring that formatting, navigation, and visual layouts remain intact.

Netlify addresses this by automatically generating a deploy preview for every pull request. This provides a fully functional, publicly accessible version of the site that reflects the proposed changes.

### Knative: Optimized Previews for Multi-Version Documentation

Knative's documentation site builds multiple release versions (v1.22, v1.21, v1.10) into a single deployment. This is a resource-intensive process. Their Netlify configuration uses context-specific settings to optimize this:

`# Deploy Preview context: all deploys generated from a pull/merge request`  
`# will inherit these settings.`  
`[context.deploy-preview]`  
  `publish = "site"`

`# Envvars for deploy preview`  
`[context.deploy-preview.environment]`  
  `BUILD_VERSIONS="no"`

By setting BUILD\_VERSIONS="no" for deploy previews, Knative skips the multi-version build process during PR reviews. This approach reduces build times while still providing reviewers with a functional preview of changes against the current version, though production builds still retain the full multi-version output.

### contribute.cncf.io: Preview vs. Production Pipelines

The CNCF contributor site separates its build commands for preview and production contexts:

`[build]`  
`publish = "build"`  
`command = "npm run build:preview"`

`[context.production]`  
`command = "npm run build:production"`

This pattern allows the team to include draft content or debug information in previews while keeping production builds strict.

This system benefits contributors significantly. A new contributor can see their rendered changes at a unique URL within minutes of opening a pull request, all without installing local tools. Simultaneously, maintainers can review visual changes directly to reduce the need for back-and-forth communication.

## Use Case 2: Edge Functions for Intelligent Content Delivery

Modern documentation sites must serve different content depending on the client. While browsers expect HTML, programmatic tools often require raw markdown, and analytics systems need event data. Traditional static hosting lacks the ability to make these delivery decisions at the edge.

OpenTelemetry's website addresses this by using Netlify Edge Functions. These functions implement sophisticated delivery logic that runs on the CDN edge, directly improving performance for the user.

### Content Negotiation (Markdown Negotiation)

OpenTelemetry uses a Netlify Edge Function to serve Hugo's prebuilt markdown output when the client explicitly requests `text/markdown` via the `Accept` header:

`[[edge_functions]]`  
`function = "markdown-negotiation"`  
`path = "/*"`

This means:

* Browsers visiting `opentelemetry.io/docs/concepts/` receive the rendered HTML page  
* AI agents, CLI tools, and automation requesting `text/markdown` receive the raw markdown source of the same page

This capability is implemented entirely on Netlify's edge network without any origin-server logic, which adds negligible latency to the process.

### Schema Analytics

OpenTelemetry publishes YAML schema files that are consumed programmatically by SDK implementations worldwide. An edge function tracks these fetches:

`[[edge_functions]]`  
`function = "schema-analytics"`  
`path = "/schemas/*"`

The function normalizes content types, emits analytics events for downloads, and ensures correct headers without needing to modify the static build.

### Asset Tracking

Another edge function tracks downloads of specific file types (`.md`, `.txt`) and reports usage data:

`[[edge_functions]]`  
`function = "asset-tracking"`  
`pattern = "/(.*)\\.(md|txt)$"`

### Registry Component Redirects

The OpenTelemetry Registry (a searchable index of instrumentation libraries, collector components, and plugins) uses an edge function to handle dynamic URL routing:

`[[edge_functions]]`  
`function = "registry-component-redirect"`  
`path = "/ecosystem/registry/*"`

This replaced a Hugo catch-all redirect with edge-level logic that can make routing decisions based on whether the target page exists — probing the origin before deciding whether to redirect or pass through.

Ultimately, these four edge functions handle negotiation, analytics, tracking, and redirects on a global network with no additional infrastructure to maintain.

## Use Case 3: Domain Consolidation via Redirects

The problem: As projects evolve, URLs change, subdomains get consolidated, and old links need to keep working. Broken documentation links erode trust and waste contributor time.

Netlify solves this using server-level redirects configured in netlify.toml, which handle domain consolidation transparently.

### OpenTelemetry: Subdomain Consolidation

OpenTelemetry consolidated separate subdomains into a single site:

`[[redirects]]`  
`from = "https://docs.opentelemetry.io/*"`  
`to = "https://opentelemetry.io/docs/:splat"`  
`force = true`

`[[redirects]]`  
`from = "https://blog.opentelemetry.io/*"`  
`to = "https://opentelemetry.io/blog/:splat"`  
`force = true`

Any existing links to the old subdomains continue to work by redirecting to the consolidated site, while the :splat parameter ensures the full path is preserved.

### Knative: Contribution Path Redirects

Knative uses redirects to guide contributors to current resources as the project structure evolves:

`[[redirects]]`  
`from = "/contributing/"`  
`to = "/community/contributing/"`  
`status = 301`

`[[redirects]]`  
`from = "/docs/help/contributor/*"`  
`to = "https://github.com/knative/docs/blob/main/contribute-to-docs/README.md"`  
`status = 301`

This setup even supports cross-platform redirects, allowing the documentation site to send users directly to GitHub when the canonical source lives in a repository.

## Use Case 4: Security Headers at Scale

The problem: Documentation sites are often overlooked in security hardening. But sites receiving millions of visits need proper security headers to prevent clickjacking, MIME-type sniffing attacks, and information leakage.

How Netlify solves it: Custom headers applied globally via configuration.

OpenTelemetry applies security headers to every response:

`[[headers]]`  
`for = "/*"`  
`[headers.values]`  
  `X-Content-Type-Options = "nosniff"`  
  `Referrer-Policy = "strict-origin-when-cross-origin"`  
  `X-Frame-Options = "SAMEORIGIN"`  
  `Content-Security-Policy = "frame-ancestors 'self';"`

These headers are applied at the CDN level, ensuring consistent security posture without any application-level middleware.

## Use Case 5: Build Plugins for Automated SEO

The problem: Large documentation sites need sitemaps for search engine indexing, but manually maintaining them across hundreds of pages and multiple versions is impractical.

How Netlify solves it: Build plugins that integrate into the deployment pipeline.

### Knative: Automatic Sitemap Generation

`[[plugins]]`  
`package = "@netlify/plugin-sitemap"`

`[plugins.inputs]`  
`prettyURLs = true`  
`trailingSlash = true`

The `@netlify/plugin-sitemap` plugin automatically generates a sitemap at build time, configured to match MkDocs' URL conventions (trailing slashes). This ensures search engines can discover all documentation pages (including versioned content) without manual sitemap maintenance.

## Use Case 6: Environment-Aware Build Configuration

The problem: Documentation sites often need different build environments for different contexts — specific Node.js versions, Python versions, or environment variables that control build behavior.

How Netlify solves it: Per-context environment configuration in `netlify.toml`.

### Knative: Pinned Runtime Versions

`[build.environment]`  
`NODE_VERSION = "22"`  
`PYTHON_VERSION = "3.13"`

Knative pins both Node.js and Python versions in their build environment, ensuring reproducible builds regardless of what Netlify's default runtime versions are at any given time. This is particularly important for their MkDocs-based build pipeline, which relies on specific Python package compatibility.

## The Technical Diversity

What makes this partnership notable is the range of static site generators and build tools it supports under a single platform:

| Project | Site Generator | Build Tool | Key Netlify Features Used |
| ----- | ----- | ----- | ----- |
| OpenTelemetry | Hugo | npm/Hugo CLI | Edge Functions, Redirects, Headers, Deploy Previews |
| Knative | MkDocs | Custom shell script | Plugins, Context Environments, Deploy Previews, Redirects |
| contribute.cncf.io | Docusaurus | npm | Deploy Previews, Build Contexts |

Each project independently chose its documentation toolchain. Netlify accommodates all of them without requiring convergence on a single framework.

## Impact on the CNCF Ecosystem

### For Contributors

* Zero-setup previews: Contributors see their changes rendered without installing local build tooling  
* Faster review cycles: Maintainers can visually verify documentation changes in seconds  
* Lower barrier to entry: First-time contributors can submit and preview documentation fixes without understanding the build system

### For Maintainers

* No infrastructure management: No servers to patch, no CDN configuration to manage, no SSL certificates to rotate  
* Consistent deployment model: Despite different site generators, every project deploys the same way  
* Edge computing without ops: Edge Functions provide server-like capabilities without server management

### For End Users

* Global performance: Documentation served from Netlify's CDN edge locations worldwide  
* Link stability: Redirect rules ensure that bookmarked URLs and shared links continue to work as projects evolve  
* Secure browsing: Consistent security headers across all CNCF documentation properties

## Conclusion

The partnership between CNCF and Netlify shows how targeted infrastructure sponsorship creates lasting value in open source. Beyond simple hosting, Netlify provides the tools maintainers need to lower contribution barriers and enable intelligent content delivery with zero operational overhead.

For a foundation that relies on community participation, having infrastructure that just works is essential. This support is foundational to the CNCF mission, supporting critical open source projects and contributors worldwide, which in turn keeps the cloud native moving forward.

*This article reflects usage patterns observed across CNCF project repositories as of July 2026\. Individual project configurations may evolve as communities adopt new features.*  