# Kip marketing site

Astro static site — landing page, SnoreLab comparison, and the snoring guides
blog. Optimised for SEO ("free SnoreLab alternative") and App Store conversion.

## Commands

```sh
npm run dev -w @kip/snoring-site       # local dev server
npm run build -w @kip/snoring-site     # static build → dist/
npm run preview -w @kip/snoring-site   # serve the build locally
```

## Structure

- `src/pages/` — routes (`index`, `snorelab-alternative`, `about`, `blog/`)
- `src/content/blog/` — Markdown posts; **add a `.md` file to publish**
- `src/components/` — Nav, Footer, Quiz, Faq, ComparisonTable, PostCta
- `src/layouts/Base.astro` — `<head>`, meta/OG/JSON-LD, analytics, scroll reveal
- `src/consts.ts` — `SITE_URL`, App Store URL, competitor-price "verified" date
- `src/styles/global.css` — design tokens + component styles

## Notes

- Copy keeps Kip a **wellness / screening tool** — never "diagnose" or medical claims.
- Competitor facts verified May 2026 — re-check live App Store prices before publishing.
- **Before deploy:** confirm `SITE_URL` (canonical domain) and the privacy/support
  URLs in `src/consts.ts`, and fix the Netlify dashboard publish path to `dist`.
- Analytics are privacy-light `dataLayer` events only (page_view, cta_click, quiz_complete).
