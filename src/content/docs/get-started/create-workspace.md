---
title: Create your first workspace
description: Connect GitHub and a coding agent to create a Factory workspace.
---

Create a workspace through the guided setup. SuperPlane configures the repository, backlog intake, default line and required automations.

## Start workspace setup

1. Open **Workspaces** in SuperPlane.
2. Click **Create workspace**.
3. Click **Get started** on the welcome screen.

SuperPlane creates a temporary workspace before it opens the setup flow. It derives the final workspace name from your selected repository.

## Connect GitHub

1. Click **Connect GitHub**.
2. Approve access to the repository you want to use.
3. Return to SuperPlane after GitHub confirms the connection.
4. Click **Choose a repository**.

If GitHub is already connected, confirm the connection and continue.

## Choose the repository

1. Search for the repository.
2. Select the repository that the coding agent will change.
3. Click **Choose a repository to continue**.

If the repository is missing, click **Edit the GitHub connection**. Grant access to the repository, then return to setup.

## Connect the ticket source

1. Select **GitHub Issues**.
2. Review the repository shown for the issue backlog.
3. Click **Connect agent**.

If hosted credit is available, the button shows **Analyze my tickets**. Click that button to finish setup.

SuperPlane reads open issues and scores suitable tasks. This analysis does not change your repository or issues.

## Connect a coding agent

This screen is hidden when SuperPlane-hosted credit already covers the coding agent.

If the screen appears, connect one available provider:

- **Anthropic** for Claude Code.
- **OpenAI** for Codex and OpenAI models.
- **OpenRouter** for supported models from multiple providers.

Click **Finish setup** after the selected provider shows as connected.

## Confirm the workspace

Wait for SuperPlane to open the workspace board. Confirm that the board contains **Backlog**, line steps, **Verify** and **Done**.

Setup also creates GitHub issue intake and pull request feedback processing for the selected repository.

## Continue

Learn how [lines and automations](/get-started/lines-and-automations) process each task.
