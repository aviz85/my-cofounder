# Query Operation

## Purpose

Answer a focused question from the smallest relevant evidence set and leave reusable knowledge better organized.

## Procedure

1. Restate the question, intended decision, and relevant primary goal.
2. Start at the [wiki index](../wiki/index.md).
3. Open only the shelves and pages relevant to the question.
4. Follow source references into the raw layer when precision, conflict resolution, or high-stakes accuracy requires it.
5. Separate facts, inferences, hypotheses, recommendations, and decisions.
6. State material unknowns, contradictions, staleness, and confidence.
7. Answer concisely with source IDs and useful locators.
8. If the result is reusable and textual, save a dated artifact under [outputs](../outputs/README.md). Put a binary or large result under repository-level [`assets/`](../../assets/README.md), verify its Git-ignore status, create its sibling metadata, and retain only a stable locator in the Second Brain.
9. If durable canonical knowledge changed, update the appropriate wiki page and index route.
10. Append a log entry when the query creates a durable output or materially changes canonical knowledge.
11. Run the [lint operation](lint.md) after any write.

## Completion evidence

A query is complete when the question is answered or the smallest evidence gap is explicit, factual claims are traceable, and any durable write is indexed and linted.
