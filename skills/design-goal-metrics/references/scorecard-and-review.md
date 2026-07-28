# Scorecard and Review

Define each metric with:

- name, type, and plain-language definition;
- decision informed;
- formula, unit, inclusion rules, and segmentation;
- baseline, target, current value, trend, and due date;
- source with observation date and locator, cadence, owner, and confidence;
- known bias, latency, and failure modes.

## Canonical mapping

- primary outcome: `primary_goal.metrics.outcome.primary`
- leading indicators: `primary_goal.metrics.leading`
- controllable inputs: `primary_goal.metrics.input`
- guardrails: `primary_goal.metrics.guardrail`

Keep the primary outcome's `name`, `unit`, `baseline`, `target`, `current`, and `evidence_source` fields synchronized in `GOAL.md`. Use `null` or an explicit unknown when evidence is absent. Put provisional causal claims or targets in `primary_goal.assumptions`.

Use a compact review view when helpful:

| Metric | Type | Baseline | Target | Current | Trend | Cadence | Source | Owner | Confidence |
|---|---|---:|---:|---:|---|---|---|---|---|

At each review:

1. Update from the named source.
2. Compare outcome, leading indicators, inputs, and guardrails together.
3. Name the current constraint and next decision.
4. Record source failures, anomalies, and confidence changes.
5. Append observations; never rewrite history.

For durable metric history, copy `second-brain/templates/metric.md` into the metrics shelf, link it through the wiki index, and log the material write. Add, retire, or redefine a metric only with rationale, source, effective date, and a comparability note.
