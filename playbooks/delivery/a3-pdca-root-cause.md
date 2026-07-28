---
id: delivery-a3-pdca-root-cause
shelf: delivery
title: A3 / PDCA Root-Cause Resolution
summary: Resolve a measurable operational gap through owner-led observation, causal analysis, tested countermeasures, and follow-up.
triggers:
  - A material problem recurs after quick fixes.
  - Teams disagree about the current condition or root cause.
  - A process misses a defined quality, time, cost, or service standard.
do_not_use_when:
  - Immediate containment is required for safety, security, legal, or customer harm.
  - The decision is a simple reversible choice with no meaningful causal uncertainty.
  - The problem has no observable process or measurable gap.
stage: [validation, growth, scale]
tags: [a3, pdca, root-cause, lean, operations, continuous-improvement]
evidence_strength: primary-practitioner-source
reviewed: 2026-07-28
---

# Problem

A recurring gap is being treated with opinions or isolated fixes instead of evidence.
The playbook turns problem solving into an owned learning process and a compact decision record.
The A3 is a storyboard and management dialogue, not merely a form to complete.

# Trigger diagnostic

- Name the affected customer, operator, process, or business outcome.
- State the expected condition and the observed condition in the same unit.
- Confirm the gap is repeated, material, and within an identifiable process.
- Ask whether urgent containment must happen before investigation.
- Check whether a prior A3, incident review, or countermeasure already exists.
- Proceed only when an owner can observe the work and test a countermeasure.

# Required inputs

- Current standard or expected result.
- Actual observations with dates, counts, and source.
- Process boundary from demand/input to delivered output.
- History of incidents, attempted fixes, and known changes.
- Access to the place where the work occurs, physically or digitally.
- Constraint, target condition, review date, and acceptable risk.

# Roles

- **A3 owner:** owns the investigation, stakeholder dialogue, and implementation.
- **Coach:** tests the owner's reasoning without supplying a predetermined answer.
- **Process participants:** explain actual work and test countermeasures.
- **Decider:** approves changes outside the owner's authority.
- **Evidence reviewer:** checks measurements and verifies the resulting condition.

# Procedure with decision gates

1. Define the problem as a gap between current and target condition.
2. Express the gap with a measure, scope, time window, and affected population.
3. Separate temporary containment from the permanent problem-solving cycle.
4. Observe the actual work; capture sequence, queues, handoffs, defects, and exceptions.
5. Draw the current condition so another person can understand the process quickly.
6. Break the broad gap into smaller, observable subproblems.
7. Select the subproblem with the strongest evidence and business consequence.
8. **Gate 1 — problem clarity:** stop if current state, target, or ownership is ambiguous.
9. Identify where and when the gap occurs and where it does not occur.
10. Generate causal hypotheses from observations, not from rank or intuition.
11. Trace causes until reaching conditions that can be changed and tested.
12. Reject a “root cause” that merely renames the symptom or blames a person.
13. Check each proposed cause against evidence and disconfirming cases.
14. **Gate 2 — causal evidence:** do not design a solution until a plausible cause explains the pattern.
15. Define a target condition with measure, threshold, and due date.
16. Generate multiple countermeasures that address the supported cause.
17. Compare countermeasures by expected effect, effort, risk, reversibility, and learning value.
18. Select the smallest safe countermeasure capable of testing the causal claim.
19. Specify who will do what, by when, and how the result will be observed.
20. **Gate 3 — authorization:** obtain approval for material process, policy, customer, or spending changes.
21. Run the countermeasure as a bounded PDCA test.
22. Compare actual results with the predicted target and baseline.
23. Check for displacement of harm to another step, customer, or metric.
24. **Gate 4 — result:** adopt only when evidence shows the target condition improved without guardrail harm.
25. Standardize the successful method and assign ongoing ownership.
26. If the result failed, preserve the evidence and revise the causal hypothesis.
27. Schedule follow-up to verify that the improvement persists.
28. Share the completed A3 as a learning record, including failed countermeasures.

# Output contract

- One compact A3 containing context, current condition, target, analysis, and plan.
- A clearly named owner and decider.
- Evidence-backed causal hypothesis with uncertainty stated.
- Countermeasure test with prediction, scope, dates, and rollback.
- Before/after result, guardrail effects, and follow-up date.
- Updated standard work or a documented next PDCA cycle.

# Metrics

## Outcome
- Size of the original gap after implementation.
- Recurrence rate across the agreed follow-up window.
- Customer or business impact attributable to gap closure.

## Leading
- Percentage of observations supported by direct evidence.
- Countermeasure actions completed on time.
- Time from problem framing to first bounded test.

## Guardrail
- New defects, delays, cost, workload, or risk shifted elsewhere.
- Containment breaches while analysis is underway.
- Reopened A3s caused by unsupported conclusions.

# Failure modes

- Filling the template before observing the work.
- Treating “human error” as a sufficient root cause.
- Jumping from symptom to preferred solution.
- Listing actions without a testable prediction.
- Measuring activity completed instead of the target condition.
- Declaring victory immediately after implementation.
- Using the A3 as a compliance report or punishment tool.

# Guardrails

- Contain urgent safety, security, legal, and customer harm first.
- Do not fabricate precision when baseline data is weak.
- Preserve dissenting evidence and alternative causes.
- Do not change historical observations to fit the chosen narrative.
- Keep accountability with the process owner, not with a blamed individual.
- Require approval for irreversible or consequential changes.

# Sources

- Lean Enterprise Institute, “A3 Report”: https://www.lean.org/lexicon-terms/a3-report/
- Lean Enterprise Institute, “A3 Problem-Solving — A Resource Guide”: https://www.lean.org/lexicon-terms/a3-report/

# Adaptation notes

- The diagnostic gates, metric taxonomy, and authorization language are operational adaptations.
- LEI explicitly presents A3 as a problem-solving methodology, storyboard, report, and management discipline.
- This file combines that A3 discipline with an explicit PDCA test loop; it does not claim a single mandatory A3 template.
