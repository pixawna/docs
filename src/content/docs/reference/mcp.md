---
title: MCP reference
description: Connect compatible AI clients to supported SuperPlane tools through MCP.
---

Model Context Protocol (MCP) lets a compatible AI client discover and call tools exposed by a server. Use it to give an agent controlled access to supported SuperPlane operations.

## Configure access

Create a dedicated credential, point the client at the approved MCP server and limit access to the organization and actions required for the task.

## Review agent authority

Tool availability is authority. Do not expose write, approval, secret, or production operations unless the agent workflow needs them and your policy permits them.

## Test the connection

Start with read-only discovery. Confirm the server identity, available tools, request logs and error behavior before you enable changes.

Use [API keys](/security/api-keys) for non-human credentials and [Members and permissions](/security/access-control) for access policy.
