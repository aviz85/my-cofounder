---
schema_version: 2
document_type: team_charter
team_id: knowledge-completion
team_name: "Knowledge Completion Team — Deepen and Maintain Business Understanding"
status: draft
created_at: null
updated_at: null
goal_reference: ../GOAL.md
manager:
  display_name: "Co-Founder — Onboarding Lead"
  responsibilities:
    - own the ranked knowledge-gap queue (second-brain/wiki/gaps/queue.md)
    - decide, each occurrence, whether new evidence or user engagement justifies an admitted session
    - formulate at most a small, ranked set of questions or invitations per admitted occurrence — never a batch
    - synthesize what the user shares into the correct canonical or second-brain location
workers:
  - display_name: "Co-Founder — Memory Steward"
    responsibility: capture, cite, and file verified new information into the correct second-brain page or canonical file; lint for duplication and contradiction with existing evidence
    suggested_skill: manage-second-brain
cofounder:
  display_name: "Co-Founder — Team Sponsor"
  participation: not_needed
  rationale: "The manager role (Onboarding Lead) already is the Co-Founder acting in this specialized capacity; a separate sponsor seat would duplicate the same identity."
admission:
  status: pending
  evidence: []
  admitted_at: null
leverage:
  metric: "ranked decision-relevant items closed in second-brain/wiki/gaps/queue.md per review window"
  baseline: "read from gaps/queue.md at first admission review — not fabricated here"
  target: "set at first admission review, relative to the measured baseline"
  coordination_cost_baseline: "one short manager-only preflight per scheduled occurrence; full engagement only on admitted (non-skipped) occurrences"
  measurement_window: weekly
  evidence_source: second-brain/wiki/gaps/queue.md
  owner: "Co-Founder — Onboarding Lead"
continuation:
  review_cadence: weekly
  minimum_leverage_threshold: "set at first admission review"
  last_decision: null
  next_review_at: null
stop_or_sunset:
  conditions:
    - "two consecutive admitted occurrences produce no new persisted knowledge and no user engagement"
    - "the ranked gap queue is empty and stays empty across a full review window"
    - "GOAL.md is superseded or achieved and the new goal does not need deeper business/user context"
  owner: "Co-Founder — Onboarding Lead"
meeting:
  installation_status: uninstalled
  enabled: false
  automation_id: null
  cadence: daily
  cadence_rationale: "Daily gives fast turnaround when the user is willing to share something, without demanding a response — most days are expected to resolve as skipped_no_op per the occurrence_admission rule below, so daily cadence costs a cheap preflight, not a full session, on quiet days."
  timezone: null
  native_scheduled_task: required
  scheduled_task_scope: one_native_standalone_scheduled_task
  occurrence_execution: scheduled_run_itself_is_meeting_occurrence
  child_task_per_occurrence: prohibited
  duplicate_match_key: team_id
  overlap_policy: skip
  active_team_schedule_cap_systemwide: 3
  worker_concurrency_cap_systemwide: 4
  occurrence_admission: new_evidence_or_decision_or_blocker_or_deliverable
  no_signal_outcome: skipped_no_op
  archive_capability_probe: required
  unsupported_archive_state: archive_pending
  failed_or_incomplete_recovery: preserve_current_scheduled_run
channel:
  authority_file: ../USER.md
  read_inbound_before_decisions: true
  store_endpoint_in_charter: prohibited
  external_sends: require_approval_unless_precisely_authorized_in_USER
minutes:
  template: teams/MEETING_MINUTES_TEMPLATE.md
  destination: ../second-brain/wiki/meetings
  update_index: required
  append_operation_log: required
kpis:
  - metric: "gap-queue items closed with evidence"
    type: outcome
    review_cadence: every meeting
  - metric: "user-contributed evidence items filed to second-brain"
    type: leading
    review_cadence: every meeting
quality_checks:
  - check: "every filed item has a source and a confidence label (fact / user statement / inference / hypothesis)"
    owner: "Co-Founder — Memory Steward"
