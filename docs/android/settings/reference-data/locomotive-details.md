---
outline: page
prev:
  text: Delete All Spots
  link: /settings/delete-all-spots
next:
  text: Locomotive Classes
  link: /settings/reference-data/locomotive-classes
---

# Locomotive Details

Locomotive Details lets you store technical specifications for individual locomotives. This information appears on the [Spot Details](/android/my-spots/spot-details) screen, enriching your sighting records with data about the locomotive itself.

<!-- Screenshot: The Locomotive Details list showing several locomotives -->

## How It Works

When you log a spot for a locomotive you haven't seen before, Headcode can prompt you to add details about that locomotive. This creates a reference entry that will be shown whenever you view spots for that locomotive.

## Viewing Locomotive Details

Go to **Settings > Reference Data > Locomotive Details** to see all locomotives with reference data.

Each entry shows:
- Locomotive number
- Locomotive name (if set)

## Available Technical Details

For each locomotive, you can record:

- **Build Year** - When the locomotive was built
- **Built By** - Manufacturer (e.g., "Crewe Works", "Swindon")
- **Power Type** - Type of propulsion (Steam, Diesel, Electric)
- **Wheel Configuration** - Wheel arrangement (e.g., "4-6-2", "Co-Co")
- **Designed By** - Designer's name or company
- **Length** - Overall length
- **Weight** - Operating weight
- **Pressure** - Boiler pressure (for steam locomotives)

<!-- Screenshot: The locomotive details edit screen showing all available fields -->

## Editing Locomotive Details

1. Find the locomotive in the list
2. Tap the **pencil icon**
3. Update any fields you wish
4. Tap **Save**

The updated information will appear on all spots for this locomotive.

## Adding a New Locomotive

Locomotives are typically added automatically when you log your first spot for them. However, you can also add locomotive details manually if you want to pre-populate information.

## Importing from the Headcode Database

You can also import missing locomotives from the public Headcode online database.

1. Go to **Settings > Reference Data > Locomotive Details**
2. Use **Import from Headcode** the first time you run it
3. On later runs, use **Check for Missing Locomotives**

Headcode downloads the public locomotive catalogue and compares it against your local reference data using the locomotive number.

- If a locomotive number already exists locally, it is skipped
- If a locomotive number does not exist locally, a new local reference entry is created
- Existing local locomotive details are never overwritten by an import

While the import runs, progress is shown inline on the screen. After it finishes, Headcode shows a short summary with the number of locomotives imported and skipped, along with the last successful import time.

### What gets imported

The import adds any supported locomotive reference fields that are available from the online database, including:

- Locomotive number
- Locomotive name
- Power type / traction type

When available, Headcode also reuses or creates matching reference entries for:

- Locomotive classes
- Locomotive types
- Operators
- Locomotive conditions

Imported traction types are normalised to Headcode's existing reference values where possible, so values such as `DIESEL` will appear as `Diesel` in the app.

### Important notes

- Import is manual only; it does not run automatically in the background
- Import is safe to run more than once
- If you are offline or the request fails, your existing local data stays unchanged
- Local edits remain local and are not replaced by later imports

## Deleting Locomotive Details

1. Find the locomotive in the list
2. Tap the **bin icon**
3. Confirm the deletion

<!-- Screenshot: The delete confirmation dialog -->

::: info
Deleting locomotive details only removes the technical specifications. Your spots for that locomotive are not affected - they'll just show without the "Technical Specifications" section.
:::

## How Details Appear

When viewing a spot for a locomotive with reference data, you'll see a "Technical Specifications" card showing all the recorded details.

<!-- Screenshot: The Spot Details screen showing the Technical Specifications card -->
