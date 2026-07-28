# Initialize Co-Founder Routines and Team Meetings

## Base installation

The starter installs exactly two independent recurring heartbeat-style schedules:

1. **HEARTBEAT — every 4 hours**
   - attached to one fixed, existing Co-Founder task ID;
   - wakes or continues that same task every 4 hours;
   - reads only the exact ALL-CAPS `HEARTBEAT.md` as its routine instruction;
   - never creates a new task for a heartbeat run;
   - always does real work regardless of time of day — only its proactive notifications to the user are gated by the working-hours window in `USER.md` (see `HEARTBEAT.md`'s "Working-hours gate on proactive sends").
2. **Nightly DREAMING**
   - attached to one fixed, dedicated persistent Dreaming task ID;
   - wakes or continues that same task once each night;
   - reads only the exact ALL-CAPS `DREAMING.md` as its routine instruction;
   - never creates a new task for a nightly run.

Neither base routine reads, invokes, routes to, or performs the other. They have separate task IDs, scheduler IDs, cadences, and enabled states.

The starter ships uninstalled and disabled.

## Product capability and availability

Scheduled local work depends on the computer and Codex desktop app remaining available. Sleep, shutdown, logout, app exit, lost filesystem access, or a missing connector can delay a run. Treat schedule cadence as a requested service time, not proof that execution occurred.

Before enabling anything, Codex must probe the current product surface rather than promise unsupported behavior. The probe must verify:

- schedules can be listed, created or updated, disabled, and matched without ambiguity;
- a schedule can wake or continue the intended existing task;
- real scheduler and task IDs can be read and persisted;
- the requested timezone, cadence, and overlap behavior are supported;
- the task can read and write this starter and its checkpoint files;
- connector availability can be tested read-only;
- task archive is callable from a team meeting run, or `archive_pending` fallback is configured.

Cross-task conversation-history access is not required. Durable actions, metrics, decisions, and commitments live in repository records.

If a required base capability is unavailable or cannot be verified, keep both base routines disabled and report the exact missing capability. Archive support is optional for base installation; when unavailable, team meetings preserve `archive_pending` for later cleanup.

## Required root files

The routines use these exact ALL-CAPS root files:

- `SOUL.md`
- `USER.md`
- `BUSINESS.md`
- `GOAL.md`
- `HEARTBEAT.md`
- `DREAMING.md`

Do not create lowercase aliases.

`USER.md` is the sole source for the chosen primary channel, provider preference, safe endpoint locator, consent, and precise standing outbound authorization. `connectors/registry.yaml` and the live provider are the source for current connection availability.

## Before installation

Choose:

1. an IANA timezone, such as `Europe/London` or `America/New_York`;
2. a nightly local time in `HH:MM` format.

Identify:

1. the existing Co-Founder task that the every-4-hours HEARTBEAT should always continue;
2. the dedicated persistent Dreaming task, creating it once during initialization only if it does not yet exist.

Do not place credentials, access tokens, private endpoints, or private keys in initialization or registry files. Confirm the computer and Codex desktop app can remain available for the requested local schedule.

## Install or update the two base schedules

1. Open this starter in Codex.
2. Open `init/AUTOMATION_PROMPTS.md`.
3. Copy the **Install or update exactly two base schedules** prompt.
4. Answer the one schedule question if timezone or nightly time is missing.
5. Let Codex run the capability probe and inspect task IDs and existing schedules before creating or changing anything.
6. Verify checkpoint paths, task bindings, and schedules with `init/CHECKLIST.md`.

The prompt is idempotent. It matches stored scheduler IDs first, then fixed task IDs plus exact instruction paths. It updates exact matches and stops on ambiguity rather than creating duplicates.

## Registry changes after successful installation

Only after both schedules and both fixed task bindings are confirmed:

- `installation.status` becomes `installed`;
- `installation.enabled` becomes `true`;
- the capability-probe results and timestamp are recorded;
- installation timestamps are recorded;
- `schedules.heartbeat` records its fixed Co-Founder `task_id`, scheduler `automation_id`, timezone, and enabled status;
- `schedules.dreaming` records its dedicated persistent `task_id`, scheduler `automation_id`, timezone, nightly local time, and enabled status.

There is no combined-router state file. Each independent routine owns a separate idempotency checkpoint named by the registry.

If either schedule cannot be verified, keep both disabled, record the partial configuration truthfully, and report the smallest recovery step. Do not run either routine during installation.

## Continuous knowledge completion

HEARTBEAT and DREAMING maintain ranked decision-relevant knowledge gaps. They:

- ask at most one high-leverage question in an appropriate cycle;
- persist verified answers promptly with provenance;
- continue useful independent goal work while waiting;
- avoid irrelevant, excessively precise, or sensitive collection;
- never delay action merely to make onboarding or the wiki complete.

The chosen user channel is part of this ongoing context. If none is chosen, the next appropriate cycle asks one channel onboarding question subject to its cooldown. If chosen but unavailable according to the live provider state, it requests only the connector needed for that exact channel.

## Team meeting schedules

Base initialization does not install a team.

For each team:

1. create a charter from `teams/TEAM_CHARTER_TEMPLATE.md`;
2. name the manager in `Name — Role` format;
3. let the manager choose and justify a recurring cadence;
4. use `init/TEAM_SCHEDULE_PROMPTS.md` to create or update one separate team schedule without duplicates;
5. use `teams/MEETING_MINUTES_TEMPLATE.md` for every meeting;
6. archive a completed native meeting run only after durable minutes, user-channel handling, and follow-ups are verified; if archive is unavailable or fails, record `archive_pending` without losing the meeting.

Human calendar invitations, external messages, and access changes require explicit approval unless `USER.md` precisely authorizes the exact action and audience.

## Safe verification and rollback

Use the non-running verification prompt in `init/AUTOMATION_PROMPTS.md`. It must not execute business actions or either routine.

For disabling, re-enabling, uninstalling, task-ID recovery, and team-schedule rollback, follow `init/ROLLBACK.md`.
