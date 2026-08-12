---
title: "Implementing Org-Balanced Voting"
sidebar_label: "Org-Balanced Voting"
sidebar_position: 4
---

| Audience of this HowTo | Audience of The Document    | Required by CNCF      |
| ---------------------- | --------------------------- | --------------------- |
| Maintainers            | Contributors                | Suggested (incubation), Required (graduation) |

This HowTo is for project maintainers who want to add an organizational voting mechanism to their project's governance. Org-balanced voting prevents any single company from translating maintainer headcount into proportional governance control.

## Why Org-Balanced Voting

Across 71 CNCF graduated and incubating projects, org-balanced voting is the strongest observed predictor of sustained organizational diversity. Projects without any org-balance mechanism are the most likely to experience governance concentration after graduation.

Org-balanced voting protects governance decisions but does not by itself guarantee a balanced maintainer composition. A project can have org-balanced voting while still having a majority of maintainers from one company. The mechanism ensures that majority cannot translate into proportional governance control. It is most effective when paired with a contributor ladder that actively grows maintainers from outside the dominant organization.

## Choosing a Variant

There are two effective variants. Both are org-balance mechanisms; the choice is about proportionality.

### One Vote Per Organization

Each organization gets one vote on governance decisions, regardless of how many maintainers that organization employs. If a project has two maintainers from Company X, two from Company Y, and one independent, three organizational votes are possible.

This variant works well where contribution is broadly distributed across organizations.

### Capped Votes Per Organization

Each organization gets at most two votes on governance decisions. This gives larger contributing organizations slightly more representation while still preventing any single company from dominating through headcount alone.

Where a single organization sustains most of the work, projects more often adopt this variant or apply org-balance to governance decisions while leaving technical direction with individual maintainers under lazy consensus.

### What Does Not Work

A cap higher than two has not proven sufficient. Projects with six-voter caps still experienced governance concentration. The mechanism needs to be tight enough that a dominant contributing organization cannot hold a majority of governance votes.

## Scoping the Mechanism

Decide which decisions org-balanced voting applies to. There are two approaches:

**Governance decisions only (recommended for most projects).** Org-balanced voting applies to steering elections, governance changes, strategic direction, and budget decisions. Technical decisions (code review, merge authority, release management) remain with individual maintainers under lazy consensus. This is the most common approach and avoids slowing down day-to-day engineering.

**All decisions.** Org-balanced voting applies to every formal vote, including technical decisions. This is appropriate only when organizational influence over technical direction is a specific concern.

## Defining Organizational Affiliation

Before org-balanced voting can work, the project must define how affiliation is determined. Address these questions in your governance document:

* **Consultants and contractors:** Does a contractor working full-time for Company X count as Company X, or as independent?
* **Foundation staff:** How are employees of the CNCF, Linux Foundation, or similar treated?
* **Employment changes mid-term:** If a maintainer changes employers, does their organizational vote change immediately, at the end of a term, or at the next election?
* **Subsidiaries and acquisitions:** If Company X acquires Company Y, do their maintainers consolidate into one organizational vote?
* **Independents:** How are unaffiliated contributors counted? (Typically each independent gets their own vote.)

Projects that do not define affiliation rules before they are contested invite disputes that are harder to resolve than the governance questions they are trying to answer.

## Applying to Any Governance Model

Org-balanced voting is not a separate governance model. It is a structural mechanism that works with any of the three CNCF governance templates:

* **[Maintainer Council](templates/governance-maintainer/):** Adopt org-balanced voting for governance decisions while keeping lazy consensus for day-to-day technical work.
* **[Steering Committee Elections](templates/governance-elections/):** Use org-balanced elections, where each organization's votes are counted per-org rather than per-person. This works alongside the company representation limits already in the elections template.
* **[Federated Subprojects](templates/governance-subprojects/):** Require org-balanced votes at the steering level for cross-subproject governance decisions.

## Implementation Checklist

1. **Choose your variant:** one vote per org, or capped at two.
2. **Define scope:** governance decisions only, or all decisions.
3. **Document affiliation rules** in your GOVERNANCE.md, covering all the edge cases above.
4. **Add to your GOVERNANCE.md.** Place the org-balanced voting rules in the Voting or Decision Process section.
5. **Update your MAINTAINERS file** to include organizational affiliation for each maintainer.
6. **Set a review cadence.** Verify affiliations are current at least annually (quarterly if your maintainer pool is changing frequently).

## Template

The [GOVERNANCE-org-balanced-voting.md](https://github.com/cncf/project-template/blob/main/GOVERNANCE-org-balanced-voting.md) template in the CNCF project-template repository provides reusable text you can copy into your governance document.

## Further Reading

* [Governance Guidance for CNCF Projects](https://cncf.io/blog/) - data-backed recommendations for choosing and evolving governance structures
* [Governance Templates](templates/) - the three CNCF governance model templates
* [Leadership Selection](leadership-selection/) - options for selecting project leaders, including organization-based selection
* [Governance Transitions](governance-transitions/) - when and how to evolve your governance model
