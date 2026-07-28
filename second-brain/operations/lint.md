# Lint Operation

## Purpose

Detect structural, provenance, retrieval, privacy, and onboarding errors before they compound.

## Required checks

### Structure

- Required root files exist with exact case: `USER.md`, `BUSINESS.md`, and `GOAL.md`.
- Required Second Brain files exist: `AGENTS.md`, `SCHEMA.md`, `HOW_TO_USE.md`, `wiki/index.md`, and `wiki/log.md`.
- The canonical action files exist at `wiki/actions/register.md` and `wiki/actions/active-7d.md`, and `operations/compact-archive.md` exists.
- `inbox/`, `raw/`, `outputs/`, `templates/`, `operations/`, and the indexed wiki shelves exist.
- `templates/team-meeting.md` is a short compatibility pointer to `../../teams/MEETING_MINUTES_TEMPLATE.md`, contains no YAML front matter, and defines no meeting schema.

### Onboarding

- YAML front matter parses.
- `status` is one of `allowed_statuses`.
- Every `content_path`, `required_for_active`, and onboarding `answer_path` resolves to a declared field.
- Global onboarding priorities are unique.
- Empty starters contain no populated content values or hidden personal/business claims.
- Personal identity and profile facts, when later confirmed, appear only in `USER.md`.
- Canonical communication routing, consent, and any personal endpoint appear only in `USER.md`.
- Meeting and source communication references contain only channel type, safe stable message/thread locator, response summary, and date.
- The knowledge-gap queue begins with `items: []`, asks one question at a time, and contains no unsupported answer.
- An active goal contains one primary goal only and has every required active field.

### Sources and provenance

- `raw/` contains only textual source records, textual metadata, and stable locators; it contains no binary or large payload.
- Every source record has a stable source ID, origin, capture date, confidentiality, extraction status, and stable locator.
- Every binary or large payload is under repository-level `assets/`, is ignored by Git, and has a tracked sibling `<full-filename>.metadata.md`.
- Every asset sidecar includes a non-secret stable repository-relative or external backup locator and backup verification state.
- SHA-256 checksums are present and verified when an exact payload is available.
- No existing verified textual source or binary payload was overwritten.
- Every compiled factual claim points to a source ID and useful locator.
- Contradictions and unknowns are explicit.

### Retrieval

- Every internal Markdown link resolves with exact path case.
- Every active canonical wiki page is reachable from `wiki/index.md` directly or through one shelf index.
- Wiki IDs are unique.
- The canonical action register and seven-day active view are linked directly from `wiki/index.md`.
- Archived or superseded pages are labeled and do not masquerade as current guidance.
- Every team-meeting page contains the required minutes sections, formats participants as `Name — Role`, and has a corresponding append-only meeting entry in `wiki/log.md`.
- Every meeting is linked exactly once from its `YYYY/YYYY-MM.md` month index, every month index is linked from its `YYYY/README.md` year index, and every existing year index is linked from `wiki/meetings/README.md`.
- Every open knowledge gap identifies the decision/action it may unlock, expected impact, sensitivity cost, review trigger, and evidence threshold.
- Every answered or closed gap records source, locator, date, confidence, and closure evidence.

### Action reliability

- `wiki/actions/register.md` has parseable YAML front matter with `record_type: action_register`, `register_id: canonical-action-register`, `canonical: true`, one allowed-status declaration, and exactly one `actions` array.
- No other file declares itself a canonical action register.
- Every action has `action_id`, `title`, `owner`, `status`, `goal_link`, `due`, `evidence_of_done`, `attempts`, `attempt_history`, `next_eligible_retry`, `execution_identity`, `action_hash`, `source_refs`, `created_at`, and `updated_at`.
- Action IDs are unique, match `act-YYYYMMDD-short-slug`, are never reused, and match any retained archive snapshot.
- Every owner is formatted as nonblank `Name — Role`; names or roles are not inferred from unverified context.
- Status is allowed, follows the declared transition graph, and `archived` appears only in archive snapshots with `terminal_status` and `archived_at`.
- Goal links resolve. Due and retry values are ISO 8601 or explicit `null`.
- `evidence_of_done.required` and `.observed` are arrays. A `done` action has a resolving verified observation for every required criterion.
- `attempts` is a nonnegative integer equal to the number of unique append-only attempt records. Each attempt has a stable ID, timestamp, `Name — Role` actor, method, expected result, idempotency key, result, evidence locators, error class, and verification state.
- No action is marked retryable before `next_eligible_retry`, after three failed unchanged-hash attempts, while awaiting approval, or while an external effect remains pending.
- `execution_identity` contains goal link, normalized verb, target, and deliverable. Recomputed canonical JSON yields the stored `sha256:<64 lowercase hex>` action hash.
- Duplicate action hashes have one current canonical record; merged source references and attempt IDs are retained, and any later duplicate stable ID is explicitly linked and preserved through archival.
- `wiki/actions/active-7d.md` has `canonical: false`, points to `register.md`, spans exactly seven days when generated, and its source digest and action IDs match the canonical projection.

### Compaction and retention

- A compact/archive run writes only under `second-brain/**`; no root control, routine, team, init, or raw file changed.
- Closed operation-log month partitions retain the exact ordered entry blocks plus source path, inclusive timestamp range, entry count, and verified SHA-256 digest.
- Material routine-log partitions are copies under `wiki/archive/logs/routines/`; the root append-only routine log remains unchanged.
- Every closed ISO week has at most one current weekly-summary revision, with source digests and resolving evidence links. A later revision names the summary it supersedes.
- Repeated no-op state is consolidated only in derived views and summaries; retained source entries remain unchanged.
- A no-change compaction run did not update timestamps, rewrite files, or append an operation-log entry.
- A terminal action remained current for seven complete days and has a verified archive snapshot before removal from the canonical register.
- Before a derived page was archived, its open commitments were registered, provenance resolved, archive metadata was added, indexes were updated, and recovery links were preserved.
- No file under `raw/` was moved, renamed, rewritten, compacted, or deleted. Source references, decision history, metric observations, attempt history, meeting minutes, and archive snapshots remain recoverable.

### Safety and quality

- No credentials, tokens, or secrets are present.
- Personal data is minimized and confidentiality labels are respected.
- No signed URL, expiring access link, or secret external locator is stored in raw records or asset metadata.
- No personal address, phone number, email address, or other endpoint appears outside `USER.md`.
- Dates use ISO 8601.
- Unknowns are not replaced with invented values.
- Facts, inferences, hypotheses, recommendations, and decisions are distinguishable.

## Result format

Report:

```text
lint_status: pass | fail
checked_at: ISO-8601 timestamp
errors: count
warnings: count
findings:
  - severity:
    path:
    rule:
    message:
```

Record unresolved material findings in the [operation log](../wiki/log.md). A warning may be accepted only with a stated rationale.
