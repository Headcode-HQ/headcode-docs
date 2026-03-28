---
outline: page
---

# Locomotive Details

The public locomotive detail page lives at:

`/locomotives/{number}-{slug}`

Example:
`/locomotives/6880-betton-grange`

## What Users See

### Main Visual

- Primary photo banner (if one or more photos exist)

### Identity and Chips

- Number
- Name
- Class
- Traction type
- Operator (if set)
- Build year (if set)
- Headcodes list (if set)

### Locomotive Details Card

- Name
- Class
- Type
- Operator
- Condition
- Wheel configuration
- Notes

### Record Metadata Card

- Created timestamp
- Last edited timestamp
- Edited by (display name or email where available)

### Photos Card

- Thumbnail gallery of all uploaded photos
- Empty-state text when no photos exist

## Notes

- Date/time display is UK formatted in the UI.
- Only active (non-deleted) records are shown on public pages.
