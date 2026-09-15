---
title: CLI reference
description: Use the SuperPlane command-line interface for authenticated project and workflow operations.
---

Use the SuperPlane command-line interface (CLI) to connect to your organization and manage workflows from a terminal.

## Install the CLI

Install the latest binary for your operating system and architecture:

```sh
curl -fsSL https://install.superplane.com/install.sh | sh
```

You can also download a specific version from [SuperPlane releases](https://github.com/superplanehq/superplane/releases).

On Debian and Ubuntu, install the signed `apt` package:

```sh
sudo install -d -m 0755 /etc/apt/keyrings
curl -fsSL https://s3.amazonaws.com/apt.superplane.com/gpg.key \
  | sudo gpg --dearmor -o /etc/apt/keyrings/superplane.gpg
echo "deb [signed-by=/etc/apt/keyrings/superplane.gpg] \
https://s3.amazonaws.com/apt.superplane.com stable main" \
  | sudo tee /etc/apt/sources.list.d/superplane.list
sudo apt-get update
sudo apt-get install -y superplane-cli
```

## Authenticate

Use an [API key](/security/api-keys) for scripts and integrations or a personal token from **Profile > API token** for your own commands.

Connect interactively:

```sh
superplane connect <superplane_url> <api_token>
superplane whoami
```

For continuous integration and other automated environments, provide credentials without saving a CLI context:

```sh
export SUPERPLANE_URL="https://app.superplane.com"
export SUPERPLANE_TOKEN="your_api_token_here"
```

Keep credentials outside shell history, logs and repositories.

## Manage contexts

Each connection becomes a CLI context. List your contexts or switch to another organization:

```sh
superplane contexts
superplane contexts <superplane_url>/<organization_name>
```

## Discover available commands

Run the CLI help for the installed version:

```sh
superplane --help
```

Use subcommand help before automation:

```sh
superplane <command> --help
```

## Select an output format

Commands support `--output` or `-o` with `text`, `json` and `yaml`:

```sh
superplane apps list --output text
superplane apps list -o json
superplane apps canvas get <app_name_or_id> -o yaml
```

## Automate safely

Use explicit identifiers, handle nonzero exit status and log enough context to diagnose a failed request without printing credentials.

For agent-driven CLI use, install the `superplane-cli` skill:

```sh
npx skills add superplanehq/skills --skill superplane-cli
```

## Upgrade the CLI

Upgrade a release binary:

```sh
superplane upgrade
```

If you installed with `apt`, use the package manager:

```sh
sudo apt-get update
sudo apt-get install --only-upgrade superplane-cli
```

See the [API reference](/reference/api) for direct API access.
