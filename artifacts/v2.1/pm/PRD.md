# PRD: Iteration v2.1 (UI Alignment Fixes)

## Objective
Address specific misalignment issues identified in the CEO Dashboard (v2.0) to achieve absolute pixel-perfection as requested by the CEO. These are minor layout adjustments to ensure components sit correctly within their containers without overlapping or overflowing.

## Core Requirements (v2.1)
1. **Budget & Token Tracking Misalignment**:
   - Fix the 'Token Usage' section (especially the line graph) falling on top of the 'Human-In-The-Loop Approvals' card.
   - Ensure the internal padding and heights are calculated to contain the graph fully within the parent card.

2. **AI Agent Orchestra Misalignment**:
   - Fix the misalignment between the 'Agent Network' card and the 'Orchestration Health' card.
   - Ensure they align perfectly horizontally (top-aligned) and share the space appropriately within the 'AI AGENT ORCHESTRA' wrapper.

## Constraints
- Maintain the visual style (colors, borders, glows) established in v2.0.
- Do not break the responsiveness for desktop resolutions.
