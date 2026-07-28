---
id: delivery-heart-product-measurement
shelf: delivery
title: HEART Product Measurement
summary: Translate product goals into user-centered signals and decision-ready metrics across selected HEART dimensions.
triggers:
  - Product dashboards report activity but not user experience.
  - Teams disagree about what success means for a feature or journey.
  - A product goal lacks observable signals and metrics.
do_not_use_when:
  - The business decision is unrelated to user experience.
  - Instrumentation would create disproportionate privacy or measurement risk.
  - The team intends to track every HEART category without a product goal.
stage: [validation, growth, scale]
tags: [heart, user-experience, metrics, goals-signals-metrics, product]
evidence_strength: peer-reviewed-primary-research
reviewed: 2026-07-28
---

# Problem

Product teams often optimize convenient activity counts that do not represent user value.
Google researchers introduced HEART: Happiness, Engagement, Adoption, Retention, and Task Success.
They pair it with a Goals–Signals–Metrics process for mapping product goals to measurable behavior and attitudes.

# Trigger diagnostic

- Name the product, feature, or journey and the decision to be made.
- State the intended user outcome without using a metric.
- Identify which HEART dimensions can reveal that outcome.
- Check whether the dimension matters at product, feature, or task level.
- Determine whether behavior, attitude, or both must be observed.
- Refuse dashboard expansion that has no decision owner.

# Required inputs

- Product goal and target users.
- Critical journey or task boundary.
- Current baseline and known user problems.
- Available behavioral events, survey channels, and data quality.
- Decision cadence, owner, and threshold.
- Privacy, consent, retention, and accessibility constraints.

# Roles

- **Product owner:** owns the goal and decisions.
- **UX researcher:** defines attitudinal signals and qualitative interpretation.
- **Analyst:** operationalizes metrics and validates data.
- **Engineer:** implements reliable instrumentation.
- **Privacy/accessibility reviewer:** checks collection and interpretation risks.

# Procedure with decision gates

1. Write the product goal in user-centered language.
2. Identify the users and context to which the goal applies.
3. Select only relevant HEART dimensions.
4. Define **Happiness** when attitudes, satisfaction, or perceived ease matter.
5. Define **Engagement** when depth, frequency, or intensity of use matters.
6. Define **Adoption** when starting to use the product or feature matters.
7. Define **Retention** when continued use over an appropriate period matters.
8. Define **Task Success** when effectiveness, efficiency, or error rate matters.
9. **Gate 1 — goal relevance:** remove any dimension that cannot change a decision.
10. For each selected dimension, list observable signals of success or failure.
11. Include positive and negative signals where they improve interpretation.
12. Separate signals from metrics; a signal is evidence, not yet a formula.
13. Choose metrics that operationalize the strongest signals.
14. Specify population, event, numerator, denominator, window, and exclusions.
15. Define segmentation needed to detect unequal experience.
16. Establish baseline, desired direction, and decision threshold.
17. **Gate 2 — metric validity:** do not adopt a metric that is not interpretable or reliably instrumented.
18. Validate events, joins, missingness, duplicates, and data latency.
19. Pilot survey questions and sampling when measuring Happiness.
20. Check whether observed behavior has a plausible alternative interpretation.
21. Build the smallest scorecard needed for the decision.
22. Assign one owner and review cadence to each metric.
23. Pair outcome metrics with controllable leading signals.
24. Add guardrails for quality, accessibility, privacy, or harmful overuse.
25. **Gate 3 — actionability:** retire metrics that repeatedly produce no decision or learning.
26. Review movement with qualitative evidence and product changes.
27. Investigate segment divergence instead of averaging it away.
28. Record changes to definitions prospectively.
29. Preserve historical comparability or mark a series break.
30. Revisit the selected HEART dimensions when the product goal changes.

# Output contract

- Product goal, target users, journey, and decision.
- Selected HEART dimensions with explicit rationale.
- Goals–Signals–Metrics table.
- Metric definitions with baseline, target, source, owner, and cadence.
- Segment and guardrail plan.
- Instrumentation validation and known limitations.
- Decision log and metric-definition history.

# Metrics

## Outcome
- The selected HEART outcome metrics tied to the product goal.
- Decision-threshold attainment by relevant user segment.
- Sustained improvement across the defined review window.

## Leading
- Instrumentation completeness and data freshness.
- Response rate and representativeness for attitudinal measures.
- Movement in controllable signals expected to precede the outcome.

## Guardrail
- Privacy, consent, accessibility, and vulnerable-user impact.
- Harmful engagement or compulsive-use signals.
- Metric-definition drift and broken historical comparability.

# Failure modes

- Tracking all five dimensions by default.
- Starting from available events instead of the product goal.
- Treating engagement as universally positive.
- Mixing adoption and retention windows.
- Using survey averages without sampling context.
- Defining a metric without numerator, denominator, or population.
- Building a dashboard that has no decision protocol.

# Guardrails

- Collect only data necessary for the stated decision.
- Do not infer user happiness from engagement alone.
- Review unequal outcomes across material user segments.
- Keep qualitative evidence available for interpretation.
- Mark estimates, missingness, and instrumentation changes.
- Avoid targets that encourage dark patterns or harmful use.

# Sources

- Kerry Rodden, Hilary Hutchinson, and Xin Fu, “Measuring the User Experience on a Large Scale: User-Centered Metrics for Web Applications”: https://research.google/pubs/measuring-the-user-experience-on-a-large-scale-user-centered-metrics-for-web-applications/

# Adaptation notes

- The source defines HEART and Goals–Signals–Metrics and reports practical use at Google.
- Decision gates, ownership fields, guardrail categories, and definition-history requirements are operational adaptations.
- HEART is a selection framework, not a requirement to populate all five dimensions.
