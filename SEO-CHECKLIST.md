# SEO Checklist — Gold Sheen Sapphire Guide

What's already built in, and what **you** need to fill in before publishing each
page. The goal is topical authority: become the source Google trusts for
anything "gold sheen sapphire".

---

## ✅ Already handled by the build (you don't need to do these)

- **Unique `<title>` + meta description** per page (from frontmatter).
- **Canonical tag** on every page (from `SITE.url` + the page path).
- **Open Graph + Twitter Card** tags on every page.
- **JSON-LD structured data:**
  - `Article` on every pillar & article
  - `FAQPage` on `/faq` and on any article with a `faq:` block
  - `BreadcrumbList` on every page with breadcrumbs
  - `Organization` + `WebSite` site-wide
  - `DefinedTermSet` on the glossary, `ImageGallery` on the gallery
- **XML sitemap** (`/sitemap-index.xml`) + **`robots.txt`**, auto-generated.
- **Clean, crawlable URLs** (`/guide/slug/`, no query strings or IDs).
- **Semantic HTML** — exactly one `<h1>` per page; `##`/`###` become `<h2>/<h3>`.
- **Breadcrumbs** — visible *and* schema, in sync.
- **Fast images** — WebP/AVIF + responsive `srcset`, lazy-loaded below the fold.
- **Sticky table of contents** on long-form pages.
- **Author/reviewer byline** block for E-E-A-T.
- **RSS feed** at `/rss.xml`.
- **Internal linking** scaffolding — each article's "related reading" is generated
  from the pillar graph, and pillars link to their spokes.
- **Article-form editorial components** — key-takeaways box, numbered figures,
  pull-quotes, callouts, references, footnotes and data tables (see README).

---

## ⚙️ One-time site setup (do these once)

- [ ] **Set the real domain** in `src/consts.ts` → `SITE.url`.
- [ ] **Replace author & reviewer bios** in `src/data/authors.ts` with **real
      people and verifiable credentials**. The reviewer currently shows a
      placeholder ("Reviewer Name / Add real qualification"). Fake expertise
      hurts E-E-A-T — use a real gemologist or remove the `reviewer:` line.
- [ ] **Add real author avatars** in `public/authors/` (square, ≥ 160px).
- [ ] **Replace the default OG share image** `public/og/gold-sheen-sapphire-guide-cover.jpg`
      with a purpose-made **1200×630** image.
- [ ] **Confirm social/contact details** in `src/consts.ts` (`SITE.social`).
- [ ] After deploy, **submit `/sitemap-index.xml` to Google Search Console** and
      Bing Webmaster Tools, and verify ownership.
- [ ] Set up analytics if wanted (a privacy-friendly option keeps JS/CWV lean).

---

## 📝 Per-page checklist (before publishing any article or pillar)

**Frontmatter**
- [ ] `title` — includes the target keyword, reads naturally, ≤ ~60 chars of
      *unique* part (a "— Gold Sheen Sapphire Guide" suffix is added automatically).
- [ ] `description` — **150–160 characters**, includes the keyword, is a genuine
      summary (this is your search snippet).
- [ ] `type` correct (`pillar` vs `article`); articles have the right `pillar:`.
- [ ] `publishDate` set; `updatedDate` bumped whenever you meaningfully edit.
- [ ] `keywords` — a few real target terms (helps you stay focused; low ranking weight).
- [ ] `author` (and `reviewer` where you have one) point to real `authors.ts` ids.

**Content & structure**
- [ ] Exactly **one H1** (comes from `title` — don't add another `#` in the body).
- [ ] Logical heading order (`##` then `###`, no skipping levels).
- [ ] **Pillars: 1,500+ words**, genuinely comprehensive. Replace the scaffold
      placeholders (`{/* Paste… */}`) with your real content.
- [ ] **2–3+ internal links** to related articles/pillars, with descriptive anchor
      text (not "click here").
- [ ] A closing "Where to go next" / related section (the auto "related reading"
      block also appears at the end).
- [ ] Add an inline `faq:` block for question-style long-tail queries where useful
      (don't duplicate the same Q&A that's already on `/faq`).
- [ ] Make it **article-form and dense** (like the reference sites): open with a
      `<KeyTakeaways>` box, use numbered `<Figure>`s with real captions/credits,
      add data tables where you have data, use `<Callout>`s for tips/warnings, and
      close with a `<References>` list. Depth + structure is what earns authority.

**Images**
- [ ] Every image has **specific, keyword-relevant alt text** describing the stone
      (cut, colour, sheen) — never empty, never "image1".
- [ ] Filenames are descriptive (`gold-sheen-sapphire-blue-cabochon.jpg`).
- [ ] A `heroImage` is set where you have one (improves the article's look + OG).

**Final pass**
- [ ] Run `npm run build` — it type-checks and will fail on a broken link target,
      bad frontmatter, or missing image.
- [ ] Preview with `npm run preview`; click the breadcrumbs, TOC, and internal
      links.
- [ ] Validate structured data with Google's
      [Rich Results Test](https://search.google.com/test/rich-results) on the
      live URL after deploy.

---

## 🎯 Keyword map (starting point — refine with your own research)

Hub-and-spoke: each **pillar** targets a broad head term; **spoke articles**
target long-tail variations and link back to the pillar.

| Pillar (hub) | Primary target | Example spoke articles (long-tail) |
| --- | --- | --- |
| What Is Gold Sheen Sapphire | "gold sheen sapphire", "what is gold sheen sapphire" | how gold sheen sapphire forms · is gold sheen sapphire natural or treated · gold sheen sapphire meaning |
| Vs Other Sapphires | "gold sheen sapphire vs …" | ✅ vs star sapphire · vs blue sapphire · vs tiger's eye · vs cat's-eye |
| Buying Guide | "gold sheen sapphire buying / quality" | ✅ how to spot a fake · ✅ price guide · gold sheen sapphire grading · certification explained |
| Care & Maintenance | "gold sheen sapphire care" | ✅ cleaning jewellery · can you wear it every day · storage tips |
| History & Significance | "gold sheen sapphire history / Kenya" | discovery story · why the deposit is depleted · gold sheen sapphire meaning/symbolism |
| Jewellery & Settings | "gold sheen sapphire jewelry / ring" | best settings · gold sheen sapphire engagement ring · choosing the metal · pendants |

(✅ = a starter article already scaffolded in this build.)

**Next content to add for authority:** one or two new spoke articles per pillar,
each 800–1,500 words, each linking up to its pillar and across to 2–3 siblings.
Prioritise questions people actually search (use Search Console's "queries"
report once live, plus "People also ask").
