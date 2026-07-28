# Copy-Paste Prompts for Team Meeting Schedules

Each active team has exactly one manager-owned native standalone scheduled task, separate from base routines and every other team. The scheduled run itself is the meeting occurrence; there is no child task per occurrence. The system allows at most three active team schedules and four concurrent workers.

## Install or update one team schedule

```text
Create or update the recurring AI team-meeting schedule for the team charter I identify.

Resolve the starter root as the parent of init/TEAM_SCHEDULE_PROMPTS.md. Read USER.md, GOAL.md, teams/registry.md, teams/TEAM_CHARTER_TEMPLATE.md, teams/MEETING_MINUTES_TEMPLATE.md, and the selected team charter.

Validate that the team display name follows Team Name — Mandate and that the native scheduled-task name exactly matches it. Validate that the charter has exactly one manager and that every manager, worker, sponsor, participant, and owner display name follows Name — Role. Confirm all worker roles are listed, KPIs and quality checks are defined, and the meeting is still uninstalled or refers to one real existing schedule.

Apply the admission rules in teams/registry.md. Require dated evidence for at least two independent workstreams, a credible parallel advantage, distinct deliverables and write scopes, and expected benefit greater than coordination cost. Record one measurable leverage metric with baseline, target, source, owner, review window, minimum continuation threshold, and stop or sunset triggers. Do not activate an incomplete team.

Have the manager choose a recurring cadence and record a concise justification based on feedback latency, expected evidence arrival, risk, deadlines, workload, and the active GOAL.md. Do not use an arbitrary default merely to complete setup.

Before creating anything, match an existing schedule by the charter's automation_id. If it is missing, search for an exact match using stable team_id plus the charter path. Update one exact match. If multiple candidates exist, stop and show the ambiguity. Never create a duplicate schedule.

Enumerate all active team schedules. Do not enable this schedule if that would exceed three active team schedules system-wide. The schedule must be one native standalone scheduled task, named exactly Team Name — Mandate, and separate from HEARTBEAT, DREAMING, every other team, and any generic dispatcher.

Put the meeting workflow directly in that native scheduled task. Each scheduled run itself is the meeting occurrence. It must not create, spawn, fork, or resume a child task for an occurrence.

At the start of each run, the manager alone reads current sources and performs meeting admission. Convene only when the manager can cite at least one new decision-relevant item: evidence, a decision due, a blocker requiring resolution, or a deliverable ready for review. If none exists, set the run to skipped_no_op, record checked sources and the reason with teams/MEETING_MINUTES_TEMPLATE.md, explicitly review every charter role as inactive, activate no workers or sponsor, and finish without a full-team meeting.

For an admitted meeting, inspect workers already running across every team and non-team workflow. Activate only workers required by the agenda, queue or defer work that would exceed four concurrent workers system-wide, and explicitly record the active or inactive decision and rationale for every charter role. Activate Co-Founder — Team Sponsor only when the charter and admitted agenda require it. Have the manager inspect new inbound replies, KPIs, work quality, blockers, risks, decisions, and follow-ups.

If an earlier run is failed or incomplete, do not make a replacement or child task. Preserve its recovery reference. Continue the same run only if a native continuation capability explicitly targets it; otherwise skip duplicate work and surface the recovery blocker.

USER.md is the sole source for the primary channel, safe endpoint locator, connection state, and standing send authorization. The meeting must read new inbound replies on that channel before deciding and use them as evidence. If no channel is chosen, ask one onboarding question; if the connector is missing, request only that specific connector. In either blocked case, do not make a channel-dependent decision; continue only work that cannot be invalidated by missing replies and record the blocker.

Persist full admitted-meeting minutes or the compact no-op record under second-brain/wiki/meetings/ using teams/MEETING_MINUTES_TEMPLATE.md. Make the record reachable from second-brain/wiki/index.md through the meetings index and append the material operation to second-brain/wiki/log.md. In minutes, store only channel type, safe locator, privacy-safe summary, and date—never the private endpoint or sensitive content.

Deliver conclusions, decisions needed, and proactive updates through the USER.md primary channel. Before any external send, prepare the exact content, target, timing, and material risk and request explicit in-app approval unless USER.md precisely authorizes that exact message type and audience. Human calendar invitations and access changes also require explicit approval.

After the applicable durable-record checks pass, run a live capability probe for the current scheduled run. A configured tool name, prompt claim, or prior run is not proof. Self-archive a completed or skipped_no_op run only when the probe explicitly confirms the action is callable and cannot disable, delete, or mutate the recurring schedule. If support is absent, unsupported, or ambiguous, do not attempt archive: mark archive_pending with probe evidence and a cleanup owner, then finish non-blockingly. If a supported archive call fails, preserve completion and mark archive_pending.

If the meeting fails or remains incomplete, save durable partial minutes, exact blocker, escalation, continuation owner, and native recovery reference. Leave that scheduled run unarchived and recoverable. Never create a child or replacement task.

Only after the native team schedule and system-wide caps are confirmed, record its real automation_id, cadence, rationale, timezone, installed status, enabled state, admission evidence, measurable leverage contract, continuation rule, and stop or sunset rule in the charter. Do not enable an incomplete charter.
```

