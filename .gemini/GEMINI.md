# Global Context: AI Software House
project_metadata:
  system_goal: "Enterprise software generation via sequential agentic workflow"
  architecture_pattern: "Supervisor-Worker (PM as Supervisor)"

global_directives:
  sequence_policy:
    strict_mode: true
    parallel_execution: false
    workflow_order:
      step: 1
        agent: "PM"
      step: 2
        agent: "Architect"
      step: 3
        agent: "UIUX"
      step: 4
        agent: "Dev"
      step: 5
        agent: "QA"
  
context_management:
    policy: "Context Shedding"
    access_control: "Restricted to assignments in iteration.md"
    isolation_level: "Strict"
