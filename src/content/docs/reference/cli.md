---
title: CLI reference
description: Use the SuperPlane command-line interface for authenticated project and workflow operations.
---

The SuperPlane CLI gives people and coding agents a command-line path to supported SuperPlane operations. Use a dedicated API key or authenticated profile with the minimum required access.

## Before you run commands

Confirm the target organization, workspace and environment. Keep credentials outside shell history and repositories.

## Discover available commands

Run the CLI help for the installed version:

```sh
superplane --help
```

Use subcommand help before automation:

```sh
superplane <command> --help
```

## Automate safely

Use explicit identifiers, handle nonzero exit status and log enough context to diagnose a failed request without printing credentials.

See [API keys](/security/api-keys) and the [API reference](/reference/api).
