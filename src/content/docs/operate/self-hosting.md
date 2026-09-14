---
title: Self-hosting
description: Plan the services, configuration and operations required to run SuperPlane.
---

Self-host SuperPlane when your team needs control over deployment, data location and connected infrastructure. A production installation requires more than the local demo container.

## Core services

The SuperPlane backend uses PostgreSQL for state and RabbitMQ for messaging. The application provides the API and web interface, while workers execute background activity.

## Operational responsibilities

Plan for:

- Database backups, migrations and recovery.
- Message-broker durability and monitoring.
- TLS, identity, network access and secrets.
- Runner capacity and isolation.
- Logs, metrics, upgrades and incident response.

## Try the local demo

```sh
docker pull ghcr.io/superplanehq/superplane-demo:stable
docker run --rm -p 3000:3000 -v spdata:/app/data -ti ghcr.io/superplanehq/superplane-demo:stable
```

Open `http://localhost:3000`. Use the demo for evaluation, not as a production architecture.

See the [SuperPlane GitHub repository](https://github.com/superplanehq/superplane) for source and deployment resources.