guardrails:
  - "never invent or infer an answer path that was not directly stated by the user — same rule as ONBOARDING.md"
  - "never treat this team's cadence as a reason to re-ask a question still inside its cooldown (HEARTBEAT.md startup rule applies here too)"
---

# Team Charter — Knowledge Completion Team — Deepen and Maintain Business Understanding

## Objective

- Relationship to `GOAL.md`: indirect but material — richer, verified context in `BUSINESS.md`, `USER.md`, and `second-brain/` improves the quality and confidence of every decision `HEARTBEAT.md` and `DREAMING.md` make against the active goal. This team does not act on the goal directly; it keeps the knowledge base the goal loop depends on from silently staying thin.
- Outcome owned: the ranked knowledge-gap backlog in `second-brain/wiki/gaps/queue.md` shrinks over time, and what's learned is filed durably, not left in conversation history.
- Why a team is justified: two genuinely distinct specialist workstreams — deciding *what* to ask and when (Onboarding Lead) versus *where and how* to file what comes back (Memory Steward) — with a credible quality advantage (dedicated filing discipline beats ad hoc notes) that's worth a lightweight daily preflight.
- Start condition: `GOAL.md.status` is `active` (this team runs as ordinary post-onboarding knowledge-gap work per `AGENTS.md`, never during the short blocking onboarding sequence in `ONBOARDING.md`).
- Stop or sunset condition: see `stop_or_sunset.conditions` above.

## Admission, measurable leverage, continuation, and stop or sunset

Do not set this charter to `active` or enable its schedule until every admission row passes.

| Admission check | Evidence and date | Pass or fail | Owner (`Name — Role`) |
|---|---|---|---|
| At least two independent specialist workstreams | Onboarding Lead (ask/prioritize) vs. Memory Steward (file/curate) — distinct deliverables | pending first review | `Co-Founder — Onboarding Lead` |
| Credible parallel time, quality, or evidence advantage | pending first review | pending | `Co-Founder — Onboarding Lead` |
| Expected benefit exceeds coordination cost | pending — compare gap-closure rate before/after activation | pending | `Co-Founder — Onboarding Lead` |
| Distinct deliverables and disjoint write scopes | Onboarding Lead owns the gap queue; Memory Steward owns second-brain filing | pending first review | `Co-Founder — Onboarding Lead` |
| Complete manager, authority, quality, and lifecycle contract | this charter | pending review | `Co-Founder — Onboarding Lead` |
| Fewer than three other active team schedules | check `routines/registry.yaml` / active charters at admission time | pending | `Co-Founder — Onboarding Lead` |

| Leverage metric | Dated baseline | Target and deadline | Coordination-cost baseline | Evidence source | Owner (`Name — Role`) | Review window |
|---|---:|---:|---:|---|---|---|
| Ranked gap-queue items closed with evidence | read at first review | set at first review | one preflight/day, full session only when admitted | `second-brain/wiki/gaps/queue.md` | `Co-Founder — Onboarding Lead` | weekly |

- Continuation rule and minimum leverage threshold: set at first admission review, once a real baseline exists.
- Current continuation decision: not yet admitted.
- Decision evidence and date: —
- Next continuation review: set at admission.
- Stop or sunset triggers: see `stop_or_sunset.conditions`.
- Remaining-work handoff: unresolved gap-queue items and any open `OPEN-LOOPS.md` entries this team raised transfer back to ordinary `AGENTS.md` knowledge-gap work — they are never dropped on sunset.
- Failed or incomplete run recovery owner (`Name — Role`): `Co-Founder — Onboarding Lead`.

## Manager

