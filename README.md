# Columnist: Lotto Analytics AI

Static legal-document website for the application's Terms of Use and Privacy Policy, available in Turkish and English.

## Public pages (after GitHub Pages is enabled)

- Home: https://columnistapp.github.io/lotto/
- Terms of Use: https://columnistapp.github.io/lotto/terms/
- Privacy Policy: https://columnistapp.github.io/lotto/privacy/

The landing page and document routes use the browser's preferred language when it is supported. Turkish opens in Turkish; other languages fall back to English. The language selector also allows manual switching.

## Native app update settings

The native app reads `app_versions.json` directly from GitHub's raw-file endpoint. This check does not use GitHub Pages, `index.html`, or a website route.

Each platform entry contains only:

- `version`: the newest app version for that platform.
- `mandatory`: `true` blocks continued use until the app is updated; `false` allows the user to update later.

Supported platform keys are `android_gms`, `android_hms`, `harmonyos_next`, `ios`, `mac_catalyst`, `macos`, `windows_desktop`, and `windows_store`.

The app's store listing URL is deliberately kept in its local platform configuration, not in this repository manifest. When an update is available, the app opens the corresponding app listing in the store used by that installation. Do not put GitHub URLs, website routes, or store search/home pages in the version manifest.

Before setting a platform to a newer version or making an update mandatory, verify that the installed app has a valid, exact app-listing URL configured for that platform. Platforms without a configured store listing fail open and do not show an update prompt, so users are not blocked without a working update destination.

## Publishing

In the repository settings, enable GitHub Pages with the `main` branch and repository root (`/`) as the publishing source. After GitHub Pages finishes deploying, verify the public home page and both document routes. The website is static HTML; no server-side application code is run by GitHub Pages.
