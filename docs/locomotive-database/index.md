---
outline: page
---

# Locomotive Database

This section is a documentation stub for the public (user-facing) side of the Headcode Locomotive Database.

The database runs as a standalone web app and as a service used by the main Headcode experience.

- Production URL: `https://locomotives.headcode.app`
- Public pages:
  - `/` (search homepage + recently added)
  - `/database` (full searchable and filterable list)
  - `/locomotives/{number}-{slug}` (public detail page)
- Public API base:
  - `/api/v1/*`

## What Users Can Do

- Search locomotives by number, headcode, class, type, name, and operator
- Browse recently added records from the homepage
- Filter and sort the full database list
- Open a public detail page for each locomotive
- View photo galleries and record metadata (including last edited timestamp)

## Public Experience at a Glance

1. Home search uses live suggestions and direct navigation to records.
2. Enter on search routes to `/database?q=...`.
3. Database filters narrow results by class, traction type, operator, and build year range.
4. Each result opens the public detail page with core fields, metadata, and photos.

## Next Pages

- [Search & Browse](/locomotive-database/search-and-browse)
- [Locomotive Details](/locomotive-database/locomotive-details)
- [Public API](/locomotive-database/api)
