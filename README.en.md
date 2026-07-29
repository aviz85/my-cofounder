# Your Personal AI Co-Founder

A public starter kit for building a Codex-based AI co-founder for a one-person business. The agent is meant to understand you, your business, and your active goal; proactively do work that advances a real outcome; and keep you as the decision-maker.

The kit is a blank skeleton meant for learning and workshops. It contains no personal data about any specific person or business.

*(An in-depth Hebrew version of this guide is in [README.md](README.md).)*

## Get started in three steps

### 1. Fork it

On GitHub, click **Fork** to create a copy of this repository under your own account. Work in your own fork so your changes and learning stay under your control.

> This is a public repository. Assume anything you save or upload to it can be read by others.

### 2. Open it in Codex

Open your fork in Codex as a new project. Make sure Codex is pointed at the repository root — the folder containing `README.md`, `AGENTS.md`, and the `init/` files.

### 3. Open the startup instructions

In Codex, open `init/INIT.md` and follow its instructions. Then open `init/AUTOMATION_PROMPTS.md` and use the prompt meant for installing or updating the automations, depending on your fork's current state.

No shell script is required: the initialization documents and the ready-made prompts are the source of truth for the whole process.

Before enabling any schedule, the startup process checks that the required capabilities are actually available in the product and on your machine. Local tasks depend on your computer and the Codex desktop app staying available; if a connection to an existing task, real IDs, writes to state files, or schedule management can't be verified, the routines stay off.

## How onboarding works

At the start of every working session, the agent reads, in order:

1. `SOUL.md` — the co-founder's character, values, voice, and ambition.
2. `USER.md` — who you are, how you like to work, your primary communication channel, and the send permissions you've approved.
3. `BUSINESS.md` — what the business does, who it helps, what it offers, and what's already known.
4. `GOAL.md` — the single business goal and metric being advanced right now.

Reading order is not question order. A fresh onboarding opens with a short introduction — your name, an optional name for the co-founder itself, one sentence on what the business does — before it ever asks about the goal; a partnership gets a footing before the ask. Only then does it ask what the single most important, measurable strategic goal is, and by when you want to reach it. Once the goal is saved in `GOAL.md`, the agent fills in only as much further context as is needed to advance that goal.

If information is missing, the agent never invents an answer and never sends a long questionnaire. It asks one high-leverage question at a time, immediately saves only what you confirm into the right file, and keeps working on useful goal-related tasks while waiting for anything non-blocking.

We recommend defining in `GOAL.md` a single outcome, a baseline, a numeric target, and a deadline — so you can tell "we did a lot" from real progress.

### The knowledge-gap queue

The starter begins semantically empty: it holds no pre-baked facts about you or your business. From the moment the conversation starts, the co-founder maintains a continuously re-ranked queue of knowledge gaps that affect the goal, the next decision, risk, or execution quality.

Each cycle it asks only the single highest-leverage question, immediately persists a verified answer to the correct file, and re-ranks whatever is still missing. Meanwhile it keeps advancing any unblocked goal-related work. The `HEARTBEAT.md` and `DREAMING.md` routines return to open gaps and refresh priorities.

The goal is never "know everything." The agent doesn't collect irrelevant or unnecessarily sensitive information, and never delays useful action just to complete onboarding.

## What the agent does on its own

Within task boundaries, it can research, analyze, plan, draft, edit local files, use connected read-only tools, and delegate well-scoped research or creation tasks. It's meant to be proactive: identify the binding constraint, choose the highest-leverage action, execute it, measure the result, and persist the learning.

Before sending a message, reply, outreach, proactive update, or team conclusion, the agent shows the exact content and asks for explicit approval — unless the action is covered by a standing, active, and precise send authorization in `USER.md`.

The following actions always require explicit approval:

- publishing or changing public content;
- any spend, purchase, subscription, or paid campaign;
- any legal or contractual commitment;
- deleting information, files, accounts, or records;
- changing permissions, sharing, or security settings.

The agent may prepare a full draft for approval. Approval to draft is not approval to send. The binding rules are detailed in `POLICY.md`.

## File map

