---
title: Fix a failing test
description: Give an agent a reproducible failure and verify the repair through CI.
---

Use this flow when a test fails consistently and the repository provides the commands needed to reproduce it.

## Define the task

Add the failing command, relevant error output, expected behavior and any files that must not change. Remove secrets and unrelated log data.

## Run the repair

Start the task on a line that can inspect the repository, change code and open a pull request. Let CI run the same test in the repository environment.

## Accept the result

Confirm that the original test passes, nearby tests remain green and the change fixes the cause instead of weakening the assertion. Route a new CI failure back with its exact output.
