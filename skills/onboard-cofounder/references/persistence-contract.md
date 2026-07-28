# Persistence Contract

Persist only confirmed statements. Preserve the existing YAML schema and comments.

## Write target

- `USER.md`: write only the selected question's declared `profile.*`, `collaboration.*`, or `communication.*` answer paths.
- `BUSINESS.md`: write only the selected question's declared `business.*` answer paths.
- `GOAL.md`: write only the selected question's declared `primary_goal.*` answer paths.

Do not duplicate these onboarding facts in a new wiki profile.

## Write sequence

1. Map the answer to the current question's `answer_paths`.
2. Ask for clarification instead of guessing when the mapping is ambiguous.
3. Update only those fields.
4. Re-evaluate every declared `content_path` and `required_for_active` path.
5. Set `status` exactly as the document's `status_rule` requires.
6. Preserve unrelated values and schema declarations.

## Status safeguards

- Keep a document `empty` while all content paths are blank.
- Move it to the declared partial or drafting state after the first verified answer.
- Mark it `active` only when all required paths are populated.
- Activate `GOAL.md` only after the user confirms it is the one primary goal.
- Supersede or achieve an existing active goal with evidence before replacing it.

Store no secrets, unnecessary personal data, hidden assumptions, or assistant-generated biography.