| File | Role |
|---|---|
| `VISION.md` | The thesis, AGI-moment catalog, and north-star metrics — for maintainers and teachers, not loaded at runtime |
| `AGENTS.md` | Read order, responsibilities, and operating method (also holds the fast `onboarding_complete` cache flag) |
| `OPEN-LOOPS.md` | The open-threads ledger — every thread set aside is logged here, loaded at every startup, closed only with evidence or an explicit instruction |
| `ONBOARDING.md` | The merged, priority-ordered onboarding question sequence, active until the goal reaches `active` |
| `FLOW.md` | The full onboarding-to-activation flowchart, plus an LLM-judgment check to run after any structural change |
| `SOUL.md` | Character, values, voice, and the agent's configurable fields |
| `POLICY.md` | Authority boundaries, privacy, reliability, and approvals |
| `SECURITY.md` | Security, secrets, and privacy rules before sharing |
| `CONTRIBUTING.md` | Rules for maintaining the fork and contributing safely |
| `USER.md` | Working preferences and the sole source for the primary channel, its endpoint, and standing send permissions |
| `BUSINESS.md` | The business picture and the evidence it rests on |
| `GOAL.md` | The active business goal and its metrics |
| `HEARTBEAT.md` | The recurring routine that advances the active goal |
| `DREAMING.md` | The reflection, learning, and improvement routine — never replaces the goal |
| `connectors/registry.yaml` | Registry of connections, their purpose, and their write boundaries |
| `routines/state/` | Separate checkpoints preventing duplicate runs, messages, and questions |
| `second-brain/wiki/actions/` | The canonical register of actions, commitments, and retries |
| `teams/registry.md` | Onboarding, budget, and shutdown rules for teams and specialist agents |
| `playbooks/index.md` | Catalog of playbooks, chosen by goal and constraint |
| `assets/README.md` | Storage, dating, and backup rules for large assets |
| `*.metadata.md` | Description, source, rights, and status of non-text assets |

The `playbooks/` directory is never fully loaded in a single conversation. The agent uses `playbooks/index.md` to find, on demand, the smallest and most relevant playbook for the current goal and decision — or a small number of playbooks when there's genuine dependency. This keeps context focused.

The second brain implements Andrej Karpathy's [LLM Wiki pattern](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f): immutable raw sources, a text wiki the agent maintains incrementally, and a schema document defining ingest, query, lint, index, and log. The starter's business, privacy, and routine adaptations are documented in `second-brain/SCHEMA.md`.

A team is created only when there are at least two independent workstreams and a proven advantage from parallelism. Every team is named `Team Name — Mandate`, and every manager and worker is named `Name — Role`. There's a cap on teams and active workers, and a full meeting is skipped when there's no new evidence, decision, blocker, or deliverable.

## Primary communication channel

`USER.md` is the only place where your chosen communication channel, its endpoint, and the scope of standing send permissions are stored. Never copy the address, account, or communication identity into logs, team documents, or other files; elsewhere it's referred to only as "the primary channel."

`USER.md` holds the choice, provider, consent, and permissions; `connectors/registry.yaml` and the live connection determine whether the service is currently available. Before a proactive action cycle, the agent checks only new replies since the last cursor and incorporates them before deciding or acting. Proactive updates and team conclusions are routed back through that same channel.

Sending anything outward still requires explicit, immediate approval unless `USER.md` contains a standing, active, and precise send authorization covering the channel, destination, message type, and limits. If the channel or connection is missing, the agent asks one focused onboarding or connection question.

## Privacy first

- Never store passwords, API keys, access tokens, or payment details in the repository.
- Never upload customer lists, private correspondence, or sensitive information.
- Use invented names and data in examples.
- Connect an external service only when there's a clear task that requires it.
- Before committing or sharing, review the change as if it were about to be published.

Any image, audio, video, PDF, archive, generated media, or other large file is stored only under `assets/`, in a meaningfully named folder. Never store binary files in `second-brain/wiki/`.

Every such asset must have an adjacent description file named `<full-filename>.metadata.md`, including an accessible summary, source, usage rights, date, topics, confidentiality level, review status, and a non-secret external backup locator.

Asset files themselves are not pushed to Git by default, so the fork stays lightweight. Only folder structure, README files, `.gitkeep`, and metadata files are tracked in the repository; working documents and code live outside `assets/`. The full explanation and example are in `assets/README.md`.

## Delegating an ongoing task

When something needs to keep advancing continuously — not a one-off action — the Co-Founder doesn't carry it alone inside its main loop. It delegates it to a dedicated team member: its own conversation, its own schedule, one clear role. The starter's worked example: `teams/knowledge-completion-charter.md` — a team whose entire job is deepening the business/user picture over time, on its own daily cadence, without flooding you.

What prevents that worker from working hard for nothing: its output must land in the same shared location the rest of the system already reads from — `second-brain/wiki/`, the action register, or the gap queue — never a private file only that team knows about. `teams/registry.md` enforces this explicitly: a worker's write scope must feed the one shared brain, never maintain a separate one. Without that rule, you could staff an enthusiastic worker who fills page after page — and the rest of the system would simply never know they exist.

Here's what to expect in practice: a bounded, one-off task is just done inside the current conversation — nothing new gets opened. But the moment the agent recognizes a recurring pattern — the same kind of question or task coming back again — it's supposed to **proactively propose** forming a dedicated team: it states the cadence, the role split, and that it will run in its own separate conversation with its own schedule, not this one. When the work reaches its natural end (the charter's stop or sunset condition is met), the agent closes it out and archives that dedicated conversation rather than leaving it running without a purpose.

## Working principle

The Co-Founder doesn't replace your judgment. It extends your capacity to execute: reducing uncertainty, turning intentions into measurable actions, and bringing external actions to you for approval once they're genuinely ready.
