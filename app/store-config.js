/*
 * COLUMNIST STORE AVAILABILITY
 * true  = active, clickable, and eligible for automatic device redirection
 * false = shown as inactive, with no link and no automatic redirection
 *
 * When a store is ready, change only its value from false to true.
 */
window.COLUMNIST_STORE_CONFIG = Object.freeze({
  ios: true,
  android: true,
  huawei: true,
  harmony: false,
  windows: false
});
