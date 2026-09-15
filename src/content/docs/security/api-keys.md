---
title: API keys
description: Use API keys for programmatic and automation access.
---

API keys are non-human credentials for API access. Use them for scripts and integrations that need a dedicated set of permissions.

## When to use

- **Scripts**: Call the SuperPlane API from automation.
- **Integrations**: Let external systems call the SuperPlane API with their own identity and role.

## Create an API key

1. In the SuperPlane UI, go to **Organization Settings > API keys**.
2. Create an API key and assign it a role.
3. Set an expiration and restrict the key to the apps or canvases it needs.
4. Copy the generated token immediately. It is shown only once.

## Use the token to configure the SuperPlane CLI

```sh
superplane connect <superplane_url> <api_key_token>
```

## Permissions

The token can only do what the API key's role allows. Permissions are organization-scoped and governed by [RBAC](/security/access-control).

- **Operator**: Read-only access, such as listing canvases or reading run history.
- **Maintainer** or a custom role: Create or update canvases, integrations or secrets when required.
- **Admin**: Manage organization-level settings. Avoid this role unless the client needs those operations.

Scopes further limit which apps or canvases the key can access. Role permissions still apply within the selected scope.

## Best practices

- One API key per external system: Create a dedicated API key per integration or script so you can revoke access or rotate credentials without impacting others.
- Expire and rotate: Set a bounded lifetime, regenerate the token before it expires and update stored copies.
- Revoke unused keys: Delete a key when its client is retired or compromised.
- Least privilege: Use the minimum role and narrowest app or canvas scope that satisfies the use case.
