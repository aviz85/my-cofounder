# Raw Evidence

This directory holds immutable textual source records, textual metadata, and stable repository-relative or external locators after ingestion. This policy file is scaffolding, not a source record.

Never place a binary or large payload here. Repository-level [`assets/`](../../assets/README.md) is the only payload home for images, audio, video, PDFs, archives, large exports, generated media, and similar material. Each asset payload must be ignored by Git and paired with a tracked sibling `<full-filename>.metadata.md`.

For a small textual source:

```text
raw/
  src-YYYYMMDD-short-slug/
    source-record.md
    source-text.txt
```

For an asset or externally held source, `source-record.md` stores only metadata and a stable locator such as a repository-relative `assets/...` path, an asset-registry ID, or a non-secret external reference. Never store signed URLs, credentials, or expiring access links.

After a textual source or locator record is verified, do not edit away its history. Ingest corrections or later versions as new records and connect them with version metadata.

Use the [source record template](../templates/source.metadata.md) and the [ingest operation](../operations/ingest.md).

No source records have been ingested.
