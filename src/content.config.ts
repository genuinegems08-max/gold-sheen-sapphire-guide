import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * ────────────────────────────────────────────────────────────────────────────
 *  CONTENT MODEL
 * ────────────────────────────────────────────────────────────────────────────
 *  One collection — `guide` — holds every long-form page. Each MDX file is
 *  either a PILLAR (a comprehensive hub) or an ARTICLE (a spoke that links back
 *  to its pillar). Drop a new .mdx file into src/content/guide/ with the
 *  frontmatter below and it appears automatically at /guide/<slug>/.
 *
 *  See SEO-CHECKLIST.md for what every field is for and what to fill in.
 * ────────────────────────────────────────────────────────────────────────────
 */

const faqItem = z.object({
  question: z.string(),
  answer: z.string(),
});

const guide = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/guide' }),
  schema: ({ image }) =>
    z.object({
      // ── Required, drives SEO ────────────────────────────────────────────
      title: z.string(), // becomes the <h1> and the base of the <title>
      description: z.string(), // the meta description (150–160 chars ideal)

      // ── Content role ────────────────────────────────────────────────────
      type: z.enum(['pillar', 'article']).default('article'),
      // For articles: the slug of the pillar they belong to (hub-and-spoke).
      pillar: z.string().optional(),
      order: z.number().default(99), // ordering within a listing

      // ── Dates (ISO strings in frontmatter, e.g. 2026-07-31) ─────────────
      publishDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),

      // ── E-E-A-T byline (ids into src/data/authors.ts) ───────────────────
      author: z.string().default('editorial-team'),
      reviewer: z.string().optional(),

      // ── Media ───────────────────────────────────────────────────────────
      heroImage: image().optional(),
      heroImageAlt: z.string().optional(),

      // ── SEO helpers ─────────────────────────────────────────────────────
      keywords: z.array(z.string()).default([]),
      canonical: z.string().url().optional(), // override only if syndicating
      ogImage: z.string().optional(), // path under /public, overrides default

      // ── Relationships & flags ───────────────────────────────────────────
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      related: z.array(z.string()).default([]), // slugs of related guide entries

      // ── Optional inline FAQ (rendered + FAQPage schema) ─────────────────
      faq: z.array(faqItem).default([]),
    }),
});

export const collections = { guide };
