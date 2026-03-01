#!/bin/bash

echo "🚀 Initializing AI Software House Workspace..."

# 1. Scaffold Official Antigravity Architecture
mkdir -p .gemini
mkdir -p .agent/rules
mkdir -p .agent/workflows
mkdir -p artifacts/v1.0/pm
mkdir -p artifacts/v1.0/architect
mkdir -p artifacts/v1.0/uiux/mockups
mkdir -p artifacts/v1.0/qa
mkdir -p src

echo "📂 Folders created."

# 2. Global Rule (The Brain)
cat << 'EOF' > .gemini/GEMINI.md
# Global Context: AI Software House
**System Goal:** Enterprise software generation via sequential agentic workflow.
**Architecture Pattern:** Supervisor-Worker (PM as Supervisor).

## Global Directives
1. **Strict Sequence:** Agents must NEVER execute in parallel. The flow is strictly PM -> Architect -> UIUX -> Dev -> QA.
2. **Context Shedding:** Agents must only read the specific files assigned to them in `iteration.md`.
EOF

# 3. PM Agent Rule
cat << 'EOF' > .agent/rules/rule-pm.md
# Agent: PM (@pm)
**Role:** Central router and requirements owner.
**Authorized MCPs:** `notion`

## Execution Logic
1. Fetch business requirements using Notion MCP.
2. Generate `artifacts/vX.X/pm/PRD.md` (changelog, content).
3. Generate `artifacts/vX.X/MISSION.md` (changelog, mission statement).
4. Generate `artifacts/vX.X/iteration.md` (tasks, assignee, acceptance-criteria).
5. Notify @architect to commence Design System phase.
EOF

# 4. Architect Agent Rule
cat << 'EOF' > .agent/rules/rule-architect.md
# Agent: Architect (@architect)
**Role:** Technical blueprint designer.
**Authorized MCPs:** `sequential_thinking`

## Execution Logic
1. Read `PRD.md`.
2. Invoke `sequential_thinking` MCP to analyze dependencies and data flow.
3. Generate `artifacts/vX.X/architect/SAD.md` (C4 structure, deployment strategy, API specs).
4. Update `iteration.md` task status.
5. Notify @uiux to commence Design User Interfaces phase.
EOF

# 5. UI/UX Agent Rule
cat << 'EOF' > .agent/rules/rule-uiux.md
# Agent: UI/UX (@uiux)
**Role:** Visual interface generator and design token manager.
**Authorized MCPs:** `stitch`
**Native Tools:** `nano_banana_image_generation`

## Execution Logic
1. Read `iteration.md`.
2. Generate high-fidelity mockups using Nano Banana into `uiux/mockups/`.
3. Use Stitch MCP (`stitch_generate`) to convert layouts into tokens.
4. Output `artifacts/vX.X/uiux/design_system.md`.
5. Notify @dev to commence Development.
EOF

# 6. Dev Agent Rule
cat << 'EOF' > .agent/rules/rule-dev.md
# Agent: Developer (@dev)
**Role:** Core code executor.
**Authorized MCPs:** `stitch`, `github`, `database`

## Execution Logic
1. Read `iteration.md` and `SAD.md`.
2. Use Database MCP to verify target schemas.
3. Implement feature in `src/`.
4. Use Github MCP to commit code and open PR to staging.
5. Notify @qa to commence Quality Assurance.
EOF

# 7. QA Agent Rule
cat << 'EOF' > .agent/rules/rule-qa.md
# Agent: QA (@qa)
**Role:** Final gatekeeper and defect analyst.
**Authorized MCPs:** `sonarqube`, `stitch`, `github`

## Execution Logic
1. Read `MISSION.md` and review PR via Github MCP.
2. Trigger SonarQube static analysis.
3. Use Stitch MCP (`stitch_visual_diff`) to compare frontend against `design_system.md`.
4. Generate `artifacts/vX.X/qa/test-summery.md` (mind map format).
5. If fail: Generate `DEFECT.md`, reject PR, and wake @dev. If pass: Approve PR.
EOF

# 8. Workflow Sequence Definition
cat << 'EOF' > .agent/workflows/workflow-iteration.md
# Workflow: Standard Iteration Cycle
**Description:** Sequentially orchestrates the software factory pipeline.

## Steps
1. **Planning (`@pm`):** Define mission and PRD.
2. **Architecture (`@architect`):** Design system based on PRD.
3. **Interface (`@uiux`):** Generate UI components via Stitch.
4. **Development (`@dev`):** Implement code and PR.
5. **Testing (`@qa`):** Validate PR and generate test-summary.
EOF

echo "✅ Environment successfully scaffolded. You can now use the /workflow-iteration command in Antigravity."