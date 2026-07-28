# How to Use This Second Brain

## 1. Complete onboarding

Open the starter with an agent that follows [AGENTS.md](AGENTS.md). The agent reads [USER.md](../USER.md), [BUSINESS.md](../BUSINESS.md), and [GOAL.md](../GOAL.md), then asks the single unanswered onboarding question with the lowest global priority. The first question asks for one measurable strategic outcome, its target, and its deadline; minimum business context comes next; communication routing and consent follow; remaining user and collaboration details come afterward.

Answer one question at a time. The files remain `empty` or `partial` until their required fields are explicitly populated. A strategic goal becomes `active` only after the user confirms it.

## 2. Add source material

Place small textual notes, records, or transcripts in the [inbox](inbox/README.md). Put every binary or large payload directly under repository-level [assets](../assets/README.md), where the payload must be ignored by Git and paired with a tracked sibling `<full-filename>.metadata.md`. Inbox material is untrusted staging data; adding a file there does not make it a fact.

Ask the agent to run the [ingest operation](operations/ingest.md). A correct ingest:

1. preserves small textual source records in the immutable [raw layer](raw/README.md);
2. leaves binary or large payloads in repository-level `assets/` and records only stable locators under `raw/`;
3. creates source metadata and a checksum when applicable;
4. compiles only supported knowledge into the wiki;
5. updates the [wiki index](wiki/index.md) when routing changes;
6. appends the operation to the [log](wiki/log.md);
7. runs the [lint checks](operations/lint.md).

## 3. Ask questions

Ask a specific question and name the decision or goal it supports. The agent follows the [query operation](operations/query.md): it starts at the index, opens only relevant shelves, checks cited raw evidence, and labels uncertainty.

If a reusable result is textual and reasonably sized, save it under [outputs](outputs/README.md). Put a binary or large result under repository-level `assets/` with its sibling metadata, then keep only a locator in the Second Brain. Promote durable conclusions into a canonical wiki page only when provenance is present.

## 4. Track actions reliably

Use the [canonical action register](wiki/actions/register.md) for every current commitment. Give each action one stable ID, one verified `Name — Role` owner, a status, goal link, due value, evidence-of-done, attempt count and history, next eligible retry, source references, and action hash. Hash the semantic execution identity before creating a record so repeated instructions reconcile to the same action.

Consult the derived [seven-day active view](wiki/actions/active-7d.md) for routine work, but resolve any discrepancy against the register. Do not retry an action during backoff, after three unchanged-hash failures, while awaiting approval, or while an external result is still pending. Mark it done only after its completion evidence resolves.

Meeting follow-ups, project checklists, and outputs are source evidence. Promote their open commitments into the register rather than allowing another action ledger to form.

## 5. Record learning

Use the supplied templates:

- [source metadata](templates/source.metadata.md);
- [wiki page](templates/wiki-page.md);
- [decision](templates/decision.md);
- [experiment](templates/experiment.md);
- [metric](templates/metric.md);
- [team meeting compatibility pointer](templates/team-meeting.md), which routes to the single authoritative root team template;
- [knowledge gap](templates/knowledge-gap.md).

Update existing wiki pages when evidence changes. Preserve contradictions and archive superseded derived pages instead of deleting useful history.

## 6. Maintain quality

Run the [lint operation](operations/lint.md) after ingestion or material edits. It checks required structure, YAML, internal links, source metadata, provenance, index reachability, semantic emptiness, and sensitive-data risks.

Run [compact and archive](operations/compact-archive.md) after each local ISO week closes and at month boundaries. It reconciles action hashes and retries, extracts active commitments, rebuilds the seven-day view, rolls material logs into digest-verified monthly partitions, consolidates no-op state, creates an evidence-linked weekly summary, partitions meeting indexes, and archives terminal derived state. A rerun with unchanged digests makes no writes.

Review the operation log periodically. The raw layer grows only by addition. Compaction may relocate derived operation entries or pages only after verified archival; it never moves, rewrites, or deletes raw evidence, attempts, meeting minutes, decisions, metric history, or source references.

The repository [heartbeat](../HEARTBEAT.md) revisits the empty-by-default [knowledge-gap queue](wiki/gaps/queue.md), asks at most one relevant missing-fact question, and should not run speculative business actions while the strategic goal is still missing. The [dreaming routine](../DREAMING.md) reconciles the action register, re-ranks open gaps, checks closure evidence without inventing answers, and invokes bounded compaction when due.
