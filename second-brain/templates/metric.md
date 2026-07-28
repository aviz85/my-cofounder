---
schema_version: "1.0"
record_type: metric
metric_id: null
name: null
type: null
allowed_types:
  - outcome
  - leading
  - input
  - diagnostic
  - guardrail
definition: null
unit: null
direction: null
allowed_directions:
  - increase
  - decrease
  - maintain
baseline:
  value: null
  observed_at: null
  source_id: null
  locator: null
target:
  value: null
  due_at: null
current:
  value: null
  observed_at: null
  source_id: null
  locator: null
cadence: null
owner: null
confidence: null
status: draft
allowed_statuses:
  - draft
  - active
  - retired
comparability_notes: null
---

# Metric Name

## Interpretation

<!-- Explain what movement means and what it does not prove. -->

## Collection method

<!-- System of record, formula, filters, cadence, and owner. -->

## Guardrails and failure modes

<!-- Gaming risk, missingness, lag, bias, and harmful optimization. -->

## Change history

<!-- Append definition, source, or target changes; do not rewrite old observations. -->
