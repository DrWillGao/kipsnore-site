// Single source of truth for site-wide constants.
// Swap SITE_URL to a custom domain in one place when DNS is ready.
export const SITE_URL = 'https://kipsnore.com';

export const APP_ID = '6762579025';
// Locale-agnostic App Store link — redirects to the visitor's storefront.
export const APP_STORE_URL = `https://apps.apple.com/app/id${APP_ID}`;

export const CONTACT_EMAIL = 'kipsnoreapp@gmail.com';

// One CTA, reused everywhere (Calm-style single-CTA discipline).
export const CTA_LABEL = 'Get Kip free';

// The brand promise, kept charter-safe (wellness, never "diagnose").
export const TAGLINE = 'Understand your snoring, privately.';

// Bump this whenever competitor prices are re-checked on the live App Store.
export const PRICES_VERIFIED = 'May 2026';

// Privacy + support live on a SEPARATE static site (see kipsnoretracker-site/README).
// These are the App Store-facing URLs and must stay live — do NOT derive from
// SITE_URL. CONFIRM these match the URLs registered on your App Store listing.
export const PRIVACY_URL = 'https://kipsnoretracker.netlify.app/privacy.html';
export const SUPPORT_URL = 'https://kipsnoretracker.netlify.app/support.html';
