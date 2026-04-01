import { defineConfig } from "vitepress";

const makeSidebar = (base = "") => [
  { text: "Home", link: `index` },
  {
    text: "Getting Started",
    link: `${base}getting-started/index`,
    items: [
      { text: "Quick Log", link: `${base}getting-started/quick-log` },
      { text: "Stats", link: `${base}getting-started/stats` },
      { text: "Calendar", link: `${base}getting-started/calendar` },
      { text: "Gallery", link: `${base}getting-started/gallery` },
      { text: "Searching", link: `${base}getting-started/searching` },
      { text: "Upcoming Events", link: `${base}getting-started/upcoming-events` },
      { text: "Achievements", link: `${base}getting-started/achievements` },
    ],
  },
  {
    text: "Detailed Log",
    link: `${base}detailed-log/index`,
    items: [
      { text: "Locomotive Details", link: `${base}detailed-log/locomotive-details` },
      { text: "Location Seen", link: `${base}detailed-log/location-seen` },
      { text: "Onboard Information", link: `${base}detailed-log/onboard-information` },
      { text: "Train Details", link: `${base}detailed-log/train-details` },
      { text: "Notes", link: `${base}detailed-log/notes` },
      { text: "Photos", link: `${base}detailed-log/photos` },
    ],
  },
  {
    text: "My Spots",
    link: `${base}my-spots/index`,
    items: [
      { text: "Spot Details", link: `${base}my-spots/spot-details` },
      { text: "Edit a Spot", link: `${base}my-spots/edit-a-spot` },
      { text: "Delete a Spot", link: `${base}my-spots/delete-a-spot` },
      { text: "Filtering", link: `${base}my-spots/filtering` },
      { text: "Wish List", link: `${base}my-spots/wish-list` },
    ],
  },
  {
    text: "Settings",
    link: `${base}settings/index`,
    items: [
      {
        text: "Preferences",
        items: [
          { text: "Appearance", link: `${base}settings/preferences/appearance` },
          { text: "Notifications", link: `${base}settings/preferences/notifications` },
          { text: "Reminders", link: `${base}settings/preferences/reminders` },
        ],
      },
      { text: "Widgets", link: `${base}settings/widgets` },
      {
        text: "Import / Export",
        items: [
          { text: "Import / Restore", link: `${base}settings/import-export/import` },
          { text: "Export as CSV", link: `${base}settings/import-export/export-as-csv` },
          { text: "Export Wishlist as CSV", link: `${base}settings/import-export/export-wishlist` },
          { text: "Full Backup", link: `${base}settings/import-export/export-full` },
          { text: "Export Photos", link: `${base}settings/import-export/export-photos` },
        ],
      },
      { text: "iCloud Sync", link: `${base}settings/icloud-sync` },
      {
        text: "Reference Data",
        items: [
          { text: "Locomotive Classes", link: `${base}settings/reference-data/locomotive-classes` },
          { text: "Locomotive Types", link: `${base}settings/reference-data/locomotive-types` },
          { text: "Locomotive Conditions", link: `${base}settings/reference-data/locomotive-conditions` },
          { text: "Locomotive Details", link: `${base}settings/reference-data/locomotive-details` },
          { text: "Locations", link: `${base}settings/reference-data/locations` },
          { text: "Operators", link: `${base}settings/reference-data/operators` },
        ],
      },
      { text: "Delete All Spots", link: `${base}settings/delete-all-spots` },
      { text: "Wishlist Data", link: `${base}settings/wishlist-data` },
      { text: "Restart Tutorial", link: `${base}settings/restart-tutorial` },
    ],
  },
];

const locomotiveDatabaseSidebar = [
  { text: "Overview", link: "/locomotive-database/index" },
  { text: "Search & Browse", link: "/locomotive-database/search-and-browse" },
  { text: "Locomotive Details", link: "/locomotive-database/locomotive-details" },
  { text: "Public API", link: "/locomotive-database/api" },
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Headcode",
  description: "Knowledge base for Headcode",
  head: [
    [
      "script",
      {
        defer: "",
        src: "https://stats.codenameowl.com/script.js",
        "data-website-id": "92d41c2f-f7cc-4221-942e-ba91a0606cc9",
      },
    ],
  ],
  themeConfig: {
    logo: "/images/icon.png",
    search: {
      provider: "local",
    },
    nav: [
      {
        text: "Platform",
        items: [
          { text: "iOS", link: "/ios/" },
          { text: "Android", link: "/android/" },
        ],
      },
      { text: "Locomotive Database", link: "/locomotive-database/index" },
    ],
    sidebar: {
      "/ios/": makeSidebar("/ios/"),
      "/android/": makeSidebar("/android/"),
      "/locomotive-database/": locomotiveDatabaseSidebar,
      "/": makeSidebar("/ios/"),
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/Headcode-hq/Headcode-docs" },
    ],
  },
});
