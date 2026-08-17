---
title: סקירה יומית
date: 2026-08-17
status: generated
routine: daily-review
---

# סקירה יומית 2026-08-17

נוצר אוטומטית מתוך הפרויקט. לא נשלח החוצה.

## יעד

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
    
…

## חוטים פתוחים

---
schema_version: "1.0"
record_type: open_loops_ledger
canonical: true
status: empty
allowed_statuses:
  - empty
  - active
empty_detection:
  mode: collection_empty
  content_path: items
  blank_values:
    - []
item_id_pattern: "^ol-[0-9]{8}-[a-z0-9]+(?:-[a-z0-9]+)*$"
allowed_item_states:
  - open
  - resumed
  - closed
allowed_blocked_on:
  - null
  - user_input
  - user_approval
  - external_dependency
allowed_closed_reasons:
  - completed_with_evidence
  - user_dismissed
required_item_fields:
  - id
  - title
  - state
  - raised_at
  - context
  - blocked_on
  - next_step
  - last_touched_at
behavior:
  default_mode: unattended_heartbeat_not_live_chat
  write_trigger: "The instant the agent notices it is setting a thread aside for another (a topic switch, a reprioritization, a defe
…

## פעולות רשומות

---
schema_version: "1.0"
record_type: action_register
register_id: canonical-action-register
canonical: true
owner_format: "Name — Role"
allowed_statuses:
  - proposed
  - ready
  - in_progress
  - awaiting_approval
  - pending_external
  - retry_wait
  - blocked
  - done
  - cancelled
required_action_fields:
  - action_id
  - title
  - owner
  - status
  - goal_link
  - due
  - evidence_of_done
  - attempts
  - attempt_history
  - next_eligible_retry
  - execution_identity
  - action_hash
  - source_refs
  - created_at
  - updated_at
action_id_pattern: "^act-[0-9]{8}-[a-z0-9]+(?:-[a-z0-9]+)*$"
action_hash_pattern: "^sha256:[a-f0-9]{64}$"
max_automatic_attempts: 3
retry_backoff_hours:
  - 1
  - 6
updated_at: null
actions: []
---

# Canonical Action Register

This is the only canonical reg
…

## פלטים אחרונים בפרויקט

- `second-brain/outputs/2026-08-17-group-digest.md`
- `second-brain/outputs/2026-08-17-morning-brief.md`
- `second-brain/outputs/2026-08-17-voice-script.md`

## ריצת רוטינות אחרונה

# Routine Run Log

Bounded chronological execution log for every HEARTBEAT, DREAMING, and scheduled AI team-meeting run. Every occurrence logs — a material one gets a full entry, a quiet one gets a single line. Apply the bounds in `routines/registry.yaml#/logging` before appending; compact the oldest unprotected entries when a bound would be exceeded, preserving failures, permission changes, external sends, metric changes, and material second-brain operations.

No credentials, tokens, private en
…

## מה לשים לב אליו היום

1. לפתוח את קובץ תשומת הלב מוואטסאפ אם רץ `whatsapp-attention`.
2. לא לשלוח לקבוצה בלי אישור.
3. כל מפתח נשאר ב-`.env` המקומי.
