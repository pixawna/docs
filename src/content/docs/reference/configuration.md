---
title: Configuration
description: Organize environment values, connections, secrets and versioned workflow settings.
---

SuperPlane configuration spans deployment settings, organization connections, secrets, workspace settings and versioned workflow files. Keep each value in the narrowest scope that needs it.

## Choose the correct location

| Setting | Store it in |
| --- | --- |
| Deployment address or service option | Deployment environment |
| External provider connection | Organization integration |
| Password, token, or private key | Organization secret |
| Factory name, repository, or line | Workspace settings |
| Workflow graph and component setup | `canvas.yaml` or canvas editor |
| Operational interface | `console.yaml` |

## Manage changes

Review versioned files through source control. Rotate sensitive values without copying them into workflow definitions. Test environment-specific changes before production.

See [Canvas YAML](/reference/canvas-yaml), [Console YAML](/reference/console-yaml) and [Secrets](/security/secrets).
