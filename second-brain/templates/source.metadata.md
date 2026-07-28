---
schema_version: "1.0"
record_type: source_record
source_id: null
title: null
source_type: null
original_filename: null
storage:
  class: null
  allowed_classes:
    - raw_text
    - repository_asset
    - external
  raw_text_path: null
  repository_relative_locator: null
  external_locator: null
  asset_metadata_locator: null
  payload_git_ignored: null
origin:
  creator_or_system: null
  source_reference: null
  captured_by: null
captured_at: null
content_created_at: null
integrity:
  algorithm: sha256
  checksum: null
  verified_at: null
immutability:
  locked_after_verification: true
  supersedes: null
  superseded_by: null
confidentiality: null
allowed_confidentiality_values:
  - public
  - internal
  - confidential
  - restricted
summary: null
entities: []
topics: []
retrieval_keywords: []
extraction:
  status: not_started
  allowed_statuses:
    - not_started
    - partial
    - complete
    - blocked
  notes: null
communication_reference:
  channel_type: null
  stable_message_or_thread_locator: null
  response_summary: null
  date: null
---

# Source Metadata

<!--
Use this for one immutable textual source record or one stable locator.
Populate from direct inspection; do not guess missing origin or dates.
Never place a binary or large payload under second-brain/raw.
Binary and large payloads belong under repository-level assets/ and require
their own sibling <full-filename>.metadata.md under the asset contract.
If the source is a communication, use only the four communication_reference
fields above. Never store a personal endpoint in a source record.
After verification, corrections require a new version rather than rewriting history.
-->

See the repository [asset contract](../../assets/README.md) for binary and large payload metadata.
