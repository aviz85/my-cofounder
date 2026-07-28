---
id: evidence.rice-prioritization
shelf: evidence
title: RICE Prioritization
summary: Compare candidate initiatives consistently using reach, impact, confidence, and total effort, while making strategic overrides explicit.
triggers:
  - A backlog contains many hard-to-compare opportunities.
  - Priority is driven by enthusiasm, hierarchy, or recency.
  - The team needs a transparent first-pass ranking for one objective.
do_not_use_when:
  - Candidates pursue different strategic goals or use incompatible time horizons.
  - Mandatory compliance, safety, incident, or dependency work is being scored as optional.
stage: [validation, growth, scale]
tags: [rice, prioritization, portfolio, roadmap, resource-allocation]
evidence_strength: "Intercom-originated vendor/practitioner framework; scoring heuristic and operating hypothesis, not universal evidence."
reviewed: 2026-07-28
---

# Problem

Roadmaps are vulnerable to pet ideas, underestimated effort, weak evidence, and inconsistent comparison. A common score can expose assumptions without pretending to automate strategy.

# Trigger diagnostic

- Do candidates support the same strategic outcome?
- Is reach measurable over one shared period?
- Can per-person impact be tied to that outcome?
- Is confidence supported by evidence?
- Does effort include all functions and lifecycle work?

Use RICE when most candidates can be compared on those terms.

# Required inputs

- One active objective and target metric.
- Candidate initiatives at similar decision maturity.
- Reach data for a defined period.
- Impact scale tied to the target metric.
- Evidence for confidence.
- Cross-functional effort estimates and dependencies.

# Roles

- **Portfolio decider:** owns final ordering and exceptions.
- **Candidate owners:** provide estimates and evidence.
- **Data/research owner:** validates reach and impact inputs.
- **Delivery owner:** validates total effort and dependencies.
- **Facilitator/challenger:** enforces consistency and detects gaming.

# Procedure with decision gates

1. Define the decision set, objective, time horizon, and capacity.
2. Remove mandatory, incident, compliance, and precommitted work into separate lanes.
3. Normalize candidate scope so one row represents one coherent initiative.
4. Estimate **Reach**: people or events affected in the shared period.
5. Estimate **Impact** per reached unit against the objective.
6. Use Intercom’s optional impact scale consistently: 3, 2, 1, 0.5, 0.25.
7. Estimate **Confidence** from evidence; Intercom suggests 100%, 80%, 50%, or below.
8. Estimate **Effort** in total person-months across product, design, engineering, operations, and launch.
9. **Gate 1 — comparable inputs:** reject rows with incompatible periods, outcome definitions, or hidden work.
10. Calculate `RICE = Reach × Impact × Confidence ÷ Effort`.
11. Sort descending and inspect surprising results.
12. Run sensitivity checks on the least-certain high-ranking candidates.
13. Mark dependencies, table stakes, strategic fit, risk, and option value outside the score.
14. **Gate 2 — evidence quality:** convert speculative high scores into research or small tests.
15. Decide the portfolio under real capacity and sequencing constraints.
16. Record every override with decider, reason, and expected consequence.
17. After delivery, compare forecast reach, impact, effort, and confidence with actuals.
18. **Gate 3 — calibration:** update estimation practice, not historical scores.

# Output contract

- Ranked candidate table with all four inputs and formula.
- Source and confidence notes for each estimate.
- Mandatory/dependency lanes separate from scored options.
- Sensitivity and uncertainty flags.
- Final portfolio with explicit overrides and rationale.
- Forecast-versus-actual calibration log.

# Metrics

## Outcome

- Realized strategic-outcome movement per unit of capacity and portfolio value versus forecast.

## Leading

- Candidates with sourced estimates and high-uncertainty items tested before commitment.
- Forecast accuracy for reach, effort, and impact.

## Guardrail

- Reliability, quality, customer harm, technical risk, concentration, and low-impact “snacking.”
- Unplanned effort omitted from original estimates.

# Failure modes

- Treating the score as a command rather than a decision aid.
- Comparing different objectives or periods.
- Inflating reach and impact while hiding uncertainty.
- Counting engineering only in effort.
- Scoring mandatory work to make it appear optional.

# Guardrails

- Final authority stays with the named decider.
- Preserve raw estimates and sources for audit.
- Never lower confidence to punish an idea or raise it to win a ranking.
- Use strategic, ethical, compliance, and dependency constraints explicitly.
- Recalibrate scales from actual outcomes.

# Sources

- Sean McBride, Intercom, [RICE: Simple prioritization for product managers](https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/).

# Adaptation notes

RICE was developed and iterated at Intercom. It is a transparent heuristic, not a scientific utility function or universal priority rule.

Use it within one strategic choice set. For early ventures, a high-scoring but low-confidence idea should often produce an evidence-gathering experiment, not a full build.
