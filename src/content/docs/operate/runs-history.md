---
title: Runs and execution history
description: Inspect durable automation runs, outputs, failures and retries.
---

A run records one automation execution. It keeps the trigger data, component activity, outputs, errors, timing and usage required to understand what happened.

## Inspect a run

Open the task, then select the relevant execution. Check:

- The automation and entry point.
- Input data from the task or prior stage.
- Component status and output.
- Error messages and failed branches.
- Execution time and tracked usage.

## Understand retries

A retry creates new execution activity without removing the previous attempt. Compare the inputs and failure context to confirm that the retry can produce a different result.

## Use history for diagnosis

Start with the first failed component. Follow its inputs back to the trigger or upstream output, then confirm integration access and expression values before changing the workflow.
