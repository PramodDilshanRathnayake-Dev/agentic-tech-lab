# Software Architecture Document (SAD)
**Version:** 1.1
**Project:** Agentic Software Management Tool
**Role:** @architect

## 1. System Framework (v1.1 Updates)
This iteration restructures the project into a clear monorepo architecture, creating distinct environments for frontend and backend logic. Additionally, we are securing the entire platform with Google Single Sign-On (SSO).

## 2. Updated Container Architecture (C4 Level 2)
### Monorepo Structure
* **`src/frontend`**:
  * Next.js App Router (moved from the root `src/`).
  * Handles UI, routing, and client-side data fetching.
  * Implements `next-auth` for OAuth session management.
* **`src/backend`**:
  * Express or NestJS APIs designed to orchestrate agents.
  * Currently acts as a stub, ready for future expansion.

### Authentication Strategy
* **Provider**: Google Workspace / OAuth2.0 via `next-auth`.
* **Flow**:
  1. Unauthenticated users are redirected to `/login`.
  2. Users authenticate via Google.
  3. Valid sessions allow access to `/` (Mission Control Dashboard).
  4. Backend APIs will validate the session token for authorized execution.

## 3. Data Flow Specs (SSO)
* **GET `/api/auth/[...nextauth]`**: NextAuth generic endpoint for Google OAuth callbacks and session polling.

## 4. Verification & Security
* Google Client ID and Secret must be configured in `.env`.
* The dashboard layout (`layout.tsx`) or middleware must strictly enforce active sessions, dropping unauthorized requests to a fallback page.
