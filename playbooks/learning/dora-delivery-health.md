---
id: learning-dora-delivery-health
shelf: learning
title: DORA Delivery Health
summary: Improve one software service over time by balancing delivery throughput and deployment instability.
triggers:
  - Software delivery feels slow, risky, or unpredictable.
  - Teams argue from anecdotes about release performance.
  - A service needs a measurable improvement loop.
do_not_use_when:
  - The work does not produce or operate software.
  - The intent is to rank individual developers or unlike services.
stage: [validation, growth, scale, transformation]
tags: [dora, devops, software-delivery, metrics, continuous-improvement]
evidence_strength: longitudinal-industry-research
reviewed: 2026-07-28
---

# Problem
Local productivity measures can reward busywork while the delivery system remains slow
or unstable. DORA's current model uses five software-delivery performance metrics,
grouped into throughput and instability, to help a team understand one service over time.

# Trigger diagnostic
- Can production deployments be identified reliably?
- Can a committed change be connected to its production deployment?
- Are failed deployments and unplanned remediation consistently classified?
- Is the measurement boundary one application or service?
- Does a cross-functional team own build, deploy, and operate outcomes?
- Is there a real improvement decision the metrics will inform?

# Required inputs
- One named application or service and responsible cross-functional team.
- Version-control, deployment, incident, rollback, and hotfix records.
- Consistent definitions and observation window.
- Current delivery workflow and major queues.
- Customer and reliability guardrails.
- Known data gaps and confidence.

# Roles
- **Service owner:** owns customer and operational outcome.
- **Delivery team:** jointly owns all five DORA measures.
- **Data steward:** validates definitions, joins, and exclusions.
- **Improvement owner:** runs the selected constraint experiment.
- **Facilitator:** prevents blame and invalid comparisons.

# Procedure with decision gates

1. Define the service boundary and production environment.
2. Adopt the current DORA definitions:
   - Change lead time.
   - Deployment frequency.
   - Failed deployment recovery time.
   - Change fail rate.
   - Deployment rework rate.
3. Document inclusion, exclusion, timestamp, and denominator rules.
4. Build a sample manually and reconcile it with known releases.

**Gate 1 — data fitness:** do not automate or target a metric until the team can explain
sample records, missing data, and classification errors.

5. Establish a baseline distribution and trend, not only an average.
6. Map the delivery flow from committed change to stable production.
7. Identify the most significant queue, batch, handoff, or feedback delay.
8. Select one bounded improvement, often reducing change batch size.
9. Add local leading measures such as review age, test feedback time, or queue time.
10. Define expected DORA effect, customer guardrails, and review horizon.

**Gate 2 — intervention:** proceed only if the change addresses an observed constraint
and does not trade customer safety for metric movement.

11. Run the change for a sufficient period and review all five measures together.
12. Inspect outliers and deployment narratives with the people doing the work.
13. Adopt, adapt, or stop; then choose the next constraint.

# Output contract

- Service boundary and metric-definition sheet.
- Baseline with data-quality confidence.
- Delivery-flow map and selected constraint.
- Improvement experiment with owner, expected effect, and guardrails.
- Review showing results, uncertainty, and next decision.

# Metrics

- Change lead time.
- Deployment frequency.
- Failed deployment recovery time.
- Change fail rate.
- Deployment rework rate.
- Local constraint measure and customer/reliability guardrails.

# Failure modes

- Making one DORA metric the universal goal.
- Comparing different applications or ranking teams.
- Measuring individual developers.
- Blaming operations for instability or development for throughput.
- Hiding skew behind averages.
- Spending more on instrumentation than the decision warrants.
- Renaming incidents to improve the numbers.

# Guardrails

- Use the measures for learning and improvement, not competition or punishment.
- Keep the application/service context visible.
- Review throughput and instability together.
- Preserve raw observations when definitions change.
- Do not infer causality from metric movement without supporting evidence.
- Pair delivery measures with customer, security, and reliability outcomes.

# Sources

- [DORA — Software delivery performance metrics](https://dora.dev/guides/dora-metrics/)
- [DORA — Research program](https://dora.dev/research/)

# Adaptation notes
DORA updated its model to five metrics and warns against targets, disparate comparisons,
and siloed ownership. The data-fitness gate and experiment contract operationalize those
cautions. Begin with a manual baseline when automated integration is disproportionately costly.
