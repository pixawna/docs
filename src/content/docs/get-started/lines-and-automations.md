---
title: Understand lines and automations
description: Learn how Factory lines run automations for each approved task.
---

A line defines how approved tasks move through the Factory. Each line step runs an automation owned by the same workspace.

## Understand the board

The workspace board contains these column types:

- **Backlog** holds new tasks before work starts.
- Line-step columns show the active automation sequence.
- **Verify** holds tasks that need a result or review decision.
- **Done** holds completed tasks.

The setup flow creates a default line for planning and implementation. Use this line for your first task.

## Understand automations

An automation listens for a trigger and runs a canvas. Its components read data, call connected services, run agents and publish results.

Factory setup can also create event automations. These automations process GitHub intake and pull request feedback outside the main line sequence.

Open **Automations** to inspect the generated automations and their recent runs. Open an automation to view or configure its canvas.

## Change a line

Create all required automations before you add them to a line.

1. Open the line board.
2. Open the line menu.
3. Select the edit action.
4. Change the line name or its ordered steps.
5. Click **Save**.

Each line step selects an automation and its entry point. Keep the default order until the workspace completes a task successfully.

## Control parallel work

Each line step can limit active runs. Tasks above the limit wait in a first-in, first-out queue.

Use a lower limit when an agent or external service has strict capacity limits. Increase the limit only after you review cost and reliability.

## Continue

[Run your first task](/get-started/run-task) through the default line.
