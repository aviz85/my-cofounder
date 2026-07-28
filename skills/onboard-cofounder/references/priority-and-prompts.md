# Priority and Prompts

Treat the onboarding declarations in `USER.md`, `BUSINESS.md`, and `GOAL.md` as executable routing data.

## Selection

1. Resolve every declared `content_path`.
2. Treat `null`, blank strings, empty lists/objects, `unknown`, `TBD`, placeholders, and unverified guesses as blank.
3. Mark a question complete according to its own `completion_mode`:
   - `all_answer_paths_nonblank`: every path must be populated;
   - `any_answer_path_nonblank`: one populated path completes it.
4. Compare all incomplete questions across all three files.
5. Ask only the question with the lowest `global_priority`.

The starter's default route is:

| Priority | Canonical file | Topic |
|---:|---|---|
| 10 | `GOAL.md` | strategic outcome, target, and deadline |
| 20 | `BUSINESS.md` | minimum business context: one-line summary, primary customer, and current offer |
| 30 | `USER.md` | communication setup, routing, consent, and optional endpoint |
| 40 | `USER.md` | preferred name |
| 50 | `USER.md` | collaboration style |
| 60 | `GOAL.md` | baseline and evidence |
| 70 | `BUSINESS.md` | primary customer, if still incomplete |
| 80 | `BUSINESS.md` | current offer, if still incomplete |
| 90 | `GOAL.md` | main constraint |
| 100 | `GOAL.md` | leading, input, and guardrail metrics |
| 110 | `GOAL.md` | next action |
| 120 | `BUSINESS.md` | business model or operating constraint |

If the files declare different priorities, follow the files. Do not use this table to overwrite their schema.

Ask no follow-up in the same turn. On the next turn, persist the answer first, recompute completion and status, then select again.
