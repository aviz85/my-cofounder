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
  write_trigger: "The instant the agent notices it is setting a thread aside for another (a topic switch, a reprioritization, a deferred question) — in the same turn/occurrence, not retroactively when asked."
  write_is_not_a_pause: "Writing an entry never substitutes for continued progress. Immediately after logging, the agent proceeds with the best available independent action — the log exists precisely so pausing to ask never has to mean stalling."
  noise_guard: "A trivial tangent resolved within the same turn (a one-line clarifying aside) is not a loop and must not create an entry. Only log a thread genuinely being set aside."
  dedupe_rule: "Before creating an entry, check existing open items for the same thread. If found, update last_touched_at and context instead of duplicating."
  resume_rule: "Read this file at the start of every session and every HEARTBEAT/DREAMING occurrence, per AGENTS.md's canonical startup. Surface open items relevant to the current work without waiting to be asked."
  blocked_on_user_rule: "Set blocked_on only after the levers in AGENTS.md's iron principle 3 are genuinely exhausted (independent research, an alternative facet of the same thread, a different tool) — not merely because a question occurred to the agent. An item with blocked_on: user_input or user_approval is a candidate for the ranked question queue and the primary-channel proactive-notification flow in HEARTBEAT.md; it is never a reason to pause the current occurrence — the agent moves on to the next-best independent action in the same cycle."
  close_only_with: "completed_with_evidence (evidence_of_done recorded on the item) or user_dismissed (explicit user instruction to drop it). Never close on elapsed time, inference that it 'probably' resolved, or silence."
items: []
---

# OPEN-LOOPS.md — Standing Thread Ledger

This starter ships semantically empty and business-agnostic. Do not seed it with example or placeholder items.

## Purpose

The system's default mode is unattended `HEARTBEAT.md`/`DREAMING.md` occurrences, not a live conversation with the user present. A thread set aside — a topic switched away from, a question that occurred but doesn't block the current action, a candidate direction not yet pursued — must never simply be forgotten because no one was there to be asked about it. This file is the one place such threads live between the moment they're set aside and the moment they're genuinely closed.

This is deliberately lighter-weight than `second-brain/wiki/actions/register.md`. The register is for formal business actions with owner, evidence-of-done, and retry state. This file is the earlier, cheaper layer: anything not yet — or never going to be — formalized into a register entry, including purely conversational or architectural threads, still needs a place that guarantees it isn't lost. Promote an item to the action register once it's concrete enough to need one; until then, or if it never needs to, it stays here.

## Using this file

- Add an item the instant a thread is set aside — see `behavior.write_trigger` above.
- Never let logging replace acting — see `behavior.write_is_not_a_pause`.
- Do not log trivial tangents — see `behavior.noise_guard`.
- Close an item only per `behavior.close_only_with` — real evidence or an explicit user instruction. Delete closed items rather than accumulating a growing archive here; if a durable record of the resolution is worth keeping, it belongs in `second-brain/wiki/log.md` or the action register, not here.
- An item blocked on the user is not a stalled occurrence — see `behavior.blocked_on_user_rule`. Keep moving on everything else.

[Back to wiki index](second-brain/wiki/index.md)
