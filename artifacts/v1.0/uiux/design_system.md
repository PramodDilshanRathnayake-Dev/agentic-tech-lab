# Design System (v1.0)
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
* **Text**
  * `text-primary`: `#F8FAFC` (High contrast white)
  * `text-secondary`: `#94A3B8` (Muted slate gray)
  * `text-accent`: `#00D2FF`

### Typography
* **Font Family**: `Inter, sans-serif` (Clean, modern, highly legible)
* **Scale**:
  * `h1`: 32px, Bold, tracking tight (-0.02em)
  * `h2`: 24px, SemiBold
  * `h3`: 18px, Medium
  * `body`: 14px, Regular
  * `caption`: 12px, Medium, uppercase tracking wide (0.05em)

### Spacing & Borders
* **Border Radius**: 
  * `rounded-sm`: 4px
  * `rounded-md`: 8px
  * `rounded-lg`: 16px (Primary for glass panels)
  * `rounded-full`: 9999px (Avatars, pills)
* **Borders**: `1px solid rgba(255, 255, 255, 0.08)` (Subtle definition for glass panels)

### Effects
* **Backdrop Blur**: `blur(12px)`
* **Shadows**:
  * `shadow-glow`: `0 0 20px rgba(0, 210, 255, 0.2)`
  * `shadow-panel`: `0 8px 32px rgba(0, 0, 0, 0.4)`

## 3. Component Specs

### Glass Panel
* **Structure**: Div with `bg-panel`, `rounded-lg`, `border`, `backdrop-blur`, and `shadow-panel`.
* **Usage**: Used for main layout containers, agent status cards, and the budget tracking widget.

### Status Badge
* **Structure**: Pill shape (`rounded-full`), small uppercase `caption` text, colored dot indicator.
* **States**: Active (Green glow), Blocked/HITL (Amber glow), Idle (Gray).

### Agent Card
* **Structure**: Avatar, Agent Name, Role, Current Status Badge, and an expandable section for detailed logs.
* **Interaction**: Hover scales up slightly `scale(1.02)` and increases `shadow-glow`.

## 4. Mockups Reference
![CEO Dashboard Mockup](/Users/pramoddilshanrathnayake/AI/agentic-tech-lab/artifacts/v1.0/uiux/mockups/ceo_dashboard.png)
*(Generated high-fidelity reference for the Dev Phase)*
