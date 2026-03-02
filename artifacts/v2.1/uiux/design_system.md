# Design System Update: Iteration v2.1 (Alignment Polish)

## Layout Refinement Tokens

### Budget & Token Tracking Card
- **Internal Bottom Offset**: The X-axis label container should have a clear `16px` (4 units) margin from the bottom of the card border to prevent collision with the next UI block.
- **Chart Area Height**: Reserved space for X-axis labels should be `24px`.

### AI Agent Orchestra Card
- **Symmetry Rule**: Inner sub-panels must share a consistent top-margin/padding to ensure titles 'Agent Network' and 'Orchestration Health' align on the same baseline.
- **Flex Alignment**: The container should use `items-stretch` to ensure both glass panels have identical heights regardless of content.

## Component Specifics
- **Agent Network**: Maintain `flex-[2]` ratio.
- **Orchestration Health**: Maintain `flex-1` ratio.
- **Card Padding**: Standard padding remains `p-5`.
