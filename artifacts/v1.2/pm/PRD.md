# Product Requirements Document (PRD) - v1.2
**Project:** Agentic Software Management Tool
**Status:** DRAFT

## 1. Overview
Iteration v1.2 focuses on two main pillars:
1.  **Project Health & Insights**: Providing the CEO with a clear view of progress through completion percentages, timelines, and sprint status.
2.  **Developer Experience (DX) & Portability**: Implementing a local Docker environment to streamline manual verification and ensure environment parity.

## 2. Requirements
### 2.1 Project Health Features
*   **Completion Percentage**: Real-time calculation based on task status (e.g., done tasks / total tasks).
*   **Timeline Visualization**: A high-level view of the current iteration roadmap.
*   **Sprint Details**: Display current sprint identifier, start/end dates, and primary goal.

### 2.2 Dockerization
*   **Frontend Service**: Containerize the Next.js app.
*   **Backend Service**: Containerize the Express.js app.
*   **Orchestration**: Use `docker-compose` to manage both services and relevant environment variables.
*   **Verification**: The app must be fully bootable via a single `docker-compose up` command.

## 3. Constraints & Efficiency
*   Keep Docker images lightweight (using Alpine or slim versions).
*   Ensure environment variables (`.env`) are handled securely within the Docker context.

## 4. Acceptance Criteria
*   CEO Dashboard UI updated with health metrics.
*   `docker-compose.yml` and `Dockerfiles` present and functional.
*   Manual verification successful within the Docker environment.
