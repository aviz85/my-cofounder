# Initialization Checklist

## Before installation

- [ ] Exact ALL-CAPS `SOUL.md`, `USER.md`, `BUSINESS.md`, `GOAL.md`, `HEARTBEAT.md`, and `DREAMING.md` exist.
- [ ] Lowercase routine aliases do not exist.
- [ ] There is no combined router; separate heartbeat and dreaming checkpoint paths exist and parse.
- [ ] `routines/registry.yaml` is uninstalled and disabled.
- [ ] Both schedule entries have `automation_id: null` and `task_id: null`.
- [ ] You know the IANA timezone and nightly `HH:MM` time.
- [ ] The computer and Codex desktop app can remain available for local scheduled work.

## Capability probe

- [ ] Schedule list/create-or-update/disable operations are exposed.
- [ ] Existing-task wake or continuation is supported.
- [ ] Real scheduler and task IDs are readable.
- [ ] Requested timezone, cadence, and overlap behavior are supported.
- [ ] Both tasks can read and write the starter and their own checkpoint.
- [ ] Required connectors can be tested read-only.
- [ ] Team-run archive support is recorded as supported or `archive_pending` fallback.
- [ ] Missing required capabilities keep both base schedules disabled.

## Fixed task lifecycle

- [ ] HEARTBEAT is bound to one existing Co-Founder task ID.
- [ ] Every 4-hour occurrence wakes or continues that same task.
- [ ] No heartbeat occurrence creates or forks a new task.
- [ ] DREAMING is bound to one dedicated persistent Dreaming task ID.
- [ ] Every nightly occurrence wakes or continues that same task.
- [ ] No nightly occurrence creates or forks a new task.

## Exactly two base schedules

- [ ] One schedule runs every 4 hours, skips overlaps, and reads only `HEARTBEAT.md`.
- [ ] One schedule is nightly at the configured timezone and time, skips overlaps, and reads only `DREAMING.md`.
- [ ] Neither base schedule reads, invokes, or routes to the other.
- [ ] There are no duplicate base schedules or standalone per-run jobs.
- [ ] Existing exact matches were updated rather than replaced.

## Registry after successful installation

- [ ] `installation.status` is `installed`.
- [ ] `installation.enabled` is `true`.
- [ ] Both real task IDs and scheduler IDs are recorded.
- [ ] Installation and update timestamps are ISO 8601 values.
- [ ] Timezone and nightly local time match the schedulers.
- [ ] Both schedule entries are installed and enabled.
- [ ] No permission boundary was broadened.
- [ ] Capability-probe results and separate checkpoint paths are recorded.
- [ ] Checkpoints contain occurrence, lease, retry/backoff, action/message hash, question cooldown, and inbound-cursor state.

## Channel and knowledge behavior

- [ ] `USER.md` is the sole source for channel choice, provider preference, safe endpoint locator, consent, and standing send authorization.
- [ ] `connectors/registry.yaml` plus the live provider are the source for current availability.
- [ ] Inbound cursor and outbound deduplication state live in the relevant checkpoint.
- [ ] HEARTBEAT reads new inbound replies before deciding.
- [ ] Missing channel selection triggers one onboarding question; missing access triggers one specific connector request.
- [ ] External sends require explicit in-app approval unless `USER.md` precisely authorizes the exact message type and audience.
- [ ] A proactive notification outside `USER.md`'s `communication.proactive_window` (or its default) is queued in the checkpoint, not sent, and never delays the underlying goal work itself.
- [ ] Channel evidence stores only type, safe locator, privacy-safe summary, and date.
- [ ] HEARTBEAT and DREAMING maintain ranked decision-relevant gaps.
- [ ] At most one high-leverage question is asked in an appropriate cycle.
- [ ] Verified answers are persisted with provenance.
- [ ] Useful goal work continues in parallel without waiting for completeness.
- [ ] Irrelevant or sensitive information is not collected.

## Team governance

- [ ] Every active team has a charter from `teams/TEAM_CHARTER_TEMPLATE.md`.
- [ ] Its manager uses `Name — Role`.
- [ ] Cadence and rationale, `automation_id`, KPIs, and quality checks are present.
- [ ] Exactly one separate team schedule matches the charter.
- [ ] Only agenda-required workers are activated; every inactive charter role is explicitly reviewed.
- [ ] New inbound replies are read before team decisions.
- [ ] Full minutes use `teams/MEETING_MINUTES_TEMPLATE.md`.
- [ ] Minutes route to `second-brain/wiki/meetings/`, are indexed, and are logged.
- [ ] Conclusions, decisions needed, and proactive updates use the `USER.md` primary channel under the approval boundary.
- [ ] Completed meeting runs archive only after durable minutes, channel handling, and follow-ups; unavailable or failed archive records `archive_pending`.
- [ ] Failed or incomplete meetings persist escalation and remain unarchived.

## Acceptance

Installation is complete only when scheduler state, fixed task IDs, and `routines/registry.yaml` agree. If any identity is uncertain, keep both base schedules disabled.
