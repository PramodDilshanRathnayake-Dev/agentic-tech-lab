# System Architecture Document (SAD) - Iteration v1.4

## Focus: Frontend Layout Architecture

### Structural Changes
The `app/page.tsx` structural composition is changing from a sequential top-bottom document flow to a strict `100vh` grid layout flow.

**Architecture Layers:**
1. **Global Wrapper (`main`)**:
   - `h-screen w-screen overflow-hidden`: The outmost boundary enforces strict sizing.
2. **Layout Structure (Flex/Grid)**:
   - **Header**: Occupies a fixed height at the top.
   - **Body Layout**: A Flex or Grid container extending to `flex-1` occupying available remaining height.
     - **Main Content (Left)**: Contains Project Health, Active Agents, and Orchestration Panel. Uses internal `flex-col` to distribute remaining space (e.g., giving Orchestration Panel `flex-1` so it expands into empty space).
     - **Right Panel (Right)**: Contains Budget & Token Tracking and HITL Approvals. Set to a fixed or fractional width (e.g., `w-80` or `w-96`, or grid-cols `col-span-1`).

### Data Flow
- Component data fetching and polling models remain unchanged from v1.3.
- Only positional rendering and CSS viewport constraints are modified.
