---
schema_version: "1.0"
document_type: strategic_goal
status: empty
allowed_statuses:
  - empty
  - drafting
  - active
  - achieved
  - superseded
primary_goal_limit: 1
empty_detection:
  mode: all_content_paths_blank
  blank_values:
    - null
    - ""
    - []
    - {}
  content_paths:
    - primary_goal.statement
    - primary_goal.why_now
    - primary_goal.deadline
    - primary_goal.constraints
    - primary_goal.metrics.outcome.primary.name
    - primary_goal.metrics.outcome.primary.unit
    - primary_goal.metrics.outcome.primary.baseline
    - primary_goal.metrics.outcome.primary.target
    - primary_goal.metrics.outcome.primary.current
    - primary_goal.metrics.outcome.primary.evidence_source
    - primary_goal.metrics.outcome.supporting
    - primary_goal.metrics.leading
    - primary_goal.metrics.input
    - primary_goal.metrics.guardrail
    - primary_goal.assumptions
    - primary_goal.next_action.description
    - primary_goal.next_action.owner
    - primary_goal.next_action.due
    - primary_goal.next_action.evidence_of_done
  required_for_active:
    - primary_goal.statement
    - primary_goal.deadline
    - primary_goal.metrics.outcome.primary.name
    - primary_goal.metrics.outcome.primary.baseline
    - primary_goal.metrics.outcome.primary.target
    - primary_goal.next_action.description
  status_rule: "Keep status empty while every content path is blank; use drafting after any answer; use active only when every required_for_active path is populated and the user confirms this is the one primary goal."
replacement_rule: "Never silently replace an active primary goal; mark it achieved or superseded with evidence before activating another."
onboarding:
  priority_scope: global
  ask_mode: one_question_per_turn
  selection_rule: lowest_global_priority_question_not_complete
  never_infer_answers: true
  questions:
    - id: strategic_outcome
      global_priority: 40
      completion_mode: all_answer_paths_nonblank
      prompt: "What is the single measurable business outcome that matters most now, what is the target, and by what deadline?"
      answer_paths:
        - primary_goal.statement
        - primary_goal.metrics.outcome.primary.name
        - primary_goal.metrics.outcome.primary.target
        - primary_goal.deadline
    - id: baseline
      global_priority: 70
      completion_mode: all_answer_paths_nonblank
      prompt: "What is the current baseline for that outcome, and what evidence supports it?"
      answer_paths:
        - primary_goal.metrics.outcome.primary.baseline
        - primary_goal.metrics.outcome.primary.current
        - primary_goal.metrics.outcome.primary.evidence_source
    - id: constraints
      global_priority: 100
      completion_mode: all_answer_paths_nonblank
      prompt: "What is the most important constraint or non-negotiable boundary on this goal?"
      answer_paths:
        - primary_goal.constraints
    - id: metric_system
      global_priority: 110
      completion_mode: all_answer_paths_nonblank
      prompt: "Which leading signals, controllable inputs, and guardrails should be tracked while pursuing this outcome?"
      answer_paths:
        - primary_goal.metrics.leading
        - primary_goal.metrics.input
        - primary_goal.metrics.guardrail
    - id: next_action
      global_priority: 120
      completion_mode: all_answer_paths_nonblank
      prompt: "What is the smallest next action that would create useful evidence or progress toward the goal?"
      answer_paths:
        - primary_goal.next_action.description
primary_goal:
  statement: null
  why_now: null
  deadline: null
  constraints: []
  metrics:
    outcome:
      primary:
        name: null
        unit: null
        baseline: null
        target: null
        current: null
        evidence_source: null
      supporting: []
    leading: []
    input: []
    guardrail: []
  assumptions: []
  next_action:
    description: null
    owner: null
    due: null
    evidence_of_done: null
---

# Primary Strategic Goal

<!--
This goal is intentionally semantically empty and permits exactly one primary goal.
Use ISO 8601 dates. Label estimates and assumptions explicitly.
Do not activate a goal until the user confirms it.
-->
