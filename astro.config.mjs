import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import { SITE_URL } from './src/consts.ts';

// Static, minimal-JS marketing site. Lightweight by design — fast Core Web
// Vitals are an SEO asset for a low-authority domain (see SEO research notes).
export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
