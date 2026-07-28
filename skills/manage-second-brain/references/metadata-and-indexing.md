# Metadata and Indexing

Use metadata only when it improves retrieval, provenance, sensitivity control, or maintenance.

Useful fields include a stable ID, type, status, one-sentence summary, aliases, tags, created/updated/verified dates, source IDs, confidence, validity dates, sensitivity, and supersession.

Treat indexes as routing maps:

- keep root entries short;
- link to category pages instead of duplicating content;
- update only affected indexes;
- prefer one canonical page per concept;
- use lowercase descriptive kebab-case filenames and ISO dates;
- treat canonical pages and raw evidence as the sources of truth.

Distinguish:

- raw source metadata: use `second-brain/templates/source.metadata.md` with source ID, origin, checksum, confidentiality, keywords, and extraction status. For a large/binary source, also link the repository-level asset path, sibling asset-metadata path, and stable privacy-safe backup locator;
- large/binary asset metadata: keep `<filename>.metadata.md` beside the payload under repository-level `assets/` with purpose, accessible summary, source, rights, date, entities/topics, publication status, stable privacy-safe backup locator, keywords, and review status.

Never duplicate a large/binary payload under `second-brain/raw/`; raw stores its textual source record only.
