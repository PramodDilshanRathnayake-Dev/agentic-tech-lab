# PRD: Iteration v2.0 (UI/UX Consistency)

## Objective
Fully redesign the CEO Dashboard to perfectly match the provided mockup (`ceo_dashboard_flat.png`). The user highlighted significant gaps between the previous implementation and the design spec, emphasizing that the UI/UX is critical from a CEO's perspective. The strategy is to rebuild the UI fundamentally rather than just modifying existing disjointed components.

## Core Requirements (v2.0)
1. **Layout & Grid Strategy**:
   - Sidebar: Sticky left, dark distinct panel with icons, active state highlighted with cyan.
   - Header: Top bar containing logo, "AGENTIC ORCHESTRA MISSION CONTROL", "CEO DASHBOARD | Q4 PROJECT: ALPHA NEXUS".
   - Content Grid: 3 main columns on large screens. 
     - Left primary section: Active Agents Status (Horizontal cards), Project Health (Gantt chart timeline), and AI Agent Orchestra (Network node visual).
     - Right secondary section: Budget & Token Tracking (Donut chart & line graph), Human-in-the-Loop Approvals (List items), Live activity feed (Timeline feed).
2. **Styling Specifics**:
   - **Background**: Deep cyber dark blue (e.g., `#0A111F`) replacing the flat blacks or simple grays.
   - **Borders/Panels**: Rounded corners (12-16px). Borders should be semi-transparent cyan (`rgba(0, 210, 255, 0.2)`) with a subtle glow or inner shadow using a cyan hue.
   - **Typography**: Crisp, clean sans-serif. Component headers in all caps (e.g., `ACTIVE AGENTS STATUS`).
3. **Redesigned Components**:
   - **AgentCard**: Square-ish with rounded corners, top avatar, name, handle (`@role`), and current status text.
   - **ProjectHealthTimeline**: Must visually represent the distinct Gantt-style bars shown in the mockup: horizontal tracking over "Oct," "Dev," and "Dec" with milestone connecting lines.
   - **Orchestration**: Node-link graph and "Orchestration Health" ring chart showing utilization percentages.
   - **BudgetTracking**: Ring chart of "Total Budget" (100% fill), and line graph of "Token Usage".
   - **ApprovalGates**: Standardized approve/deny pill buttons.
   - **ActivityFeed**: Bulleted cyan dots connected by vertical lines.

## Constraints
- **Pixel-Perfect Execution**: Do not estimate; carefully rebuild CSS styles to mirror the mockup spacing, opacity, padding, and border radius.
- **Responsive Handling**: The priority is exact alignment on a full Desktop monitor, responsive grid fallback for smaller sizes.
