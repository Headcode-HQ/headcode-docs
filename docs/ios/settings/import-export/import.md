---
outline: page
prev:
  text: Settings
  link: /ios/settings/index
next:
  text: Export as CSV
  link: /ios/settings/import-export/export-as-csv
---

# Import Your Data

If you've previously exported your data from Headcode or are moving to a new device, you can restore your spots by importing a backup file.

<!-- Screenshot: The Import/Export screen showing the Import option -->

## What You Can Import

Headcode can import data from a **full backup** file (`.zip`) that was previously created using the [Full Export](/ios/settings/import-export/export-full) feature.

The import includes:
- All your spots
- All attached photos
- Your **Wish List** (active and completed wishes)
- Reference data (locomotive classes, types, conditions, locomotive details, locations, operators)

## How to Import

1. Go to **Settings > Import / Export**
2. Tap **Import / Restore**
3. Select your backup file (`.zip`) from your device
4. Choose how to handle existing data (see below)
5. Wait for the import to complete

<!-- Screenshot: The file picker showing a Headcode backup file selected -->

## Replace vs Merge

When you import a backup, Headcode asks how to handle your existing data:

- **Replace** — Wipes all current data (spots, wish list, reference data) and replaces it entirely with the backup contents. Use this when restoring to a clean state or migrating to a new device.
- **Merge** — Combines the backup data with your existing data. Spots, wish list items, and reference entries from the backup are added alongside what you already have. Use this when consolidating data from multiple sources.

::: warning
**Replace** permanently deletes your current data. Export a backup first if you may need it.
:::

- Only import files that were exported from Headcode
- The import process may take some time if you have many photos
- Make sure your device has enough storage space for the imported photos

## Transferring to a New Device

To transfer your Headcode data to a new device:

1. On your **old device**: Use [Full Export](/ios/settings/import-export/export-full) to create a backup
2. Transfer the `.zip` file to your new device (via cloud storage, email, or cable)
3. On your **new device**: Install Headcode and use Import to restore

## Troubleshooting

If import fails:
- Ensure the file is a valid Headcode backup (`.zip` format)
- Check you have enough storage space
- Try exporting and importing again from the source device