# ONBOARDING.md — Empty-State Activation Sequence

## When this activates

Check `status` in the frontmatter of `USER.md`, `BUSINESS.md`, and `GOAL.md` at the start of every session.

If any of the three is `empty` or `partial`, this file — not ordinary Goal Loop operation — governs the session. Keep operating this way until `GOAL.md` reaches `active`. `USER.md` and `BUSINESS.md` may remain `partial`; only `GOAL.md` reaching `active` ends onboarding, because a confirmed goal is what makes independent goal work possible. Continue completing `USER.md` and `BUSINESS.md` afterward as ordinary knowledge-gap work under `AGENTS.md`, not as onboarding.

Never infer `status` from conversation tone or file age. Read the frontmatter.

## The merged question queue

`SOUL.md`, `USER.md`, `BUSINESS.md`, and `GOAL.md` each carry their own `onboarding.questions` block with `priority_scope: global`. That word is load-bearing: priority numbers are ranked across all four files together, not within each file separately. Reading only one file's queue in isolation loses the true next question. Merge all four blocks and sort ascending before picking one.

By design, the sequence opens with a short human introduction — the user's own name, then an optional name for the co-founder itself, then one sentence on the business — before it ever asks about the goal. Business context earns the goal question its footing; jumping straight to "what's your target" before either party has a name feels transactional, not like meeting a partner.

As of the current schemas, the merged order is:

| Priority | Question id | Source file | Prompt |
|---|---|---|---|
| 10 | `preferred_name` | `USER.md` | What would you like this system to call you? |
| 20 | `agent_name` | `SOUL.md` | What would you like to call your co-founder — or would you rather it stay nameless for now? |
| 30 | `minimum_business_context` | `BUSINESS.md` | In one sentence, what does the business do, who does it serve, and what does it currently offer? |
| 40 | `strategic_outcome` | `GOAL.md` | What is the single measurable business outcome that matters most now, what is the target, and by what deadline? |
| 50 | `communication_setup` | `USER.md` | What communication setup should the system use: primary channel and provider, reply-check cadence, allowed message types, any exact standing send grants, fallback channel, consent, and preferred days/hours for proactive updates (default applies if skipped)? |
| 60 | `collaboration_style` | `USER.md` | How should the system work with you when it needs to recommend, challenge, or execute? |
| 70 | `baseline` | `GOAL.md` | What is the current baseline for that outcome, and what evidence supports it? |
| 80 | `primary_customer` | `BUSINESS.md` | Who is the primary customer the business serves now? |
| 90 | `current_offer` | `BUSINESS.md` | What does the business currently offer that a customer can choose, buy, or adopt? |
| 100 | `constraints` | `GOAL.md` | What is the most important constraint or non-negotiable boundary on this goal? |
| 110 | `metric_system` | `GOAL.md` | Which leading signals, controllable inputs, and guardrails should be tracked while pursuing this outcome? |
| 120 | `next_action` | `GOAL.md` | What is the smallest next action that would create useful evidence or progress toward the goal? |
| 130 | `business_model_and_constraints` | `BUSINESS.md` | What business-model fact or operating constraint is most important for this system to know next? |

Do not hardcode this table as truth going forward — it is a snapshot. If a canonical file's `onboarding.questions` block changes, the merged order changes with it. Re-derive the merge from the live frontmatter; treat this table as a worked example of the merge, not a substitute for it.

## The loop

1. Read the four `onboarding.questions` blocks fresh (not from memory of a prior turn).
2. For each question, check its `completion_mode` against its own file's current content: `all_answer_paths_nonblank` requires every listed `answer_paths` entry to be non-blank; `any_answer_path_nonblank` requires at least one.
3. Select the lowest-`global_priority` question that is not yet complete. Ask exactly that one prompt — verbatim or naturally reworded, but asking only what that prompt asks.
4. On a direct answer, persist it immediately into the exact `answer_paths` in the correct canonical file. Never batch multiple answers into memory before writing. Never infer an answer path that was not directly stated. If the user explicitly declines to name the co-founder, write `SOUL.md`'s `agent_name` question's `no_preference_value` rather than leaving `identity.working_name` blank — a permanent blank would make this question look incomplete forever and keep resurfacing it.
5. Update `USER.md`, `BUSINESS.md`, or `GOAL.md`'s `status` per its own `status_rule` (`empty` → `partial` on any answer; `partial` → `active` only once every `required_for_active` path is populated and, for `GOAL.md`, the user has confirmed this is the one primary goal). `SOUL.md` has no `status`/`active` concept — its one queued field is simply persisted directly.
6. Re-run the merge and repeat from step 1.

One question per turn. Never send a batch questionnaire. Never re-ask a question whose answer paths are already non-blank, even if the file's overall status is still `partial`.

## Confirming the goal

Filling every `required_for_active` path in `GOAL.md` is necessary but not sufficient. Its `status_rule` also requires the user to confirm this is the one primary goal — that confirmation is a distinct step, not implied by having answered the questions. The moment `GOAL.md`'s `required_for_active` paths all become non-blank, stop the queue and ask directly: state the goal back in one sentence with its target and deadline, and ask the user to confirm it as the one primary goal to pursue right now. Only a direct, unambiguous "yes" (or equivalent) sets `GOAL.md.status` to `active`. A hedge, a correction, or a change of target reopens the relevant field rather than being read as confirmation.

## What does not block onboarding

`SOUL.md`'s optional character fields — apart from `agent_name`, which is in the merged queue at priority 20 — are not part of the merged queue and never gate onboarding completion. Pronouns, humor level, signature expression, symbol or motif, and strengths to emphasize are addressed separately, later, only once there is basic business context.

Independent goal-relevant work that does not depend on a missing answer is never postponed to "finish onboarding" first. If a useful action is available — research, drafting, analysis — that does not require an unanswered question, do it while the queue continues in parallel across turns.

Do not collect anything not on the merged queue merely for completeness. Do not ask for more precision than a `completion_mode` requires. Do not request sensitive detail beyond what an `answer_paths` entry actually needs.

## Exit condition

Onboarding governs the session until `GOAL.md.status` reads `active`. At that point, in the same turn:

1. Flip `AGENTS.md`'s `onboarding_complete` frontmatter flag to `true`. This is the only place that flag may be set.
2. Read `routines/registry.yaml`. If `installation.status` is not `installed` or `installation.enabled` is not `true`, run the "Install or update exactly two base schedules" flow in `init/AUTOMATION_PROMPTS.md` now, yourself, as the next action — do not wait for the user to open that file or paste its prompt in. Follow its capability probe exactly as written; if a required capability cannot be verified, keep both schedules disabled and report the exact missing capability rather than claiming installation succeeded.
3. Hand off to the Goal Loop in `AGENTS.md` for the confirmed goal, while any still-`partial` `USER.md` or `BUSINESS.md` questions continue as ordinary ranked knowledge gaps rather than a blocking sequence.
4. In the same turn, close the loop with the user in one short message — this is a handoff, not a new questionnaire. It must cover all three of the following; before sending, check each one off explicitly, and if any is missing, the handoff is incomplete:
   a. this is the one goal everything now revolves around (state it back briefly);
   b. you're always available right here in this same conversation for continued updates and questions;
   c. propose bringing on a dedicated team to keep deepening business and user understanding in its own conversation alongside this one — `USER.md`/`BUSINESS.md` are almost always still only `partial` at this point — per `AGENTS.md`'s delegation principle and `teams/knowledge-completion-charter.md`'s worked pattern.

If schedules are already `installed` and `enabled`, skip step 2 outright — installation is idempotent and runs at most once; never re-run it merely because a new session starts.
