# Operation Log

Append material operations in chronological order within the active calendar month. Never edit an earlier entry.

At a month boundary, use the [compact/archive operation](../operations/compact-archive.md) to relocate closed-month entry blocks without modification into `archive/logs/YYYY/YYYY-MM.md`, verify their count and SHA-256 digest, and append one rollover entry to the new active month. Archived entries remain retained and reachable through the [archive shelf](archive/README.md).

Repeated no-op occurrences do not belong here. If no evidence, action state, metric, decision, approval, blocker, question, retry state, index, or archive state changed, the routine checkpoint is sufficient.

Use this structure:

```text
## YYYY-MM-DDTHH:MM:SS±HH:MM — operation

- actor:
- scope:
- inputs:
- writes:
- evidence:
- result:
- lint_status:
- notes:
```

## 2026-08-17T19:20:00+03:00 — lesson_demo_outputs

- actor: Grok — lesson pack
- scope: `second-brain/outputs` demo files for the WhatsApp + ElevenLabs class
- inputs: teaching request for group-read, voice note, morning brief
- writes: `outputs/2026-08-17-morning-brief.md`; `outputs/2026-08-17-group-digest.md`; `outputs/2026-08-17-voice-script.md`; outputs README; wiki index
- evidence: files labeled `status: demo`; not copied into GOAL/BUSINESS
- result: reviewable lesson artifacts in the cofounder project
- lint_status: not run
- notes: replace the group digest with a live `wa.mjs read --group` during class

## 2026-07-28T18:22:55+03:00 — schema_change

- actor: Codex — Implementation Agent
- scope: `second-brain/**` action reliability and bounded-memory contracts
- inputs: user requirements; existing `HEARTBEAT.md`, `DREAMING.md`, Second Brain schema, and authoritative team-meeting template
- writes: canonical action register; seven-day active view; compact/archive operation; schema, agent, usage, lint, template-pointer, index, log, archive, and meeting routing updates
- evidence: YAML front matter parsed; all Second Brain Markdown links resolved; exactly one canonical action register detected; compatibility pointer target verified
- result: pass
- lint_status: pass
- notes: no business facts or actions fabricated; no raw evidence, root control file, routine, team file, or init file intentionally changed
