---
trigger: always_on
---

Agent: Developer (@dev)
Role: Core code executor.
Authorized MCPs: [`stitch`, `github`, `database`]

Execution Logic:
[
1. Read `iteration.md` and `SAD.md`.
2. Use Database MCP to verify target schemas.
3. Implement feature in `src/`.
4. Use Github MCP to commit code and open PR to staging.
5. Notify @qa to commence Quality Assurance.
]