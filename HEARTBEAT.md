# Co-Founder HEARTBEAT (every 4 hours)

Advance the one active `GOAL.md` with the highest-leverage safe action available now. Real work every cycle — never fake activity to look busy, never idle because the path is hard. This routine runs only in its fixed Co-Founder task; it never creates tasks, never invokes `DREAMING.md`, never exceeds `POLICY.md`.

## The occurrence checklist — this IS the routine

Run the 9 steps in order. Every step names the file it must write; a step without its write did not happen, and an occurrence with a skipped step is incomplete.

1. **Guard** — read `routines/registry.yaml` and the heartbeat checkpoint. Stop cleanly if installation or the heartbeat schedule is not installed+enabled, if this occurrence (scheduler ID + scheduled timestamp) is already completed, or if another run's unexpired lease is present. Otherwise record your start. → checkpoint
2. **Sweep** — enumerate every open item in `OPEN-LOOPS.md`, every non-terminal action in the register, and any queued notification in the checkpoint. Give each an explicit disposition: `advance now`, `waiting until <date>` (date mandatory), or `escalate`. An item left without a disposition is neglect — the one failure this routine exists to make impossible. Most dispositions cost one line. → the item itself
3. **Inbound** — if the primary channel is connected, read only items after the stored cursor; advance the cursor only after the evidence is durably persisted. → checkpoint cursor
4. **Pick** — choose this cycle's single action from: items marked `advance now`, the goal's next action, and — when neither compels — a quick spread of fresh candidate directions across different `playbooks/index.md` shelves before settling. → register entry
5. **Produce** — do the work and leave a named business artifact: a draft, a research result, an analysis, an approval package. Internal bookkeeping is not an artifact. If none proved possible, write exactly which lever failed and why — that sentence is the artifact of last resort. → artifact file
6. **Verify** — check the result against the action's evidence-of-done; record what was verified and what couldn't be. → register update
7. **Notify or queue** — a proactive notification inside `USER.md`'s proactive window sends now; outside it, queue it in the checkpoint for the next in-window occurrence (send the newest version only, folding older queued ones in). This gate never delays the goal work itself. → checkpoint
8. **Log** — append this occurrence's run-log entry: full for material, one line for quiet. → `routines/run-log.md`
9. **Close** — mark the occurrence completed and release the lease. → checkpoint

DREAMING audits yesterday's occurrences against this checklist step by step; a skipped step surfaces the next morning, never silently.

## Binding rules

- Follow `AGENTS.md`'s canonical startup first (SOUL, USER, BUSINESS, GOAL, POLICY, OPEN-LOOPS). If `GOAL.md` is empty: ask the one onboarding question its contract selects, do only safe independent discovery.
- Never repeat an unanswered question or approval request within its 24h cooldown (compare with the checkpoint) — unless the user interacted since, new evidence materially changes it, or a deadline creates documented urgent risk. An awaiting_approval action whose cooldown has elapsed with no reply is not "in flight": re-surface it.
- External sends and approvals follow `POLICY.md` exactly, including its evidence-derived risk line. Never resend content already sent for the same action.
- A business fact the user stated gets filed to its canonical home in the same turn it was learned.
- Never silently replace or broaden the goal. Never invent evidence, access, authorization, or results. A successful tool call is not proof of a business outcome — verify the real result.
- Delegate only per `teams/registry.md`; the Co-Founder stays responsible for synthesis and quality.
- The checkpoint is operational state, not business memory: no secrets, no message bodies, no personal endpoints.
