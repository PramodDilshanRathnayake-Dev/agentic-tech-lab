# System Architecture Design (v2.0)

## Component Tree (CEO Dashboard)
`page.tsx`
├── `DashboardLayout` (Main Wrapper: Sidebar + Content Area)
│   ├── `Sidebar` (Left Navigation, Icons)
│   └── `MainContent` (Header + Grid)
│       ├── `Header` (Search, User Avatar, Title)
│       └── `DashboardGrid` (CSS Grid Layout)
│           ├── `LeftColumn` (2/3 width)
│           │   ├── `ActiveAgentsPanel` (Scrollable/Flex row of AgentCards)
│           │   ├── `ProjectHealthPanel` (Gantt Chart Timeline)
│           │   └── `OrchestrationPanel` (Node Graph + Efficiency Gauge)
│           └── `RightColumn` (1/3 width)
│               ├── `BudgetTrackingPanel` (Ring Chart + Line Graph)
│               ├── `ApprovalsPanel` (List of HITL tasks)
│               └── `ActivityFeedPanel` (Timeline log)

## Data Flow
- Currently relying on static mock data to prioritize UI/UX visual fidelity.
- Mock data arrays mapped directly inside components for now to ensure 1:1 match with mockup string values.
