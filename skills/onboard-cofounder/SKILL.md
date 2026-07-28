---
name: onboard-cofounder
description: Establish the minimum durable goal, business, communication, and user-profile context for a new AI Co-Founder repository. Use when installing or forking the starter or when GOAL.md, BUSINESS.md, or USER.md contains incomplete onboarding fields. Follow the declared cross-file question priorities, ask one question at a time, and persist each verified answer to its canonical root document.
---

# Onboard Cofounder

This is a generic capability skill, not an employee or named worker. Do not invent a person or employee identity for it.

1. Read `USER.md`, then `BUSINESS.md`, then `GOAL.md`; this startup read order does not determine question priority.
2. Apply each document's `empty_detection` and `completion_mode` rules. Ignore headings, comments, prompts, and schema fields when deciding whether user content exists.
3. Collect every incomplete onboarding question and choose the one with the lowest `global_priority`; see [priority and prompts](references/priority-and-prompts.md). The default question sequence starts with the strategic outcome in `GOAL.md`, minimum context in `BUSINESS.md`, communication setup in `USER.md`, and then remaining profile details.
4. Ask exactly that one question in the user's language, then wait.
5. Persist the verified answer only to its declared `answer_paths`; use [persistence contract](references/persistence-contract.md).
6. Recompute the document status from its `status_rule`.
7. Never infer an answer, activate an unconfirmed goal, or silently replace an active goal.
