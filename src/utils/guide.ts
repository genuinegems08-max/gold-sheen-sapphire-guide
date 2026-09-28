import type { CollectionEntry } from 'astro:content';
import { PILLARS } from '../consts';
import type { Crumb } from '../components/Breadcrumbs.astro';

type Entry = CollectionEntry<'guide'>;

export const pillarLabel = (slug?: string): string =>
  PILLARS.find((p) => p.slug === slug)?.label ?? 'The Guide';

export const pillarShort = (slug?: string): string =>
  PILLARS.find((p) => p.slug === slug)?.short ?? 'Guide';

export const hrefFor = (entry: Entry): string => `/guide/${entry.id}/`;

/** Kicker/eyebrow shown above the H1. */
export function kickerFor(entry: Entry): string {
  if (entry.data.type === 'pillar') return 'Pillar Guide';
  return pillarLabel(entry.data.pillar);
}

/** Visible + schema breadcrumb trail for a guide entry. */
export function breadcrumbsFor(entry: Entry): Crumb[] {
  const crumbs: Crumb[] = [
    { label: 'Home', href: '/' },
    { label: 'The Guide', href: '/guide/' },
  ];
  if (entry.data.type === 'article' && entry.data.pillar) {
    crumbs.push({
      label: pillarShort(entry.data.pillar),
      href: `/guide/${entry.data.pillar}/`,
    });
  }
  crumbs.push({ label: entry.data.title, href: hrefFor(entry) });
  return crumbs;
}

export interface RelatedItem {
  href: string;
  title: string;
  kicker?: string;
  description?: string;
}

/**
 * Build the "continue reading" list for an entry.
 *  - Pillars surface their spoke articles.
 *  - Articles surface their pillar + sibling articles.
 *  - Explicit `related:` slugs always come first.
 * Guarantees at least 2 links wherever the content graph allows.
 */
export function relatedFor(entry: Entry, all: Entry[]): RelatedItem[] {
  const byId = new Map(all.map((e) => [e.id, e]));
  const picked = new Map<string, Entry>();

  const add = (e?: Entry) => {
    if (e && e.id !== entry.id && !picked.has(e.id)) picked.set(e.id, e);
  };

  // 1. Explicit related slugs (author-curated).
  entry.data.related.forEach((slug) => add(byId.get(slug)));

  if (entry.data.type === 'pillar') {
    // 2a. Spoke articles under this pillar.
    all
      .filter((e) => e.data.type === 'article' && e.data.pillar === entry.id)
      .sort((a, b) => a.data.order - b.data.order)
      .forEach(add);
  } else {
    // 2b. The parent pillar…
    add(byId.get(entry.data.pillar ?? ''));
    // …then sibling articles in the same pillar.
    all
      .filter(
        (e) =>
          e.data.type === 'article' &&
          e.data.pillar === entry.data.pillar &&
          e.id !== entry.id
      )
      .sort((a, b) => a.data.order - b.data.order)
      .forEach(add);
  }

  // 3. Backfill with other pillars so there are always ≥ 2 links.
  if (picked.size < 2) {
    all
      .filter((e) => e.data.type === 'pillar')
      .forEach(add);
  }

  return Array.from(picked.values())
    .slice(0, 4)
    .map((e) => ({
      href: hrefFor(e),
      title: e.data.title,
      kicker: e.data.type === 'pillar' ? 'Pillar' : pillarShort(e.data.pillar),
      description: e.data.description,
    }));
}
