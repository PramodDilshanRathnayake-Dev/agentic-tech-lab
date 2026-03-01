---
description: Defines iteration lifecycle amoung the agent team
---

name: standard_iteration_cycle
trigger: user_prompt
steps:
  - id: 1_planning
    agent: "@pm"
    action: "Define mission and PRD"
    required_artifacts: ["iteration.md"]
  - id: 2_architecture
    agent: "@architect"
    action: "Design system"
    depends_on: 1_planning
  - id: 3_interface
    agent: "@uiux"
    action: "Generate UI components via Stitch"
    depends_on: 2_architecture
  - id: 4_development
    agent: "@dev"
    action: "Implement code and PR"
    depends_on: 3_interface
  - id: 5_testing
    agent: "@qa"
    action: "Validate PR and generate test-summery.md"
    depends_on: 4_development
