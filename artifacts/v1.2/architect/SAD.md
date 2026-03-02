# Software Architecture Document (SAD) - v1.2
**Project:** Agentic Software Management Tool
**Role:** @architect

## 1. System Overiew
This iteration enhances the system's observability (Project Health) and its deployment reliability (Dockerization).

## 2. Container Architecture
We will use a multi-container setup via Docker Compose.

### 2.1 Services
*   **`frontend`**: Next.js app running in a Node-Alpine container.
    *   Exposes port `3000`.
    *   Injects `NEXTAUTH_URL`, `NEXTAUTH_SECRET`, and Google OAuth keys via environment variables.
*   **`backend`**: Express.js app running in a Node-Alpine container.
    *   Exposes port `8080`.
    *   Injects internal secrets and configuration via environment variables.

### 2.2 Network & Communication
Both services will reside in a shared Docker bridge network (`ao-network`). 
The Frontend will communicate with the Backend via `http://backend:8080`.

## 3. Project Health Data Flow
### 3.1 Metric Aggregator
The Backend will implement a `/stats/project-health` endpoint that aggregates data from:
1.  **Task Repository**: Counting totals vs completed tasks for percentage.
2.  **Sprint Metadata**: Current active sprint window.
3.  **Timeline**: Start and projected end dates based on velocity.

### 3.2 Frontend Consumption
The CEO Dashboard will poll the `/stats/project-health` endpoint and render the data using the new widgets designed in the UI/UX phase.

## 4. Docker Verification Plan
1.  `docker-compose up -d --build` must start all services.
2.  `docker ps` should show two healthy containers.
3.  Accessing `localhost:3000` from the host should render the application.
4.  Environment variables must be correctly mounted/passed to containers.
