---
id: economics-rolling-cash-runway-forecast
shelf: economics
title: Rolling Cash and Runway Forecast
summary: Maintain a continuously updated view of cash inflows, outflows, liquidity risk, and decision thresholds.
triggers:
  - Cash timing is unclear despite reported profit or booked revenue.
  - Runway, hiring, spending, or financing decisions depend on uncertain collections.
  - Actual cash repeatedly diverges from plan.
do_not_use_when:
  - Records are too incomplete to establish opening cash and committed obligations.
  - The output will be treated as audited financial statements or tax advice.
  - Insolvency, covenant, or payroll risk requires immediate licensed advice.
stage: [validation, growth, scale]
tags: [cash-flow, runway, liquidity, forecast, variance, finance]
evidence_strength: official-guidance-plus-labeled-synthesis
reviewed: 2026-07-28
---

# Problem

Accounting profit, sales, and signed contracts do not guarantee cash will be available when bills are due.
The SBA advises maintaining financial records and cash-flow projections and comparing money in with money out.
The rolling horizon, scenario logic, runway thresholds, and weekly operating procedure below are labeled synthesis.

# Trigger diagnostic

- Reconcile current bank cash to the ledger.
- List payroll, tax, debt, supplier, refund, and contractual due dates.
- Separate booked revenue from expected collection dates.
- Identify the week or month with the lowest projected cash.
- Calculate how much of the forecast depends on uncertain sales or collections.
- Escalate immediately if any protected payment may be missed.

# Required inputs

- Reconciled opening cash by accessible account.
- Receivables with probability, amount, and expected receipt date.
- Payables and commitments with amount, due date, and flexibility.
- Payroll, taxes, debt service, owner draws, and financing flows.
- Historical cash timing and forecast-versus-actual records.
- Scenario assumptions and explicit minimum-cash threshold.

# Roles

- **Forecast owner:** updates the model and records assumptions.
- **Bookkeeping source owner:** reconciles actual transactions.
- **Revenue owner:** validates pipeline and collection timing.
- **Cost owners:** validate committed and discretionary outflows.
- **Decider:** approves cash actions, financing, or commitment changes.

# Procedure with decision gates

1. Set the forecast cadence and horizon appropriate to the decision.
2. Record opening available cash from reconciled account balances.
3. Classify restricted or inaccessible cash separately.
4. Enter committed inflows by expected cash receipt date.
5. Enter probabilistic inflows only with an explicit probability and evidence.
6. Enter fixed and committed outflows by payment date.
7. Separate discretionary costs that can be delayed, reduced, or canceled.
8. Include taxes, debt service, refunds, fees, and owner distributions.
9. Calculate net cash flow and ending cash for each period.
10. **Gate 1 — completeness:** stop if opening cash or material commitments cannot be reconciled.
11. Create a base case from current evidence.
12. Create a downside case using slower collections, lower sales, or higher costs.
13. Create an upside case without relaxing committed outflows.
14. Record every scenario assumption beside the affected line.
15. Identify minimum cash, first threshold breach, and lowest cash point.
16. Estimate runway as a decision aid using the relevant net burn pattern.
17. Do not use a simple cash/burn quotient when flows are highly seasonal or lumpy.
18. **Gate 2 — liquidity risk:** escalate if any scenario crosses payroll, tax, covenant, or solvency boundaries.
19. Rank actions by cash impact, timing, reversibility, and customer harm.
20. Separate collection actions, pricing actions, cost actions, and financing actions.
21. Assign owner, due date, expected cash effect, and confidence to each action.
22. Obtain approval before changing commitments, headcount, financing, or external terms.
23. At each cadence, import actual inflows and outflows.
24. Compare actuals with the prior locked forecast, not a rewritten version.
25. Explain variance by amount, timing, classification, or assumption error.
26. Update future periods from the new evidence.
27. **Gate 3 — forecast quality:** revise methods when error is persistent or decision-material.
28. Preserve prior versions and decisions made from them.
29. Review thresholds and scenario assumptions monthly or after a major event.
30. Retire the forecast only when another controlled liquidity process replaces it.

# Output contract

- Rolling cash table with opening cash, inflows, outflows, and ending cash.
- Base, downside, and upside scenarios with assumptions.
- Minimum-cash threshold and first projected breach date.
- Runway estimate with calculation method and limitations.
- Action register with owner, timing, cash effect, and approval state.
- Forecast-versus-actual variance log and version history.

# Metrics

## Outcome
- Ending available cash and minimum projected cash.
- Months or weeks of runway under each scenario.
- Number and severity of threshold breaches.

## Leading
- Collection timing, receivable aging, and committed-cost coverage.
- Forecast error by amount and timing.
- Percentage of material lines supported by current evidence.

## Guardrail
- Payroll, tax, debt, covenant, and statutory obligations.
- Customer retention, service quality, and critical capability loss.
- Excessive reliance on uncommitted financing or speculative revenue.

# Failure modes

- Confusing revenue with collected cash.
- Omitting taxes, refunds, debt, or annual payments.
- Rewriting forecasts so prior errors disappear.
- Treating all pipeline as equally collectible.
- Using a single average burn rate despite lumpy cash flow.
- Cutting strategically critical capacity without scenario comparison.
- Presenting a management model as audited assurance.

# Guardrails

- Reconcile opening cash before using the forecast.
- Mark estimates and uncertain receipts explicitly.
- Preserve protected obligations and legal constraints.
- Seek licensed accounting, legal, or restructuring advice when required.
- Never fabricate missing balances or transaction dates.
- Keep source financial data confidential and access-controlled.

# Sources

- U.S. Small Business Administration, “Manage your finances”: https://www.sba.gov/business-guide/manage-your-business/manage-your-finances
- U.S. Small Business Administration, “Write your business plan”: https://www.sba.gov/business-guide/plan-your-business/write-your-business-plan

# Adaptation notes

- **Synthesis:** the rolling cadence, 13-week-style operating view, scenario design, runway calculation, gates, and action register are implementation choices, not an SBA-prescribed method.
- **SBA-backed core:** maintain bookkeeping, understand assets/liabilities/equity, project cash flow, categorize inflows/outflows, and use financial information for decisions.
- Choose weekly periods for near-term liquidity risk and monthly periods for longer planning; document the chosen horizon.
