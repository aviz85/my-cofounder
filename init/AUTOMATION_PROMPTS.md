# Copy-Paste Prompts for the Two Base Schedules

These are plain-language requests for Codex. They intentionally contain no raw scheduler directives.

## Install or update exactly two base schedules

```text
Create or update exactly two independent recurring heartbeat-style schedules for this starter: one HEARTBEAT schedule running every 4 hours, and one nightly DREAMING schedule.

Resolve the starter root as the parent directory of init/AUTOMATION_PROMPTS.md in the current workspace. If that is ambiguous, ask me for the starter root before changing anything.

Read SOUL.md, USER.md, BUSINESS.md, GOAL.md, the exact ALL-CAPS HEARTBEAT.md and DREAMING.md, and routines/registry.yaml. Ask one concise question for any missing schedule settings: my IANA timezone and preferred nightly local time in HH:MM format.

Before changing a schedule, run a non-business capability probe. Verify that this product surface can list and reconcile schedules, wake or continue an existing task, expose real scheduler and task IDs, honor the requested timezone/cadence/overlap behavior, and let both tasks read and write the starter plus their separate checkpoint files. Record whether a team meeting run can archive itself; if not, use archive_pending for team cleanup. Confirm that local scheduled work requires this computer and Codex desktop app to remain available. Do not require cross-task conversation-history access.

If any capability required by either base routine is unavailable or cannot be verified, keep both base schedules disabled, record the failed probe truthfully, and stop before creating or enabling anything.

Bind the every-4-hours schedule to one fixed existing Co-Founder task. Use the stored schedules.heartbeat.task_id when valid; otherwise identify this existing Co-Founder task and confirm its real task ID. Every occurrence must wake or continue that same task. It must never create, fork, or substitute a new task per run.

Bind the nightly schedule to one fixed dedicated persistent Dreaming task. Use the stored schedules.dreaming.task_id when valid. If no dedicated Dreaming task exists, create it once during initialization, record its real task ID, and reuse it forever. Every nightly occurrence must wake or continue that same Dreaming task. It must never create, fork, or substitute a new task per night.

Inspect existing schedules before creating anything. Match by stored automation_id first, then by the fixed task_id plus the exact ALL-CAPS instruction path. If one exact match exists, update it. If multiple candidates exist, stop and show the ambiguity. Do not delete, merge, or guess.

Configure exactly:
1. one schedule running every 4 hours, attached to the fixed Co-Founder task, with overlaps skipped and HEARTBEAT.md as its sole routine instruction;
2. one nightly schedule attached to the fixed Dreaming task, at the confirmed local time and timezone, with overlaps skipped and DREAMING.md as its sole routine instruction.

HEARTBEAT must not read or invoke DREAMING. DREAMING must not read or invoke HEARTBEAT. Do not create standalone per-run jobs.

Do not run either routine or take a business action during installation. Initialize and validate the two separate checkpoint files. Only after the capability probe, both schedules, both task bindings, and both checkpoints are confirmed, update routines/registry.yaml with installed and enabled status, real task IDs, real scheduler IDs, checkpoint paths, timezone, nightly time, probe result, and timestamps. If either side fails, disable both base schedules and record the partial state truthfully rather than claiming installation succeeded.

Finish with a plain-language confirmation of the two fixed task IDs, two scheduler IDs, cadences, instruction files, and disable procedure. Do not broaden permissions.
```

## Verify without running routines

```text
Verify the base routine installation without running HEARTBEAT.md or DREAMING.md and without taking any business action.

Resolve the starter root as the parent of init/AUTOMATION_PROMPTS.md. Confirm there are exactly two base recurring schedules and compare them with routines/registry.yaml.

Repeat the capability probe without mutating schedules. Confirm the computer/app availability dependency is documented and both separate checkpoint files parse. Verify that each checkpoint can prevent duplicate occurrence, action, outbound message, inbound item, and repeated question processing.

For HEARTBEAT, verify: the instruction is the exact ALL-CAPS HEARTBEAT.md only; cadence is every 4 hours; overlaps are skipped; the stored automation_id is real; the stored task_id identifies one existing Co-Founder task; every occurrence wakes or continues that fixed task; and no occurrence creates a new task.

For DREAMING, verify: the instruction is the exact ALL-CAPS DREAMING.md only; cadence is nightly at the configured IANA timezone and HH:MM time; overlaps are skipped; the stored automation_id is real; the stored task_id identifies one dedicated persistent Dreaming task; every occurrence wakes or continues that fixed task; and no occurrence creates a new task.

Confirm neither schedule reads, invokes, or routes to the other routine. Confirm there are no lowercase routine files or combined-router state. Confirm current availability comes from live connectors rather than USER.md. Report pass or fail for every check. Do not silently repair a mismatch; propose the smallest correction and ask before applying it.
```

## Update base schedule settings without rebinding tasks

```text
Update the existing two base schedules for this starter without creating new schedules or changing their fixed task IDs.

Resolve the starter root as the parent of init/AUTOMATION_PROMPTS.md. Match each schedule by its stored automation_id and task_id. Stop if either identity is missing, changed, duplicated, or ambiguous.

Ask me one concise question for the new IANA timezone and nightly HH:MM time. Keep HEARTBEAT on its every-4-hours cadence on its existing Co-Founder task with HEARTBEAT.md as its only instruction. Keep DREAMING nightly on its existing dedicated Dreaming task with DREAMING.md as its only instruction. Keep overlaps skipped and never create per-run tasks.

After both scheduler updates are confirmed, write matching values and an update timestamp to routines/registry.yaml. Preserve logs and task IDs. Do not run either routine or broaden permissions.
```

Team schedule prompts are in `init/TEAM_SCHEDULE_PROMPTS.md`. Disable and uninstall prompts are in `init/ROLLBACK.md`.
