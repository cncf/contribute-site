---
title: "Reducing the Support Tax: CNCF Partners with Kapa.ai to Help Project Maintainers"
date: 2026-04-09
authors: [idvoretskyi, nate-double-u]
tags: [maintainers, services, projects]
---

As CNCF projects grow, maintainers increasingly spend time answering repetitive technical questions across Slack, Discord, and GitHub issues - often the same questions, many of them already answered in documentation.

High-traffic projects like [OpenTelemetry](https://opentelemetry.io) and [Envoy Gateway](https://gateway.envoyproxy.io) have been using Kapa.ai to handle thousands of community questions per month, reducing the volume of inbound support questions maintainers handle directly.

CNCF has partnered with [Kapa.ai](https://kapa.ai) to provide AI-powered documentation assistants to hosted projects at no cost.

<!-- truncate -->

<img src="/images/kapa-otel.png" alt="OpenTelemetry's Kapa.ai AI Assistant" style={{width: '100%'}} />

## What is Kapa.ai?

Kapa.ai helps technical communities build AI assistants that work for complex products. Unlike a general-purpose LLM that might guess when it doesn't know an answer, Kapa uses Retrieval Augmented Generation (RAG) to ground its responses in your project's specific documentation and knowledge base.

It can ingest multiple sources, including your project's:

- Documentation
- Source code
- GitHub issues and discussions
- Slack and Discord archives
- Technical files and Stack Overflow answers

The result is a dedicated AI assistant that can be embedded directly into your documentation site, installed as a bot in your community chat, or deployed as a pre-built hosted MCP server directly in your developers' IDEs.

## How This Helps Maintainers

This isn't just about answering user questions - it's about improving your project's health by:

- **Identifying documentation gaps:** Kapa tracks when it *can't* answer a question because the information simply isn't in your docs. This gives you a clear roadmap of exactly what needs to be written.
- **Giving reliable answers:** By grounding the AI in your specific knowledge base, it significantly reduces the "hallucinations" common in general AI tools.
- **Reducing query load:** Kapa handles common questions directly, reducing the number of issues and Slack threads that require maintainer attention.

## A Note on Data Privacy

:::info Data Privacy
Kapa does not use your project's question/answer data for anything - no training of underlying models or any other purposes. Your community's data remains your own, used only to power your project's specific assistant and give you insights.
:::

One of the primary reasons for this partnership is Kapa.ai's commitment to data integrity.

## Get it for Your Project

:::tip Available to All CNCF Projects
Available to projects at all maturity levels: Sandbox, Incubating, and Graduated.
:::

If your project is part of the CNCF, you can apply for free access to Kapa.ai directly through the [CNCF Service Desk](https://servicedesk.cncf.io). The qualification process has been simplified in collaboration with the Kapa.ai team, mirroring the experience launched with the [Docker partnership](https://contribute.cncf.io/blog/2026/01/15/applying-for-the-docker-sponsored-open-source-program-a-guide-for-cncf-maintainers).

**Next steps for maintainers:**

1. Head over to the [CNCF Service Desk](https://servicedesk.cncf.io).
2. Submit a request for Kapa.ai access.
3. The CNCF Projects team will work with you to ingest your knowledge base and deploy your bot.

## References

- [Kapa.ai](https://kapa.ai) - AI assistant platform for technical communities
- [CNCF Service Desk](https://servicedesk.cncf.io) - Submit a request for Kapa.ai access
