---
title: CI/CD
description: Start delivery jobs, wait for checks and route results through Factory workflows.
---

CI/CD integrations connect implementation work to the checks and delivery processes that confirm whether a change is ready.

## Supported tools

- [CircleCI](/components/circleci)
- [Harness](/components/harness)
- [Octopus Deploy](/components/octopusdeploy)
- [Render](/components/render)
- [Semaphore](/components/semaphore)
- [Cloudsmith](/components/cloudsmith)
- [JFrog Artifactory](/components/jfrogartifactory)

## Workflow pattern

Trigger the required pipeline after a branch or pull request is ready. Wait for the result, attach the check to the task and route failure output back to the responsible automation.

Keep production deployments behind the approval and policy checks required by your team.
