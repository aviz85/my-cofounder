---
schema_version: "1.1"
document_type: user_profile
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
    - profile.preferred_name
    - profile.pronouns
    - profile.role
    - profile.timezone
    - profile.languages
    - collaboration.desired_agent_role
    - collaboration.communication_preferences
    - collaboration.decision_preferences
    - communication.primary_channel
    - communication.primary_provider
    - communication.endpoint_or_address
    - communication.response_check_cadence
    - communication.allowed_message_types
    - communication.standing_send_authorization.grants
    - communication.fallback_channel
    - communication.fallback_provider
    - communication.consent.channel_use
    - communication.consent.endpoint_storage
    - communication.consent.recorded_at
    - communication.last_confirmed_date
    - communication.proactive_window.days
    - communication.proactive_window.start_local
    - communication.proactive_window.end_local
    - communication.proactive_window.source
  required_for_active:
    - profile.preferred_name
  status_rule: "Keep status empty while every content path is blank; use partial after any answer; use active only when every required_for_active path is populated."
onboarding:
  priority_scope: global
  ask_mode: one_question_per_turn
  selection_rule: lowest_global_priority_question_not_complete
  never_infer_answers: true
  questions:
    - id: communication_setup
      global_priority: 50
      completion_mode: any_answer_path_nonblank
      prompt: "What communication setup should the system use: primary channel and provider, reply-check cadence, allowed message types, any exact standing send grants, fallback channel, and consent? A personal endpoint is optional and should be shared only if necessary. Also — what days and hours should proactive updates reach you on that channel (a default of every day, 08:00-21:00, applies if you'd rather skip this)? This never limits when real work happens, only when you're proactively notified about it."
      answer_paths:
        - communication.primary_channel
        - communication.primary_provider
        - communication.endpoint_or_address
        - communication.response_check_cadence
        - communication.allowed_message_types
        - communication.standing_send_authorization.grants
        - communication.fallback_channel
        - communication.fallback_provider
        - communication.consent.channel_use
        - communication.consent.endpoint_storage
        - communication.consent.recorded_at
        - communication.last_confirmed_date
        - communication.proactive_window.days
        - communication.proactive_window.start_local
        - communication.proactive_window.end_local
        - communication.proactive_window.source
    - id: preferred_name
      global_priority: 10
      completion_mode: all_answer_paths_nonblank
      prompt: "What would you like this system to call you?"
      answer_paths:
        - profile.preferred_name
    - id: collaboration_style
      global_priority: 60
      completion_mode: any_answer_path_nonblank
      prompt: "How should the system work with you when it needs to recommend, challenge, or execute?"
      answer_paths:
        - collaboration.desired_agent_role
        - collaboration.communication_preferences
        - collaboration.decision_preferences
profile:
  preferred_name: null
  pronouns: null
  role: null
  timezone: null
  languages: []
collaboration:
  desired_agent_role: null
  communication_preferences: []
  decision_preferences: []
communication:
  primary_channel: null
  primary_provider: null
  endpoint_or_address: null
  response_check_cadence: null
  allowed_message_types: []
  standing_send_authorization:
    default: explicit_approval_required
    grants: []
  fallback_channel: null
  fallback_provider: null
  consent:
    channel_use: null
    endpoint_storage: null
    recorded_at: null
  last_confirmed_date: null
  proactive_window:
    days: null
    start_local: null
    end_local: null
    source: null
communication_schema:
  allowed_primary_channels:
    - whatsapp
    - email
    - other
  allowed_provider_keys:
    whatsapp:
      - whatsapp
    email:
      - gmail
      - outlook_email
      - other_email
    other: []
  provider_mapping_rule: "Provider fields select an adapter for a user-chosen channel. They do not contain account data and never assert installation, connection, authentication, or live availability."
  live_availability_rule: "Never persist live availability in USER.md. Resolve it from the live probe source declared in connectors/registry.yaml at action time."
  sensitive_paths:
    - communication.endpoint_or_address
  endpoint_persistence_rule: "Optional and sensitive; store only with explicit user consent and only in USER.md."
  consent_rule: "Consent is user-owned and must state whether channel use and optional endpoint storage are allowed; silence is not consent."
  proactive_window_default_rule: "Governs only PROACTIVE outbound sends (a heartbeat or dreaming push, not a live reply in an active session) — it never limits when real work happens, only when the user is notified about it. If communication.proactive_window fields are null, apply the default of every day, 08:00-21:00 in profile.timezone (or the connector's local time if timezone is unset), and record source: default on first use rather than leaving it silently assumed. A direct user answer always overrides the default and is recorded with source: user."
  standing_send_authorization_schema:
    required_exact_match_fields:
      - channel
      - provider
      - audience
      - message_types
      - material_scope
    required_record_fields:
      - grant_id
      - granted_at
    optional_limit_fields:
      - expires_at
      - revoked_at
  authorization_rule: "A send is authorized only by a non-revoked, unexpired grant whose channel, provider, audience, message type, and material scope all match. A recorded grant never overrides a stricter repository policy or approval boundary."
---

# User

<!--
This profile is intentionally semantically empty.
Populate only from direct user statements or evidence the user has approved.
Do not infer identity, preferences, demographics, or private details.
Personal contact endpoints belong only in this file and remain empty unless explicitly needed and consented.
Channel and provider fields express the user's choice, consent, and authorization only.
Installation, authentication, and live availability are runtime connector facts and do not belong here.
-->
