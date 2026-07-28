# Disable, Roll Back, or Uninstall

The two base schedules, their fixed persistent tasks, and team schedules are separate controls.

## Fast-disable both base schedules

Copy into Codex:

```text
Disable both base Co-Founder schedules for this starter without deleting or archiving their fixed tasks.

Resolve the starter root as the parent of init/ROLLBACK.md. Match HEARTBEAT and DREAMING independently using each automation_id, task_id, and exact ALL-CAPS instruction path in routines/registry.yaml. Stop on ambiguity.

Disable only those two recurring schedules. Preserve the existing Co-Founder task, dedicated Dreaming task, both task IDs, scheduler IDs, separate checkpoints, routine logs, action register, USER.md, BUSINESS.md, GOAL.md, SOUL.md, and second-brain evidence.

After both scheduler changes are confirmed, set installation.enabled and both schedule enabled fields to false. Expire any abandoned checkpoint lease while preserving occurrence, cursor, action, outbound, question, and retry history. Report both results and how to re-enable them.
```

If scheduler access is unavailable, set `installation.enabled` and both schedule `enabled` fields to `false`. This guard prevents routine work if a task wakes, but does not stop scheduler wakeups.

## Re-enable without replacing tasks

Copy into Codex:

```text
Re-enable the existing HEARTBEAT and DREAMING schedules without creating schedules or tasks.

Resolve the starter root as the parent of init/ROLLBACK.md. Verify both stored automation_id and task_id pairs against the scheduler. HEARTBEAT must remain attached to its fixed Co-Founder task and DREAMING to its fixed dedicated persistent Dreaming task. Stop if any identity differs.

Repeat the capability probe, then enable both schedules with their existing cadence, timezone, nightly time, instruction file, and overlap policy. After confirmation, mark installation and both schedule entries installed and enabled. Preserve checkpoints, logs, and fixed task IDs. Do not run either routine.
```

## Uninstall base schedules

Uninstalling removes the two recurring scheduler entries. It preserves both persistent tasks and their history.

Copy into Codex:

```text
Uninstall exactly the two base schedules for this starter.

Resolve the starter root as the parent of init/ROLLBACK.md. Match the HEARTBEAT and DREAMING schedules independently by automation_id, fixed task_id, and exact ALL-CAPS instruction path. If either target is not unique, stop.

Remove only those two scheduler entries. Do not delete, archive, fork, or replace the fixed Co-Founder task or dedicated Dreaming task. Do not alter team schedules.

After both removals are confirmed, set installation.status to uninstalled, installation.enabled to false, both schedule statuses to uninstalled, both enabled fields to false, and both automation_id values to null. Preserve both task_id values for audit and intentional reinstallation, plus checkpoint deduplication history, routine logs, root context files, action register, and second-brain material.
```

## Rebind a missing fixed task

Never silently replace a missing fixed task ID.

1. Disable both base schedules.
2. Show the missing or mismatched task identity.
3. Ask the user to select the intended existing task or approve one-time creation of a new dedicated Dreaming task.
4. Update the scheduler binding and registry together.
5. Run the non-mutating verification.
6. Re-enable only after both task identities pass.

## Team schedule rollback

Use the **Disable or uninstall one team schedule** prompt in `init/TEAM_SCHEDULE_PROMPTS.md`.

Disabling or uninstalling a team schedule must not:

- change either base schedule;
- discard an incomplete meeting run or clear `archive_pending` without verification;
- delete charters, minutes, logs, or follow-ups;
- send a human calendar cancellation or external message without approval.

An incomplete meeting remains recoverable until durable minutes, escalation, channel handling, and follow-ups satisfy the completion gate. When archive support is unavailable or fails, preserve `archive_pending` for a later cleanup pass.
