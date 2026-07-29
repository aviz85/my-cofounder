# Routine Runtime Files

This directory supports two independent base schedules:

- a task every 4 hours whose sole instruction file is `HEARTBEAT.md`;
- a nightly task whose sole instruction file is `DREAMING.md`.

Neither routine invokes the other. Each task has its own scheduler identifier and disabled state in `registry.yaml`.

- `registry.yaml` — intended installation, two base schedules, reliability policy, permissions, bounded logging, and team-meeting defaults.
- `state/heartbeat-checkpoint.yaml` — mutable heartbeat lease, occurrence, idempotency, retry, question-cooldown, and inbound-cursor checkpoint.
- `state/dreaming-checkpoint.yaml` — an independent checkpoint with the same contract for DREAMING.
- `run-log.md` — bounded chronological execution evidence for routine runs.

Each active team manages one additional, separate AI team-meeting task through its charter under `teams/`. Team tasks are not base routines and must never replace, merge with, or be embedded in the two base schedules.

The starter ships semantically empty, uninstalled, and disabled. Provider mappings declare adapter names only; they contain no account, endpoint, credential, installation, authentication, or availability data. Initialization must confirm real scheduler state before enabling registry entries.

`USER.md` is the sole authority for the user's channel and provider choice, consent, optional endpoint, and structured standing outbound grants. It is not an availability source. Resolve installation and live availability from `connectors/registry.yaml` and its declared runtime probe immediately before a connector-dependent action. Do not duplicate private endpoints or sensitive messages in routine files.

## Checkpoint protocol

For each scheduled occurrence:

1. Derive the deterministic occurrence key and load only that routine's checkpoint. If the derived key differs from the checkpoint's stored `occurrence_key`, reset `retry.attempt`, `retry.last_error_code`, `retry.last_error_at`, `backoff.backoff_seconds`, and `backoff.next_retry_at` to their initial values before proceeding.
2. Acquire the lease only when absent or expired. Skip an occurrence covered by an unexpired lease.
3. While work is still active, renew the lease before elapsed time since acquisition exceeds `duration_seconds` minus `renew_before_seconds`: extend `expires_at` using the same lease token, without changing the occurrence key.
4. Preserve the same occurrence key across retries. Record start time before work.
5. Use the action hash to avoid repeating a completed action and the outbound hash to avoid a duplicate send. Hashes are evidence, never authorization.
6. On failure, preserve the inbound cursor, record retry state, and apply the configured bounded backoff.
7. Before asking a question, compare its hash and cooldown. Do not repeat it during the cooldown.
8. Advance the provider-opaque inbound cursor only after relevant evidence is durably persisted.
9. Record completion, clear the lease, and append one compact run-log entry.

Never share a mutable checkpoint between HEARTBEAT and DREAMING. Never order, synthesize, or compare opaque provider cursors.

## Bounded run log

Apply the limits in `registry.yaml` before every append. When a limit would be exceeded, compact the oldest unprotected entries into a dated summary and record the covered occurrence keys. Preserve failures, permission changes, external sends, metric changes, and material second-brain operations. If protected evidence prevents safe compaction, do not grow the log past the bound; report the blocker.

Do not store credentials, tokens, private keys, or unnecessary sensitive personal data here. When a run changes the second brain, log that material operation under its schema.
