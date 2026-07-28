---
id: delivery-slo-error-budget
shelf: delivery
title: SLO and Error-Budget Policy
summary: Balance reliability and change velocity with customer-relevant service objectives and a pre-agreed response to budget consumption.
triggers:
  - Reliability and release speed are negotiated through opinion or escalation.
  - Incidents repeat without changing delivery priorities.
  - Availability targets exist but do not drive decisions.
do_not_use_when:
  - The service lacks measurable customer-relevant indicators.
  - Safety, legal, or contractual requirements demand stricter controls than an error budget.
  - The team cannot distinguish service failures from measurement failures.
stage: [growth, scale]
tags: [sre, slo, sli, error-budget, reliability, release-policy]
evidence_strength: official-practitioner-source
reviewed: 2026-07-28
---

# Problem

Feature velocity and reliability compete for the same capacity without a shared control policy.
An SLO makes the acceptable service level explicit.
An error budget converts the gap between perfect reliability and the SLO into a decision mechanism.

# Trigger diagnostic

- Identify the user journey whose failure causes material harm.
- Verify that success and failure can be measured from the user's perspective.
- Check whether the current target is evidence-based or merely aspirational.
- Quantify recent reliability and the consequences of misses.
- Determine whether release changes materially contribute to incidents.
- Confirm that product and reliability owners can agree on enforcement.

# Required inputs

- Service boundary and in-scope user population.
- Service-level indicators with numerator, denominator, and data source.
- SLO target and rolling measurement window.
- Historical performance, incidents, and telemetry quality.
- Release, incident, security-fix, and postmortem policies.
- Named product, engineering, reliability, and escalation owners.

# Roles

- **Service owner:** accountable for user outcomes and SLO definition.
- **Reliability owner:** validates indicators, budget, and burn.
- **Product owner:** balances roadmap work with reliability work.
- **Incident commander:** controls response during active incidents.
- **Executive decider:** resolves policy disputes that owners cannot settle.

# Procedure with decision gates

1. Define one or more critical user journeys.
2. Choose an SLI that directly represents successful service for each journey.
3. Specify eligible events, good events, exclusions, and data latency.
4. Validate that the SLI can detect known customer-impacting failures.
5. **Gate 1 — indicator validity:** do not set an SLO on untrusted telemetry.
6. Select a target using customer expectations, historical capability, and business constraints.
7. Choose a rolling window that matches decision and release cadence.
8. Calculate error budget as `1 - SLO`.
9. Translate the percentage into allowed bad events or bad time for the window.
10. Define burn rate and remaining-budget views.
11. Document legitimate exclusions narrowly and test their classification.
12. **Gate 2 — policy agreement:** product and reliability owners approve target, window, and exclusions.
13. Define normal operation while performance is at or above the SLO.
14. Define warning thresholds before the budget is exhausted.
15. Define release restrictions when the budget is exceeded.
16. Preserve exceptions for urgent security fixes and highest-priority incidents.
17. Require reliability work when service code or process caused the miss.
18. Define treatment of company-wide, external-team, test-traffic, and misclassification cases.
19. Set a postmortem threshold for a single incident consuming a material budget share.
20. Set a planning threshold for a recurring class of outage.
21. **Gate 3 — budget breach:** freeze covered changes according to the approved policy.
22. Investigate telemetry errors before attributing consumption to the service.
23. Prioritize actions that reduce future customer-visible failure.
24. Track restoration until the service is back within the defined policy.
25. **Gate 4 — unfreeze:** resume normal change only when objective restart criteria are met.
26. Review whether the SLO is too strict, too weak, or measuring the wrong experience.
27. Change targets prospectively; never rewrite prior budget history.
28. Reapprove the policy on a fixed cadence or after a material service change.

# Output contract

- Service overview and critical user journeys.
- SLI definitions, queries, ownership, and telemetry validation.
- SLO targets, windows, exclusions, and error-budget calculation.
- Warning, freeze, postmortem, escalation, and restart rules.
- Current budget status and prioritized reliability work.
- Review date and change history.

# Metrics

## Outcome
- SLO attainment over the approved window.
- Customer-impacting failure minutes or bad events.
- Frequency and severity of repeated outage classes.

## Leading
- Error-budget burn rate and remaining budget.
- Change failure contribution to budget consumption.
- Closure rate for reliability action items.

## Guardrail
- Release delay and opportunity cost.
- Misclassified or missing failures.
- Security fixes delayed by an overly broad freeze.

# Failure modes

- Choosing infrastructure uptime instead of a user-relevant SLI.
- Treating 100% reliability as the default target.
- Creating exclusions after an incident to protect the metric.
- Using the freeze as punishment.
- Ignoring telemetry loss or sample bias.
- Setting an SLO without authority to change priorities.
- Copying Google's example thresholds without local calibration.

# Guardrails

- Contractual, safety, security, and legal obligations override the internal budget.
- Maintain an emergency path for P0 and security work.
- Separate telemetry defects from service defects.
- Record every exception and its approver.
- Do not reward teams for hiding or reclassifying failures.
- Keep the policy understandable to product and engineering leaders.

# Sources

- Google SRE Workbook, “Example Error Budget Policy”: https://sre.google/workbook/error-budget-policy/
- Google SRE Workbook, “Implementing SLOs”: https://sre.google/workbook/implementing-slos/
- Google SRE Workbook, “Example SLO Document”: https://sre.google/workbook/slo-document/

# Adaptation notes

- Google's published policy is explicitly an example; its four-week window and 20% incident thresholds are not universal defaults.
- This playbook preserves the policy logic while requiring local target, window, threshold, and authority decisions.
