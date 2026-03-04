---
id: errors
title: Error Handling
sidebar_position: 4
---

# Error Handling

## Error Response Format

When a request fails, the API returns a structured error response:

```json
{
  "success": false,
  "error": {
    "code": "NOT_FOUND",
    "message": "The requested item could not be found.",
    "requestId": "req_abc123"
  }
}
```

## HTTP Status Codes

| Code | Meaning |
|---|---|
| `200` | Success |
| `201` | Created |
| `400` | Bad Request — invalid parameters |
| `401` | Unauthorized — missing or invalid API key |
| `403` | Forbidden — insufficient permissions |
| `404` | Not Found |
| `422` | Unprocessable Entity — validation error |
| `429` | Too Many Requests — rate limit exceeded |
| `500` | Internal Server Error |

## Error Codes

| Code | Description |
|---|---|
| `INVALID_API_KEY` | API key is missing or invalid |
| `NOT_FOUND` | Resource does not exist |
| `VALIDATION_ERROR` | Request body failed validation |
| `RATE_LIMITED` | Too many requests |
| `INTERNAL_ERROR` | Something went wrong on our end |

## Handling Errors in Code

```js
try {
  const res = await fetch('https://api.example.com/v1/items/bad_id', {
    headers: { 'Authorization': 'Bearer YOUR_KEY' },
  });
  const data = await res.json();

  if (!data.success) {
    console.error(`Error ${res.status}: ${data.error.code} — ${data.error.message}`);
    return;
  }

  // use data.data
} catch (err) {
  console.error('Network error:', err);
}
```

:::tip
Always check `data.success` before using `data.data`. Never assume the request succeeded.
:::
