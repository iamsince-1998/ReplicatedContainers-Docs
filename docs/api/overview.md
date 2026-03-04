---
id: overview
title: API Overview
sidebar_position: 1
---

# API Overview

The My Project REST API lets you interact with your data programmatically.

## Base URL

```
https://api.example.com/v1
```

## Request Format

All requests must include the following headers:

```http
Content-Type: application/json
Authorization: Bearer <your_api_key>
```

## Response Format

All responses are returned as JSON:

```json
{
  "success": true,
  "data": { },
  "meta": {
    "requestId": "req_abc123",
    "timestamp": "2026-03-04T10:00:00Z"
  }
}
```

## Rate Limiting

| Plan | Requests / minute |
|---|---|
| Free | 60 |
| Pro | 600 |
| Enterprise | Unlimited |

Rate limit headers are included in every response:

```http
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 45
X-RateLimit-Reset: 1709546400
```

## Versioning

The API is versioned via the URL path (`/v1`). Breaking changes will be released under a new version with advance notice.
