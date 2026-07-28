# Capture and Ingest

Capture material when it could affect a future decision, action, relationship, metric, or explanation. Follow `second-brain/operations/ingest.md`.

1. Inventory the in-scope item without changing it; reject secrets and unnecessary personal data.
2. Check duplicates and assign `src-YYYYMMDD-short-slug`.
3. For a textual payload, copy it unchanged into `second-brain/raw/<source-id>/`.
4. For a large or binary payload:
   - store it only under the repository-level dated `assets/` convention;
   - create its sibling `<filename>.metadata.md` with a stable privacy-safe backup locator;
   - create a textual record under `second-brain/raw/<source-id>/` that links to the asset path, sibling metadata path, and stable backup locator;
   - never copy the payload itself under `second-brain/`.
5. Create raw source metadata from `second-brain/templates/source.metadata.md`; record and verify the relevant SHA-256 checksum.
6. Read `wiki/index.md` and only affected canonical pages.
7. Integrate only decision-relevant supported claims with source IDs, precise locators, and epistemic labels.
8. Preserve contradictions and unknowns; update routing only when it changed.
9. Append the ingest to `wiki/log.md` and run `second-brain/operations/lint.md`.

Capture decisions, commitments, outcomes, changed assumptions, customer language, reusable discoveries, failures, and measurements. Exclude routine noise and secrets.
