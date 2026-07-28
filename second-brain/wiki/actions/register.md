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

This is the only canonical register for current commitments. Every action uses the declared fields above, a stable `act-YYYYMMDD-short-slug` ID, an owner formatted `Name — Role`, and the complete action contract in [SCHEMA.md](../../SCHEMA.md). Historical terminal actions move losslessly to the [archive](../archive/README.md); the [seven-day active view](active-7d.md) is derived and never overrides this register.

<!-- No actions have been registered. -->

[Back to wiki index](../index.md)
