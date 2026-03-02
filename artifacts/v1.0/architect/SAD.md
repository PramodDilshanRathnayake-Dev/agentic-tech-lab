# Software Architecture Document (SAD)
**Version:** 1.0
**Project:** Agentic Software Management Tool
**Role:** @architect

## 1. System Context (C4 Level 1)
The Agentic Software Management Tool is a centralized orchestration system allowing CEOs and project managers to operate a "software house in a box."
* **Users**: CEO / Product Owner
* **External Systems**: 
  * Notion (Requirement ingestion)
  * GitHub (Source control & PR management)
  * SonarQube (Static Analysis)
  * Stitch (Design token generation)
* **Core System**: The Agentic Orchestra Platform, composed of sequential AI agents (@pm, @architect, @uiux, @dev, @qa).

## 2. Container Architecture (C4 Level 2)
* **Web Client (Frontend)**: Next.js offering a CEO dashboard and mission control interface.
* **API Gateway & Orchestrator (Backend)**: Express or NestJS backend to manage state transitions in `iteration.md` and trigger agents.
* **Agent Runners (Workers)**: Microservices or serverless functions executing specific agent prompts and utilizing assigned MCPs.
* **Database**: PostgreSQL or MongoDB to represent multi-tenant "Client/Project" structures.

## 3. Deployment Strategy
* **Cloud Infrastructure**: Kubernetes or AWS ECS with auto-scaling to manage self-healing and cost constraints.
* **Cost Optimization (Token & Cloud)**:
  * Agents will pause at critical "Human-in-the-Loop" (HITL) gates.
  * Idle environments are suspended automatically to preserve budget.

## 4. API & Data Flow Specs
* **POST /api/intake**: Ingests new PRD context from Notion.
* **GET /api/mission-context**: Returns current `iteration.md` status.
* **POST /api/approve-gate**: Unblocks the agent workflow upon CEO approval (e.g., Architect Approval, UI Review).
* **POST /api/reject-gate**: Returns workflow to the previous agent with revision notes.

## 5. Security & State Isolation
* Strict context shedding policy: Each agent only receives the subset of data required for its phase to minimize token-cost.
* Multi-project data isolated via tenant IDs in the database schema.
