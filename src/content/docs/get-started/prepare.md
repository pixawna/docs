---
title: Prepare for setup
description: Collect the access and repository details required for a SuperPlane Factory workspace.
---

Prepare one GitHub repository, one ticket source and coding-agent access before you create a workspace. This preparation prevents setup and task failures.

## Check your SuperPlane access

You need an organization role that can create workspaces and manage integrations. Ask an organization owner if the required controls are unavailable.

## Choose a GitHub repository

Select the repository that the coding agent will change. Your GitHub connection must let SuperPlane:

- Read the repository and its default branch.
- Read GitHub Issues if you use backlog intake.
- Create branches and pull requests for approved tasks.
- Read pull request comments for feedback processing.

Use a repository with documented build and test commands. Add project-specific agent instructions before you start production work.

## Choose a ticket source

GitHub Issues is available during workspace setup. Jira and Linear appear in the interface but are not available in this setup flow.

You can skip an external backlog in supported setup flows. Create tasks in SuperPlane when you do not connect a backlog.

## Choose coding-agent access

Use one of these options:

- SuperPlane-hosted credit, when it is available for your organization.
- An Anthropic API key for Claude Code.
- An OpenAI API key for Codex and OpenAI models.
- An OpenRouter API key for supported models.

Store credentials through the SuperPlane integration flow. Do not add API keys to the repository or task description.

## Prepare the first task

Choose a small task with a clear result. Include acceptance criteria and the commands that verify the change.

Avoid a first task that needs broad architecture changes, production credentials, or manual access to external systems.

## Continue

[Create your first workspace](/get-started/create-workspace) when these requirements are ready.
