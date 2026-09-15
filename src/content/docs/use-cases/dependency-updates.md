---
title: Handle dependency updates
description: Update a focused dependency and verify compatibility before review.
---

Use a Factory to handle small dependency updates that have a known target version and a repeatable validation path.

## Limit the scope

Name the package, target version, supported runtime, lockfile and required checks. Separate major upgrades or migrations into their own reviewed plan.

## Run the update

The automation updates the manifest and lockfile, runs the required checks and opens a pull request with the result. Add release-note review when the dependency can change runtime behavior.

## Verify safety

Confirm that the resolved version is correct, tests pass, generated files are expected and no unrelated packages changed. Keep security advisories and compatibility decisions in the task record.