## Verify one team schedule without running it

```text
Verify the selected team's recurring schedule without running a meeting or sending anything.

Resolve the starter root as the parent of init/TEAM_SCHEDULE_PROMPTS.md. Match the schedule by the selected charter's automation_id, stable team_id, and charter path.

Confirm there is exactly one match and no more than three active team schedules system-wide. Confirm the schedule is a native standalone scheduled task named exactly Team Name — Mandate; its scheduled run itself is the meeting occurrence; and its workflow creates no child task per occurrence.

Confirm every manager, worker, sponsor, participant, and owner uses Name — Role. Confirm the charter has admission evidence, measurable leverage with baseline and target, a continuation threshold, and stop or sunset rules. Confirm cadence has a written evidence-latency justification.

Confirm the run performs a manager-only admission preflight and records skipped_no_op without convening a full team when there is no new evidence, decision, blocker, or deliverable. Confirm only agenda-required workers activate, all inactive roles are explicitly reviewed, and activation cannot exceed four concurrent workers system-wide. Confirm Co-Founder — Team Sponsor participation follows the charter and agenda.

Confirm USER.md is the sole channel and permission source; inbound replies are checked before admission and decisions; canonical teams/MEETING_MINUTES_TEMPLATE.md routes records to second-brain/wiki/meetings/ and they are indexed and logged; and external sends require approval unless precisely authorized.

Confirm completed and skipped_no_op runs perform a capability probe and self-archive only when explicitly supported; unsupported or ambiguous cases become archive_pending non-blockingly. Confirm failed or incomplete runs save durable escalation and recovery state, remain unarchived, and never cause a child or replacement task.

Report each check as pass or fail. Do not silently repair or run the meeting.
```

## Review continuation or stop or sunset

```text
Review the selected active team's continuation and stop or sunset decision without running a meeting or sending anything.

Resolve the starter root as the parent of init/TEAM_SCHEDULE_PROMPTS.md. Read GOAL.md, teams/registry.md, teams/TEAM_CHARTER_TEMPLATE.md, teams/MEETING_MINUTES_TEMPLATE.md, the selected charter, and only the meeting records needed for its stated review window.

Compare the charter's measurable leverage baseline, target, minimum threshold, coordination-cost baseline, current value, source, and review deadline. Check whether the objective remains goal-linked, whether the next cadence window is expected to produce new evidence, a decision, a blocker, or a deliverable, and whether naming, permissions, quality gates, the three-schedule cap, and the four-worker cap remain valid.

Recommend continue only with dated evidence that the threshold is met or that an agreed leverage experiment is still inside its measurement window. Recommend pause or stop when two consecutive scheduled runs have no qualifying agenda signal. Recommend stop or sunset when the objective is complete or superseded, the leverage threshold fails at review, two consecutive admitted meetings produce no material decision or measurable progress, coordination cost exceeds demonstrated benefit, or there is no valid manager.

Report the exact evidence, measured leverage, coordination cost, decision, owner in Name — Role format, and next review or disable action. Do not disable, uninstall, archive, or send anything in this verification prompt.
```

## Disable or uninstall one team schedule

```text
Disable or uninstall only the native standalone team schedule identified by the selected charter.

Resolve the starter root as the parent of init/TEAM_SCHEDULE_PROMPTS.md. Match by automation_id, stable team_id, and charter path. If the target is not unique, stop.

For disable, disable the schedule and then mark the charter disabled while preserving automation_id, cadence, minutes, logs, follow-ups, archive_pending cleanup, and failed or incomplete scheduled runs.

For uninstall, remove only the confirmed native schedule, then mark the charter uninstalled and clear automation_id. Preserve the charter, minutes, logs, archive_pending cleanup, and failed or incomplete scheduled runs. Never archive an unfinished run merely because its schedule was disabled or removed.

Record the stop or sunset reason, measurable leverage result, remaining-work owner in Name — Role format, and recovery references. Recount active team schedules after the change.

Do not change the HEARTBEAT or DREAMING schedules, another team, a human calendar, or an external channel.
```
