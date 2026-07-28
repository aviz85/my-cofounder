---
schema_version: 2
document_type: team_meeting_minutes
meeting_id: meeting-YYYYMMDD-team-id
team_id: replace-with-team-id
team_name: "Team Name — Mandate"
title: "Team Name — Mandate"
status: in_progress
service_date: YYYY-MM-DD
started_at: null
completed_at: null
timezone: null
manager: "Name — Role"
automation_id: null
scheduled_run_id: null
scheduled_run_is_occurrence: true
child_task_id: prohibited
admission_result: pending
archive_capability_probe: not_run
archive_state: not_eligible
charter_path: ../../../teams/<team-charter>.md
goal_reference: ../../../GOAL.md
participants: []
participant_display_name_format: "Name — Role"
source_references: []
confidentiality: internal
---

# Team Meeting Minutes — <Team Name — Mandate> — <Date>

This file is canonical `teams/MEETING_MINUTES_TEMPLATE.md`. Save an admitted meeting's full copy, or a no-op's compact admission record, under:

`second-brain/wiki/meetings/YYYY-MM-DDTHHMM-<team-id>.md`

Do not store a private channel endpoint, credentials, or sensitive inbound content. Channel evidence is limited to type, safe locator, privacy-safe summary, and date.

## Scheduled-run identity

- Native scheduled-task name, exact `Team Name — Mandate`:
- Scheduled run ID:
- Automation ID:
- Confirmation that this scheduled run itself is the meeting occurrence: yes / no
- Confirmation that no child task was created: yes / no
- Prior failed or incomplete run recovery reference:
- Overlap action: none / native continuation of same run / skipped to avoid duplication

## Manager-only user-channel preflight

- Manager (`Name — Role`):
- Channel type:
- Safe locator:
- Inbound checked at:
- Latest relevant reply date:
- Privacy-safe evidence summary:
- Effect on admission or meeting decision:

If no channel is chosen or connected, record the one onboarding question or specific connector request. Do not copy the endpoint or sensitive message text here.

## Meeting admission preflight

Do not activate workers or `Co-Founder — Team Sponsor` until this table is complete.

| Qualifying agenda signal | New item, source, and date | Decision relevance | Qualifies |
|---|---|---|---|
| New evidence |  |  | yes / no |
| Decision due |  |  | yes / no |
| Blocker requiring resolution |  |  | yes / no |
| Deliverable ready for review |  |  | yes / no |

- Admission result: convene / `skipped_no_op`
- Admission rationale:
- Sources checked:
- Consecutive no-signal scheduled runs including this one:

If every signal is `no`, set status to `skipped_no_op`, complete the capacity and role review with every role inactive, save the compact durable record and lifecycle fields, and stop. Do not convene a full team or complete the admitted-meeting-only sections.

## System capacity and role activation

- Active team schedules before this run:
- Three-schedule cap result: pass / fail
- Workers already running system-wide:
- Workers activated by this run:
- Peak workers after activation:
- Four-worker cap result: pass / fail

| Charter participant (`Name — Role`) | Agenda need | Active or inactive | Reason, including every inactive role | Deliverable if active | Concurrency slot |
|---|---|---|---|---|---|
| Name — Role | Manager | active | Owns preflight and synthesis |  | Manager, not a worker slot |
| Name — Role |  |  |  |  |  |
| Co-Founder — Team Sponsor |  |  |  |  | Not a worker slot |

The manager reviews every charter role. Activate only agenda-required workers and never exceed four concurrent workers across the entire system.

## No-op record

Complete this section only for `skipped_no_op`.

- Why a recurring meeting was not warranted:
- Confirmation that no worker or sponsor was activated:
- Next expected evidence date or trigger:
- Continuation review required: yes / no
- Schedule action: continue / pause / stop
- Compact record saved at:

## Admitted meeting objective

- Relationship to `GOAL.md`:
- Expected decision or output:
- Completion standard:

## Admitted meeting attendance

| Participant | Role | Invited or activated | Attended or returned output | Evidence reviewed | Blocker |
|---|---|---|---|---|---|
| Name — Role | Manager | Yes |  |  |  |
| Name — Role | Worker |  |  |  |  |
| Co-Founder — Team Sponsor | Sponsor |  |  |  |  |

