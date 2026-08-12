---
title: "Governance Transitions"
sidebar_label: "Governance Transitions"
sidebar_position: 5
---

| Audience of this HowTo | Audience of The Document    | Required by CNCF      |
| ---------------------- | --------------------------- | --------------------- |
| Maintainers            | Contributors                | No                    |

This How-To Guide is for project maintainers who need to evolve their governance structure. This can be adding structure as the project grows, or alternatively simplifying structure when the project has matured or contracted. Governance should match the project's current scale and complexity versus its peak or aspirations.

## When to Add Structure

The size thresholds below reflect how coordination changes as groups grow. Research on collaborative group dynamics, including Dunbar's layered model of social group sizes, suggests that direct trust operates reliably in groups of roughly 5-15, while larger groups need delegation and formal structure to maintain accountability.

In practice, the transition signals matter more than hitting a specific number:

**Decisions stall.** When the maintainer group is too large for lazy consensus to work, or when decisions affect subgroups differently, a delegation structure helps. This often begins to happen at 10-15 maintainers, but depends on how much scope overlap exists.

**New contributors cannot find a path in.** If the only path to influence is "become a maintainer," the project needs intermediate roles (reviewer, approver, SIG lead). Projects with intermediate roles produce more diverse maintainer pools because they give external contributors a visible progression path before maintainer nomination.

**A single organization dominates.** When one company holds a majority of maintainer seats, the governance should create mechanisms for other organizations to gain influence: company representation caps, [org-balanced voting](org-balanced-voting/), or elections. This signal is independent of project size.

**Subprojects diverge.** When parts of the project develop their own contributor communities, release cadences, or user populations, federated governance gives them room to operate without constant coordination overhead.

### Common Growth Transitions

| From | To | When |
|---|---|---|
| [Maintainer Council](templates/governance-maintainer/) | Maintainer Council with defined roles | 10-20 maintainers; add areas of responsibility and documented decision processes, but a full steering committee is premature |
| Maintainer Council | [Steering Committee Elections](templates/governance-elections/) | 20+ maintainers across 5+ orgs; the maintainer group is too large for everyone to know each other's work |
| Maintainer Council | Maintainer Council + [org-balanced voting](org-balanced-voting/) | Any size, when single-org contribution exceeds 75% |
| [Steering Committee](templates/governance-elections/) | [Federated Subprojects](templates/governance-subprojects/) | When the project is composed of genuinely distinct subprojects with different contributor groups |

## When to Simplify Structure

Governance should shrink as well as grow. Projects that carry governance structures designed for a larger or more active community create overhead without value, and the appearance of broad governance while real work concentrates in fewer groups.

### Signals That Structure Should Be Simplified

**Committees have overlapping scope.** If two governance bodies (for example, a steering committee and a technical oversight committee) spend their meetings coordinating with each other rather than making decisions, the separation is costing more than it adds.

**Working groups or SIGs lack active leads.** A working group without active participants is not a governance structure; it is an empty label. Dormant groups should be archived or consolidated rather than maintained.

**Coordination overhead slows decisions.** If contributors regularly bypass formal governance channels because the formal process is slower than the informal one, the formal structure has outgrown its usefulness.

**The maintainer pool has contracted.** If the project once had 30 maintainers across 8 orgs and now has 10 across 3, the governance structure designed for the larger group should be right-sized. A steering committee election with fewer candidates than seats is a signal.

### Common Simplification Transitions

| Action | When | How |
|---|---|---|
| Merge redundant committees | Two bodies with overlapping scope and shared members | Propose a combined charter that covers both scopes. Run the merged body for one term before amending the governance document permanently. |
| Archive dormant SIGs or working groups | No active lead, no meeting activity for 3+ months, no PRs in scope | Follow your subproject lifecycle process. If you do not have one, add one: document status labels (active, maintenance, archived) and criteria for each. |
| Consolidate SIGs with converging scope | Two groups working on increasingly similar problems with overlapping contributors | Merge the groups, combine their meetings, and update OWNERS files. The leads from both groups should co-lead for one transition period. |
| Reduce steering committee size | Fewer candidates than seats, or seats routinely filled by acclamation rather than election | Amend the governance to reduce seat count. Stagger the reduction across election cycles rather than removing seats mid-term. |
| Move from federated to steering | Subprojects have converged to share most maintainers and release together | The federation overhead is no longer justified. Consolidate into a single steering committee with the former subproject leads as initial members. |

## The Transition Process

Whether adding or removing structure, the process is the same:

1. **Identify the signal.** Name the specific friction the current structure is causing. Do not change governance because it looks wrong on paper; change it because it is producing bad outcomes.
2. **Propose the change in the open.** File an issue or PR in your community repo. Governance changes should not surprise contributors.
3. **Set a transition period.** Run the new structure alongside the old for one election cycle or 3-6 months, whichever comes first, before making it permanent. This lets the community evaluate whether the change works.
4. **Update the governance document.** Amend GOVERNANCE.md to reflect the new structure. Remove the old structure cleanly rather than leaving commented-out sections or "previously, we used to..." history. The git log preserves history.
5. **Communicate the change.** Announce the transition in your project's communication channels with a clear explanation of what changed and why.

## Bootstrapping a New Governance Structure

When transitioning to a new governance model, the first instance is usually bootstrapped rather than elected. This is expected and appropriate. Common approaches:

* **Appoint the initial body** from current maintainers who are already making the decisions the new structure formalizes. Set a firm deadline (typically 3-6 months) for the first real election.
* **Stagger initial terms.** If the new body has 5 seats with 2-year terms, elect 3 seats for 2 years and 2 seats for 1 year. This prevents the entire body turning over at once and losing institutional knowledge.
* **Document the bootstrap explicitly.** State in the governance document that the initial body is bootstrapped and when the first election will occur. This sets expectations and prevents the bootstrap from becoming permanent.

## Further Reading

* [Governance Guidance for CNCF Projects](https://cncf.io/blog/) - data-backed recommendations for choosing governance structures
* [Governance Templates](templates/) - the three CNCF governance model templates
* [Org-Balanced Voting](org-balanced-voting/) - implementing organizational voting protections
* [Leadership Selection](leadership-selection/) - options for selecting and rotating project leaders
