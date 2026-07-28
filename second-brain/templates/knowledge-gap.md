---
schema_version: "1.0"
record_type: knowledge_gap
gap_id: null
status: open
allowed_statuses:
  - open
  - answered
  - closed
  - deferred
question: null
category: null
related_goal: null
canonical_answer_path: null
decision_or_action_unlocked: null
ranking:
  decision_impact: null
  action_unlock_value: null
  urgency: null
  evidence_deficit: null
  collection_cost: null
  sensitivity_risk: null
  expected_impact_score: null
  declared_global_priority: null
data_minimization:
  relevant: null
  sensitive_data_required: null
  minimum_necessary_data: null
evidence_threshold: null
answer:
  summary: null
  source_type: null
  source_id: null
  stable_locator: null
  observed_at: null
  confidence: null
review:
  last_reviewed_at: null
  next_review_trigger: null
  revisit_on:
    - heartbeat
    - dreaming
closure:
  closed_at: null
  closure_evidence: null
  canonical_path_updated: null
---

# Knowledge Gap

## Why this gap matters

<!-- State the decision or action it could unlock. Exclude irrelevant curiosity. -->

## Ranked impact

<!--
Explain decision impact, action-unlocking value, urgency, evidence deficit,
collection cost, and sensitivity risk. Distinguish estimates from facts.
-->

## Minimum necessary question

<!-- Ask one focused question. Do not request sensitive detail that is not necessary. -->

## Answer and provenance

<!-- Persist only verified answers with source, stable locator, date, and confidence. -->

## Closure

<!-- Close only when the evidence threshold is met and the canonical path is updated. -->
