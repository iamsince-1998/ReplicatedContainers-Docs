---
id: endpoints
title: Endpoints
sidebar_position: 3
---

# Endpoints

## Items

### List all items

```http
GET /v1/items
```

**Query Parameters**

| Param | Type | Description |
|---|---|---|
| `limit` | `integer` | Max results to return (default: `20`, max: `100`) |
| `offset` | `integer` | Pagination offset (default: `0`) |
| `sort` | `string` | Sort by field, e.g. `created_at` |

**Response**

```json
{
  "success": true,
  "data": [
    {
      "id": "item_001",
      "name": "Example Item",
      "created_at": "2026-03-04T10:00:00Z"
    }
  ],
  "meta": {
    "total": 42,
    "limit": 20,
    "offset": 0
  }
}
```

---

### Get a single item

```http
GET /v1/items/:id
```

---

### Create an item

```http
POST /v1/items
```

**Request Body**

```json
{
  "name": "New Item",
  "description": "Optional description"
}
```

---

### Update an item

```http
PATCH /v1/items/:id
```

---

### Delete an item

```http
DELETE /v1/items/:id
```

**Response**

```json
{
  "success": true,
  "data": { "deleted": true }
}
```
