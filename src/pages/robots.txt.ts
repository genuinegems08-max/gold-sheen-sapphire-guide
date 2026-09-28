import type { APIRoute } from 'astro';
import { SITE } from '../consts';

// Dynamic robots.txt so the Sitemap line always matches SITE.url.
export const GET: APIRoute = () => {
  const base = SITE.url.replace(/\/$/, '');
  const body = `User-agent: *
Allow: /

Sitemap: ${base}/sitemap-index.xml
`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
