# PRD — v3.1 Full-Screen Document Review & In-Document Amendment

## 1. Problem Statement

The current Review step (Step 4) shows PRD and SAD as raw AI-formatted text in two small side-by-side panels. This is not suitable for CEO-level review:

- **Readability**: Raw markdown isn't parsed into rich text; hard to scan.
- **Amendment workflow**: The only option is "Amend" which goes back to the grooming chat — there is no way to add document-specific comments directly on the PRD or SAD.
- **Token efficiency**: Amendments currently re-send full documents to the LLM. The CEO should annotate specific changes, and only those deltas are sent for refinement.

## 2. Objectives

| ID | Objective |
|---|---|
| OBJ-1 | CEO can open each document (PRD / SAD) in a full-screen, scrollable, richly formatted overlay |
| OBJ-2 | CEO can add inline review comments per document (cached per document) |
| OBJ-3 | CEO clicks a "Request Revision" action that sends compressed-context + tagged changes to the LLM for refinement |
| OBJ-4 | Refined document replaces the previous version and is presented for final approval |
| OBJ-5 | Token usage is minimized — full documents are NOT sent to the LLM; only the context summary + CEO's specific change requests |

## 3. User Stories

### US-1: Full-Screen Document Viewer
> As a CEO, I want to click the PRD or SAD icon to open it in a full-screen overlay with rich text formatting, so I can comfortably read the entire document.

**Acceptance Criteria:**
- Clickable document cards replace the current raw text panels.
- Opens as a full-screen modal overlay with parsed Markdown rendered as rich HTML.
- Scrollable, with a sticky header showing document title and close button.

### US-2: In-Document Review Comments
> As a CEO, I want to add review comments on the document view, so amendments stay within the approval context instead of navigating away.

**Acceptance Criteria:**
- A comments sidebar or floating comment input is available in the document viewer.
- Comments are cached per document (PRD vs SAD) and persist across viewer open/close within the session.
- Comment list is visible alongside the document.

### US-3: Request Revision via Compressed Context
> As a CEO, after adding review comments I want to click a "Request Revision" button that sends only my specific change requests (not the full doc) to the LLM agent for refinement.

**Acceptance Criteria:**
- "Request Revision" button triggers backend `/api/grooming/revise` endpoint.
- Only the compressed context summary + CEO's change requests are sent to the LLM (not the full PRD/SAD).
- A loading/processing state is shown during revision.
- The refined document replaces the previous version and is displayed.

### US-4: Final Approval
> As a CEO, once the revised documents are satisfactory, I want a clear approval action to confirm and proceed.

**Acceptance Criteria:**
- After revision, documents are re-presented as clickable icons.
- "Approve Mission" button remains to finalize.

## 4. Out of Scope
- Persistent storage of documents across browser sessions (future).
- Multi-user collaborative annotation.
- Version history / diff view between revisions (future).

## 5. UI Flow Summary

```
Step 4 (Review) 
  └── Two clickable document cards (PRD icon + SAD icon)
        └── Click → Full-screen document viewer overlay
              ├── Rendered rich-text Markdown
              ├── Review comments sidebar
              └── "Request Revision" button
                    └── Sends compressed-context + comments → LLM
                          └── Refined doc replaces old → re-presented
                                └── "Approve Mission" to continue
```

## 6. Non-Functional Requirements
- Each revision cycle should send < 2000 tokens to the LLM (compressed summary + change annotations only).
- Document viewer must be mobile-responsive (scrollable).
- Smooth entry/exit animations on full-screen overlays.
