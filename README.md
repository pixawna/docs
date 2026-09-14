# SuperPlane Documentation

This repository contains the documentation for [SuperPlane Factory](https://github.com/superplanehq/superplane), the AI software factory for tracked agent work.

## About

This documentation site is built with [Starlight](https://starlight.astro.build), a documentation framework built on [Astro](https://astro.build) and deployed to [docs.superplane.com](https://docs.superplane.com) via Cloudflare Pages.

## Crawler and agent discovery

The deployed site publishes:

- `/robots.txt` — crawler access policy and sitemap location
- `/llms.txt` — concise, structured documentation index for agents
- `/llms-full.txt` — complete documentation context for tools that need it

The LLM context files are generated automatically during `npm run build` (via `prebuild`) and should not be edited manually. `robots.txt` controls crawler access; `llms.txt` does not grant access and instead helps an agent find the most relevant documentation.

## Contributing

We welcome your contributions to improve the documentation. See [CONTRIBUTING.md](./CONTRIBUTING.md) for development setup and contribution guidelines.

If you have any questions, please reach out to us on [Discord](https://discord.superplane.com).

If you find something missing, confusing, or wrong, please [open an issue](https://github.com/superplanehq/docs/issues) to put it on our radar.
