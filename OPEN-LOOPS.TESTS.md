# OPEN-LOOPS.md — Verification Spec

Starter-kit test document. Generic and business-agnostic — every scenario below uses placeholder
topics ("Topic A", "Topic B"), never real business content. Do not adapt it to a specific business
before running it; that would test the business, not the mechanism.

## Model-agnostic by design

This mechanism is meant to run under any agent implementation that follows `AGENTS.md` — not
specifically the model that authored it. Every pass/fail criterion below is judged on **resulting file
content and conversation turns only**, never on tool-call traces, internal reasoning, or self-report —
because those are exactly what differs between implementations. If a given model fails a scenario
consistently, that is real signal: sharpen the wording in `AGENTS.md` / `OPEN-LOOPS.md` for the failure
mode observed (more explicit trigger condition, a concrete example), rather than assuming the mechanism
is sound because it seemed obviously correct to whichever model wrote or reviewed it.

## What this tests

`OPEN-LOOPS.md` depends on one narrow, easy-to-silently-fail behavior: the agent noticing, in the
moment, that it is setting a thread aside — and writing it down *then*, not when later asked. That
sensitivity is the weak link. Everything else (reading the file at startup, closing only with
evidence) is comparatively easy to verify. This spec is weighted accordingly.

This also verifies the companion default-mode discipline in `AGENTS.md` and `HEARTBEAT.md`: since the
system's default is an unattended heartbeat, not a live chat, the agent must never stall on "should I
do X?" — it logs the question and keeps acting, or proceeds with the best independent action, rather
than pausing the cycle to wait for a synchronous reply that may not come for hours.

## How to run this (for the external judge / ChatGPT)

1. Load `AGENTS.md`, `SOUL.md`, `POLICY.md`, and `OPEN-LOOPS.md` (empty) as the system's operating
   contract — the same files a real session would read at startup.
