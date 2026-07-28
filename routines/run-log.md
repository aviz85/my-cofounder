# Routine Run Log

Bounded chronological execution log for every HEARTBEAT, DREAMING, and scheduled AI team-meeting run.

Do not store credentials, tokens, unnecessary sensitive personal data, or unsupported claims.

When a run performs a material second-brain operation, record that operation in the canonical second-brain log under its schema as well.

For channel evidence, store only channel type, provider key, a one-way locator hash when needed, privacy-safe summary, and date. Never duplicate a private endpoint or sensitive message content.

Before appending, enforce `routines/registry.yaml#/logging`. Compaction must state the covered occurrence keys and preserve protected evidence. A compaction summary replaces only the unprotected details it covers.

## Entry format

```markdown
## YYYY-MM-DD HH:MM TZ — HEARTBEAT|DREAMING|team-meeting

- Occurrence key:
- Checkpoint file:
- Lease holder and expiry:
- Last start / completion:
- Run outcome:
- Goal and gap:
- Channel / provider checked:
- Live availability probe result and time:
- Inbound cursor before / after:
- Locator hash, if needed:
- Inbound evidence summary and date:
- Binding constraint:
- Action and rationale:
- Action hash / disposition:
- Outbound hash / disposition:
- Retry attempt / next retry / backoff:
- Last-question hash / asked at / cooldown until:
- Evidence inspected:
- Verified result:
- Metric delta:
- Ranked decision-relevant gaps:
- Question asked, if any:
- Verified answer persisted to:
- Facts:
- Inferences:
- Hypotheses:
- Approval or blocker:
- Next action:
```

## Compaction entry format

```markdown
## YYYY-MM-DD HH:MM TZ — COMPACTION

- Bound triggered:
- Covered occurrence keys:
- Entries removed:
- Preserved facts and outcomes:
- Protected entries retained:
- Evidence destinations:
- Resulting entry count / bytes:
```
