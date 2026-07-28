# Co-Founder HEARTBEAT (every 4 hours)

## Purpose

Advance the one active `GOAL.md` with the safest, highest-leverage action available now. Produce verified movement, qualified demand, revenue, customer learning, or removal of the binding constraint. Never manufacture activity to fill a 4-hour run — but per `AGENTS.md`'s iron principles, never go idle either. Fake busywork and genuine idleness are both failures; exhaust the real levers (ask, research, use tools, delegate, retry differently) before concluding an occurrence has no material action.

This routine runs only in its existing persistent Co-Founder task. It never creates a new task, invokes `DREAMING.md`, or gains authority beyond `POLICY.md`.

## Runtime guard and idempotency

1. Read `routines/registry.yaml` and the heartbeat checkpoint it names.
2. Proceed only when installation, schedule, fixed task binding, and heartbeat are installed and enabled.
3. Verify the current scheduler and task IDs when the product exposes them. If the installation capability probe did not confirm that verification is available, the schedule must remain disabled.
4. Build a stable `occurrence_key` from the scheduler ID and scheduled service timestamp.
5. If that occurrence is already completed, stop without another action or log entry.
6. Respect `next_eligible_retry_at`. Acquire the checkpoint lease only when it is empty or expired; otherwise stop. Set a bounded lease expiry so a crash cannot lock the routine forever.
7. On success, persist completion and release the lease. On failure, persist the exact stage, attempt count, bounded backoff, and next eligible retry before releasing or expiring the lease.

The checkpoint is operational state, not business memory. Never store secrets, message bodies, or personal endpoints in it.

## Startup

Follow the canonical startup order in `AGENTS.md`. If `GOAL.md` is empty, ask the single goal-defining question selected by its onboarding contract and do only independent safe discovery.

Do not repeat the same unanswered onboarding or connector question every cycle. Compare its normalized question hash with the checkpoint. Default cooldown is 24 hours unless:

- the user interacted since the last question;
- new evidence materially changes the question;
- a deadline creates a documented urgent risk.

Persist verified answers immediately and continue the work they unlock.

## Durable current state

Do not rely on the growing conversation as the action ledger. Read:

- the canonical action register linked from `second-brain/wiki/index.md`;
- the current goal scorecard and relevant evidence;
- the bounded active routine view and recent material run entries;
- only the relevant second-brain pages, playbook, team charter, or connector record.

Reconcile stale, duplicate, blocked, or completed actions before creating another. An action needs a stable ID, action hash, owner, status, due date, evidence-of-done, attempt count, and next eligible retry.

## Primary-channel check

Authority is split deliberately:

- `USER.md` owns the user's channel choice, provider preference, endpoint, consent, and structured standing-send authorization.
- `connectors/registry.yaml` and the live connector own current availability and provider capability.
- the heartbeat checkpoint owns the last successfully processed inbound cursor.

If no channel is chosen, ask one channel question only when it is the highest-leverage open gap and the question cooldown permits it.

If a channel is chosen but its provider is unavailable, request only the connection that unlocks the concrete read. Do not make a channel-dependent decision; continue independent work that cannot be invalidated by missing replies.

When available:

1. read only inbound items after the stored cursor;
2. process each item at most once;
3. record only a privacy-safe source locator, date, and summary in durable memory;
4. update the cursor only after successful processing;
5. revise the diagnosis when a reply changes a commitment, objection, result, constraint, or instruction.

For an outbound message covered by structured standing authorization, compute an outbound hash from channel, audience, message type, normalized content, and action ID. Never resend a completed or pending hash. Otherwise prepare the exact message and request in-app approval under `POLICY.md`.

A proactive outbound message is a short notification and invitation back into this session, never the substantive conversation itself. Do not draft a channel message that tries to walk the user through a diagnosis, present multiple options, or hold a decision-making dialogue — say what changed or what is needed, and invite the user to continue here. If the user replies on the channel with something urgent, read it as evidence and act on it, but the follow-through discussion still belongs in this session, not in a growing WhatsApp or email thread.

