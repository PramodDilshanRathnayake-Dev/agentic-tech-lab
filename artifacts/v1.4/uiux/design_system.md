# Design System v1.4 (Scroll-less Viewport Addendum)

This document overrides and adds spacing/layout tokens for v1.4 based on the latest CEO Dashboard mockup, focusing on single-screen full-view structures.

## Core Structural Tokens
- **Root Element**: `h-screen overflow-hidden bg-[#0B1221] text-white`
- **Header Structure**: `flex-shrink-0 h-16` or explicitly height-bound to prevent squishing.
- **Main Working Area (Body)**: `flex-1 flex gap-6 min-h-0` (The `min-h-0` on flex children is crucial to allow internal scroll if content happens to breach, preventing container explosion).

## Component Resizing Rules
- **Right Panel (Tracking & Approvals)**: `w-80` or `w-[350px] flex-shrink-0 flex flex-col gap-6`.
- **Left Panel (Main Vis)**: `flex-1 flex flex-col gap-6 min-w-0`.
- **Orchestration Panel**: To fill available space vertically without overflowing, use `flex-1 relative`. Inside, the graph SVG layout must scale via `w-full h-full absolute inset-0`.

## Component Styles
The aesthetic templates (GlassPanel, status glows, neon accents) remain identical to v1.3. No color or inner-component visual changes.
