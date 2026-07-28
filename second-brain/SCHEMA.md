# Second Brain Schema

## Design basis

This starter adapts Andrej Karpathy's [LLM Wiki pattern](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f): preserve raw sources as immutable truth, let an LLM incrementally maintain a persistent interlinked Markdown wiki, and govern the system through an explicit schema plus ingest, query, lint, index, and append-only log operations.

The three-layer separation—raw sources, LLM-maintained wiki, and schema—is from the source pattern. The exact directories, provenance fields, privacy rules, goal integration, asset handling, meeting records, and routine contracts below are deliberate adaptations for this starter; they are not presented as filenames or requirements prescribed by Karpathy.

## Root onboarding documents

| File | Purpose | Canonical status |
|---|---|---|
| [USER.md](../USER.md) | User-provided identity and collaboration preferences | Canonical when populated |
| [BUSINESS.md](../BUSINESS.md) | User-confirmed business facts | Canonical when populated |
| [GOAL.md](../GOAL.md) | Exactly one primary strategic goal | Canonical when confirmed active |

All three begin semantically empty. Their YAML front matter contains:

- `status` and `allowed_statuses`;
- a machine-readable `empty_detection` contract;
- `required_for_active` paths;
- globally ranked onboarding questions with an explicit `completion_mode`;
- empty content fields represented by `null`, `[]`, or `{}`.

An agent must determine emptiness from the declared content paths, not from the presence of headings, comments, schema instructions, or prompts.

For onboarding, `all_answer_paths_nonblank` completes a question only when every declared answer path has a value; `any_answer_path_nonblank` completes it after at least one declared answer path has a value. Across all three documents, the agent asks only the incomplete question with the lowest `global_priority`, independent of startup read order.

The first-pass sequence is:

1. priority `10` — one measurable strategic outcome, target, and deadline;
2. priority `20` — minimum business context;
3. priority `30` — communication routing, cadence, allowed message types, authorization scope, fallback, and consent;
4. priorities `40` and `50` — preferred form of address and collaboration preferences.

Lower-priority follow-ups collect baseline, missing business specifics, constraints, the metric system, next action, and additional business context.

## Data layers

| Layer | Mutability | Trust | Purpose |
|---|---|---|---|
| [inbox](inbox/README.md) | Mutable | Unreviewed | Temporary text-only intake and triage |
| [raw](raw/README.md) | Immutable after ingest | Source truth | Textual source records, textual metadata, and stable locators |
| Repository-level [assets](../assets/README.md) | Payload immutable after verification; metadata maintainable | Binary or large source truth | Git-ignored payloads plus tracked sibling metadata |
| [wiki](wiki/index.md) | LLM-maintained | Compiled and provenance-backed | Canonical retrieval layer |
| [outputs](outputs/README.md) | Regenerable | Derived | Text-only reports, briefs, and query artifacts |

Policy files such as each directory's `README.md` describe the layer and are not evidence payloads.

## Source records

Every source receives a stable source ID in the form `src-YYYYMMDD-short-slug`, capture context, origin, confidentiality, retrieval keywords, extraction status, and a stable locator.

For a small textual source:

- preserve the text under `raw/<source-id>/`;
- create a textual record from the [source metadata template](templates/source.metadata.md);
- record a SHA-256 checksum when an exact payload is preserved;
- never edit the verified source text; ingest a changed version as a new record.

For a binary or large source:

- place the payload only under repository-level `assets/<kind>/<YYYY>/<YYYY-MM-DD>-<topic>/`;
- verify that Git ignores the payload;
- create a tracked sibling named `<full-filename>.metadata.md` using the repository [asset contract](../assets/README.md);
- store only a textual source record and stable repository-relative or non-secret external locator under `raw/`;
- never copy the payload into `raw/`, `wiki/`, or `outputs/`.

If a source changes, ingest the changed material as a new source or version and link it with `supersedes` or `superseded_by`. Never overwrite the earlier verified text or binary payload.

## Wiki pages

Create compiled pages from the [wiki page template](templates/wiki-page.md). Each page must have:

- stable ID and page type;
- status and last-reviewed date;
- concise summary;
- explicit source references;
- claims labeled as fact, inference, hypothesis, recommendation, or decision;
- open contradictions and knowledge gaps when applicable.

Use one page per durable concept when practical. A page may synthesize several sources, but a factual statement without provenance is incomplete.

## Provenance

A useful source reference contains:

```text
source_id: src-YYYYMMDD-short-slug
locator: page, timestamp, section, row, message ID, or another precise pointer
```

Use these epistemic labels consistently:

- **fact** — directly supported by cited evidence;
- **inference** — reasoned from cited facts;
- **hypothesis** — testable but not yet established;
- **recommendation** — proposed action;
- **decision** — a choice made by an authorized person or process.

## Canonical action register