## Goal and KPI review

| Metric | Previous | Current | Delta | Source and date | Confidence | Interpretation |
|---|---:|---:|---:|---|---|---|
|  |  |  |  |  |  |  |

## Worker work and quality

| Worker display name (`Name — Role`) | Deliverable | Evidence | Charter quality check | Result | Rework or acceptance |
|---|---|---|---|---|---|
|  |  |  |  |  |  |

## Blockers and risks

| Blocker or risk | Evidence | Goal impact | Owner (`Name — Role`) | Response | Escalation needed |
|---|---|---|---|---|---|
|  |  |  |  |  |  |

## Decisions

| Decision | Decider (`Name — Role`) | Evidence | Alternatives | Rationale | Review date |
|---|---|---|---|---|---|
|  |  |  |  |  |  |

## Conclusions

- What changed:
- What remains uncertain:
- Assumption strengthened, weakened, or falsified:
- Current binding constraint:

## Measurable leverage and continuation

| Leverage metric | Dated baseline | Target | Current | Delta | Evidence source | Coordination cost | Threshold result |
|---|---:|---:|---:|---:|---|---:|---|
|  |  |  |  |  |  |  | pass / fail |

- Benefit attributable to parallel team operation:
- Continuation decision: continue / pause / stop
- Decision rationale:
- Next review date:

## Stop or sunset review

- Objective complete or superseded: yes / no
- Two consecutive no-signal scheduled runs: yes / no
- Two consecutive admitted meetings without material decision or measurable progress: yes / no
- Coordination cost exceeds demonstrated leverage: yes / no
- Valid manager and charter still present: yes / no
- Stop or sunset decision:
- Disable or handoff owner (`Name — Role`):

## User-channel update

- Channel type:
- Safe locator:
- Summary:
- Date:
- Authorization basis: explicit approval / precise standing authorization / approval requested in-app
- Delivery status: sent / approval pending / connector blocked
- In-app approval or escalation reference:

Do not duplicate the full outbound message or private endpoint in these minutes.

## Follow-ups

| Action | Owner (`Name — Role`) | Due | Evidence of done | Scheduled or assigned | Approval dependency |
|---|---|---|---|---|---|
|  |  |  |  |  |  |

## Knowledge and provenance

- Sources added:
- Canonical pages updated:
- Ranked decision-relevant gaps updated:
- Contradictions recorded:
- One next high-leverage question, if appropriate:

## Durable-record checklist

- [ ] Full admitted-meeting minutes or compact no-op record saved under `second-brain/wiki/meetings/`.
- [ ] Meeting link added to the meetings index and reachable from `second-brain/wiki/index.md`.
- [ ] Material operation appended to `second-brain/wiki/log.md`.
- [ ] User-channel update sent under authorization, exact in-app approval request plus follow-up saved, or marked not applicable with reason.
- [ ] Follow-ups assigned or scheduled, or marked not applicable with reason.
- [ ] Sensitive content and private endpoint excluded.
- [ ] Failed or incomplete work has a durable escalation.

## Scheduled-run lifecycle

- Run outcome: complete / `skipped_no_op` / incomplete / failed
- Durable escalation:
- Recovery state: none / recovery_required
- Continuation owner (`Name — Role`):
- Native continuation reference:
- Completion checks passed: yes / no
- Capability probe result: supported / unsupported / ambiguous / not_run
- Capability probe evidence:
- Probe confirms self-archive cannot alter recurring schedule: yes / no
- Archive state: not_eligible / archived / `archive_pending`
- Archive attempted at:
- Archive failure:
- Cleanup owner (`Name — Role`):

For a complete or `skipped_no_op` run, self-archive only when a live capability probe says the action is callable for the current scheduled run without changing the recurring schedule. A configured tool name or prompt claim is not proof. When the probe is unsupported, absent, or ambiguous, do not call archive; mark `archive_pending` and finish non-blockingly. If a supported archive call fails, retain completion and mark `archive_pending`.

For an incomplete or failed run, do not archive. Save partial minutes, the exact blocker, recovery state, continuation owner, and native continuation reference so the same scheduled run remains recoverable. Never create a child or replacement task.
