# UI/UX Design System — v3.1 Document Review & Amendment

## Mockup References

### 1. Review Step (Step 4) — Clickable Document Cards
![Review Cards](../../.gemini/antigravity/brain/9b204404-3f41-415e-98dc-d621c8f4fd20/review_cards_mockup_1772466102419.png)

**Key Design Tokens:**
- PRD card border accent: `#00D2FF` (cyan)
- SAD card border accent: `#B026FF` (purple)
- Generated badge: `#10B981` (green)
- Card background: `#121E31/80` with glassmorphism
- Hover effect: glow shadow matching accent color
- Comment badge: pill shape, `text-xs`, `bg-[accent]/10`

### 2. Full-Screen Document Viewer Overlay
![Document Viewer](../../.gemini/antigravity/brain/9b204404-3f41-415e-98dc-d621c8f4fd20/document_viewer_mockup_1772466084511.png)

**Layout:**
- 75/25 split: Document content (left) + Comments sidebar (right)
- Sticky header with document title + close button
- Footer with "Close" and "Request Revision" actions

**Document Rendering Tokens:**
- H1: `text-[#00D2FF]` for PRD, `text-[#B026FF]` for SAD
- H2: `text-white font-bold`
- Body: `text-slate-300`, `leading-relaxed`
- Tables: `border-[#1E2D4A]`, `bg-[#0A111F]`
- Code blocks: `bg-[#0A111F] border border-[#1E2D4A] rounded-lg p-4`
- Lists: standard indentation, `text-slate-300`

**Comments Sidebar Tokens:**
- Header: `text-[#00D2FF] text-xs uppercase tracking-widest`
- Comment card: `bg-[#121E31] border border-[#1E2D4A] rounded-lg p-3`
- Timestamp: `text-[#64748B] text-[10px]`
- Input: same style as grooming chat textarea
- Send button: `text-[#00D2FF]`

**Action Buttons:**
- "Request Revision": `bg-gradient-to-r from-[#00D2FF] to-[#B026FF]`
- "Close": `text-[#64748B] hover:text-white`

## Interaction Flow

1. Step 4 shows two premium document cards with icons + labels
2. Click PRD card → full-screen overlay with PRD rendered as rich text
3. CEO reads, adds comments in sidebar
4. Click "Request Revision" → loading state → refined doc appears
5. Close viewer → back to Step 4 cards
6. Click SAD card → same flow for SAD
7. When satisfied → "Approve Mission"

## Animation Tokens
- Overlay entry: `fade-in` + `scale-up` (200ms ease-out)
- Overlay exit: `fade-out` + `scale-down` (150ms ease-in)
- Card hover: `transform scale(1.02)` + shadow glow
- Loading spinner: reuse existing `animate-spin` pattern
