# Security and Privacy

- Never commit credentials, API keys, session cookies, access tokens, recovery
  codes, or private keys.
- Keep unnecessary personal or customer data out of the repository.
- Store large and binary files under `assets/`; Git ignores their payloads by
  default. Track only their textual metadata and an approved external backup
  locator.
- Treat connected systems as evidence sources, not as permission to write.
- External messages, publication, spending, account changes, legal commitments,
  and destructive actions require the user's approval unless a precise standing
  mandate says otherwise.
- Before making a fork public, inspect `USER.md`, `BUSINESS.md`, `GOAL.md`,
  `second-brain/raw/`, asset metadata, outputs, and Git history.
- If sensitive information is committed, rotate the secret first, then remove it
  from current files and repository history using an appropriate audited process.