- Display name in required `Name — Role` format: `Co-Founder — Onboarding Lead`
- Decision rights: which gap(s) to raise this occurrence, whether the occurrence is admitted or `skipped_no_op`, where a piece of shared information ultimately belongs.
- Decisions reserved for the user: what to share and when; confirming any inference before it's treated as fact (never inferred silently — see guardrails).
- Synthesis and quality responsibilities: keep the ranked queue current; ensure nothing shared by the user is lost between this thread and the canonical files.
- Escalation responsibility: if a gap is decision-blocking and urgent (not just nice-to-have depth), escalate it into `HEARTBEAT.md`'s primary-channel question flow instead of waiting for this team's own cadence.

## Worker roles

List every charter role. At each scheduled run, the manager must explicitly mark every role active or inactive and record the reason. Activate only agenda-required workers; never activate the full roster by default.

| Worker display name (`Name — Role`) | Responsibility | Deliverable | Activation method | Allowed tools | Write scope | Evidence standard | Escalation condition |
|---|---|---|---|---|---|---|---|
| `Co-Founder — Memory Steward` | File and cite new verified information | Updated second-brain page(s) with source and confidence label | Agenda-required only — activate only when the manager has new information to file | second-brain read/write per `second-brain/AGENTS.md` | `second-brain/wiki/` only; never canonical `USER.md`/`BUSINESS.md`/`GOAL.md` answer paths, which only the onboarding/knowledge-gap contract may write | source + confidence label on every entry | contradiction with existing evidence, or information that would need to change a canonical file's answer path |

## Co-Founder participation

- Display name: `Co-Founder — Team Sponsor`
- Participation: not needed — the manager seat already is the Co-Founder in this capacity.
- Rationale: a second sponsor seat would duplicate the same identity for no added check.
- Responsibilities when activated: n/a.

## Scope and permission boundary

- In scope: ranked, decision-relevant knowledge gaps about the business, the user, and their systems; inviting (never demanding) the user to share more; filing what's shared.
- Out of scope: executing goal actions, sending external messages, connector installation beyond what `POLICY.md`/`connectors/registry.yaml` already allow read-only.
- Safe internal actions: reading and writing second-brain pages; updating the gap queue; logging to `OPEN-LOOPS.md` per its own contract when a thread is set aside.
- Actions requiring explicit approval: any external send; writing directly to a canonical file's `required_for_active` answer path from an inference rather than a direct user statement.
- Privacy and retention constraints: same as `second-brain/AGENTS.md` and `POLICY.md` — no credentials, no unnecessary sensitive personal data.

`USER.md` is the sole source for the chosen primary channel, safe endpoint locator, connection state, and precise standing send authorization. Do not copy the private endpoint or permissions into this charter.

## Recurring AI team meeting

- Native scheduled-task name: exact charter `Knowledge Completion Team — Deepen and Maintain Business Understanding`
- Cadence: daily
- Timezone: set at installation from `USER.md#/profile/timezone`
- Cadence rationale based on feedback latency, risk, deadlines, and workload: knowledge changes slowly and is never urgent by itself, but daily cadence means whenever the user is willing to share something, the turnaround is short — while the no-signal default (see below) keeps the cost of quiet days to a single cheap preflight.
- Scheduler automation ID: uninstalled
- Installation status: uninstalled
- Enabled: false
- Overlap policy: skip
- Duplicate prevention: match `automation_id`, then stable `team_id` and this charter path; stop on ambiguity.
- System-wide activation check: enabling must leave no more than three active team schedules.
- System-wide worker check: never run more than four workers concurrently across team and non-team work.

Each run starts with a manager-only preflight. Admit a session only when there is a cited new second-brain evidence item, a pending gap-queue item whose cooldown allows re-asking, or the user has engaged this thread since the last occurrence. With no qualifying signal, record `skipped_no_op`, mark the worker role inactive, and end quietly — this is expected to be the common case, not a failure mode.

For an admitted session, activate the Memory Steward only when there is something concrete to file, after counting all workers currently running system-wide per `teams/registry.md`'s cap-check rule.

## User-channel loop

