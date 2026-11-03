# Columnist: Lotto Analytics AI

Static legal-document website for the application's Terms of Use and Privacy Policy, available in Turkish and English.

## Public pages (after GitHub Pages is enabled)

- Home: https://columnistapp.github.io/lotto/
- Terms of Use: https://columnistapp.github.io/lotto/terms/
- Privacy Policy: https://columnistapp.github.io/lotto/privacy/

The landing page and document routes use the browser's preferred language when it is supported. Turkish opens in Turkish; other languages fall back to English. The language selector also allows manual switching.

## Native app update settings

The native app reads `app_versions.json` directly from GitHub's raw-file endpoint. This check does not use GitHub Pages, `index.html`, or a website route.

Each platform entry contains:

- `version`: the newest app version for that platform.
- `mandatory`: `true` blocks continued use until the app is updated; `false` allows the user to update later.
- `store_url`: the exact public listing URL for that app in its own store. Use the app's listing page, not the repository or a store search page.

Supported platform keys are `android_gms`, `android_hms`, `harmonyos_next`, `ios`, `mac_catalyst`, `macos`, `windows_desktop`, and `windows_store`.

The app validates store URLs against the expected store domain for each platform. When a newer version is published, make sure its `store_url` is set to a valid listing URL; otherwise the app safely skips the update prompt rather than trapping users without an install destination.

## Publishing

In the repository settings, enable GitHub Pages with the `main` branch and repository root (`/`) as the publishing source. After GitHub Pages finishes deploying, verify the public home page and both document routes. The website is static HTML; no server-side application code is run by GitHub Pages.
