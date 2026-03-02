# Product Requirements Document (PRD) - Iteration v1.4

## Overview
The goal of Iteration v1.4 is to refine the CEO Dashboard layout to provide a strict, scroll-less full-screen view (single pane of glass). The layout should perfectly mirror the provided mockup, featuring a distinct header and a fixed right-side panel for tracking widgets, while the main working area hosts complex visualizations without requiring vertical scrolling.

## Key Features
1. **Scroll-less Layout Constraint**: The dashboard must occupy exactly 100vh. No main page scrolling should be permitted. Internal components may scroll if their specific content overflows, but the main layout remains rigid.
2. **Right Side Panel Architecture**: "Budget & Token Tracking" and "HITL Approvals" must be situated in a dedicated right-side panel that spans the remaining height of the dashboard under the header.
3. **Responsive Grid**: The layout must use CSS Grid/Flexbox to distribute available space efficiently to "Project Health", "Active Agents", and "Orchestration Panel" within the main content area.

## Non-Functional Requirements
- **Visual Consistency**: Components (cards, panels) must remain the exact same template and styling as v1.3; only their arrangement and sizing behaviors change.
- **Performance**: Flex and Grid calculations should not cause visual jumping.

## Acceptance Criteria
- [ ] The dashboard occupies `100vh` without a global vertical scrollbar on standard desktop resolutions.
- [ ] The layout distinctively features a header and a distinct right-side tracking panel.
- [ ] All components from v1.3 are visible and appropriately scaled/flexed to fit the new viewport constraints.
