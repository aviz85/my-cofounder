---
schema_version: "1.0"
document_type: business_profile
status: empty
allowed_statuses:
  - empty
  - partial
  - active
empty_detection:
  mode: all_content_paths_blank
  blank_values:
    - null
    - ""
    - []
    - {}
  content_paths:
    - business.name
    - business.one_line_description
    - business.stage
    - business.primary_customers
    - business.offers
    - business.revenue_model
    - business.channels
    - business.constraints
    - business.evidence_sources
  required_for_active:
    - business.one_line_description
    - business.primary_customers
    - business.offers
  status_rule: "Keep status empty while every content path is blank; use partial after any answer; use active only when every required_for_active path is populated."
onboarding:
  priority_scope: global
  ask_mode: one_question_per_turn
  selection_rule: lowest_global_priority_question_not_complete
  never_infer_answers: true
  questions:
    - id: minimum_business_context
      global_priority: 30
      completion_mode: all_answer_paths_nonblank
      prompt: "In one sentence, what does the business do, who does it serve, and what does it currently offer?"
      answer_paths:
        - business.one_line_description
        - business.primary_customers
        - business.offers
    - id: primary_customer
      global_priority: 80
      completion_mode: all_answer_paths_nonblank
      prompt: "Who is the primary customer the business serves now?"
      answer_paths:
        - business.primary_customers
    - id: current_offer
      global_priority: 90
      completion_mode: all_answer_paths_nonblank
      prompt: "What does the business currently offer that a customer can choose, buy, or adopt?"
      answer_paths:
        - business.offers
    - id: business_model_and_constraints
      global_priority: 130
      completion_mode: any_answer_path_nonblank
      prompt: "What business-model fact or operating constraint is most important for this system to know next?"
      answer_paths:
        - business.revenue_model
        - business.constraints
business:
  name: null
  one_line_description: null
  stage: null
  primary_customers: []
  offers: []
  revenue_model: null
  channels: []
  constraints: []
  evidence_sources: []
---

# Business

<!--
This business profile is intentionally semantically empty.
Record facts only when supplied by the user or supported by an ingested source.
Keep hypotheses in the wiki with an explicit hypothesis label, not here as facts.
-->
