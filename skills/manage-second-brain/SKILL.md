---
name: manage-second-brain
description: Route capture, ingestion, retrieval, synthesis, maintenance, and repair for the repository's second brain. Use when Codex needs to preserve a source or learning, answer from durable memory, reconcile conflicting knowledge, process the inbox, maintain provenance and indexes, lint the wiki, or explain how the second-brain system works.
---

# Manage Second Brain

This is a generic capability skill, not an employee or named worker. Do not invent a person or employee identity for it.

Treat conversation as working memory and `second-brain/` as durable, inspectable memory.

1. Read `second-brain/wiki/index.md`.
2. Identify one operation and open only its screen:
   - understand the system: [overview](references/overview.md)
   - preserve a source or learning: [capture and ingest](references/capture-and-ingest.md)
   - answer from memory: [retrieval and synthesis](references/retrieval-and-synthesis.md)
   - inspect or repair the wiki: [maintenance and lint](references/maintenance-and-lint.md)
   - structure pages and routing: [metadata and indexing](references/metadata-and-indexing.md)
   - see practical patterns: [examples](references/examples.md)
   - resolve a failure: [troubleshooting](references/troubleshooting.md)
3. Before a write, read `second-brain/SCHEMA.md` and the relevant canonical contract under `second-brain/operations/`.
4. Preserve raw evidence, cite source IDs and locators, label uncertainty, update affected indexes, log material operations, and lint every durable write.
5. Keep every large or binary payload under repository-level `assets/` with its required sibling sidecar; let raw contain only a textual source record linking the asset, metadata, and stable backup locator.
6. Never store credentials, secrets, or unnecessary sensitive data.
