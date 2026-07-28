# Ingest Operation

## Purpose

Turn unreviewed inbox material into immutable evidence and maintainable, provenance-backed wiki knowledge.

## Preconditions

- A small textual item is inside `inbox/`, or a binary/large item is under repository-level `assets/`, or an external source is otherwise explicitly in scope.
- Its origin and confidentiality can be described.
- Ingestion will not place credentials, secrets, or unnecessary personal data in the repository.

## Procedure

1. Inventory the candidate item without changing it.
2. Classify it as a small textual source, a binary/large repository asset, or an external source.
3. Check whether it duplicates an existing source by origin, date, title, stable locator, and checksum when available.
4. Assign a stable source ID: `src-YYYYMMDD-short-slug`.
5. Create a new directory under `raw/<source-id>/` for textual records and metadata only.
6. For a small textual source, preserve the text under that raw source directory without rewriting its content.
7. For a binary or large payload:
   - require it to live only under repository-level [`assets/`](../../assets/README.md);
   - verify that Git ignores the payload;
   - require a tracked sibling named `<full-filename>.metadata.md`;
   - verify that the sidecar contains a stable repository-relative or non-secret external backup locator;
   - do not copy the payload into `inbox/`, `raw/`, `wiki/`, or `outputs/`.
8. For an external source, record a stable non-secret locator; never store credentials, signed URLs, or expiring access links.
9. Create a textual source record from the [source record template](../templates/source.metadata.md).
10. Record capture time, source type, origin, confidentiality, retrieval keywords, extraction status, locator, and a SHA-256 checksum when an exact payload is available.
11. Verify the preserved text or asset against the checksum when one is recorded.
12. Extract only what is needed for the active goal or stated query.
13. Create or update wiki pages using the [wiki page template](../templates/wiki-page.md). Cite the source ID and a precise locator for each factual claim.
14. Preserve contradictions, unknowns, and confidence limits.
15. Update the [wiki index](../wiki/index.md) if a page or route was added, moved, archived, or materially re-scoped.
16. Append an ingest entry to the [operation log](../wiki/log.md).
17. Run the [lint operation](lint.md).

## Completion evidence

An ingest is complete only when:

- the textual raw record and metadata exist;
- any binary or large payload is under repository-level `assets/`, ignored by Git, and paired with its tracked sibling metadata;
- the stable locator resolves or its unresolved status is explicit;
- the checksum is verified when applicable;
- compiled claims have provenance;
- index routing is current;
- the log entry exists;
- lint passes or unresolved findings are recorded.

Do not delete the inbox item as an automatic side effect. Cleanup is a separate, authorized action.
