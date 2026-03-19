---
outline: page
prev:
  text: My Spots
  link: /android/my-spots/index
next:
  text: Edit a Spot
  link: /android/my-spots/edit-a-spot
---

# Spot Details

The Spot Details screen shows all the information recorded for a single spot. It's where you can view photos, locomotive details, and any other data you've logged.

<a href="/images/android/loco-details-non-edit.png" target="_blank">
  <img
    src="/images/android/loco-details-non-edit.png"
    class="doc-img md"
    alt="Headcode – Calendar screen"
  />
</a>

## Accessing Spot Details

You can view spot details by tapping on any spot from:

- The [My Spots](/android/my-spots/index) list
- [Calendar](/android/getting-started/calendar) view when selecting a day's spots
- [Search](/android/getting-started/searching) results
- [Gallery](/android/getting-started/gallery) when viewing a photo's parent spot

## Screen Layout

### Hero Image

If you've attached photos to the spot, the first photo displays as a large hero image at the top of the screen. If no photos are attached, a placeholder graphic is shown.

### Locomotive Header

Below the hero image, you'll see:

- **Locomotive Number** - The main identifier in large text
- **Locomotive Name** - If recorded, shown below the number
- **Chips** - Quick-reference tags showing class, location, and date

<a href="/images/android/loco-details-non-edit.png" target="_blank">
  <img
    src="/images/android/loco-details-non-edit.png"
    class="doc-img md"
    alt="Headcode – Calendar screen"
  />
</a>

### Technical Specifications

If you've added locomotive details in [Reference Data](/android/settings/reference-data/locomotive-details), they'll appear in a "Technical Specifications" card showing:

- Build year
- Built by (manufacturer)
- Power type
- Wheel configuration
- Designer
- Length, weight, and pressure

### Locomotive Details

This card shows information you recorded during logging:

- Locomotive name
- Operator
- Type (Steam, Diesel, Electric, etc.)
- Condition

### Movement Details

If you recorded train details, this card shows:

- Tender first (for steam locomotives)
- ECS status
- Accompanied status
- Carriage count

### Location

The Location card appears below **Movement Details**. It brings all location data together in one place:

- Location name (if entered)
- Captured coordinates (latitude/longitude)
- Accuracy (when available)
- An interactive map when coordinates are valid

If your spot has coordinates but no location name, Headcode shows:

> Coordinates saved. Add a location name if you'd like.

### Location Map (Offline Fallback)

When coordinates are available, Headcode attempts to load OpenStreetMap tiles in the Location card.

- Spot Details always loads immediately (map loading never blocks the screen)
- If map tiles fail to load (for example, no signal in the field), the map area falls back to:
  - **"Map unavailable offline. Coordinates are shown above."**
- Coordinates remain visible even when map tiles are unavailable

### Journey

If you marked the spot as "onboard", this card shows your journey with departure and arrival stations.

### Formation

When you've recorded a carriage count, a visual representation of the train formation appears, showing coach icons for each carriage.

<a href="/images/android/loco-details-formation.png" target="_blank">
  <img
    src="/images/android/loco-details-formation.png"
    class="doc-img md"
    alt="Headcode – Calendar screen"
  />
</a>

### Notes

Any notes you've added appear in their own card, making them easy to read.

### Photo Gallery

If you've attached multiple photos, they appear in a grid at the bottom of the screen. Tap any photo to view it full-screen in the photo viewer.

## Actions

From the Spot Details screen, you can:

### Edit

Tap the **pencil icon** in the app bar to edit this spot. This opens the [Detailed Log](/android/detailed-log/index) screen with all the existing data pre-filled.

### Delete

Tap the **bin icon** in the app bar to delete this spot. You'll be asked to confirm before the spot is permanently removed.

::: warning
Deleting a spot also removes all attached photos. This action cannot be undone.
:::

<a href="/images/android/loco-details-delete.png" target="_blank">
  <img
    src="/images/android/loco-details-delete.png"
    class="doc-img md"
    alt="Headcode – Calendar screen"
  />
</a>