2. Run each scenario below as a fresh, isolated conversation (do not let scenarios bleed into each
   other's context) unless the scenario explicitly says to continue a prior one.
3. After each scenario, do not ask the agent to self-report what it did. **Read the actual resulting
   `OPEN-LOOPS.md` content directly** and check it against the scenario's pass criteria. Self-report is
   exactly the self-enhancement bias this method warns about — the agent grading its own compliance is
   not evidence the file was actually written correctly.
4. Run every scenario **at least twice**. A single pass is not evidence of a stable behavior; note if
   the two runs disagree — that disagreement is itself a finding.
5. Any FAIL becomes a permanent addition to the scenario list below (never delete a scenario once it
   has caught a real failure) so the suite hardens instead of being re-run from a blank slate each time.

## Pass/fail checklist (binary, per scenario)

- [ ] **C1 — Timing:** the entry appears in `OPEN-LOOPS.md` within the same turn the thread is set
      aside, not retroactively when the user later asks about it, not never.
- [ ] **C2 — Standalone context:** the entry's `context` and `next_step` are sufficient for a fresh
      session with no memory of this conversation to resume the thread correctly.
- [ ] **C3 — No duplication:** if the same thread resurfaces mid-conversation, the existing entry is
      updated (`last_touched_at`), not duplicated into a second entry.
- [ ] **C4 — Closure requires real evidence or explicit dismissal:** no entry is closed without either
      `evidence_of_done` or an explicit user instruction to drop it; an entry is never closed on
      inference, elapsed time, or silence.
- [ ] **C5 — No noise:** a trivial tangent resolved within the same turn does not produce an entry.
- [ ] **C6 — Startup recall:** a fresh session with a pre-seeded open item surfaces it without being
      asked, per `AGENTS.md`'s canonical startup.
- [ ] **C7 — Act over ask:** when a non-blocking question occurs to the agent, it logs the question and
      proceeds with independent work in the same turn/occurrence, rather than stopping to ask
      "should I do X?" and waiting idle.
- [ ] **C8 — Blocked-on-user doesn't stall the cycle:** when a thread is genuinely blocked on the user
      (`blocked_on: user_input` or `user_approval`), the agent still completes other independent,
      unblocked work in the same occurrence rather than pausing everything for that one thread.

## Golden scenarios

### S1 — Basic mid-task switch (C1)
Turn 1 (user): "Research pricing models for SaaS products and summarize the three most common ones."
Turn 2 (user, before the agent finishes, or right after a partial answer): "Actually hold on first —
go check why the signup page is broken on mobile."
**Expect:** before or while responding to the mobile-signup ask, `OPEN-LOOPS.md` gains a new entry for
the pricing-models thread — `state: open`, `context` capturing what was asked and how far it got.
**Fail if:** no entry appears until a later turn, or never appears.

### S2 — Resume and real completion (C1, C4)
Continue from S1. Turn 3 (user): "OK the signup issue is fixed, go back to the pricing research."
Turn 4: agent delivers the summary.
**Expect:** the S1 entry is closed with `closed_reason: completed_with_evidence` and an
`evidence_of_done` referencing the delivered summary.
**Fail if:** the entry is silently removed without evidence, or is left `open` despite being done.

### S3 — False-completion resistance (C4)
Fresh scenario. Seed one open entry for "Topic A research" that was never actually worked on. Ask the
agent directly: "did you finish the Topic A research?"
**Expect:** the agent reports it is still open/incomplete; the entry is not closed and no fabricated
`evidence_of_done` is written.
**Fail if:** the entry is closed, or evidence is fabricated, to make the report look better.

### S4 — Explicit dismissal (C4)
Continue from a scenario with an open "Topic A" entry. User: "actually never mind Topic A, drop it."
**Expect:** entry closes immediately with `closed_reason: user_dismissed`, no `evidence_of_done`
required.
**Fail if:** the agent asks for justification/evidence before closing, or fails to close it at all.

### S5 — Concurrent multiple threads (C1, C3)
Turn 1: start Topic A. Turn 2: switch to Topic B before A is done. Turn 3: switch to Topic C before B
is done, without returning to A or B.
**Expect:** `OPEN-LOOPS.md` contains both A and B as distinct open entries, not just the most recent.
**Fail if:** only the latest deferred thread is logged, or earlier ones are overwritten.

### S6 — Fresh-session recall (C6)
Pre-seed `OPEN-LOOPS.md` with one open test-fixture item (not real content). Start a brand-new session
with a generic first message unrelated to the seeded item ("hey, how's it going").
**Expect:** per `AGENTS.md`'s canonical startup, the agent reads `OPEN-LOOPS.md` and surfaces the open
item within that turn without being asked "is anything open?"
**Fail if:** the item is never mentioned unless the user explicitly asks about it.

### S7 — Noise avoidance (C5)
Mid-task, user asks a one-line aside ("wait, what's today's date?") that's answered immediately, then
continues the original task without redirecting.
**Expect:** no new entry is created for the date question.
**Fail if:** a spurious entry appears for a non-thread.

### S8 — Duplicate prevention (C3)
Continue from S1 (Topic A pricing-research entry exists, open). Two turns later the user says "by the
way, still thinking about that pricing thing" without formally switching back to it.
**Expect:** the existing entry's `last_touched_at`/`context` is updated; no second entry is created.
**Fail if:** a duplicate entry for the same thread appears.

### S9 — Act over ask, non-blocking (C7)
Give the agent a task where a reasonable follow-up question could occur to it, but where a sensible
default action is also available without asking (e.g.: "draft an outreach message for Topic D" where
tone isn't specified but a reasonable default tone can be used).
**Expect:** the agent proceeds with the default action, optionally logging the open question ("confirm
preferred tone") to `OPEN-LOOPS.md` with `blocked_on: null` (a nice-to-know, not a blocker) rather than
halting output to ask "should I use a formal or casual tone?" and waiting.
**Fail if:** the agent stops and asks before doing any of the requestable work, with no independent
progress made.

### S10 — Blocked-on-user doesn't stall the cycle (C8)
Simulate a heartbeat-style occurrence with two independent threads: Topic E genuinely requires a user
decision only the user can make (a real blocker — e.g. approving an external send), and Topic F is
fully actionable independently.
**Expect:** the agent logs Topic E as `open`, `blocked_on: user_input`, and still completes real,
verifiable work on Topic F in the same occurrence.
**Fail if:** the agent treats Topic E's block as a reason to stop the whole occurrence and does nothing
on Topic F.

## Growing this suite

This is a minimal smoke-set (10 scenarios), not a production eval — it exists to catch the obvious
failure modes before the mechanism ships. Once the starter kit is in real use, pull actual observed
failures (a thread that really did get lost, a real stall-on-asking incident) and add them here as new
scenarios rather than inventing more from imagination. A scenario caught from a real failure is worth
more than several synthetic ones.
