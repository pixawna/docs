---
title: Glossary
description: Definitions for SuperPlane Factory resources, automation data and security controls.
---

Use this glossary to map Factory terms between the SuperPlane interface, documentation and API.

## Factory

A **factory** coordinates software tasks, repositories, delivery lines and coding agents. The SuperPlane interface calls a factory a **workspace**.

## Software factory

A **software factory** is a factory that coordinates task intake, coding agents, verification and review. In these docs, **software factory** and **factory** refer to the same SuperPlane resource.

## Workspace

A **workspace** is the user-interface name for a factory. It groups tasks, lines, automations, integrations and Factory settings.

## Task

A **task** records one unit of software work from its initial description through completion. The API calls a task a **work order**.

## Work order

A **work order** is the API name for a task. Work order endpoints use `/api/v1/factories/{factory_id}/orders`.

## Line

A **line** defines the ordered automation steps that process an approved task. A line can limit concurrent work at each step.

## Automation

An **automation** listens for a trigger and runs a canvas. Lines use automations owned by the same workspace.

## Intake

An **intake** creates or imports tasks from an external source. The default setup can use GitHub Issues as an intake.

## Canvas

A **canvas** is the graph that defines an automation. It contains component nodes connected through channels and subscriptions.

## Component

A **component** is a reusable trigger or action. Components can use SuperPlane functions or connect to external services.

## Node

A **node** is one configured component on a canvas. A node receives input, performs work and emits a payload.

## Agent

An **agent** performs assigned work in a configured execution environment. A Factory supplies the repository, task context, model and tools, then records the agent's output.

## Trigger

A **trigger** starts an automation run when an event occurs. Examples include a manual action, schedule, webhook, or GitHub event.

## Run

A **run** records one automation execution. It includes status, component executions, configuration and output data.

## Payload

A **payload** is the JSON data emitted by a node. Downstream nodes can read this data with expressions.

## Channel

A **channel** is a named node output. A component can use one default channel or multiple result channels.

## Subscription

A **subscription** connects an upstream channel to a downstream node. The downstream node runs when the upstream node emits on that channel.

## Expression

An **expression** reads or transforms automation data. See the [expression guide](/expressions/guide) for syntax and examples.

## Artifact

An **artifact** is a result attached to a task. Examples include a branch, pull request, report, or generated file.

## Check

A **check** records a scored result for a task. Checks help people and automations decide whether work can continue.

## Integration

An **integration** connects SuperPlane to an external service. Examples include GitHub, Anthropic, OpenAI, Slack and Sentry.

## API key

An **API key** is a non-human credential for the SuperPlane API. Its role controls the actions that the key can perform.

## Role-based access control

**Role-based access control (RBAC)** assigns permissions through organization roles and groups. See [access control](/security/access-control).
