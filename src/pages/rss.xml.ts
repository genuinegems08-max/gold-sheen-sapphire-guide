import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../consts';

export async function GET(context: APIContext) {
  const entries = await getCollection('guide', ({ data }) => !data.draft);
  const items = entries
    .sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime())
    .map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.publishDate,
      link: `/guide/${entry.id}/`,
    }));

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items,
    customData: `<language>${SITE.lang}</language>`,
  });
}
