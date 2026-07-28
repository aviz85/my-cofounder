# Compact and Archive Operation

## Purpose

Keep routine retrieval bounded and action execution reliable while retaining provenance, attempts, decisions, metrics, meetings, material history, and all immutable raw evidence.

This is an idempotent Second Brain maintenance operation. It may read the root routine log and indexed derived records, but its writes are limited to `second-brain/**`. It never edits root control files, `routines/`, `teams/`, `init/`, or `raw/`.

## Schedule and bounds

- Run once after the local ISO week closes, or in preview mode on request.
- Maintain exactly one current [canonical action register](../wiki/actions/register.md).
- Maintain one derived [seven-day active view](../wiki/actions/active-7d.md).
- Execute one unchanged action hash at most three times automatically, with default backoff of 1 hour after the first failure and 6 hours after the second.
- Partition closed material logs by calendar month and meeting indexes by year and month.
- Create at most one summary for each closed ISO week.
- Do not scan unindexed wiki shelves unless an indexed record identifies a required dependency.

## Preconditions

1. Determine the local service timestamp and timezone.
2. Read the [wiki index](../wiki/index.md), canonical action register, current operation log, relevant current goal fields, and only the indexed meeting or page records in the maintenance window.
3. Read `routines/run-log.md` only as append-only source evidence when routine entries are required. Never modify it.
4. Refuse apply mode if the action register front matter is invalid, duplicate action IDs exist, an owner is not formatted as `Name — Role`, or an archive target conflicts with different retained content.
5. Inventory proposed writes and compute their source digests before changing anything.

## 1. Reconcile the canonical action register

For every registered action:

1. Require `action_id`, `title`, `owner`, `status`, `goal_link`, `due`, `evidence_of_done`, `attempts`, `attempt_history`, `next_eligible_retry`, `execution_identity`, `action_hash`, `source_refs`, `created_at`, and `updated_at`.
2. Keep `action_id` stable forever and never reuse it.
3. Compute `action_hash` once as `sha256:<64 lowercase hex>` over UTF-8 canonical JSON for `execution_identity`, with keys sorted, strings Unicode-NFC normalized, surrounding whitespace removed, and internal whitespace collapsed. `execution_identity` contains the goal link, normalized action verb, target, and deliverable. Owner, status, due date, attempts, and retry time are excluded so reassignment, scheduling, and retries do not create duplicate actions.
4. Match a new candidate by `action_hash` before assigning an ID. If the hash already exists, update the existing record only with genuinely new evidence or state.
5. If duplicate records already exist, retain the earliest ID, merge distinct source references and attempt records, mark later IDs `cancelled` with `duplicate_of`, and retain those IDs through archival.
6. Require `attempts` to equal the number of unique entries in append-only `attempt_history`.
7. Do not execute when status is `awaiting_approval`, `pending_external`, `blocked`, `done`, or `cancelled`, or when the current time is earlier than `next_eligible_retry`.
8. Before an attempt, append an attempt record containing a stable attempt ID, timestamp, actor in `Name — Role` form, method, expected result, and idempotency key. Afterward add result, evidence locators, error class, and verification state to that same record.
9. Retry only a verified transient failure. Use default backoff of 1 hour after failed attempt 1 and 6 hours after failed attempt 2. After failed attempt 3, set `status: blocked` and `next_eligible_retry: null`; a further attempt requires new evidence or explicit authorization recorded in `source_refs`.
10. Use `awaiting_approval` for an action outside standing authority and `pending_external` after a non-repeatable external side effect whose outcome is not yet verified. Never retry either state merely because time passed.
11. Set `done` only when every required evidence-of-done criterion has a resolving observed locator and verification state. A successful tool response alone is insufficient.

Allowed transitions are:

```text
proposed -> ready | cancelled
ready -> in_progress | awaiting_approval | pending_external | retry_wait | blocked | done | cancelled
in_progress -> ready | awaiting_approval | pending_external | retry_wait | blocked | done | cancelled
awaiting_approval -> ready | cancelled
pending_external -> ready | done | blocked
retry_wait -> ready | blocked | cancelled
blocked -> ready | cancelled
done | cancelled -> archived
```

`archived` exists only in retained archive snapshots, not as a current-register status.

## 2. Extract active commitments before archiving

Inspect only new or changed records since the last successful compaction cursor:

- complete meeting minutes reachable through the meeting indexes;
- decisions, experiments, projects, and outputs linked from those records;
- material operation and routine entries in the seven-day window.

Promote an explicit open commitment only when its owner is verified as `Name — Role`, its goal link resolves, its due value is an ISO date or explicit `null`, and its evidence-of-done is testable. Preserve the source ID or durable relative locator. If a required field is unknown, leave the commitment in place and create or update a decision-relevant gap instead of inventing it.

Hash every candidate before registration. Existing hashes receive only new provenance, attempt, or state information. Source records and meeting minutes are evidence; they are not parallel action registers.

## 3. Rebuild the seven-day active view

Project from the canonical register into [active-7d.md](../wiki/actions/active-7d.md):

