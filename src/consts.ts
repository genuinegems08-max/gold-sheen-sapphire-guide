/**
 * ────────────────────────────────────────────────────────────────────────────
 *  SITE-WIDE CONSTANTS  —  single source of truth
 * ────────────────────────────────────────────────────────────────────────────
 *  To move the site to a different domain (or a /guide subfolder), change
 *  SITE.url below. It is the ONLY place the production URL is declared; the
 *  Astro config, sitemap, robots.txt, canonical tags, and all JSON-LD read
 *  from here.
 * ────────────────────────────────────────────────────────────────────────────
 */

export const SITE = {
  /** ← CHANGE DOMAIN HERE. No trailing slash. */
  url: 'https://guide.goldsheensapphire.net',

  /** The sibling boutique/showcase site (used only for the "The Collection" outbound link). */
  mainSite: 'https://goldsheensapphire.net',

  title: 'The Gold Sheen Sapphire Guide',
  titleTemplate: '%s — Gold Sheen Sapphire Guide',
  shortName: 'GSS Guide',
  brand: 'Gold Sheen Sapphire',
  tagline: 'The definitive gemological record of a finite Kenyan deposit',
  description:
    'The definitive editorial guide to Gold Sheen Sapphire — a rare chatoyant sapphire from a single, now-depleted Kenyan deposit. Formation, grading, buying, care, history and jewellery, documented in depth.',

  lang: 'en',
  locale: 'en_US',

  /** Default social-share image (relative to site root). */
  ogImage: '/og/gold-sheen-sapphire-guide-cover.jpg',

  /**
   * Analytics. Paste your Google Analytics 4 Measurement ID (e.g. "G-XXXXXXXXXX")
   * to switch tracking on site-wide. Leave "" and no analytics script loads at all.
   */
  analytics: {
    ga4: '',
  },

  /** Organisation contact / social — reused across schema + footer. */
  social: {
    instagram: 'https://instagram.com/gold_sheen_sapphire',
    instagramHandle: '@gold_sheen_sapphire',
    email: 'genuinegems08@gmail.com',
    whatsapp: 'https://wa.me/66897881640',
    whatsappLabel: '+66 89 788 1640',
  },
} as const;

/** Primary navigation — pillars first, then reference pages. */
export const NAV: { label: string; href: string }[] = [
  { label: 'Home', href: '/' },
  { label: 'The Guide', href: '/guide/' },
  { label: 'Resources', href: '/resources/' },
  { label: 'Gallery', href: '/gallery/' },
  { label: 'Glossary', href: '/glossary/' },
  { label: 'FAQ', href: '/faq/' },
  { label: 'About', href: '/about/' },
];

/**
 * The six content pillars (hub pages). `slug` matches the MDX file in
 * src/content/guide/. `order` controls listing order across the site.
 */
export const PILLARS: {
  slug: string;
  label: string;
  short: string;
  blurb: string;
}[] = [
  {
    slug: 'what-is-gold-sheen-sapphire',
    label: 'What Is Gold Sheen Sapphire',
    short: 'The Stone',
    blurb: 'Origin, formation and mineralogy — how the sheen is born inside the crystal.',
  },
  {
    slug: 'gold-sheen-sapphire-vs-other-sapphires',
    label: 'Gold Sheen vs Other Sapphires',
    short: 'Comparisons',
    blurb: 'How it differs from star, colour-change, and ordinary blue sapphire — and other chatoyant gems.',
  },
  {
    slug: 'gold-sheen-sapphire-buying-guide',
    label: 'Buying Guide',
    short: 'Buying',
    blurb: 'Grading the sheen, judging quality, understanding price, and spotting imitations.',
  },
  {
    slug: 'gold-sheen-sapphire-care-and-maintenance',
    label: 'Care & Maintenance',
    short: 'Care',
    blurb: 'Cleaning, storage, and everyday wear for a durable but light-dependent stone.',
  },
  {
    slug: 'gold-sheen-sapphire-history-and-significance',
    label: 'History & Significance',
    short: 'History',
    blurb: 'Discovery near the Somali border, the depletion of the deposit, and its place in the trade.',
  },
  {
    slug: 'gold-sheen-sapphire-jewelry-and-settings',
    label: 'Jewellery & Settings',
    short: 'Jewellery',
    blurb: 'Cutting for chatoyancy, choosing settings, and designing for a stone that moves with light.',
  },
];
