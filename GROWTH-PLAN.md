# Gold Sheen Sapphire Guide — Foolproof Growth Plan

**Goal:** become the source Google (and people) turn to for anything "gold sheen
sapphire", and drive the maximum relevant audience to the site.

**North-star metric:** monthly organic visitors from search.
**Supporting metrics:** pages indexed, keywords ranked (and average position),
impressions/clicks (Search Console), referral traffic from social, time on page.

This plan has three parts: **(A) launch the foundation, (B) reach as many people
as possible across channels, (C) measure it** — culminating in the monthly report.

---

## A. Launch foundation (do these first — week 1)

These are the make-or-break steps. Without them, nothing gets found.

1. **Connect the real domain** `guide.goldsheensapphire.net` (branded domain beats
   a netlify.app URL and shares authority with the main site). *[Claude can help wire this.]*
2. **Turn on analytics.** A GA4 slot is already built in — add your Measurement ID
   to `src/consts.ts` → `SITE.analytics.ga4` and push. (Steps below.)
3. **Google Search Console (GSC):** add the property, verify, and **submit
   `/sitemap-index.xml`.** This is what triggers indexing. Also add **Bing Webmaster Tools**.
4. **Request indexing** for the homepage and all 6 pillars in GSC (URL Inspection → Request indexing).
5. **Confirm the trust details** are real: author bio, reviewer (or leave removed),
   a purpose-made 1200×630 OG image, and the "link needed" press URLs on `/resources/`.

> Success check (end of week 1): site verified in GSC, sitemap submitted, GA4
> recording sessions, pages starting to appear under `site:guide.goldsheensapphire.net`.

---

## B. Reach the maximum audience (weeks 1–4, then ongoing)

Search is the biggest channel, but we stack every channel that fits a rare visual gem.

### B1. Search / SEO (the core)
- **Deepen topical coverage.** Keep publishing spoke articles from the keyword map
  (see `SEO-CHECKLIST.md`). Breadth is how you dominate a niche. Target: **2–4 new
  articles/week** for the first month.
- **Answer real questions.** Prioritise "People also ask" and GSC "queries" once data
  arrives — write a page for each recurring question.
- **Internal linking:** every new article links up to its pillar + across to 2–3 siblings (already the pattern).
- **Freshness:** bump `updatedDate` whenever you revise a page.

### B2. Backlinks (the #1 off-page factor)
- **From your own properties first:** link the guide prominently from
  `goldsheensapphire.net` (header/footer "Learn"), Instagram bio + story highlights.
- **Gemmology / trade outreach:** the real citations make the site *linkable* — email
  the authors/orgs already referenced (Gem-A, ICA/InColor, GIT) offering the guide as a
  resource; ask relevant gem blogs/forums to link.
- **Directories & profiles:** Google Business Profile, gem/jewellery directories, the
  brand's other social profiles — all with a link.
- **Digital PR angle:** "a sapphire from a single, now-depleted deposit" is a genuine
  story hook — pitch it to gem/jewellery publications.

### B3. Social & visual discovery (huge for a photogenic gem)
- **Pinterest** (very high intent for gems/jewellery): pin every gallery plate + article
  hero, each linking back. This alone can drive sustained referral + search traffic.
- **Instagram** (`@gold_sheen_sapphire`): post stone photos → link the matching article
  in bio/stories; use "link in bio" to the guide.
- **YouTube Shorts / TikTok / Reels:** 15–30s clips showing the sheen *moving* (the one
  thing photos can't) → description links the guide. Video also ranks in Google.
- **Reddit / forums** (r/gemology, r/Sapphire, gem forums): answer questions genuinely,
  link the relevant article where it truly helps (no spam).
- **Quora:** answer "what is gold sheen sapphire / is it real / how much is it worth" with
  a short expert answer + link.

### B4. Owned channels
- **Email/enquiry capture** (optional later): a soft "get the buyer's checklist" opt-in.
- **RSS** (`/rss.xml`) is live for anyone who subscribes/aggregates.

---

## C. Measure everything (so the monthly report is real)

Tools to have live before the clock starts:
- **Google Search Console** — impressions, clicks, queries, positions, indexed pages.
- **Google Analytics 4** — users, sessions, sources, top pages, engagement.
- **Bing Webmaster Tools** — secondary search engine.
- (Optional) **Ahrefs Webmaster Tools** (free) — backlinks + keyword tracking.

### The monthly report (auto-scheduled)
A scheduled agent will compile a report ~every month covering:
1. **Indexation** — how many pages Google has indexed (`site:` check) vs. 22 target.
2. **Visibility** — which target keywords the site now appears for, and rough positions.
3. **Traffic** — users/sessions and top landing pages (from GA4 numbers you paste in).
4. **Search performance** — impressions, clicks, CTR, avg position (from GSC).
5. **Backlinks** — new referring domains.
6. **Content shipped** — new articles this period.
7. **Wins, problems, and the next 30-day action list.**

Because GA4/GSC data lives in your Google account (the agent can't log in there), the
report auto-gathers what's public (indexation, live ranking checks, site health) and
prompts you to paste the GA4 + GSC figures, then assembles the full report.

---

## 30 / 60 / 90-day targets (realistic)

| Timeframe | Realistic target |
|---|---|
| **Day 30** | Domain live + verified; all 22 pages indexed; GA4/GSC recording; ~18–22 articles published; first impressions in GSC; Pinterest/IG linking. |
| **Day 60** | Ranking (any position) for a batch of long-tail terms; first page-1 long-tails; steady (small) organic clicks; 3–5 referring domains. |
| **Day 90** | Page-1 for several "gold sheen sapphire …" long-tails; growing branded + non-branded clicks; compounding as content + links accumulate. |

**Honest note:** SEO compounds over months — expect a slow first 4–8 weeks (indexing),
then acceleration. The foundation here is strong; consistency (content + links) wins it.

---

## Enabling analytics (GA4) — 2 minutes
1. Create a free GA4 property at **analytics.google.com** → copy the **Measurement ID**
   (looks like `G-XXXXXXXXXX`).
2. Open `src/consts.ts`, set `SITE.analytics.ga4: 'G-XXXXXXXXXX'`.
3. `git add -A && git commit -m "Enable GA4" && git push` — Netlify redeploys; tracking is live.
   (Leave it blank and no analytics script loads — zero performance cost.)
