# Team Governance Registry

The Co-Founder may create a team only when parallel specialist work materially advances `GOAL.md`. The public starter ships with no installed team schedules.

## Required manager

Every team has exactly one manager. Every manager and worker display name must use:

`Name — Role`

Example: `Name — Research Manager`.

Every team display name must use:

`Team Name — Mandate`

Example: `Research Team — Decision-Grade Evidence`. Never create a bare first-name worker or a team name without its mandate.

The manager owns:

- relationship between the team's work and `GOAL.md`;
- worker briefs, activation, and synthesis;
- meeting cadence and its written rationale;
- team metrics, work quality, blockers, and escalations;
- the separate scheduled AI team meeting;
- complete meeting minutes and follow-through;
- permission and privacy compliance.

A team must not become active until its manager and charter are complete.

## Team admission, measurable leverage, and staffing

Create a team only when all of these are true:

1. there are at least two independent specialist workstreams;
2. parallel execution has a credible time, quality, or evidence advantage;
3. the expected gain exceeds the coordination cost;
4. each worker has a distinct deliverable and disjoint write scope;
5. a manager can integrate and verify the outputs;
6. one measurable leverage metric has a dated baseline, target, evidence source, and review window;
7. the complete charter passes the naming, authority, quality, and lifecycle checks below.

Measurable leverage is an observed benefit attributable to parallel team operation, such as reduced decision latency, hours saved, increased verified evidence per cycle, faster removal of the binding constraint, or improved outcome or leading-indicator movement. Do not use activity counts, attendance, number of meetings, or number of worker outputs as leverage. The charter must state the expected benefit, coordination-cost baseline, target, measurement window, owner, and source.

Start with the smallest viable team: one manager and the minimum workers needed. Do not create placeholder roles, duplicate researchers, or a meeting without active work. Across the entire system, never exceed four concurrent workers. Before activation, count workers already running for every team and non-team workflow by live-probing the scheduler's actual active task state — the same live probe already used for the archive-capability check — never a routine's own checkpoint, which `routines/registry.yaml` prohibits sharing across routines; queue, defer, or decline agenda work that would exceed the cap. A manager may add a role only after recording the concrete bottleneck it removes and the expected measurable leverage.

No more than three active team schedules may exist across the system. Before enabling a team schedule, enumerate active team schedules and refuse activation when it would create a fourth. A draft, disabled, or uninstalled team does not consume a schedule slot.

## Admission, continuation, and stop or sunset rules

A team becomes active only after all admission rules above pass, a schedule slot is available, and the manager records why recurring review at the proposed cadence is expected to receive decision-relevant evidence. Installation alone never makes an incomplete charter active.

Continue a team and its schedule only while all of these remain true:

- its objective still advances the active `GOAL.md`;
- the next review window is expected to contain new evidence, a decision, a blocker, or a deliverable;
- observed leverage meets the charter threshold or a dated experiment is still inside its agreed measurement window;
- coordination cost remains below the demonstrated or expected benefit;
- naming, permissions, quality gates, and system-wide caps remain valid.

At every admitted meeting, record the continuation decision, current leverage value, source, and next review date. Pause or release a worker when its deliverable is accepted, blocked without useful independent work, duplicated, or no longer goal-linked.

Stop or sunset a team schedule when its objective is complete or superseded, the leverage threshold fails at its review date, two consecutive scheduled runs have no qualifying agenda signal, two consecutive admitted meetings produce no material decision or measurable progress, coordination cost exceeds demonstrated leverage, or the charter loses a valid manager. Disable the schedule first; preserve incomplete or failed runs, durable records, and approved follow-ups. Sunset the team only after ownership of remaining work and recovery state is explicit.

## Required charter

Create one charter from `TEAM_CHARTER_TEMPLATE.md` for every team. Use a stable lowercase `team_id`.

The charter must define:

- team in `Team Name — Mandate` format;
- manager and every worker in `Name — Role` format;
- every worker role and activation expectation;
- optional Co-Founder participation;
- objective, scope, decision rights, and external-action boundary;
- recurring meeting cadence and why it matches feedback speed, risk, deadlines, and workload;
- scheduler `automation_id`, installation status, and enabled state;
- KPIs, guardrails, evidence sources, and owners;
- work-quality checks and acceptance thresholds;
- minutes, index, log, channel, follow-up, escalation, and archive rules;
- admission evidence, hard schedule and worker caps, continuation decision, measurable leverage, and stop or sunset condition.

Never abbreviate these display names in a schedule title, charter, brief, minutes, participant list, decision-owner field, or user-facing team reference. The native scheduled task name must exactly equal the charter's `Team Name — Mandate`. Every human or AI participant and owner must be written as `Name — Role`.

## Native standalone scheduled AI team meeting

Every active team has exactly one native standalone scheduled task owned by its manager. It must not be merged with `HEARTBEAT.md`, `DREAMING.md`, another team's schedule, or a generic dispatcher. The scheduled run itself is the meeting occurrence. It must never create, spawn, fork, or resume a child task for an occurrence.

The manager must:

