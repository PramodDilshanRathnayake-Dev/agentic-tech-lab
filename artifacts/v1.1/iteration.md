# Iteration Plan
**Version:** 1.1

## Tasks and Assignments
### 1. PM Phase (Status: COMPLETED)
* **Assignee**: @pm
* **Tasks**: Define mission for v1.1, update PRD with SSO and restructuring requirements.
* **Acceptance Criteria**: `PRD.md`, `MISSION.md`, and `iteration.md` generated for v1.1.

### 2. Architecture Phase (Status: COMPLETED)
* **Assignee**: @architect
* **Tasks**: Design the updated folder flow, authentication strategy, and data communication between frontend/backend.
* **Acceptance Criteria**: `SAD.md` updated in `artifacts/v1.1/` with the new auth flow and monorepo structure.

### 3. UI/UX Phase (Status: COMPLETED)
* **Assignee**: @uiux
* **Tasks**: Design the Google SSO Login page.
* **Acceptance Criteria**: High-fidelity mockups generated in `artifacts/v1.1/uiux/mockups/` and `design_system.md` updated if necessary.

### 4. Development Phase (Status: IN PROGRESS)
* **Assignee**: @dev
* **Tasks**: 
  1. Move existing Next.js app to `src/frontend`.
  2. Implement Google Auth (e.g., using `next-auth`).
  3. Create `src/backend` stub.
* **Acceptance Criteria**: Code functionally matches the structure, SSO secures the dashboard, committed, and PR opened.

### 5. QA Phase (Status: TO DO)
* **Assignee**: @qa
* **Tasks**: Final gatekeeping on auth flow and directory structure.
* **Acceptance Criteria**: `test-summary.md` generated for v1.1.
