---
id: delivery-flow-pull-stop-the-line
shelf: delivery
title: Flow, Pull, and Stop-the-Line
summary: Improve end-to-end delivery by producing from real demand, limiting excess work, and stopping defects at their source.
triggers:
  - Work-in-progress, queues, or handoffs create long and unpredictable lead times.
  - Defects travel downstream and generate rework.
  - Local teams stay busy while customer delivery remains slow.
do_not_use_when:
  - Demand, capacity, or workflow cannot yet be observed reliably.
  - A safety or continuity incident requires command response before flow redesign.
  - The proposed “pull” mechanism would hide a structural capacity shortage.
stage: [validation, growth, scale]
tags: [toyota-production-system, flow, pull, just-in-time, jidoka, quality]
evidence_strength: official-company-history
reviewed: 2026-07-28
---

# Problem

Delivery is optimized around local utilization rather than the movement of customer value.
Excess production creates inventory and queues, while defects continue into later steps.
Toyota's official history identifies Just-in-Time and jidoka as the two core TPS concepts.

# Trigger diagnostic

- Choose one customer-valued product, service, or request type.
- Measure elapsed lead time and actual touch time from request to delivery.
- Count work waiting, in progress, blocked, reworked, and completed.
- Locate the longest queue and the step governing throughput.
- Identify where defects are first detectable and where they are currently found.
- Confirm that downstream demand can signal upstream replenishment.

# Required inputs

- Defined customer demand and completion criteria.
- Current process steps, owners, handoffs, and dependencies.
- Arrival rate, completion rate, work-in-progress, and cycle-time data.
- Defect definitions, detection points, and rework records.
- Capacity and availability by constrained step.
- A safe stop/escalation mechanism and authorized responders.

# Roles

- **Flow owner:** accountable for end-to-end performance.
- **Step owners:** maintain standard work and surface abnormalities.
- **Quality responder:** helps contain and resolve stop-the-line events.
- **Demand owner:** defines genuine replenishment signals.
- **Improvement coach:** challenges local optimization and checks system effects.

# Procedure with decision gates

1. Define value from the downstream customer's perspective.
2. Map every material step from demand signal to accepted delivery.
3. Mark queues, batch boundaries, approvals, handoffs, rework, and wait states.
4. Measure baseline lead time, touch time, WIP, throughput, and first-pass yield.
5. **Gate 1 — visibility:** stop redesign if the flow or demand signal is not observable.
6. Identify the constraint that currently limits end-to-end throughput.
7. Protect the constraint from avoidable interruptions and defective inputs.
8. Reduce batch size where smaller movement is operationally safe.
9. Define an explicit WIP limit for each active stage.
10. Prevent new work from entering a full stage; resolve blockage first.
11. Establish a pull signal from the consuming step to the supplying step.
12. Replenish only what is needed, when needed, in the needed amount.
13. Separate genuine demand from forecasts, internal urgency, and speculative production.
14. **Gate 2 — pull readiness:** proceed only if signals, ownership, and replenishment rules are explicit.
15. Define an abnormal condition for quality, timing, safety, or missing information.
16. Make the abnormality immediately visible to the people who can respond.
17. Authorize the operator or automated control to stop or isolate affected work.
18. Contain the defect so it cannot pass to the next process.
19. Restore safe service only after the immediate condition is understood.
20. Record the abnormality for root-cause follow-up rather than normalizing it.
21. **Gate 3 — restart:** resume only when the responder confirms containment and restart criteria.
22. Compare throughput and lead time after each bounded change.
23. Check whether queues or defects were merely displaced upstream or downstream.
24. Adjust WIP limits from observed flow, not from desired utilization.
25. Standardize the improved method and visual controls.
26. Train every participant on pull, stop, escalation, and restart rules.
27. Review demand variation and capacity before tightening inventory buffers further.
28. Repeat on the next system constraint; do not optimize every step simultaneously.

# Output contract

- Current-state flow map with measured queues and defect points.
- Defined demand signal and replenishment rule.
- WIP limits and ownership by stage.
- Stop-the-line conditions, responders, containment, and restart criteria.
- Before/after lead-time, throughput, WIP, and quality evidence.
- Updated standard work and next constraint to investigate.

# Metrics

## Outcome
- End-to-end customer lead time.
- Throughput of accepted, usable output.
- First-pass yield and defect escape rate.

## Leading
- WIP and queue age by stage.
- Batch size and replenishment response time.
- Time from abnormality detection to containment.

## Guardrail
- Safety events and service interruptions.
- Demand lost through overly tight buffers.
- Overtime, burnout, supplier instability, and hidden rework.

# Failure modes

- Treating Just-in-Time as indiscriminate inventory cutting.
- Calling a forecast a pull signal.
- Maximizing utilization at every step and increasing queues.
- Stopping work without a fast response and restart protocol.
- Punishing people who expose abnormalities.
- Automating a defective or unstable process.
- Moving the bottleneck without measuring the whole flow.

# Guardrails

- Protect people and customers before flow efficiency.
- Never suppress an abnormality to preserve a throughput target.
- Keep sufficient buffers where replenishment risk is not controlled.
- Do not impose manufacturing terminology where clearer service language works better.
- Make WIP limits and exceptions visible.
- Escalate chronic capacity shortages rather than disguising them as discipline failures.

# Sources

- Toyota, “Basic concept of the Toyota Production System”: https://www.toyota-global.com/company/history_of_toyota/75years/data/automotive_business/production/system/change.html
- Toyota, “The Origins of Just-in-Time”: https://www.toyota-global.com/company/history_of_toyota/75years/text/taking_on_the_automotive_business/chapter2/section4/item5.html
- Toyota, “The Birth of Jidoka”: https://www.toyota-global.com/company/history_of_toyota/75years/text/taking_on_the_automotive_business/chapter1/section1/item4.html
- Toyota, “Production Parts Logistics”: https://www.toyota-global.com/company/history_of_toyota/75years/data/automotive_business/production/logistics/production_parts/index.html

# Adaptation notes

- WIP limits, decision gates, and metric categories translate TPS principles into a general business workflow.
- Toyota's history supports pull as downstream withdrawal and jidoka as stopping on abnormality; it does not prescribe this exact software/service procedure.