- Read `USER.md` before every session.
- Read new inbound replies on the chosen primary channel before deciding what to raise.
- Treat what the user shares as evidence and file it; never infer beyond what was directly stated.
- Route at most a small, ranked set of questions or invitations per admitted session — never a batch, and never repeat one still inside its cooldown per `HEARTBEAT.md`'s question-cooldown rule.
- Store only channel type, safe locator, privacy-safe summary, and date in minutes.

## KPIs

| KPI | Type | Definition | Baseline | Target or threshold | Current | Source | Owner (`Name — Role`) | Review cadence |
|---|---|---|---:|---:|---:|---|---|---|
| Gap-queue items closed with evidence | Outcome | count of `gaps/queue.md` items closed with a recorded source | set at first review | set at first review | — | `second-brain/wiki/gaps/queue.md` | `Co-Founder — Onboarding Lead` | Every meeting |
| Items filed to second-brain | Leading | count of new/updated second-brain pages with source + confidence | set at first review | set at first review | — | `second-brain/wiki/log.md` | `Co-Founder — Memory Steward` | Every meeting |

## Work-quality checks

| Check | Standard | Evidence | Owner (`Name — Role`) | Frequency | Failure response |
|---|---|---|---|---|---|
| Every filed item has a source and confidence label | fact / user statement / inference / hypothesis, per `second-brain/AGENTS.md` | second-brain page provenance field | `Co-Founder — Memory Steward` | Every meeting | Re-file with the missing label before closing the occurrence |
| No canonical answer path written from inference | `ONBOARDING.md` step 4 rule | diff of `USER.md`/`BUSINESS.md`/`GOAL.md` since last occurrence | `Co-Founder — Onboarding Lead` | Every meeting | Revert the write; re-ask the user directly instead |

## Meeting agenda contract

Every scheduled run covers:

1. inbound user-channel replies;
2. manager-only admission evidence and a convene or `skipped_no_op` decision;
3. system-wide active schedule and worker-cap checks;
4. an active or inactive decision with rationale for every charter role.

Only an admitted meeting continues to:

5. goal and KPI movement;
6. deliverables and evidence from agenda-required workers;
7. quality checks;
8. blockers, risks, and decisions;
9. measurable leverage and the continuation decision;
10. conclusions and user update;
11. follow-ups, owners, and due dates;
12. durable minutes, index, log, recovery state, and archive eligibility.

## Scheduled-run completion and archive gate

Mark an admitted meeting complete only when:

- full minutes are saved under `second-brain/wiki/meetings/`;
- the meeting is indexed and logged;
- the user-channel update was sent under authorization, or an exact in-app approval request and post-approval follow-up were saved;
- follow-ups are assigned or scheduled;
- no unresolved failure lacks a durable escalation.

A `skipped_no_op` run is complete after its checked sources, admission decision, all-inactive role review, and compact durable record are saved.

Before any archive action, run a live capability probe that explicitly confirms self-archive is callable for the current scheduled run and will not disable, delete, or mutate its recurring schedule. A charter flag, configured tool name, prompt claim, or prior run is not proof. When supported, the completed run self-archives. When absent, unsupported, or ambiguous, do not call archive; mark the completed run `archive_pending` with probe evidence and a cleanup owner. That state is non-blocking.

Failed or incomplete runs remain unarchived and recoverable in the same scheduled run. Save partial minutes, exact blocker, continuation owner, and recovery reference. Never create a child or replacement task. If a supported archive call fails for a completed run, retain completion and mark `archive_pending`.

## Review and sunset

- Charter review cadence: weekly
- Next review: set at admission
- Latest leverage value, source, and date: —
- Continuation threshold result: not yet admitted
- Consecutive no-signal scheduled runs: 0
- Consecutive admitted meetings without material decision or measurable progress: 0
- Stop or sunset indicators: see `stop_or_sunset.conditions`
- Disable owner (`Name — Role`): `Co-Founder — Onboarding Lead`
- Durable-record cleanup owner (`Name — Role`): `Co-Founder — Memory Steward`
