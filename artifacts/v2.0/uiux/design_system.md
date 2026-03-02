# Design System: Iteration v2.0 (CEO Dashboard Redesign)

## Core Philosophy
The v2.0 dashboard adopts a "Cyber Dark" premium aesthetic. It prioritizes data clarity and high-contrast visual cues (cyan glows, distinct panel separations) to deliver an interface suitable for a CEO's operational overview.

## Color Palette
- **Primary Background**: `#0A111F` (Deep space blue)
- **Panel Backgrounds**: `#121E31` with `80%` opacity (semi-transparent glass effect)
- **Panel Borders**: `#1E2D4A` (unfocused) -> `rgba(0, 210, 255, 0.2)` (hover/active state)
- **Primary Accent / Glow**: `#00D2FF` (Cyan) used for lines, active dots, and key metrics.
- **Secondary Accent**: `#FB923C` (Orange) for pending items.
- **Tertiary Accent**: `#FB7185` (Rose/Red) for alerts or deny actions.
- **Text (Primary)**: `#FFFFFF` (White)
- **Text (Muted/Secondary)**: `#64748B` (Slate)
- **Text (Highlight)**: `#94A3B8` (Light Slate)

## Typography
- **Font Family**: Sans-serif (Geist / Inter)
- **Component Headers**: `12px` or `text-xs`, `font-bold`, `uppercase`, `tracking-[0.15em]`, color: `#64748B`.
- **Primary Values (e.g., $1,250,000)**: `text-lg` or `text-xl`, `font-bold`, `text-white`.

## Layout & Components
- **Global Grid**: 12-column CSS Grid. Left panel group takes `col-span-8`, right panel group takes `col-span-4`.
- **Card Styling**: `rounded-xl` (12px to 16px radius), `shadow-[0_8px_30px_rgba(0,0,0,0.5)]`.
- **Avatar Styling**: Circular, with inner glow or gradient border (`bg-gradient-to-tr from-[#00D2FF] to-purple-500`).
- **Data Visualizations**: 
  - Gantt-style horizontal bars for health.
  - Donut rings with exact `stroke-dashoffset` for completion percentages.
  - Node-link SVG graphs for orchestration with dynamic connecting lines.
