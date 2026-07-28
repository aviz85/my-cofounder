---
id: control-enterprise-risk-register
shelf: control
title: Enterprise Risk Register
summary: Express uncertain events as decision-relevant risk scenarios with owners, exposure, response, and residual risk.
triggers:
  - Important risks are scattered across documents and conversations.
  - Leadership cannot compare exposure across objectives.
  - A major initiative, dependency, or control environment is changing.
do_not_use_when:
  - Immediate incident response is required.
  - A specialized legal or safety regime mandates a different assessment method.
stage: [validation, growth, scale, transformation, crisis]
tags: [enterprise-risk, nist, risk-register, controls, governance]
evidence_strength: government-standard-adapted
reviewed: 2026-07-28
---

# Problem

Risk lists often name vague categories without connecting threats, vulnerable conditions,
business impact, ownership, or action. NIST IR 8286A Rev. 1 provides a disciplined method
for identifying and estimating cybersecurity risk in enterprise risk management.
This playbook adapts that structure to broader business risks without claiming NIST does so.

# Trigger diagnostic

- Is every risk tied to an objective, asset, or value-producing capability?
- Is the event scenario specific enough to evaluate?
- Are likelihood and impact based on defined scales and evidence?
- Does each material risk have an accountable owner?
- Is residual exposure compared with explicit tolerance?
- Are leading indicators connected to review or escalation thresholds?

# Required inputs

- Strategic objectives and critical capabilities.
- Risk appetite, tolerance, and escalation authority.
- Assets, dependencies, obligations, and stakeholders.
- Threat or event sources and predisposing conditions.
- Existing controls and evidence of their effectiveness.
- Loss categories: financial, operational, legal, privacy, safety, and reputation.

# Roles

- **Risk owner:** accountable for exposure and response.
- **Risk coordinator:** maintains taxonomy, scales, and register quality.
- **Control owner:** operates and evidences a mitigating control.
- **Subject-matter experts:** estimate scenario mechanics and consequences.
- **Decision authority:** accepts, avoids, transfers, or funds treatment.

# Procedure with decision gates

1. Define the objective and risk scope.
2. Inventory critical capabilities, assets, dependencies, and obligations.
3. Write each scenario as source/event → vulnerable condition → affected asset → consequence.
4. Record existing controls and the evidence that they operate.
5. Estimate likelihood using a declared scale, time horizon, and rationale.
6. Estimate impact by consequence category and aggregation potential.
7. Calculate or classify inherent risk before controls.
8. Estimate control effectiveness and residual risk after controls.

**Gate 1 — escalation:** immediately escalate scenarios above tolerance, with uncertain
catastrophic impact, or with no accountable owner.

9. Choose a response: accept, avoid, mitigate, share/transfer, or investigate.
10. Define treatment actions, cost, owner, deadline, and expected residual exposure.
11. Set key risk indicators and warning/stop thresholds.
12. Obtain explicit acceptance from the proper authority for retained material risk.

**Gate 2 — decision readiness:** close assessment only when material assumptions,
uncertainty, control evidence, and acceptance authority are documented.

13. Review on cadence and after material internal or external change.

# Output contract

- Risk register with unique IDs and scenario statements.
- Inherent and residual estimates with rationale and confidence.
- Controls, evidence, owners, and treatment plans.
- Key risk indicators and escalation thresholds.
- Risk acceptance record and next review date.

# Metrics

- Material risks with named owners and current reviews.
- Treatment actions completed on time.
- Controls with fresh operating evidence.
- Residual exposure by objective and risk category.
- Threshold breaches detected before loss.
- Forecast calibration and recurring incident rate.

# Failure modes

- Naming topics such as “competition” instead of scenarios.
- Multiplying ordinal scores as if they were precise quantities.
- Hiding uncertainty behind a color.
- Treating control existence as proof of effectiveness.
- Accepting risk without the authority to bear consequences.
- Reviewing annually despite fast-changing exposure.

# Guardrails

- Preserve the original assumptions and historical observations.
- Separate inherent risk, control effectiveness, and residual risk.
- Protect sensitive vulnerability and personal information.
- Use qualified specialists for cybersecurity, safety, legal, and regulated risks.
- Do not generalize NIST's cybersecurity guidance without explicit adaptation notes.

# Sources

- [NIST IR 8286A Rev. 1 — Identifying and Estimating Cybersecurity Risk for Enterprise Risk Management](https://csrc.nist.gov/pubs/ir/8286/a/r1/final)

# Adaptation notes

NIST IR 8286A is cybersecurity-focused. The scenario structure, estimation discipline,
and ERM integration are retained; business-risk categories and operating metrics are
local adaptations. Calibrate scales with real losses and decision needs.
