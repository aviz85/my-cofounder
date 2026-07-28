# Meetings Shelf

Complete, provenance-backed AI team-meeting minutes belong here. Use this shelf for meetings that review work and produce decisions or accountable follow-up, not for loose notes or unverified transcripts.

Create each meeting page from the single authoritative repository template reached through the [team-meeting compatibility pointer](../../templates/team-meeting.md). Keep completed meeting records at the path specified there.

## Required content

Every meeting record must include:

- provenance and precise source locators;
- participants formatted one per line as `Name — Role`;
- the team goal and current KPIs;
- a review of work quality against explicit evidence or standards;
- blockers and their impact;
- decisions with authority and rationale;
- action items with owners, dates, status, and evidence-of-done, then reconciliation into the [canonical action register](../actions/register.md);
- a review of meeting cadence;
- the relevant automation or schedule reference.

Use only verified participant identity data. This empty starter contains no names or other personal identifiers.

## Routing and logging

- Link the meeting to relevant goals, projects, decisions, experiments, metrics, and sources.
- Hash and reconcile each explicit open commitment into the canonical action register. The meeting table remains source evidence, not a second action ledger.
- Promote durable decisions or metric changes to their canonical shelves rather than leaving them only in minutes.
- After creating or materially updating a meeting record, append a `team_meeting` operation to the [wiki operation log](../log.md). Include the meeting ID, page path, source IDs, result, and lint status.
- Do not rewrite earlier log entries.

## Partitioned indexes

Meeting files remain directly under `wiki/meetings/` so the authoritative team template and stable links do not change. The [compact/archive operation](../../operations/compact-archive.md) partitions retrieval indexes:

- `YYYY/README.md` links to that year's month indexes;
- `YYYY/YYYY-MM.md` links each meeting from that month exactly once;
- this shelf links only the seven-day recent meetings and the available year indexes.

Every meeting must remain reachable from the main wiki index through its shelf, year, and month index. Create a partition only when it has a real meeting; do not prefill empty years or months.

No meeting records have been added.

[Back to wiki index](../index.md)
