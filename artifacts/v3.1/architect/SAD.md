# SAD — v3.1 Full-Screen Document Review & In-Document Amendment

## 1. Architecture Overview

This iteration introduces a **Document Review Layer** that sits between the existing Grooming flow (Steps 1–3) and the final Approval action. The architecture is designed to minimize LLM token usage by sending only compressed context summaries + specific CEO amendments.

```
┌─────────────────────────────────────────────────────────┐
│                    Frontend (Next.js)                     │
│  ┌──────────────┐  ┌────────────────────────────────┐   │
│  │ Step 4:      │  │ DocumentViewerOverlay           │   │
│  │ Review Panel │──│  - Markdown Renderer            │   │
│  │ (Doc Cards)  │  │  - Comments Sidebar             │   │
│  │              │  │  - "Request Revision" action     │   │
│  └──────────────┘  └──────────┬─────────────────────┘   │
│                               │                          │
│                 POST /api/grooming/revise                 │
│                               │                          │
├───────────────────────────────┼──────────────────────────┤
│                    Backend (Express.js)                   │
│                               │                          │
│  ┌────────────────────────────▼──────────────────────┐   │
│  │ /api/grooming/revise                               │   │
│  │  Input: { documentType, comments[], chatHistory,   │   │
│  │           compressedContext }                       │   │
│  │  Process:                                          │   │
│  │    1. Use existing summarize logic for context      │   │
│  │    2. Tag CEO comments as change directives         │   │
│  │    3. Send to PM or Architect agent (by docType)    │   │
│  │    4. Return refined document                       │   │
│  └────────────────────────────────────────────────────┘   │
│                                                          │
│  Existing endpoints:                                     │
│    POST /api/grooming/chat     (unchanged)               │
│    POST /api/grooming/finalize (unchanged)               │
│    POST /api/grooming/summarize (reused internally)      │
└──────────────────────────────────────────────────────────┘
```

## 2. Component Design

### 2.1 Frontend Components

| Component | Type | Responsibility |
|---|---|---|
| `DocumentViewerOverlay` | New component | Full-screen overlay rendering Markdown as rich HTML. Sidebar for comments. "Request Revision" action. |
| Review Panel (Step 4) | Modified | Replace raw text panels with clickable document cards (icons). Track `prdComments[]` and `sadComments[]` state. |

### 2.2 State Management (RequirementGroomingModal)

```typescript
// New state additions
const [viewingDoc, setViewingDoc] = useState<'prd' | 'sad' | null>(null);
const [prdComments, setPrdComments] = useState<string[]>([]);
const [sadComments, setSadComments] = useState<string[]>([]);
const [isRevising, setIsRevising] = useState(false);
```

### 2.3 Backend Endpoint

**`POST /api/grooming/revise`**

```
Request: {
  documentType: 'prd' | 'sad',
  comments: string[],           // CEO's specific change requests
  chatHistory: ChatMessage[],    // Original grooming context (for summarization)
  currentDocument: string        // NOT sent to LLM — only used for reference by endpoint
}

Response: {
  revisedDocument: string        // The refined Markdown document
}
```

**LLM Prompt Strategy (Token-Efficient):**

The endpoint does NOT send the full document to the LLM. Instead:
1. Compresses context using existing `/api/grooming/summarize` logic internally.
2. Tags CEO's specific change requests as numbered directives.
3. Sends only: `compressed_context + change_directives` to the appropriate agent.

Prompt template:
```
Context Summary: {compressed_context}
The CEO has reviewed the {PRD|SAD} and requests the following specific changes:
1. {comment_1}
2. {comment_2}
...
Please generate a COMPLETE revised {PRD|SAD} in Markdown incorporating these changes.
```

## 3. Markdown Rendering

Use `react-markdown` with `remark-gfm` plugin for:
- Headings, bold, italic, lists
- Tables (GFM)
- Code blocks
- Horizontal rules

**Install**: `npm install react-markdown remark-gfm`

## 4. Data Flow Sequence

```
CEO clicks PRD/SAD card
  → DocumentViewerOverlay opens (full-screen)
  → CEO reads rich-text formatted document
  → CEO adds comments via sidebar input
  → Comments cached in prdComments[] / sadComments[] state
  → CEO clicks "Request Revision"
    → Frontend sends POST /api/grooming/revise
      → Backend compresses context (reuses summarize logic)
      → Backend tags CEO comments as change directives
      → Sends compressed_context + directives to PM/Architect agent
      → Returns refined document
    → Frontend updates prd / sad state
    → Viewer shows refined document
  → CEO satisfied → closes viewer → clicks "Approve Mission"
```

## 5. File Changes Summary

| File | Change Type | Description |
|---|---|---|
| `src/frontend/src/components/DocumentViewerOverlay.tsx` | **NEW** | Full-screen document viewer with Markdown rendering and comments sidebar |
| `src/frontend/src/components/RequirementGroomingModal.tsx` | **MODIFY** | Add new state, replace Step 4 panels with clickable cards, integrate viewer |
| `src/backend/src/index.js` | **MODIFY** | Add `POST /api/grooming/revise` endpoint |
| `package.json` (frontend) | **MODIFY** | Add `react-markdown` and `remark-gfm` dependencies |

## 6. Design Decisions

1. **Why not send full docs to LLM?** Token cost and context window limits. The compressed summary + specific change requests carry enough signal for a targeted refinement.
2. **Why a separate overlay vs. inline editing?** CEO-friendly UX — full-screen reading is less cognitive overhead than editing within the modal's cramped space.
3. **Why cache comments per document?** So the CEO can switch between viewing PRD and SAD without losing their annotations.
