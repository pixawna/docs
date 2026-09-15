---
title: Self-hosting
description: Plan the services, configuration and operations required to run SuperPlane.
---

Self-host SuperPlane when your team needs control over deployment, data location and connected infrastructure. A production installation requires more than the local demo container.

## Core services

The SuperPlane backend uses PostgreSQL for state and RabbitMQ for messaging. The application provides the API and web interface, while workers execute background activity.

## Choose a deployment

Use the single-host installer for a production-like deployment without Kubernetes. Use the deployment resources in the [SuperPlane repository](https://github.com/superplanehq/superplane) when you need a Kubernetes deployment or need to customize individual services.

### Install on a single Linux host

Prepare:

- A Linux host with Docker and Docker Compose.
- A domain that resolves to the host.
- Inbound access on ports `80` and `443` for certificate issuance and HTTPS.

Download and run the installer:

```sh
wget -q https://install.superplane.com/superplane-single-host.tar.gz
tar -xf superplane-single-host.tar.gz
cd superplane
./install.sh
```

The installer configures the Docker Compose stack and TLS certificate for the domain you provide. Confirm that the UI, API and inbound integration webhooks are reachable over HTTPS before connecting production repositories.

## Operational responsibilities

Plan for:

- Database backups, migrations and recovery.
- Message-broker durability and monitoring.
- TLS, identity, network access and secrets.
- Runner capacity and isolation.
- Logs, metrics, upgrades and incident response.

## Upgrade a single-host deployment

Check [SuperPlane releases](https://github.com/superplanehq/superplane/releases) for the target version. Back up the database and deployment configuration before changing the image tag in `docker-compose.yml`.

Pull the selected images and recreate the services:

```sh
docker compose pull
docker compose up -d
```

Confirm migrations, application health, worker activity and webhook delivery after the upgrade.

## Try the local demo

```sh
docker pull ghcr.io/superplanehq/superplane-demo:stable
docker run --rm -p 3000:3000 -v spdata:/app/data -ti ghcr.io/superplanehq/superplane-demo:stable
```

Open `http://localhost:3000`. Use the demo for evaluation, not as a production architecture.

**Warning:** The demo stores data in a local volume and does not replace a production backup, recovery or high-availability plan.
