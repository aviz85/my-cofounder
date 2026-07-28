---
id: delivery-trustworthy-controlled-experiment
shelf: delivery
title: Trustworthy Controlled Experiment
summary: Estimate the causal effect of a product change through randomized assignment, predeclared metrics, data-quality checks, and disciplined analysis.
triggers:
  - A reversible product change can be exposed to comparable units.
  - Teams need causal evidence rather than correlation or opinion.
  - A feature can be evaluated with observable user behavior.
do_not_use_when:
  - Randomization is unethical, illegal, unsafe, or operationally impossible.
  - Interference between units makes the chosen design invalid.
  - Sample size or duration cannot detect a decision-relevant effect.
stage: [validation, growth, scale]
tags: [experiment, ab-test, causality, randomization, srm, telemetry]
evidence_strength: peer-reviewed-primary-research
reviewed: 2026-07-28
---

# Problem

Product changes are shipped or rejected using noisy before/after comparisons.
Randomized controlled experiments can estimate causal effects when design, execution, and analysis assumptions hold.
Microsoft Research emphasizes that bad data and violated assumptions can produce confidently wrong decisions.

# Trigger diagnostic

- State the decision the experiment will inform.
- Confirm the treatment is bounded, reversible, and ethically acceptable.
- Identify the randomization unit and possible cross-unit interference.
- Estimate eligible population, baseline rate, and feasible duration.
- Confirm assignment and outcome telemetry can be joined reliably.
- Choose another method if a meaningful effect cannot be detected.

# Required inputs

- Falsifiable hypothesis and treatment definition.
- Control experience and exposure criteria.
- Randomization unit, allocation ratio, population, and duration.
- Primary metric, guardrails, and minimum detectable or meaningful effect.
- Power and sample-size analysis.
- Assignment, exposure, telemetry, and data-quality instrumentation.

# Roles

- **Decision owner:** defines the decision and acceptable trade-off.
- **Experiment owner:** owns design, launch, and documentation.
- **Data scientist or qualified analyst:** validates inference and assumptions.
- **Engineer:** implements assignment, exposure, and telemetry.
- **Risk reviewer:** checks ethics, privacy, safety, and guardrails.

# Procedure with decision gates

1. Write the decision, hypothesis, mechanism, and expected metric movement.
2. Define one primary outcome metric before seeing results.
3. Select guardrails for customer harm, reliability, and business damage.
4. Specify a minimum effect that would change the decision.
5. Choose the experimental unit to minimize interference and contamination.
6. Calculate sample and duration from baseline variance and target sensitivity.
7. Document eligibility, assignment, exposure, exclusions, and analysis population.
8. **Gate 1 — design review:** do not launch until assumptions and decision rules are explicit.
9. Validate instrumentation using historical data and synthetic events.
10. Run an A/A test or equivalent validation when platform risk is material.
11. Randomly assign eligible units at the declared ratio.
12. Keep treatment and control identical except for the intended change.
13. Monitor assignment, exposure, telemetry completeness, latency, joins, and duplicates.
14. Test for sample ratio mismatch before interpreting treatment effects.
15. **Gate 2 — trustworthiness:** stop analysis when SRM or unexplained differential telemetry loss exists.
16. Investigate deployment, eligibility, assignment, logging, filtering, and join causes.
17. Monitor only predeclared safety and operational stop conditions.
18. Do not repeatedly peek and stop using an unadjusted fixed-horizon test.
19. Run for the predeclared duration unless a valid stop rule triggers.
20. Lock the analysis dataset and code version at completion.
21. Recheck sample ratio, exposure, missingness, validity, uniqueness, and outliers.
22. Estimate treatment effect and uncertainty for the primary metric.
23. Evaluate guardrails and predeclared segments.
24. Label exploratory metrics and segments as hypothesis-generating.
25. Check practical significance against the decision threshold.
26. **Gate 3 — decision:** ship, iterate, stop, or rerun according to evidence and guardrails.
27. Record null and negative results, not only successful experiments.
28. Preserve design, queries, code, data window, and decision rationale.
29. Monitor post-rollout effects for novelty, degradation, and population change.
30. Add unexpected findings to the next hypothesis backlog.

# Output contract

- Experiment brief with hypothesis, mechanism, and decision.
- Design with unit, population, ratio, duration, power, and effect threshold.
- Metric contract and guardrail stop rules.
- Data-quality report including SRM and telemetry checks.
- Effect estimates with uncertainty and practical significance.
- Decision, limitations, follow-up, and reproducible artifact references.

# Metrics

## Outcome
- Primary treatment effect and uncertainty.
- Probability or confidence that the effect exceeds the decision threshold.
- Sustained post-rollout outcome where applicable.

## Leading
- Eligible sample, exposure rate, and statistical power.
- Assignment balance, telemetry completeness, and join rate.
- Experiment cycle time from approved design to decision.

## Guardrail
- Customer harm, reliability, privacy, and complaint indicators.
- Sample ratio mismatch and differential telemetry loss.
- Multiple-testing and repeated-peeking risk.

# Failure modes

- Changing the primary metric after seeing results.
- Calling a before/after comparison an A/B test.
- Ignoring SRM because the result looks plausible.
- Launching with underpowered sample or excessive variance.
- Mixing assignment, exposure, and analysis populations.
- Treating statistical significance as business significance.
- Shipping on a positive segment discovered after the fact.

# Guardrails

- Obtain ethics, privacy, legal, or safety review when relevant.
- Predeclare stop rules and decision thresholds.
- Do not expose users to avoidable material harm.
- Treat unexplained SRM as invalidating until resolved.
- Preserve negative results and analysis limitations.
- Use qualified statistical review for consequential decisions.

# Sources

- Microsoft Research, “Online Experimentation at Microsoft”: https://www.microsoft.com/en-us/research/publication/online-experimentation-at-microsoft/
- Microsoft Research, “Three Key Checklists and Remedies for Trustworthy Analysis of Online Controlled Experiments at Scale”: https://www.microsoft.com/en-us/research/?p=670776
- Microsoft Research, “Diagnosing Sample Ratio Mismatch in A/B Testing”: https://www.microsoft.com/en-us/research/articles/diagnosing-sample-ratio-mismatch-in-a-b-testing/
- Microsoft Research, “Trustworthy Experimentation Under Telemetry Loss”: https://www.microsoft.com/en-us/research/publication/trustworthy-experimentation-under-telemetry-loss/
- Microsoft Research, “Data Quality: Fundamental Building Blocks for Trustworthy A/B Testing Analysis”: https://www.microsoft.com/en-us/research/group/experimentation-platform-exp/articles/data-quality-fundamental-building-blocks-for-trustworthy-a-b-testing-analysis

# Adaptation notes

- The gate labels and output schema are implementation adaptations.
- Microsoft Research directly supports randomized causal evaluation, lifecycle checklists, SRM diagnosis, and telemetry-loss scrutiny.
- Exact statistical method and stopping rule must match the design; this playbook does not prescribe one universal test.
