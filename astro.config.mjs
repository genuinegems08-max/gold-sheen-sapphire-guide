// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/consts.ts';

// https://astro.build/config
export default defineConfig({
  // Production URL — single source of truth lives in src/consts.ts (SITE.url).
  site: SITE.url,
  trailingSlash: 'always',

  integrations: [
    mdx(),
    sitemap({
      // Keep utility/non-indexable routes out of the sitemap.
      filter: (page) => !page.includes('/404'),
    }),
  ],

  // Static output — deploys to Vercel/Netlify/any static host with zero config.
  output: 'static',

  build: {
    // Emit clean, crawlable directory-style URLs (…/guide/slug/index.html).
    format: 'directory',
    inlineStylesheets: 'auto',
  },

  image: {
    // Local Sharp service handles WebP/AVIF conversion + responsive srcset.
    responsiveStyles: true,
  },

  markdown: {
    shikiConfig: {
      theme: 'css-variables',
      wrap: true,
    },
  },

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
