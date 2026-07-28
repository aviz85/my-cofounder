---
id: control-project-premortem
shelf: control
title: Project Premortem
summary: Assume an initiative has failed and surface plausible causes before commitment suppresses dissent.
triggers:
  - A meaningful initiative is about to start or pass a major gate.
  - Confidence is high but downside analysis is shallow.
  - Team members appear reluctant to challenge the plan.
do_not_use_when:
  - An active incident needs immediate stabilization rather than scenario generation.
  - The exercise would replace mandatory quantitative safety or compliance analysis.
stage: [planning, validation, launch, scale, transformation]
tags: [premortem, risk, planning, dissent, forecasting]
evidence_strength: primary-practitioner
reviewed: 2026-07-28
---

# Problem

Once a team commits to a plan, optimism, hierarchy, and group cohesion can suppress
warnings. Gary Klein's premortem reverses the frame: participants imagine that the
project has already failed and independently explain why.

# Trigger diagnostic

- Has the team defined success, failure, and the review horizon?
- Are important assumptions being treated as facts?
- Could a junior participant safely contradict the sponsor?
- Are external dependencies and second-order effects visible?
- Is there time to change the plan before the next commitment gate?

# Required inputs

- Plan, intended outcome, scope, milestones, and owner.
- Assumptions, dependencies, budget, and deadline.
- Historical base rates or comparable project outcomes where available.
- Current risk register and known constraints.
- A mixed group representing execution, customer, technical, financial, and legal views.

# Roles

- **Sponsor:** states the outcome and protects dissent.
- **Facilitator:** runs the exercise without defending the plan.
- **Participants:** generate failure explanations independently.
- **Risk owners:** convert selected causes into mitigations and indicators.
- **Decision owner:** changes, pauses, or approves the plan.

# Procedure with decision gates

1. State the plan and what measurable failure would mean.
2. Set a plausible future date after the initiative should have succeeded.
3. Announce: “The initiative failed badly. What caused it?”
4. Give participants quiet time to list causes independently.
5. Collect one cause per person in rounds until unique causes are exhausted.
6. Clarify causes without debating or dismissing them.
7. Group causes by customer, strategy, execution, people, finance, external, and control.
8. Estimate likelihood, impact, detectability, and time to harm.

**Gate 1 — fatal exposure:** if a plausible cause can create irreversible or unacceptable
harm without an adequate control, pause the project until the decision owner resolves it.

9. Select the few causes that are both material and actionable.
10. Define prevention, early warning signal, contingency, owner, and due date.
11. Add validated risks to the risk register and plan.
12. Re-estimate cost, schedule, and expected value after mitigations.

**Gate 2 — commit:** proceed only when residual risks fit the declared tolerance and
the highest-risk assumptions have tests or contingencies.

13. Re-run at major scope changes or when leading indicators deteriorate.

# Output contract

- Failure scenario and horizon.
- Ranked failure-cause register with evidence or rationale.
- Mitigation, indicator, contingency, owner, and due date for each priority cause.
- Explicit plan changes and residual-risk decision.
- Next premortem or risk-review date.

# Metrics

- Percentage of priority failure causes with active owners.
- Mitigations completed before exposure date.
- Leading indicators instrumented and reviewed.
- Forecast calibration: predicted risks that occurred or nearly occurred.
- Preventable surprises after the commitment gate.

# Failure modes

- Producing generic risks such as “poor execution.”
- Letting the sponsor rebut each contribution.
- Voting by seniority rather than exposure.
- Treating vivid stories as more likely than base-rate evidence.
- Recording risks without changing the plan.
- Using the exercise to blame individuals in advance.

# Guardrails

- Make participation psychologically safe and non-punitive.
- Distinguish plausible cause, evidence, and speculation.
- Do not expose confidential personal or security details unnecessarily.
- Use quantitative risk, legal, safety, and security methods where required.
- A premortem complements due diligence; it does not certify a project as safe.

# Sources

- [Harvard Business Review — Performing a Project Premortem, Gary Klein](https://hbr.org/2007/09/performing-a-project-premortem)

# Adaptation notes

Klein's method centers on prospective hindsight and independent cause generation.
The scoring, gates, owner fields, and metrics are operational additions. Keep a small
project to 30 minutes; use separate domain sessions for high-consequence programs.
