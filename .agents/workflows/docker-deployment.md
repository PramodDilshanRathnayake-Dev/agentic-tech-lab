---
description: Docker deployment for mannual verification
---

name: local-docker-deployment
trigger: user_prompt
steps:
  - id: 1_deployment
    agent: "@dev"
    action: "Run docker refresh command"
    depends_on: completed test-summery.md
