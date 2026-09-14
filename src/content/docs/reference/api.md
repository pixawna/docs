---
title: Public API reference
description: Access Factory workspaces, lines, tasks, automations and usage through the SuperPlane REST API.
---

Use the SuperPlane REST API to manage Factory resources and inspect task activity. The interactive reference lists each route, request and response schema.

Open the [interactive API reference](https://app.superplane.com/api/v1/docs) to inspect all available endpoints.

## Authenticate requests

Send a valid API token in the `Authorization` header:

```http
Authorization: Bearer your_api_token_here
```

Create an organization API key for scripts and integrations. Its role controls every permitted API action.

See [API keys](/security/api-keys) and [access control](/security/access-control) before you grant access.

## Use Factory endpoints

Factory endpoints use API resource names. A factory is a workspace and a work order is a task.

| Resource | Path |
| --- | --- |
| Workspaces | `/api/v1/factories` |
| Lines | `/api/v1/factories/{factory_id}/lines` |
| Automations | `/api/v1/factories/{factory_id}/apps` |
| Tasks | `/api/v1/factories/{factory_id}/orders` |
| Intakes | `/api/v1/factories/{factory_id}/intakes` |
| Usage | `/api/v1/factories/{factory_id}/usage` |

## List workspaces

This request lists the workspaces available to the token:

```sh
curl -s https://app.superplane.com/api/v1/factories \
  -H "Authorization: Bearer your_api_token_here" | jq
```

## Protect API tokens

Store API tokens in a secret manager or protected environment variable. Do not put tokens in repositories, task descriptions, or automation logs.
