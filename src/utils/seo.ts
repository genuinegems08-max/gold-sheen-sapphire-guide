import { SITE } from '../consts';

/** Absolute URL for a site-relative path, using SITE.url as the base. */
export function absoluteUrl(path: string): string {
  const base = SITE.url.replace(/\/$/, '');
  if (!path || path === '/') return base + '/';
  return base + '/' + path.replace(/^\//, '');
}

/** Canonical URL for the current page from Astro.url (path only, host-agnostic). */
export function canonicalFrom(url: URL): string {
  return absoluteUrl(url.pathname);
}

/** Build the <title>: "Page — Gold Sheen Sapphire Guide" (home uses the raw title). */
export function pageTitle(title: string | undefined, isHome = false): string {
  if (!title) return SITE.title;
  if (isHome) return title;
  return SITE.titleTemplate.replace('%s', title);
}

/** Long, human date: "31 July 2026". */
export function formatDate(d: Date): string {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(d);
}

/** ISO date (YYYY-MM-DD) for <time datetime> and schema. */
export function isoDate(d: Date): string {
  return d.toISOString().split('T')[0];
}

/** Rough reading time in minutes from raw markdown/body text. */
export function readingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 210));
}
