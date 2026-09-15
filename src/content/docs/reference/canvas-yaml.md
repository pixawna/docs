---
title: Canvas YAML
description: Understand the versioned workflow definition stored in canvas.yaml.
---

`canvas.yaml` is the git-backed definition of a SuperPlane workflow graph. It records workflow metadata, components, configuration and the connections between component outputs and inputs.

## Use the file

Keep the file in version control with the app or workflow source. Review changes as code because they can alter triggers, permissions, external calls and production behavior.

## Edit safely

Prefer the visual canvas or supported CLI workflow when the schema is unfamiliar. After a manual change, validate the definition and test it with non-production data before deployment.

## Protect sensitive data

Reference organization secrets from component configuration. Do not write secret values directly into `canvas.yaml`.

See [Configuration](/reference/configuration) and [Console YAML](/reference/console-yaml).