1. choose and justify the cadence before installation;
2. check the charter's `automation_id` and existing schedules before creating anything;
3. update the exact existing team match when one exists;
4. stop on ambiguous or duplicate matches instead of creating another schedule;
5. enforce the maximum of three active team schedules before enabling;
6. run a manager-only agenda admission preflight before activating anyone;
7. activate only the workers needed for the admitted agenda and keep total running workers at or below four system-wide;
8. explicitly review every inactive role and record why it is inactive;
9. activate `Co-Founder — Team Sponsor` only when the admitted agenda and charter require it;
10. inspect inbound replies, team KPIs, work quality, blockers, decisions, risks, and follow-ups;
11. persist the occurrence record using canonical `teams/MEETING_MINUTES_TEMPLATE.md`.

Cadence follows feedback latency: do not meet more often than useful evidence can change. A meeting is admitted only when the manager can cite at least one new, decision-relevant item: evidence, a decision due, a blocker requiring resolution, or a deliverable ready for review. If none exists, mark the scheduled run `skipped_no_op`, record the checked sources and no-op reason in the canonical template, activate no workers or sponsor, and end without convening the full team. A no-op is not a recurring meeting.

If an earlier run is failed or incomplete, do not create a replacement or child task. Keep that run recoverable. A later run may continue it only through an explicit native continuation capability that targets the same run; otherwise record the overlap, surface the recovery reference, and skip duplicate work.

AI worker activation is internal. For a human calendar invitation, external message, or access change, prepare the exact content, target, timing, and material risk and request explicit approval before sending unless `USER.md` contains precise standing authorization for that exact action, audience, and channel.

## Mandatory user-channel loop

Before each team meeting decides:

1. read `USER.md`;
2. take the chosen primary channel, safe endpoint locator, connection status, and standing send permissions only from `USER.md`;
3. read new inbound replies on that channel;
4. use relevant replies as evidence in the meeting;
5. change conclusions and follow-ups when the reply changes current reality.

If no channel is chosen, ask one onboarding question. If it is chosen but not connected, check this team's most recent prior meeting record (via the meetings index in `second-brain/wiki/index.md`) for the same unresolved connector request before asking again, and request it only if that record shows no pending request or the connector's live status has changed since. Do not make a channel-dependent decision; continue only agenda work that cannot be invalidated by missing replies and record the blocker in this occurrence's minutes.

Deliver meeting conclusions, decisions needed, and proactive updates through that same primary channel. External sends require explicit in-app approval immediately before sending unless the exact message type and audience are covered by precise standing authorization in `USER.md`.

Minutes may contain only channel type, safe locator, privacy-safe summary, and date. Never copy a private endpoint, credentials, or sensitive message content into a charter, minutes, log, or worker brief.

## Minutes, follow-ups, and scheduled-run archive

Use `teams/MEETING_MINUTES_TEMPLATE.md` as the only canonical team-meeting record template. Save an admitted meeting's full minutes, or a no-op's compact admission record, under:

`second-brain/wiki/meetings/YYYY-MM-DDTHHMM-<team-id>.md`

After saving minutes:

1. add or verify the meeting link in `second-brain/wiki/index.md` or its meetings index;
2. append the material operation to `second-brain/wiki/log.md`;
3. handle the user-channel update under the approval boundary;
4. schedule or assign approved follow-ups with owners and due dates;
5. verify the durable minutes, index, log, update status, and follow-ups.

After the applicable completion checks pass, probe the capabilities actually callable by the current scheduled run. A charter flag, configured tool name, prompt claim, or prior run is not proof of support. Self-archive only when the live probe explicitly confirms that the current run can archive itself without disabling, deleting, or changing the recurring schedule.

If self-archive is supported, the completed scheduled run archives itself. If the capability is absent, unsupported, or ambiguous, do not attempt an archive call: mark the completed run `archive_pending`, record the probe evidence and cleanup owner, and finish non-blockingly so later scheduled runs are unaffected. If a supported archive call fails, preserve completion, mark `archive_pending` with the failure, and leave cleanup recoverable.

If a scheduled run fails or remains incomplete:

- persist durable partial minutes;
- save the exact blocker and escalation;
- mark its recovery state and continuation owner;
- leave the scheduled run unarchived;
- continue that same run only through native continuation, never through a child or replacement task.

Never archive a failed or incomplete run. Never archive before durable minutes and escalation state are saved. Archive capability is an optimization for completed attempts, not a completion gate.

## Delegation contract

Every worker brief must include:

- objective and relationship to `GOAL.md`;
- exact deliverable and deadline;
- evidence standard;
- allowed tools and disjoint write scope;
- external-action and channel boundary;
- success and guardrail metrics;
- quality checks;
- return format and escalation condition.

Write scope must resolve into the shared canonical locations — `second-brain/wiki/`, the action register, or the gap queue — never a team-private file or location the rest of the system has no instruction to read. A team exists to feed the one shared brain the whole system reads, never to maintain a separate one; disjoint write scope means workers don't collide with each other, not that a team gets its own silo.

The manager reviews every worker's output. Delegation never transfers the user's decision rights or grants broader channel permissions.

## Default role patterns

| Role | Responsibility | Suggested skill |
|---|---|---|
| Memory steward | Capture, retrieve, cite, lint, and maintain knowledge | `manage-second-brain` |
| Onboarding lead | Fill decision-relevant gaps one question at a time | `onboard-cofounder` |
| Measurement lead | Define decision-useful outcome, leading, input, and guardrail metrics | `design-goal-metrics` |
| Strategy librarian | Retrieve the smallest useful playbook set and produce an execution brief | `select-business-playbook` |

Do not create teams, roles, or meetings for performative activity.
