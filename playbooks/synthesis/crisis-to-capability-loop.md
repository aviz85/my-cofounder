---
id: synthesis-crisis-to-capability-loop
shelf: synthesis
title: Crisis-to-Capability Loop
summary: Stabilize a disruption, recover essential service, and convert verified lessons into stronger operating capability.
triggers:
  - A major incident disrupts customers, operations, or trust.
  - Response and learning are split across disconnected teams.
  - Known incident lessons repeatedly fail to change controls.
do_not_use_when:
  - The event is minor enough for normal issue management.
  - Competent public authority or a regulated incident framework requires another process.
stage: [crisis, recovery, scale, transformation]
tags: [original-synthesis, crisis, continuity, recovery, learning]
evidence_strength: original-composition
reviewed: 2026-07-28
---

# Original composition notice
This is an original cross-domain composition for a general business operating system.
It joins continuity, decision rights, service health, risk, and learning playbooks;
it is not an official incident-command or emergency-management standard.

# Component playbooks
- [Continuity and Crisis Communications](../control/continuity-crisis-communications.md)
- [RAPID Decision Rights](../control/rapid-decision-rights.md)
- [Enterprise Risk Register](../control/enterprise-risk-register.md)
- [DORA Delivery Health](../learning/dora-delivery-health.md)
- [After-Action Review](../learning/after-action-review.md)
- [Project Premortem](../control/project-premortem.md)

# Problem
Organizations often end crisis work when service returns. That leaves communication gaps,
temporary workarounds, and known failure modes embedded in the system. This loop links
stabilization to recovery evidence, after-action learning, control improvement, and
tested readiness for the next disruption.

# Trigger diagnostic
- Are people, essential functions, data, or trust materially at risk?
- Is there one incident lead and one verified operational picture?
- Which services and audiences are most affected?
- What conditions define containment, recovery, and closure?
- Which temporary workarounds create new exposure?
- Who owns turning lessons into tested capability?

# Required inputs
- Incident signal, timeline, scope, and severity criteria.
- Essential functions and continuity plan.
- Service, customer, security, and communication evidence.
- Decision authority and escalation contacts.
- Existing risk register, controls, and prior incidents.
- Recovery criteria and evidence owners.

# Roles
- **Incident D:** one decision owner during active response.
- **Operations R/P:** recommends and executes stabilization.
- **Continuity lead:** protects essential functions and dependencies.
- **Communications lead:** manages verified audience updates.
- **Risk/safety/legal advisers:** set mandatory constraints.
- **Learning lead:** owns review, remediation evidence, and exercises.
# Procedure with decision gates
1. Verify the signal, protect people, and classify severity.
2. Activate continuity and assign one D, one operating rhythm, and one record.
3. State confirmed facts, unknowns, immediate actions, and next update time.
4. Stabilize the highest-impact essential function first.

**Gate 1 — containment:** do not shift to recovery while impact is expanding,
authority is unclear, or the operational picture is unreliable.
5. Restore minimum viable service through controlled workarounds.
6. Monitor customer, security, reliability, and communication guardrails.
7. Document temporary controls, owners, expiry, and rollback.
8. Verify recovery criteria from the environment, not team confidence.

**Gate 2 — recovery:** enter recovery only when critical service is stable, residual
risk is accepted by the correct authority, and stakeholder handoffs are complete.
9. Reconcile the timeline and preserve evidence.
10. Conduct a non-punitive after-action review.
11. Translate lessons into risk treatments, service-flow improvements, and exercises.
12. Premortem the revised capability against recurrence and adjacent failure modes.
13. Test each important remediation and retire temporary workarounds.

**Gate 3 — closure:** close only when actions have evidence, not merely owners or tickets.
14. Update continuity, communication, risk, and delivery practices.
15. Share an appropriately sanitized learning brief.

# Output contract
- Incident record, authority map, and verified timeline.
- Continuity status and versioned stakeholder communications.
- Containment, recovery, and closure evidence.
- After-action findings with sustains and improvements.
- Remediation register with tests, owners, due dates, and residual risk.
- Updated exercise or control plan.
# Metrics
- Time to detect, decide, contain, and recover.
- Essential-function service loss and customer impact.
- Time to first and subsequent verified communications.
- Failed recovery attempts and temporary-control age.
- Remediation closure with test evidence.
- Recurrence and near-miss rate.
- Delivery and reliability indicators for affected services.
# Failure modes
- Declaring victory when dashboards recover briefly.
- Mixing public communication with unverified technical speculation.
- Blaming individuals and suppressing useful evidence.
- Leaving temporary access, vendors, or workarounds active.
- Closing remediation tickets without testing effectiveness.
- Learning only the exact failure and missing adjacent scenarios.

# Guardrails
- Human safety and competent authority override this playbook.
- Preserve evidence and legally required notifications.
- Protect personal, security-sensitive, and privileged information.
- Do not publish causes until verified and approved.
- Separate accountability for misconduct from the learning review.
- External communications and commitments require authorized spokespeople.

# Adaptation notes
For non-software incidents, replace DORA measures with equivalent flow and stability
measures for the affected service. For regulated events, embed the required incident
process rather than substituting this synthesis. Closure must include tested capability.
