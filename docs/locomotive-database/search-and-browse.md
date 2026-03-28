---
outline: page
---

# Search & Browse

This page covers the user-facing browsing flow of the locomotive database.

## Homepage (`/`)

The homepage is designed as a focused search-first interface.

- Large centered search input
- Live typeahead suggestions (starts when query length is at least 2)
- Enter key opens the database list using the same query
- "Recently Added" panel with up to 10 latest records

### Search Input Behavior

- Empty submit: navigates to `/database`
- Non-empty submit: navigates to `/database?q={query}`
- Suggestions call: `GET /api/v1/suggestions?q={query}`

## Database Page (`/database`)

The database page is the full record browser.

### Available Filters

- `q`: free-text search (number, headcode, class, name, operator)
- `class`
- `tractionType`
- `operator`
- `buildYearFrom`
- `buildYearTo`
- `sort`
- `pageSize`

### Sort Options

- `updatedAt_desc` (default)
- `createdAt_desc`
- `number_asc`

### Pagination

- `page` starts at 1
- `pageSize` default is 20 (max 100)

### Resetting Filters

- Use the **Reset** button in the filter pane to return to `/database` with default state.

## Result Cards

Each result card shows:

- Locomotive number and name
- Class, traction type, and operator chips
- Headcodes (if present)
- Photo count
- Last edited date

Clicking a card opens `/locomotives/{number}-{slug}`.
