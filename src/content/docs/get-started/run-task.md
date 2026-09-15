---
title: Run your first task
description: Create, start, monitor and verify a task in a Factory workspace.
---

Create one small task and start it on the default line. Monitor each automation before you use the Factory for larger changes.

## Create a task

1. Open **Tasks** or the workspace board.
2. Click **New task**.
3. Enter a short task title.
4. Add the expected result and acceptance criteria to the description.
5. Click **Create**.

The new task remains in **Backlog** until work starts. A GitHub issue intake can also create tasks automatically.

## Start the task

1. Review the task title, description and confidence score when available.
2. Click **Start** on the task card.
3. Select the default line if SuperPlane asks for a line.
4. Click **Start** to confirm.

Starting a task approves code work for that specific task. Confirm the scope before you start it.

## Monitor the line

Watch the task move through the line-step columns. Open the task to inspect:

- The activity timeline.
- Automation executions and their status.
- Generated branches, pull requests and other artifacts.
- Checks, comments and usage details.

If a step fails, open its run before you retry. Read the error and confirm that the required integration is connected.

## Verify the result

1. Open the pull request from the task.
2. Review the changed files and automated checks.
3. Add pull request feedback when the change needs revision.
4. Confirm that SuperPlane records the updated result.
5. Complete or reject the task according to your review.

Do not merge the first pull request until all repository checks pass.

## Continue

Use [Components](/components/core) to extend automations. Use [Expressions](/expressions/guide) to pass data between component nodes.