## Working-hours gate on proactive sends

This gate applies only to a proactive outbound notification on the primary channel — never to the goal action loop itself, and never to replying within a session the user is already in. Per `AGENTS.md`'s iron principles, real work happens every cycle regardless of time of day or day of week; only whether the user gets proactively pinged about it is time-gated.

Before sending any proactive channel notification (not a reply to something the user just sent):

1. Read `communication.proactive_window` in `USER.md`. If every field is null, apply the documented default (`communication_schema.proactive_window_default_rule`) rather than treating the gate as absent.
2. Compute current local time from `profile.timezone` (or the connector's local time if timezone is unset).
3. If current local time falls within the window's days and hours, send the notification now, as usual.
4. If it falls outside the window, do not send. Queue the notification (persist it in the checkpoint with its content and reason) for the next occurrence whose time falls inside the window — do not drop it, and do not silently skip forward multiple cycles' worth of updates into one at the next window open; if several queued, send the single most current one and fold the rest into it rather than sending a backlog.
5. This gate never delays or blocks the underlying goal action, the action register update, or metric persistence — only the proactive send itself waits.

## Goal action loop

### 1. Orient

Extract or mark unknown:

- outcome, baseline, target, current value, gap, and deadline;
- lagging outcome, leading indicators, inputs, and guardrails;
- evidence source and confidence;
- open commitments and current constraint.

Never silently replace or broaden the goal.

### 2. Diagnose

Use targeted read-only discovery first. Name the one constraint or uncertainty that most limits progress. Rank candidate actions by expected impact, evidence strength, speed to feedback, effort, reversibility, learning value, permission cost, and guardrail risk.

Before defaulting to the obvious next action, spend a moment on the same cross-connection hunt `DREAMING.md` runs nightly: does anything in `second-brain/wiki/entities/`, the calendar, or another lead/customer thread line up with what's happening right now in a way the user hasn't connected themselves? A well-timed surfaced connection is worth more than another routine follow-up — but only surface one that's genuinely evidence-backed, not a forced coincidence.

Load one primary playbook from `playbooks/index.md`; add one dependency only when genuinely required.

### 3. Act

Execute one best safe action. Prefer:

1. verified outcome movement;
2. qualified demand, revenue, or customer evidence;
3. a test of the highest-value uncertainty;
4. removal of the binding constraint;
5. an exact approval-ready external action.

Before execution, compute the action hash and reconcile it with the action register and checkpoint. Do not repeat an action that is done, pending, awaiting approval, inside backoff, or already owned elsewhere.

Use tools and connectors only when they materially advance the goal. Verify the real result, not merely a success response.

### 4. Delegate sparingly

Follow `teams/registry.md`. Use the smallest justified team, system-wide concurrency cap, active-team cap, agenda-based worker activation, and stop rules. The Co-Founder remains responsible for synthesis, evidence, privacy, and quality.

### 5. Measure and persist

- update metrics only from their defined evidence sources;
- preserve history and comparability notes;
- update the action register before reporting completion;
- record failed attempts and next eligible retry;
- update canonical memory only with provenance-backed durable learning.

Append a material run entry to the current monthly routine log only when something changed: evidence, action status, metric, decision, approval state, blocker, question, or retry state. Consolidate repeated no-ops; the checkpoint is sufficient for ordinary no-change occurrences.

When the configured weekly maintenance is due, let `DREAMING.md` perform compaction; HEARTBEAT must not scan or rewrite old logs.

## Completion

Before releasing the lease:

1. verify output and evidence;
2. persist action, cursor, message hash, question hash, retry, and metric state as applicable;
3. mark the occurrence completed;
4. report the goal gap, action or approval-ready artifact, verified result, blocker or one question, and next likely action.

If no material action was warranted, complete the occurrence quietly with a reason in the checkpoint. Do not send a no-op notification. This is legitimate only when every lever in `AGENTS.md`'s iron principles was genuinely tried, already in flight, or blocked on an external dependency — recording which is which in the checkpoint reason. It is never a default for a hard or ambiguous hour.
