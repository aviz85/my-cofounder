# Outputs

This directory stores text-only derived artifacts such as research briefs, decision memos, and reusable query results.

- Outputs are regenerable and are not source truth.
- Name files with an ISO date and a descriptive kebab-case slug.
- Cite source IDs and locators.
- Link durable conclusions into the appropriate wiki shelf.
- Do not duplicate sensitive raw data when a summary is sufficient.
- Put every binary or large derived output under repository-level [`assets/`](../../assets/README.md), verify that Git ignores its payload, and create a tracked sibling `<full-filename>.metadata.md`.

Use the [query operation](../operations/query.md) for durable results.

Lesson demo (2026-08-17), labeled `status: demo`, not business source truth:

- [סקירת בוקר](2026-08-17-morning-brief.md)
- [מה קורה בקבוצה](2026-08-17-group-digest.md)
- [תסריט הקלטה](2026-08-17-voice-script.md)

