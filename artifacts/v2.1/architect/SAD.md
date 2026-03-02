# Software Architecture Document (SAD) v2.1
## Technical Analysis of Misalignments

### 1. Budget & Token Tracking Overflow
- **Issue**: The `X-axis Labels` in `BudgetTracking.tsx` use `absolute -bottom-5`. This absolute positioning places the text 20px below the chart's bottom border. 
- **Impact**: In `page.tsx`, the `BudgetTracking` component is constrained by `h-[280px]`. The overflowing labels are visually rendered outside the component's card boundaries, causing them to collide with the `HITLApprovals` card below.
- **Solution**: 
  - Increase the internal bottom padding of the `BudgetTracking` card.
  - Remove the negative bottom offset or adjust the chart container height to accommodate the labels within the flex flow.
  - Better: Use `relative` positioning for the labels container or ensure the card has `mb-8` internally if absolute positioning is kept.

### 2. AI Agent Orchestra Misalignment
- **Issue**: Horizontal misalignment between 'Agent Network' and 'Orchestration Health'.
- **Analysis**: Both are children of a flex container with `gap-4`. The 'Agent Network' has `flex-[2]` and 'Orchestration Health' has `flex-1`.
- **Solution**: 
  - Ensure `items-stretch` or explicitly `items-start` is set on the flex container to force alignment.
  - Verify that both internal panels have the same height if they are meant to be equal, or that their contents don't force uneven heights.
  - Use `h-full` on both sub-panels to ensure they fill the `OrchestrationPanel` height equally.

## Component Updates
- `src/frontend/src/app/page.tsx`: Review the fixed heights (`h-[280px]`, `h-[300px]`).
- `src/frontend/src/components/BudgetTracking.tsx`: Fix absolute positioning of labels.
- `src/frontend/src/components/OrchestrationPanel.tsx`: Ensure flex alignment and height consistency.
