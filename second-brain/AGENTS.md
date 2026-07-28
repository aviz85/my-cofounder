# Agent Operating Contract

This file defines how an agent should operate this starter Second Brain. It is an implementation convention for this repository, not a claim that any external author prescribed these exact filenames.

This contract supplements any policy or agent instructions at the repository root and never weakens their privacy, approval, or safety boundaries.

## Startup

1. Read [USER.md](../USER.md), [BUSINESS.md](../BUSINESS.md), and [GOAL.md](../GOAL.md).
2. Apply each file's `empty_detection` rule to its declared `content_paths`; do not treat headings, comments, schema metadata, or onboarding prompts as user data.
3. If onboarding is incomplete, collect all incomplete questions from the three files and any open items in the [knowledge-gap queue](wiki/gaps/queue.md). A question is complete according to its `completion_mode`: either every declared answer path is nonblank or at least one is nonblank.
4. Preserve the initial dependencies: priority `10` asks for the strategic outcome, target, and deadline first; priority `20` asks for minimum business context; priority `30` asks for communication routing and consent.
5. Rank remaining missing facts by expected decision impact, action-unlocking value, urgency, evidence deficit, collection cost, and sensitivity risk. Use declared `global_priority` as the default rank and tie-breaker when evidence does not justify a change.
6. Ask exactly the highest-ranked relevant question and stop onboarding for the turn.
7. Persist a verified answer to its declared canonical path, then record source and confidence in the gap record. Never infer an answer from silence.
8. Close a gap only when its evidence threshold is met; otherwise keep it open with a review trigger.
9. Recompute the document status using its `status_rule`.
10. When an active goal exists, read the [wiki index](wiki/index.md), the [canonical action register](wiki/actions/register.md), and the [seven-day active view](wiki/actions/active-7d.md), then retrieve only the shelves and sources relevant to that goal.

## Layer boundaries

- `inbox/` is a mutable staging area. Material there is not yet trusted or canonical.
- `raw/` stores immutable textual source records, textual metadata, and stable relative or external locators only. It must never contain a binary or large payload.
- Repository-level [`assets/`](../assets/README.md) is the only home for binary or large payloads. Each payload must be ignored by Git and have a tracked sibling named `<full-filename>.metadata.md`.
- `wiki/` is the agent-maintained knowledge layer. It may be revised when evidence changes, but factual claims require provenance.
- `outputs/` contains text-only derived deliverables and query results. Binary or large derived outputs belong in repository-level `assets/`.
- `templates/` and `operations/` define reusable structures and procedures.

## Operating loop

1. **Ingest** using the [ingest contract](operations/ingest.md).
2. **Query** using the [query contract](operations/query.md).
3. **Lint** using the [lint contract](operations/lint.md).
4. **Compact and archive** using the [bounded maintenance contract](operations/compact-archive.md) when weekly maintenance or a month boundary is due.
5. Update the [wiki index](wiki/index.md) when canonical pages are added, moved, archived, or materially re-scoped.
6. Append material operations to the [operation log](wiki/log.md). Never edit an earlier entry; closed-month entries may be relocated only after digest-verified archival.

The repository's [heartbeat](../HEARTBEAT.md) revisits open gaps, asks at most one relevant question, and stops its action loop when a missing answer blocks useful work. The repository's [dreaming routine](../DREAMING.md) re-ranks open gaps, checks stale confidence and closure evidence, and proposes the next question without inventing answers. With an active goal, routine execution belongs in the routine log; add to the Second Brain operation log only when the routine performs a material ingest, compilation, archival, schema change, decision, durable query, gap-queue update, or team-meeting operation.

## Action reliability

- Use [wiki/actions/register.md](wiki/actions/register.md) as the sole canonical current action ledger. Other pages may cite actions but must not maintain a competing status.
- Require every action to have a stable ID, `Name — Role` owner, allowed status, resolving goal link, due value, testable evidence-of-done, attempt count and append-only history, next eligible retry, source references, execution identity, and action hash.
- Hash the normalized execution identity before assigning a new ID. Reconcile an existing hash instead of repeating the action.
- Do not execute an action awaiting approval, pending external verification, blocked, complete, cancelled, or inside retry backoff.
- Limit automatic retry of an unchanged action hash to three verified transient failures. After the third failure, block it until new evidence or explicit authorization is recorded.
- Mark completion only from resolving evidence-of-done. Preserve all attempts and archive terminal action snapshots only through the compact/archive contract.
- Extract open commitments from new meetings and linked outputs before archiving any derived page.

## Evidence rules

- Separate fact, inference, hypothesis, recommendation, and decision.
- Every compiled factual claim must identify an immutable source ID and a useful locator.
- Preserve disagreements between sources; do not average contradictions into false certainty.
- Record unknown values as `null`, `unknown`, or an explicit knowledge gap.
- Do not store secrets, access tokens, unnecessary personal data, or fabricated facts.
- Do not collect a gap merely because a field exists. Exclude facts that are irrelevant to a current decision/action or whose sensitivity cost exceeds their expected value.
- Store user communication channels, sensitive endpoints, cadence, allowed message types, standing send scope, fallback, and consent only in [USER.md](../USER.md).
- Meeting and source records may store only channel type, a safe stable message or thread locator, response summary, and date. They must never store a personal endpoint.
- Treat user corrections as new evidence and preserve the reason for the change.

## Goal rules

- Support exactly one active primary strategic goal.
- Keep the outcome, baseline, target, deadline, constraints, metrics, assumptions, and next action visible.
- Prefer actions that create evidence, customer value, learning, or measurable progress.
- Do not silently replace the goal. Record the prior result and obtain user confirmation.

## Write discipline

- Use descriptive kebab-case filenames for new wiki pages.
- Prefer one durable concept per page.
- Use relative Markdown links inside this starter.
- Create textual raw records and locators using the [source metadata template](templates/source.metadata.md).
- Before accepting any binary or large payload, verify that it is under repository-level `assets/`, ignored by Git, and paired with its tracked metadata sidecar.
- Use the supplied page, decision, experiment, metric, and knowledge-gap templates. [templates/team-meeting.md](templates/team-meeting.md) is a compatibility pointer to the single authoritative root team-meeting template, not a second schema.
- Every team-meeting creation or material update must append an entry to the [operation log](wiki/log.md).
- Follow the complete data contract in [SCHEMA.md](SCHEMA.md).