The [canonical action register](wiki/actions/register.md) is the sole current source of truth for commitments and execution state. Meeting minutes, decisions, projects, outputs, routine checkpoints, and weekly summaries may point to actions, but they are evidence or views rather than parallel registers. The [seven-day active view](wiki/actions/active-7d.md) is derived from the register and must never win a conflict with it.

Every action record has this shape:

```yaml
action_id: act-YYYYMMDD-short-slug
title: null
owner: "Name — Role"
status: proposed
goal_link: ../../../GOAL.md
due: null
evidence_of_done:
  required: []
  observed: []
attempts: 0
attempt_history: []
next_eligible_retry: null
execution_identity:
  goal_link: ../../../GOAL.md
  verb: null
  target: null
  deliverable: null
action_hash: null
source_refs: []
created_at: null
updated_at: null
```

The fields are governed as follows:

- `action_id` is stable, uses `act-YYYYMMDD-short-slug`, is never regenerated or reused, and survives archival.
- `owner` is one verified `Name — Role`; a role alone or an unverified inferred identity is invalid.
- `status` is one of `proposed`, `ready`, `in_progress`, `awaiting_approval`, `pending_external`, `retry_wait`, `blocked`, `done`, or `cancelled`. `archived` is used only in retained archive snapshots.
- `goal_link` is a resolving relative link to the active goal or a durable goal-history record. An agent must not silently repair a missing goal by inventing one.
- `due` is an ISO 8601 date or timestamp, or explicit `null` while genuinely unknown.
- `evidence_of_done.required` defines testable completion criteria. `evidence_of_done.observed` stores precise resolving locators, verification state, time, and verifier. A tool success response alone is not evidence of the outcome.
- `attempts` equals the number of unique append-only `attempt_history` entries. Each attempt records a stable attempt ID, time, actor, method, idempotency key, expected result, actual result, evidence locators, error class, and verification state.
- `next_eligible_retry` is an ISO 8601 timestamp or `null`. An action is not retryable before it.
- `execution_identity` contains the immutable semantic identity of the action: goal link, normalized verb, target, and deliverable.
- `action_hash` is `sha256:<64 lowercase hex>` over canonical JSON for `execution_identity`: sorted keys, UTF-8, Unicode NFC, trimmed surrounding whitespace, and collapsed internal whitespace. Owner, status, due, attempts, and retry time are excluded so reassignment or retry does not create a duplicate action.
- `source_refs` retains the meeting, decision, output, operation entry, source ID, or other durable locator that created or changed the commitment.

Hash candidates before assigning a new ID. The same action hash updates the existing record only when it adds evidence or state. Exact repeats are no-ops. Automatic execution is limited to three unchanged-hash attempts total: after failures one and two, default backoff is 1 hour and 6 hours; a third failed attempt becomes `blocked` and requires new evidence or explicit authorization before another attempt. `awaiting_approval` and `pending_external` never become retryable merely because time passed.

Set `done` only when all required evidence-of-done criteria resolve. Keep terminal actions in the current register for seven complete days, then retain a verified snapshot in `wiki/archive/actions/YYYY/YYYY-MM.md` before removing them from the current register.

## Wiki shelves

The [wiki index](wiki/index.md) routes retrieval across these initially empty shelves:

- business, customers, goals, and projects;
- sources, entities, and concepts;
- actions, decisions, experiments, metrics, and meetings;
- queries, gaps, and archive.

Shelf `README.md` files are routing pages, not business data.

## Durable record types

- Use the [decision template](templates/decision.md) for consequential choices, alternatives, rationale, evidence, owner, and review date.
- Use the [experiment template](templates/experiment.md) for hypotheses, protocol, metrics, stop rules, results, and learning.
- Use the [metric template](templates/metric.md) for outcome, leading, input, diagnostic, and guardrail measures.
- The Second Brain [team-meeting compatibility pointer](templates/team-meeting.md) routes to the single authoritative repository team-meeting template; it does not define a second schema.
- Use the [knowledge-gap template](templates/knowledge-gap.md) and the empty [gap queue](wiki/gaps/queue.md) to rank missing facts by expected decision/action impact, preserve provenance and confidence, and close only with evidence.
- Register every accountable follow-up in the canonical action register; meeting action tables are source evidence, not a second action ledger.
- Every meeting creation or material update must append a meeting operation to the [operation log](wiki/log.md).
- Store durable query results in `outputs/` and link canonical conclusions into the wiki.

## Operations

The operating contracts are:

- [ingest](operations/ingest.md) — preserve evidence, create metadata, compile knowledge, and log;
- [query](operations/query.md) — retrieve minimally, answer with provenance, and save durable outputs when useful;
- [compact and archive](operations/compact-archive.md) — reconcile actions, maintain bounded views, roll logs over, summarize, partition indexes, and retain history;
- [lint](operations/lint.md) — validate structure, front matter, links, provenance, immutability, and privacy.

