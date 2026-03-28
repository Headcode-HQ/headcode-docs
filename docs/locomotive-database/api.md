---
outline: page
---

# Public API

This page documents the public read endpoints for the locomotive database.

- Base URL (production): `https://locomotives.headcode.app`
- API prefix: `/api/v1`
- Response format: JSON

For machine-readable schema, see:

- OpenAPI JSON: `/api/openapi.json`
- API Docs UI: `/api/docs`

## Authentication

Read endpoints are public.

Write endpoints (`POST`, `PATCH`, `DELETE`, photo upload/delete) require admin authentication and are not covered in this user-side guide.

## Common Object Shape

Most endpoints return a locomotive object with fields like:

- `id`, `number`, `name`, `slug`
- `className`, `tractionType`, `operator`
- `buildYear`, `condition`, `wheelConfiguration`, `notes`
- `headcodes[]`
- `photos[]` with `displayPath`, `thumbPath`, etc.
- `createdAt`, `updatedAt`, `deletedAt`
- `updatedBy` (nullable)

`tractionType` enum values:

- `STEAM`
- `DIESEL`
- `ELECTRIC`
- `MULTIPLE_UNIT`
- `OTHER`

## Endpoints

### List Locomotives

`GET /api/v1/locomotives`

Query params:

- `q`
- `class`
- `tractionType`
- `operator`
- `buildYearFrom`
- `buildYearTo`
- `sort` (`updatedAt_desc`, `createdAt_desc`, `number_asc`)
- `page`
- `pageSize`

Example:

```bash
curl "https://locomotives.headcode.app/api/v1/locomotives?q=6880&tractionType=STEAM&page=1&pageSize=20"
```

Example response:

```json
{
  "data": [
    {
      "id": "61f6b7f9-8e7d-4e8a-96f0-f11a43f5f4c1",
      "number": "6880",
      "name": "Betton Grange",
      "className": "GWR 6800",
      "tractionType": "STEAM",
      "operator": "Crewe",
      "buildYear": 2025,
      "condition": "Clean",
      "wheelConfiguration": "4-6-0",
      "notes": null,
      "createdAt": "2026-03-28T11:00:00.000Z",
      "updatedAt": "2026-03-28T11:05:00.000Z",
      "deletedAt": null,
      "slug": "6880-betton-grange",
      "headcodes": ["1Z99"],
      "photos": [],
      "photoCount": 0,
      "updatedBy": {
        "id": "0f1ebfd8-b86c-4f85-8a2e-21b66b78b249",
        "name": "Admin",
        "email": "admin@headcode.app"
      }
    }
  ],
  "pagination": {
    "page": 1,
    "pageSize": 20,
    "total": 1,
    "totalPages": 1
  }
}
```

### Get by UUID

`GET /api/v1/locomotives/{id}`

Example:

```bash
curl "https://locomotives.headcode.app/api/v1/locomotives/61f6b7f9-8e7d-4e8a-96f0-f11a43f5f4c1"
```

Response:

```json
{
  "data": {
    "id": "61f6b7f9-8e7d-4e8a-96f0-f11a43f5f4c1",
    "number": "6880",
    "name": "Betton Grange",
    "slug": "6880-betton-grange"
  }
}
```

### Get by Locomotive Number

`GET /api/v1/locomotives/by-number/{number}`

Example:

```bash
curl "https://locomotives.headcode.app/api/v1/locomotives/by-number/6880"
```

Response:

```json
{
  "data": {
    "id": "61f6b7f9-8e7d-4e8a-96f0-f11a43f5f4c1",
    "number": "6880",
    "name": "Betton Grange",
    "slug": "6880-betton-grange"
  }
}
```

### Recently Added

`GET /api/v1/locomotives/recent?limit=10`

Notes:

- `limit` defaults to `10`
- Minimum is `1`, maximum is `50`

Example:

```bash
curl "https://locomotives.headcode.app/api/v1/locomotives/recent?limit=10"
```

### Search Suggestions

`GET /api/v1/suggestions?q={query}`

Notes:

- Used by homepage typeahead
- Queries shorter than 2 characters return an empty list
- Maximum result count is 8

Example:

```bash
curl "https://locomotives.headcode.app/api/v1/suggestions?q=68"
```

Example response:

```json
{
  "data": [
    {
      "id": "61f6b7f9-8e7d-4e8a-96f0-f11a43f5f4c1",
      "number": "6880",
      "name": "Betton Grange",
      "className": "GWR 6800",
      "headcodes": ["1Z99"],
      "slug": "6880-betton-grange"
    }
  ]
}
```

## Error Format

Errors are returned as:

```json
{
  "error": "Not found"
}
```

Common statuses:

- `400` bad request
- `404` not found
- `500` server error

## CORS

API responses include CORS headers for allowed Headcode origins (including `headcode.app` and subdomains) and configured local development origins.
