# Product Requirements Document (PRD)
**Version:** 1.1
**Project:** Agentic Software Management Tool

## 1. Changelog
* **v1.1**: Added requirements for SSO (Google) auth and code restructuring for full-stack architecture.
* **v1.0**: Initial creation of PRD based on raw business requirements.

## 2. Requirements (v1.1 Updates)
* **Authentication**: The system must implement Single Sign-On (SSO) exclusively utilizing Google Workspace/OAuth.
* **Architecture Reform**: The project structure must be updated to a monorepo setup containing distinct `src/frontend` and `src/backend` directories.
* *(Inherited from v1.0)*: AI Agentic orchestra, entirely in-house. Target Audience: CEO-friendly dashboard and controls.

## 3. Constraints (v1.1 Updates)
* **Auth Security**: Only authenticated Google users (configured via client ID/secret) should be able to access the dashboard.
* *(Inherited from v1.0)*: Cloud Infrastructure: Must include self-healing capabilities on cloud cost. Client Architecture: Must support multiple projects per client. Governance: Must include Human-in-the-Loop (HITL) on main audit checkpoints.

## 4. Efficiency Criteria
* *(Inherited from v1.0)*: Primary Metric: Token-cost vs. Middle-man-cost.
