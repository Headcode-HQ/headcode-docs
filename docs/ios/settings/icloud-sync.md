---
outline: page
prev:
  text: Export Photos
  link: /ios/settings/import-export/export-photos
next:
  text: Delete All Spots
  link: /ios/settings/delete-all-spots
---

# iCloud Sync

iCloud Sync keeps your Headcode data synced across your iOS devices that use the same Apple ID.

::: info
iCloud Sync is **off by default**. You must enable it in Settings.
:::

## Availability

- Available on **iOS only**
- Requires iCloud Drive to be enabled on the device
- Requires a Wi-Fi connection to run sync

## Enable iCloud Sync

1. Go to **Settings > Data Management > iCloud Sync**
2. Turn on **Enable iCloud Sync**
3. Review the confirmation message about merge behavior
4. Tap **Confirm** to start using sync

When enabled, Headcode can sync on app launch, app resume, and after local changes.

## Sync Now

Use **Sync Now** to manually start sync from the iCloud Sync screen.

::: warning
Manual sync is also Wi-Fi only. If the device is on mobile data, sync will not run.
:::

## What Gets Synced

- Spots
- Spot photos
- Reference data (classes, types, conditions, locomotive details, locations, operators)
- Wish List related data

## What Does Not Get Synced

- App preferences (theme, tutorial flags, and other local settings)

Statistics and achievements are rebuilt from synced spot data after merge.

## Conflict Handling

Headcode automatically merges changes from this device and iCloud using a conflict-safe strategy:

- Newer edits win when the same record is changed in two places
- Deletions are tracked and propagated to other devices
- Duplicate records are prevented during merge

This means you do not need to resolve conflicts manually in v1.

## Status And Errors

The iCloud Sync screen shows:

- Last successful sync time
- Last sync error (if any)
- A reminder that sync is Wi-Fi only

If sync fails, reconnect to Wi-Fi and tap **Sync Now**.

## Disable iCloud Sync

Turning off **Enable iCloud Sync** stops future sync activity.

::: info
Disabling sync does **not** delete local data or iCloud data.
:::

