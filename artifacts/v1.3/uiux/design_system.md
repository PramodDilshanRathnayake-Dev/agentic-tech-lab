# Design System (v1.3)
**Project:** Agentic Software Management Tool
**Role:** @uiux

## 1. Core Visual Directives
The application must feel premium, CEO-friendly, and highly modern. 
* **Aesthetic**: Glassmorphism, deep dark mode, neon accents.
* **Layout**: Spacious, utilizing a sidebar for navigation and a large central canvas for dynamic agent visualization.
* **Component Rhythm**: Generous padding, soft shadows, rounded corners.

## 2. Design Tokens

### Colors
* **Backgrounds**
  * `bg-base`: `#0B0E14` (Deep space black/blue)
  * `bg-panel`: `rgba(20, 25, 35, 0.6)` (Translucent for glassmorphism)
  * `bg-panel-hover`: `rgba(30, 38, 50, 0.8)`
* **Accents & Status**
  * `accent-primary`: `#00D2FF` (Cyan for primary actions / active states)
  * `accent-secondary`: `#3A7BD5` (Deep blue for secondary highlights)
  * `status-success`: `#00E676` (Neon green for completed tasks/agents)
  * `status-warning`: `#FFD600` (Amber for pending reviews / HITL gates)
  * `status-error`: `#FF1744` (Red for failures / blocked agents)

### Typography
* **Font Family**: `Inter, sans-serif`
* **Scale**:
  * `h1`: 32px
  * `h2`: 24px
  * `h3`: 18px
  * `body`: 14px
  * `caption`: 12px, uppercase tracking wide

## 3. Component Specs

### AI Agent Orchestration Panel
* **Visual**: A directed graph with agent avatars as nodes.
* **Lines**: Curved paths (`bezier`) with a slight glow and "data pulse" animation.
* **Active State**: Pulsing neon border around the currently executing agent.

### Linear Health Bar (Alpha Nexus)
* **Structure**: A horizontal 4px track with a neon cyan progress indicator.
* **Milestones**: Small vertical ticks or circles at 25%, 50%, 75% positions with labels (Kickoff, Alpha, Beta, Launch).
* **Progress Glow**: A subtle drop-shadow blur on the active part of the bar.

## 4. Mockups Reference
### CEO Dashboard (v1.0)
![CEO Dashboard Mockup](/Users/pramoddilshanrathnayake/AI/agentic-tech-lab/artifacts/v1.0/uiux/mockups/ceo_dashboard.png)
*(Reference for the linear health bar and orchestration panel layout)*
