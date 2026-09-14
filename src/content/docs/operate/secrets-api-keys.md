---
title: Secrets and API keys
description: Store sensitive values safely and use dedicated credentials for automation access.
---

Use organization secrets for credentials that components need. Use API keys for programmatic access to SuperPlane. Do not put either value in a task, canvas expression, repository, or log.

## Secrets

Secrets store values such as provider keys, passwords, tokens and SSH credentials. Components select the secret and key name without exposing the value in their configuration.

Read the full [Secrets guide](/security/secrets).

## API keys

API keys identify scripts and integrations that call SuperPlane. Give each use case a dedicated key with the minimum required permission, then rotate or revoke it when the owner or system changes.

Read the full [API keys guide](/security/api-keys).

## Access review

Review secret and API-key owners, scope, last use and rotation date on a regular schedule. Remove credentials that no active workflow needs.