These are agent-executed contracts. This starter does not pretend that documentation alone is an automated ingestion service.

## Heartbeat integration

The repository [heartbeat](../HEARTBEAT.md) remains the single source of truth for the proactive routine. It reads `USER.md`, `BUSINESS.md`, and `GOAL.md` in that order, but question selection is global: while onboarding is incomplete, the goal outcome/target/deadline dependency is first, followed by minimum business context and communication setup. Remaining gaps are ranked by expected decision/action impact, with declared global priority as the default rank and tie-breaker.

An onboarding heartbeat may do safe discovery that does not depend on missing answers, asks at most one relevant gap question, then records the blocker and stops the business-action loop. With an active goal, it begins with the canonical action register and bounded seven-day view, then retrieves only relevant wiki evidence and may invoke ingest, query, or lint. The repository [dreaming routine](../DREAMING.md) revisits open gaps, reconciles action evidence and retry state, and runs [compact and archive](operations/compact-archive.md) when weekly maintenance is due. Routine run evidence stays in the routine log; the [Second Brain log](wiki/log.md) receives an entry only for material Second Brain operations.

## Bounded views and archive retention

The compact/archive operation bounds retrieval without discarding evidence:

- `wiki/actions/active-7d.md` contains the derived seven-day action and retry window plus recently closed actions;
- closed operation-log months are retained under `wiki/archive/logs/YYYY/YYYY-MM.md`;
- material root routine-log entries are copied into digest-verified monthly partitions under `wiki/archive/logs/routines/YYYY/YYYY-MM.md` without modifying the root routine log;
- one evidence-linked summary is retained for each closed ISO week under `wiki/archive/weekly/YYYY/YYYY-Www.md`;
- terminal action snapshots are retained under `wiki/archive/actions/YYYY/YYYY-MM.md`;
- meeting records keep the path required by the root team template while indexes partition through `wiki/meetings/YYYY/README.md` and `wiki/meetings/YYYY/YYYY-MM.md`;
- archived derived pages live under `wiki/archive/pages/` with status, reason, date, original path, replacement when present, and a recovery pointer when needed.

Compaction extracts active commitments before any archive transition. It consolidates repeated no-op state in views and summaries but never removes the underlying retained entries. If source digests and rendered outputs are unchanged, the operation changes no file or timestamp and appends no operation entry.

Nothing under `raw/` is moved, rewritten, compacted, or deleted. Source references, decision history, metric observations, meeting minutes, attempt history, and archive snapshots remain recoverable.

## Knowledge-gap queue

The [gap queue](wiki/gaps/queue.md) begins with `items: []`; empty onboarding documents do not justify fabricated answers or prefilled gap claims.

When operating the queue:

1. derive candidates from incomplete onboarding paths, open decisions/actions, contradictions, stale evidence, and missing sources;
2. discard facts that are irrelevant to a current decision/action or would require disproportionate sensitive-data collection;
3. preserve the fixed first dependencies for goal, minimum business context, and communication setup;
4. rank remaining candidates by expected decision impact, action-unlocking value, urgency, evidence deficit, collection cost, and sensitivity risk;
5. ask exactly one highest-ranked question per interactive turn or heartbeat;
6. persist only verified answers to the declared canonical path;
7. mark answer source, locator, observed date, and confidence;
8. close a gap only when its evidence threshold is met, preserving closure evidence and history;
9. revisit open gaps during heartbeat and dreaming.

## Index and log

- [index.md](wiki/index.md) is the canonical routing page. Every active canonical wiki page must be reachable from it directly or through one shelf index.
- [log.md](wiki/log.md) is append-only within its active month. Log material ingestion, compilation, archival, schema changes, decisions, and lint findings. Closed-month entry blocks may be relocated only through the digest-verified compact/archive operation and remain byte-preserved in the archive.

## Naming and dates

- Wiki files: descriptive `kebab-case.md`.
- IDs: stable lowercase prefixes such as `src-`, `page-`, `act-`, `dec-`, `exp-`, and `metric-`.
- Dates: ISO 8601 (`YYYY-MM-DD` or a full timestamp with timezone).
- Links: relative inside the starter, with exact case-sensitive paths.

## Privacy and security

- Do not store credentials or secrets.
- Minimize personal data and mark confidentiality in source metadata.
- Canonical user communication configuration and any consented personal endpoint belong only in [USER.md](../USER.md).
- Meeting and source records may retain only channel type, a safe stable message or thread locator, a response summary, and a date; they must never retain a personal endpoint.
- Keep every binary or large payload under repository-level `assets/`, verify that Git ignores it, and keep its metadata sidecar tracked.
- Never turn assistant-generated prose into a fact without supporting evidence.
- Do not copy source data into outputs or wiki pages when a summary and precise reference are sufficient.
