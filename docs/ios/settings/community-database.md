---
outline: page
prev:
  text: Settings
  link: /ios/settings/index
next:
  text: Restart Tutorial
  link: /ios/settings/restart-tutorial
---

# Community Database

Headcode can optionally publish locomotive records to the online Headcode Locomotive Database when you save a new spot.

This feature is **off by default** and only runs if you choose to enable it.

## What This Feature Does

When community publishing is enabled, Headcode will:

1. Save your spot locally as normal.
2. Check whether that locomotive number already exists in the online database.
3. Add the locomotive online if it does not already exist.

This is a background process. Your local spot is still saved even if the online publish does not complete.

## What Gets Uploaded

Only locomotive metadata is sent to `locomotives.headcode.app`.

- Locomotive number
- Locomotive name, if you entered one
- Class, if you entered one
- Traction type
- Operator, if you entered one
- Condition, if you entered one

## What Does Not Get Uploaded

Headcode does **not** send any of the following as part of community publishing:

- Spot location
- Coordinates
- Notes
- Photos
- Personal information
- Local spot IDs
- Timestamps from your spot
- Train details or onboard information

## Before You Enable It

The first time you turn this on, Headcode shows a privacy message explaining:

- only locomotive details are uploaded
- no location or personal information is stored in the online database from your mobile spot
- local saves still work even if the online publish fails

You must confirm that message before the setting is enabled.

## Connecting Your Headcode Account

To publish locomotives online, you need to connect your Headcode account.

1. Open **Settings**.
2. Turn on **Publish locomotives online**.
3. Tap **Connect Headcode account**.
4. Sign in to `locomotives.headcode.app` using your Headcode account.
5. Return to the app to finish linking.

After a successful sign-in, the settings screen will show that the app is connected.

## Cancelling Sign-In

If you start the sign-in flow and change your mind, tap **Cancel** in the settings screen.

This stops the current connection attempt and lets you try again later.

## When Publishing Happens

Community publishing only runs when you create a **new** spot.

It can happen from:

- [Quick Log](/ios/getting-started/quick-log)
- [Detailed Log](/ios/detailed-log/index)

It does **not** run for:

- edits to existing spots
- upgrades of an existing quick spot into a detailed spot
- wishlist entries

## Duplicate Handling

Headcode checks the locomotive number before creating anything online.

If the number already exists in the online database, nothing new is created and the item is removed from the publish queue.

## If Publishing Fails

If Headcode cannot publish the locomotive right away:

- your local spot is still saved
- the locomotive stays in the background queue
- the app shows a status message in Settings
- Headcode retries later when possible

Common reasons include:

- you are not connected to your Headcode account
- no internet connection is available
- the online service is temporarily unavailable

## Disconnecting

You can disconnect at any time from **Settings**.

Disconnecting removes the app's saved connection and stops future publishes until you connect again.

## Related Pages

- [Settings](/ios/settings/index)
- [Quick Log](/ios/getting-started/quick-log)
- [Detailed Log](/ios/detailed-log/index)
- [Locomotive Database](/locomotive-database/index)
