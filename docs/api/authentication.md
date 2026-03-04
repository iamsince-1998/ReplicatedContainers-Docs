---
id: authentication
title: Authentication
sidebar_position: 2
---

# Authentication

## API Keys

All API requests require a valid API key passed in the `Authorization` header:

```http
Authorization: Bearer YOUR_API_KEY
```

### Getting an API Key

1. Go to your [dashboard](https://example.com/dashboard)
2. Navigate to **Settings → API Keys**
3. Click **Create new key**
4. Copy and store the key securely — it won't be shown again

:::warning
Keep your API key secret. Never expose it in client-side code or public repositories.
:::

## Example Request

```bash
curl https://api.example.com/v1/items \
  -H "Authorization: Bearer sk_live_abc123..." \
  -H "Content-Type: application/json"
```

```js
const response = await fetch('https://api.example.com/v1/items', {
  headers: {
    'Authorization': 'Bearer sk_live_abc123...',
    'Content-Type': 'application/json',
  },
});
const data = await response.json();
```

## Scopes

API keys can be scoped to limit access:

| Scope | Description |
|---|---|
| `read` | Read-only access to all resources |
| `write` | Create and update resources |
| `delete` | Delete resources |
| `admin` | Full access including billing |

## Rotating Keys

To rotate a key, create a new one and delete the old one from the dashboard. Keys are invalidated immediately upon deletion.
