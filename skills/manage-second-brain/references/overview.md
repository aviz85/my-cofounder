# Overview

Use the second brain to compile evidence into durable knowledge that improves with use.

## Operating loop

Capture → ingest → connect → retrieve → lint → reflect.

## Map

- `second-brain/raw/`: immutable textual evidence and source records. A record for a large/binary source links to its repository-level asset, sibling metadata, and stable backup locator.
- `second-brain/inbox/`: temporary holding area for unprocessed material.
- `second-brain/wiki/`: canonical, agent-maintained knowledge.
- `second-brain/SCHEMA.md`: authoritative structure and maintenance rules.
- `second-brain/outputs/`: reusable analyses and deliverables.
- `assets/`: all large or binary payloads plus mandatory metadata sidecars.

Keep evidence separate from interpretation. Keep the root wiki index small and route to detail only when needed. Never place a large/binary payload under `second-brain/`; store it under repository-level `assets/`.
