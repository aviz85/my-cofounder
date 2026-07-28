# Operations

The Second Brain has four explicit agent-executed operations:

- [Ingest](ingest.md) preserves source truth and compiles supported knowledge.
- [Query](query.md) retrieves narrowly and answers with provenance.
- [Compact and archive](compact-archive.md) reconciles reliable actions, maintains the seven-day view, rolls logs over monthly, creates weekly summaries, partitions meeting indexes, and archives derived history without deleting evidence.
- [Lint](lint.md) checks structural and epistemic integrity.

Run lint after any material ingest or wiki maintenance operation. A compact/archive run with unchanged source digests is a no-op and writes no timestamp or log entry.

The repository [heartbeat](../../HEARTBEAT.md) may invoke these operations while advancing an active goal. It remains the routine's source of truth and uses the onboarding priorities and knowledge-gap ranking rules declared in the root profile files and Second Brain schema.
