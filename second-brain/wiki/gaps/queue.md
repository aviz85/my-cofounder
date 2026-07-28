---
schema_version: "1.0"
record_type: knowledge_gap_queue
status: empty
allowed_statuses:
  - empty
  - active
empty_detection:
  mode: collection_empty
  content_path: items
  blank_values:
    - []
ranking:
  hard_dependencies:
    - strategic_outcome
    - minimum_business_context
    - communication_setup
  method: expected_decision_action_impact
  factors:
    - decision_impact
    - action_unlock_value
    - urgency
    - evidence_deficit
    - collection_cost
    - sensitivity_risk
  default_rank: declared_global_priority
  tie_breaker: declared_global_priority
behavior:
  ask_mode: one_question_per_turn
  persist_verified_answers: true
  require_source: true
  require_confidence: true
  close_only_with_evidence: true
  revisit_on:
    - heartbeat
    - dreaming
  exclude_irrelevant_or_disproportionately_sensitive: true
items: []
---

# Knowledge-Gap Queue

<!--
This queue is intentionally semantically empty.
Do not seed missing facts, answers, personal identifiers, or business claims.
Add a gap only when resolving it could materially improve a current decision or action.
-->
