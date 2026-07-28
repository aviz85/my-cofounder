---
schema_version: 2
document_type: team_charter
team_id: replace-with-stable-lowercase-id
team_name: "Team Name — Mandate"
status: draft
created_at: null
updated_at: null
goal_reference: ../GOAL.md
manager:
  display_name: "Name — Role"
  responsibilities: []
workers: []
cofounder:
  display_name: "Co-Founder — Team Sponsor"
  participation: optional
  rationale: null
admission:
  status: pending
  evidence: []
  admitted_at: null
leverage:
  metric: null
  baseline: null
  target: null
  coordination_cost_baseline: null
  measurement_window: null
  evidence_source: null
  owner: "Name — Role"
continuation:
  review_cadence: null
  minimum_leverage_threshold: null
  last_decision: null
  next_review_at: null
stop_or_sunset:
  conditions: []
  owner: "Name — Role"
meeting:
  installation_status: uninstalled
  enabled: false
  automation_id: null
  cadence: null
  cadence_rationale: null
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
kpis: []
quality_checks: []
guardrails: []
---

# Team Charter — <Team Name — Mandate>

## Objective

- Relationship to `GOAL.md`:
- Outcome owned:
- Why a team is justified:
- Start condition:
- Stop or sunset condition:

## Admission, measurable leverage, continuation, and stop or sunset

Do not set this charter to `active` or enable its schedule until every admission row passes.

| Admission check | Evidence and date | Pass or fail | Owner (`Name — Role`) |
|---|---|---|---|
| At least two independent specialist workstreams |  |  |  |
| Credible parallel time, quality, or evidence advantage |  |  |  |
| Expected benefit exceeds coordination cost |  |  |  |
| Distinct deliverables and disjoint write scopes |  |  |  |
| Complete manager, authority, quality, and lifecycle contract |  |  |  |
| Fewer than three other active team schedules |  |  |  |

| Leverage metric | Dated baseline | Target and deadline | Coordination-cost baseline | Evidence source | Owner (`Name — Role`) | Review window |
|---|---:|---:|---:|---|---|---|
| <Decision latency, hours saved, verified evidence, constraint movement, or goal metric> |  |  |  |  |  |  |

- Continuation rule and minimum leverage threshold:
- Current continuation decision: continue / pause / stop
- Decision evidence and date:
- Next continuation review:
- Stop or sunset triggers:
- Remaining-work handoff:
- Failed or incomplete run recovery owner (`Name — Role`):

## Manager

- Display name in required `Name — Role` format:
- Decision rights:
- Decisions reserved for the user:
- Synthesis and quality responsibilities:
- Escalation responsibility:

## Worker roles

List every charter role. At each scheduled run, the manager must explicitly mark every role active or inactive and record the reason. Activate only agenda-required workers; never activate the full roster by default.

| Worker display name (`Name — Role`) | Responsibility | Deliverable | Activation method | Allowed tools | Write scope | Evidence standard | Escalation condition |
|---|---|---|---|---|---|---|---|
| <Name — Role> |  |  | Agenda-required only |  |  |  |  |

## Co-Founder participation

- Display name: `Co-Founder — Team Sponsor`
- Participation: optional / required / not needed
- Rationale:
- Responsibilities when activated:

## Scope and permission boundary

- In scope:
- Out of scope:
- Safe internal actions:
- Actions requiring explicit approval:
- Privacy and retention constraints:

`USER.md` is the sole source for the chosen primary channel, safe endpoint locator, connection state, and precise standing send authorization. Do not copy the private endpoint or permissions into this charter.

## Recurring AI team meeting

- Native scheduled-task name: exact charter `Team Name — Mandate`
- Cadence:
- Timezone:
- Cadence rationale based on feedback latency, risk, deadlines, and workload:
- Scheduler automation ID: uninstalled
- Installation status: uninstalled
- Enabled: false
- Overlap policy: skip
- Duplicate prevention: match `automation_id`, then stable `team_id` and this charter path; stop on ambiguity.
- System-wide activation check: enabling must leave no more than three active team schedules.
- System-wide worker check: never run more than four workers concurrently across team and non-team work.

The manager creates and manages one native standalone scheduled task for this active team. The scheduled run itself is the meeting occurrence; there is no child task per occurrence. The schedule must not be merged with base routines, another team, or a dispatcher.

Each run starts with a manager-only preflight. Admit a meeting only when there is cited new evidence, a decision due, a blocker requiring resolution, or a deliverable ready for review. With no qualifying signal, record `skipped_no_op` using canonical `teams/MEETING_MINUTES_TEMPLATE.md`, explicitly mark all roles inactive, activate nobody else, and end without a full-team meeting.

For an admitted meeting, activate only agenda-required workers after counting all workers currently running system-wide. Queue or defer any activation that would exceed four concurrent workers. Review and record every inactive charter role. Activate `Co-Founder — Team Sponsor` only when this charter and the agenda justify it.

## User-channel loop

- Read `USER.md` before every meeting.
- Read new inbound replies on the chosen primary channel before decisions.
- Treat relevant replies as evidence and revise the plan accordingly.
- Route conclusions, decisions needed, and proactive updates through that channel.
- Request explicit in-app approval for external sends unless `USER.md` precisely authorizes the exact message type and audience.
- Store only channel type, safe locator, privacy-safe summary, and date in minutes.

## KPIs

| KPI | Type | Definition | Baseline | Target or threshold | Current | Source | Owner (`Name — Role`) | Review cadence |
|---|---|---|---:|---:|---:|---|---|---|
| <Metric> | Outcome / leading / input / guardrail |  |  |  |  |  |  | Every meeting |

## Work-quality checks

| Check | Standard | Evidence | Owner (`Name — Role`) | Frequency | Failure response |
|---|---|---|---|---|---|
| <Check> |  |  |  | Every meeting |  |

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

- Charter review cadence:
- Next review:
- Latest leverage value, source, and date:
- Continuation threshold result: pass / fail
- Consecutive no-signal scheduled runs:
- Consecutive admitted meetings without material decision or measurable progress:
- Stop or sunset indicators:
- Disable owner (`Name — Role`):
- Durable-record cleanup owner (`Name — Role`):