- every nonterminal action already overdue;
- every `ready`, `in_progress`, `awaiting_approval`, `pending_external`, or `blocked` action that is currently active, including one with no due date;
- every action due within the inclusive seven-day window;
- every `retry_wait` action whose `next_eligible_retry` falls within the window;
- terminal actions changed during the window, shown only in a compact recently-closed section.

Order executable actions by eligibility, due date, goal impact, then stable action ID. Include only IDs, compact state, dates, owner, evidence status, and links back to the canonical record or source; do not copy long evidence.

Set `source_digest` from the normalized projected records. If the digest and rendered content are unchanged, do not update `generated_at`, do not rewrite the view, and do not append a log entry.

## 4. Roll logs over monthly without loss

The Second Brain operation log is append-only within its active month. At the first maintenance run after a month closes:

1. Select complete closed-month entries by their entry timestamp.
2. Copy their entry blocks without editing into `wiki/archive/logs/YYYY/YYYY-MM.md`.
3. Store the source path, inclusive timestamp range, entry count, and SHA-256 digest of the exact ordered entry blocks in the archive file.
4. Verify the archive by count, digest, and link resolution.
5. Only after verification, relocate those exact blocks out of the active operation log; never alter an individual entry.
6. Append one rollover entry to the new active month with the archive path and verified digest.

When reading the append-only root `routines/run-log.md`, create a lossless monthly material partition at `wiki/archive/logs/routines/YYYY/YYYY-MM.md` with the same count-and-digest checks. Do not truncate, rewrite, or otherwise modify the root routine log.

A rerun with the same month and digest is a no-op. A conflicting digest is a hard failure; retain both sources unchanged and report the conflict.

## 5. Consolidate no-op state

- Do not create an action, operation entry, or notification for an occurrence that changed no evidence, action state, metric, decision, approval, blocker, question, retry state, index, or archive state.
- In weekly summaries and the active view, represent consecutive source no-ops as one range with count, first timestamp, last timestamp, and reason.
- Never erase or rewrite retained no-op evidence from source logs.
- If the whole compaction run produces the same digests, return `result: no_op` without changing files or timestamps.

## 6. Create one weekly summary

For each closed ISO week, create `wiki/archive/weekly/YYYY/YYYY-Www.md` with:

- `record_type: weekly_summary`, week, timezone, generated timestamp, and source digests in front matter;
- goal and metric movement;
- action IDs opened, attempted, blocked, completed, cancelled, or archived;
- commitments extracted and their source locators;
- decisions, experiments, meetings, failures, and contradictions;
- consolidated no-op ranges;
- unresolved gaps and the next eligible high-leverage action;
- relative recovery links to retained source records.

Label facts, inferences, hypotheses, recommendations, and decisions. If a summary with identical source digests already exists, do nothing. If late evidence changes a closed week, create a new revision that names `supersedes`; do not overwrite the earlier revision.

## 7. Partition meeting indexes

Keep meeting record paths required by the authoritative team template unchanged under `wiki/meetings/`. Partition only their indexes:

1. Create `wiki/meetings/YYYY/README.md` when a year first has a meeting.
2. Create `wiki/meetings/YYYY/YYYY-MM.md` when a month first has a meeting.
3. Link each meeting exactly once from its month index, each month from its year index, and each year from [the meetings shelf](../wiki/meetings/README.md).
4. Keep only the seven-day recent-meeting links and year routes on the meetings shelf.
5. Verify every meeting remains reachable from the main wiki index and that its operation-log evidence resolves.

Rerunning index partitioning must not reorder unchanged entries or create duplicate links.

## 8. Archive terminal actions and derived pages

### Actions

After a `done` or `cancelled` action has remained terminal for seven complete days:

1. Verify its final status, evidence, attempts, source references, stable ID, and action hash.
2. Append one full snapshot to `wiki/archive/actions/YYYY/YYYY-MM.md` with `status: archived`, `terminal_status`, and `archived_at`.
3. Verify the retained snapshot by stable ID and digest.
4. Remove it from the current register only after verification.

### Derived pages

Archive a superseded or inactive wiki page only after:

1. extracting every open commitment into the canonical action register;
2. verifying provenance and a current replacement or explicit archive reason;
3. copying the derived record under `wiki/archive/pages/<original-wiki-relative-path>`;
4. marking the retained copy `archived` with archive date, reason, original path, and replacement link when one exists;
5. replacing the original page with a short recovery pointer when an inbound link would otherwise break;
6. updating shelf and main-index routes.

Never move, rewrite, compact, or delete anything under `raw/`. Never delete source references, decision history, metric observations, attempt history, meeting minutes, or archive snapshots.

## Completion checks

The operation is complete only when:

- action IDs and attempt IDs are unique;
- every action field and transition passes the schema;
- no action is retryable before its eligibility time or beyond the attempt bound;
- completed actions have resolving evidence-of-done;
- the active-view digest matches the canonical projection;
- monthly partitions and action archives match counts and digests;
- every weekly summary links to its retained evidence;
- every meeting is reachable through its month, year, shelf, and main indexes;
- archived pages have recovery links and no unresolved active commitment;
- all internal links and YAML front matter parse;
- no file under `raw/` or outside `second-brain/**` changed.

Append a material `compact_archive` entry to the [operation log](../wiki/log.md) only when something changed. Report `result: no_op` without a write when nothing changed.
