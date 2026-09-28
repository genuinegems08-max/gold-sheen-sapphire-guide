# The Gold Sheen Sapphire Guide

A content-first, SEO-focused editorial hub about **Gold Sheen Sapphire**, built
with [Astro](https://astro.build). It is designed for topical authority:
comprehensive pillar pages, a hub-and-spoke article system, and strong technical
SEO defaults (structured data, sitemap, clean URLs, fast images).

It is a sibling to the boutique site **goldsheensapphire.net** and shares its
brand palette and typography, presented as a warm "gemological journal".

---

## Why Astro (not Next.js)

For a pure content/SEO site, Astro is the better fit:

- **Zero JavaScript by default** — pages ship as static HTML/CSS, so Core Web
  Vitals and Lighthouse scores start high. The only JS on the site is a few tiny
  progressive-enhancement scripts (mobile menu, TOC highlight, lightbox).
- **First-class MDX content collections** with typed frontmatter — exactly the
  "drop in a Markdown file and it appears" workflow requested.
- **Built-in image optimisation** (`astro:assets` + Sharp) → automatic WebP/AVIF
  and responsive `srcset`.
- **Built-in sitemap** and static output that deploys anywhere.

---

## Requirements

- **Node.js 18.20+, 20.3+ or 22+** (this project was built and tested on Node 20+).
  Check with `node --version`.
- npm (bundled with Node).

---

## Run it locally

**Easiest:** double-click **`START-WEBSITE.cmd`** in this folder. It installs
dependencies the first time, starts the local server, and opens
`http://localhost:4321/` in your browser. **Keep that window open** while you
browse; closing it stops the site.

Or from a terminal:

```bash
npm install      # first time only
npm run dev      # start the dev server → http://localhost:4321
```

> ⚠️ **Always view the site at `http://localhost:4321/`.** Do **not** double-click
> the `.html` files in `dist/` to open them — that loads them as `file:///…`,
> which breaks every link and disables the menu, gallery and other scripts
> (the page still *looks* styled, which is misleading). Those files only work
> when served by a web server (the dev server above, or a real host once
> deployed).

Other scripts:

```bash
npm run build    # type-check (astro check) + production build → dist/
npm run build:fast   # production build without the type-check (faster)
npm run preview  # serve the built dist/ locally to preview the real output
```

---

## Project structure

```
src/
  consts.ts               ← SITE settings: DOMAIN, title, nav, the 6 pillars
  content.config.ts       ← frontmatter schema for the `guide` collection
  content/guide/          ← ALL articles & pillars live here (one .mdx per page)
  data/
    authors.ts            ← author/reviewer bios (E-E-A-T) — EDIT THESE
    faq.ts                ← site-wide FAQ (renders /faq with FAQPage schema)
    glossary.ts           ← glossary terms (renders /glossary)
    gallery.ts            ← gallery images + alt text
  assets/images/          ← source images (optimised at build time)
  components/             ← Header, Footer, Breadcrumbs, TOC, byline, cards…
  layouts/               ← BaseLayout (shell) + ArticleLayout (long-form)
  pages/                 ← routes (index, guide/, about, faq, glossary, gallery…)
  styles/global.css      ← the design system (tokens, prose styles)
public/                  ← favicon, OG image, author avatars (served as-is)
```

Everything about SEO on a page is driven from that page's frontmatter or from
`consts.ts` — you should never need to touch the layout/component code to publish
content.

---

## Add a new article (the whole workflow)

1. **Create a file** in `src/content/guide/`, named with a clean, keyword-rich
   slug — the filename **is** the URL:
   `src/content/guide/gold-sheen-sapphire-vs-tigers-eye.mdx`
   → `https://…/guide/gold-sheen-sapphire-vs-tigers-eye/`

2. **Add frontmatter** (copy an existing article and edit):

   ```yaml
   ---
   title: "Gold Sheen Sapphire vs Tiger's Eye: Key Differences"
   description: "A 150–160 character meta description with the target keyword."
   type: article                       # or "pillar"
   pillar: gold-sheen-sapphire-vs-other-sapphires   # the parent pillar's slug
   order: 3                            # ordering within listings
   publishDate: 2026-08-01
   updatedDate: 2026-08-01             # optional; shown as "Updated …"
   author: editorial-team             # id from src/data/authors.ts
   reviewer: reviewer-gemologist      # optional id from src/data/authors.ts
   heroImage: ../../assets/images/your-image.jpg   # optional
   heroImageAlt: "Descriptive, keyword-relevant alt text"
   keywords: ["gold sheen sapphire vs tigers eye"]
   featured: false                    # true → surfaces on the homepage
   draft: false                       # true → excluded from build/sitemap
   related: ["gold-sheen-sapphire-vs-star-sapphire"]  # optional curated links
   faq:                               # optional — renders + FAQPage schema
     - question: "Is tiger's eye a sapphire?"
       answer: "No. Tiger's eye is a quartz…"
   ---
   ```

3. **Write the body** in Markdown/MDX below the frontmatter. Use `##` and `###`
   headings — they build the sticky table of contents and the heading anchors
   automatically. Link to **2–3 related articles/pillars** inline, e.g.
   `[buying guide](/guide/gold-sheen-sapphire-buying-guide/)`.
   For a callout box, use:
   ```html
   <aside class="note"><p><strong>Note:</strong> …</p></aside>
   ```
   (Use `{/* comments */}` in MDX, **not** `<!-- HTML comments -->`.)

4. **Save.** The dev server hot-reloads. The page, its breadcrumbs, its schema,
   its place in the sitemap, its "related reading", and the RSS feed all update
   automatically. No other files to edit.

### Add a pillar

Same as above but `type: pillar` and no `pillar:` field. Then register it in the
`PILLARS` array in `src/consts.ts` (slug, label, short, blurb) so it appears in
the navigation, the homepage grid, and the /guide index.

---

## Editorial components (dense, article-form pages)

These reference sites (ruby-sapphire.com, palagems.com, Sotheby's guides) are
dense and *article-form*. To match that, a set of components is available inside
**every** article's MDX **without importing them** — just drop the tag in:

```mdx
<KeyTakeaways>
- A short bullet list summarising the article (place it right after the intro).
</KeyTakeaways>

<Figure
  src={someImportedImage}          {/* import at the top of the MDX file */}
  alt="Descriptive alt text"
  caption="What the reader is seeing. Figures auto-number: Figure 1, 2, 3…"
  credit="Photo: …"
/>

<PullQuote cite="Attribution (optional)">A display quotation.</PullQuote>

<Callout type="tip" title="Tip">   {/* type: note | tip | warning | key */}
Body text of the callout.
</Callout>

<References>
1. Author, A. (Year). *Title*. Publisher.
2. …
</References>
```

Also available out of the box:
- **Data tables** — write normal Markdown tables; they're styled and scroll on
  mobile.
- **Footnotes** — GFM syntax: `a claim[^1]` … then `[^1]: the note.` at the
  bottom. They render as a linked endnotes section.

For figure images, `import myPhoto from '../../assets/images/my-photo.jpg'` at the
top of the MDX file (just under the frontmatter) so they're optimised; or pass a
string path to a file in `/public` for a quick, unoptimised image.

---

## Add images

1. Drop the file into `src/assets/images/` with a **descriptive, keyword-relevant
   filename** (e.g. `gold-sheen-sapphire-oval-cabochon.jpg`), not `IMG_1234.jpg`.
2. Reference it:
   - As an article hero → `heroImage:` in frontmatter (path relative to the file).
   - In the gallery → import it in `src/data/gallery.ts` and add an entry **with
     real alt text**.
   - Inside MDX body → use standard Markdown `![alt text](../../assets/images/…)`.
3. Astro converts it to WebP/AVIF with responsive `srcset` at build — you don't
   optimise anything by hand.

> Large source photos are fine; they're compressed at build. The originals in
> `content/`, `Gold Sheen Sapphire/` and `ig2/` are raw material and are
> **git-ignored** (not published).

---

## Change the domain

The production URL lives in **one place**: `SITE.url` in `src/consts.ts`.
Change it there and the canonical tags, sitemap, `robots.txt`, RSS and all
JSON-LD update. (It's currently `https://guide.goldsheensapphire.net`.)

To host at a subfolder like `goldsheensapphire.net/guide` instead, set
`SITE.url` to the full path and add `base: '/guide'` to `astro.config.mjs`.

---

## Deploy

The site is fully static (`output: "static"`) — the `dist/` folder is plain
files you can host anywhere.

### Vercel
1. Push this folder to a Git repo and "Import Project" in Vercel (it
   auto-detects Astro), **or** run `npx vercel` from this folder.
2. Framework preset: **Astro**. Build command `npm run build`, output `dist`.
3. Set your domain to match `SITE.url`.

### Netlify
1. "Add new site" → connect the repo, **or** run `npx netlify deploy --prod`.
2. Build command `npm run build`, publish directory `dist`.

### Redeploying after edits
Commit your new/edited `.mdx` files and push — Vercel/Netlify rebuild
automatically. For manual hosts, run `npm run build` and upload `dist/`.

---

## Before you publish

See **`SEO-CHECKLIST.md`** for the per-page checklist (titles, descriptions,
alt text, internal links, schema) and the site-wide setup steps (real OG image,
real author/reviewer bios, submitting the sitemap to Search Console).
