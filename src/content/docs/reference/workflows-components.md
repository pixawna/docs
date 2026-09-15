---
title: Workflows and components
description: Understand the triggers, actions, data connections and runs that form a SuperPlane workflow.
---

A workflow is a graph of components and dependencies on a canvas. Triggers receive events; actions call tools, run agents, transform data, wait, or require approval.

## Component types

- **Triggers** start a run from an event, schedule, webhook, or manual action.
- **Actions** perform one unit of work and publish output.
- **Control components** filter, branch, merge, loop, wait and require approval.
- **Integration components** connect the workflow to an external service.

## Data flow

Each component can read trigger data or upstream outputs through an [expression](/expressions/guide). Keep data connections explicit so a failed run is easy to inspect.

## Durable execution

SuperPlane records runs and payloads across restarts. Define error paths and retry rules for expected failures instead of rebuilding state in external scripts.

Browse the [component catalog](/components).
