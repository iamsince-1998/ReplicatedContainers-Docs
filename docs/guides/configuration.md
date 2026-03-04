---
id: configuration
title: Configuration
sidebar_position: 3
---

# Configuration

## Config File

My Project looks for a `my-project.config.js` file in your project root:

```js title="my-project.config.js"
/** @type {import('my-project').Config} */
module.exports = {
  name: 'my-app',
  port: 3000,
  debug: false,
  api: {
    baseUrl: 'https://api.example.com',
    timeout: 5000,
    retries: 3,
  },
};
```

## All Options

| Option | Type | Default | Description |
|---|---|---|---|
| `name` | `string` | `"my-app"` | Application name |
| `port` | `number` | `3000` | Server port |
| `debug` | `boolean` | `false` | Enable verbose logging |
| `api.baseUrl` | `string` | — | Base URL for API calls |
| `api.timeout` | `number` | `5000` | Request timeout in ms |
| `api.retries` | `number` | `3` | Number of retry attempts |

## Environment Variable Overrides

All config values can be overridden via environment variables:

```env
MY_PROJECT_PORT=8080
MY_PROJECT_DEBUG=true
MY_PROJECT_API_BASE_URL=https://staging.api.example.com
```

:::note
Environment variables always take precedence over the config file.
:::
