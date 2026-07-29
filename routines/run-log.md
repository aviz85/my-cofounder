# Routine Run Log

Bounded chronological execution log for every HEARTBEAT, DREAMING, and scheduled AI team-meeting run. Every occurrence logs — a material one gets a full entry, a quiet one gets a single line. Apply the bounds in `routines/registry.yaml#/logging` before appending; compact the oldest unprotected entries when a bound would be exceeded, preserving failures, permission changes, external sends, metric changes, and material second-brain operations.

No credentials, tokens, private endpoints, or sensitive message content — for channel evidence store only channel type, privacy-safe summary, and date. When a run performs a material second-brain operation, record it in the canonical second-brain log as well.

## Entry format

```markdown
## YYYY-MM-DD HH:MM TZ — HEARTBEAT|DREAMING|team-meeting

- Occurrence key + outcome:
- Action taken + artifact file:
- Dispositions (every open item → its disposition):
- Register / metric delta:
- Notification sent or queued:
- Blocker or question:
- Next action:
```

Quiet occurrence — one line:

```markdown
## YYYY-MM-DD HH:MM TZ — HEARTBEAT (quiet) — <occurrence key>: <why no material action was warranted>
```

Compaction summary — one entry covering the removed range:

```markdown
## YYYY-MM-DD HH:MM TZ — COMPACTION — covered <first>..<last>: <entries removed>, protected entries retained, facts preserved to <destination>
```
