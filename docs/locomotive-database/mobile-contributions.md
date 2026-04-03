---
outline: page
---

# Mobile Contributions

The Headcode mobile app can optionally contribute locomotive records to the online database.

This feature is designed to help grow the shared locomotive catalogue without uploading private spot details.

## How It Works

When a user opts in from the mobile app:

1. They connect their Headcode account to `locomotives.headcode.app`.
2. They create a new spot in the app.
3. Headcode checks whether that locomotive number already exists online.
4. If it does not exist, Headcode creates a locomotive record in the online database.

## Privacy Model

The mobile contribution flow only sends locomotive metadata.

It does **not** send:

- spot location
- coordinates
- notes
- photos
- personal information
- local spot IDs
- train details
- onboard journey details

## Fields Sent by Mobile

The mobile app may send:

- `number`
- `name`
- `className`
- `tractionType`
- `operator`
- `condition`

Some of these fields may be omitted if the user did not enter them.

## When Records Are Created

Mobile publishing only applies to:

- newly created quick spots
- newly created detailed spots

It does not apply to:

- edits to existing spots
- wishlist items
- later updates to an already published locomotive

## Authentication

Mobile publishing uses a browser sign-in handoff to connect the app to the online database.

- users sign in on the website with their existing account
- the website returns a one-time code to the app
- the app exchanges that code for a scoped bearer token

This token is then used for duplicate checks and locomotive creation.

## Related Pages

- [Locomotive Database](/locomotive-database/index)
- [Public API](/locomotive-database/api)
- [Android Community Database](/android/settings/community-database)
- [iOS Community Database](/ios/settings/community-database)
