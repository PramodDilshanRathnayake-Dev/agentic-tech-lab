# SAD: AI Orchestration & Linear Timeline (v1.3)

## Architecture Overview
The system will maintain its monorepo structure with Dockerized microservices. This iteration extends the visibility layer of the CEO Dashboard.

## Data Flow
1. **Agent Orchestration**:
   - Backend serves a directed graph structure: `{ nodes: Agent[], edges: Connection[] }`.
   - Frontend renders this using SVG + Framer Motion for a "living" dashboard effect.
2. **Milestone Timeline**:
   - Backend provides an array of milestones: `{ label: string, position: number, status: string }`.
   - Frontend overlays these points on a linear `<progress>` or custom `div` bar.

## Security
- Authentication via Google SSO remains mandatory for all dashboard data access.
- API endpoints are protected via middleware (to be implemented in v1.4, currently mocked).

## Components
- `OrchestrationPanel`: A container for the agent network graph.
- `LinearHealthBar`: A progress dashboard component with milestone markers.
