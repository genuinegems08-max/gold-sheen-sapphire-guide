/**
 * ────────────────────────────────────────────────────────────────────────────
 *  RESOURCE HUB DATA  —  the curated, EXTERNAL directory
 * ────────────────────────────────────────────────────────────────────────────
 *  Rendered on /resources/ beneath the auto-generated index of this site's own
 *  articles. This is where you gather "all possible Gold Sheen Sapphire info"
 *  that lives elsewhere: peer-reviewed papers, laboratory sources, press, and
 *  official brand channels.
 *
 *  To add an entry: drop a new object into the relevant group's `items` array.
 *
 *  ⚠️  Only add a `url` you have verified. Leave it off for a citation you
 *      haven't linked yet — it renders as a reference with a "link needed" tag,
 *      so you can see what still needs a URL. Do NOT re-host copyrighted PDFs
 *      here; link to the official/publisher source instead.
 * ────────────────────────────────────────────────────────────────────────────
 */

export type ResourceType =
  | 'paper' // peer-reviewed / journal article
  | 'lab-note' // laboratory note / report
  | 'lab' // a gemmological laboratory (verification)
  | 'press' // trade / consumer media coverage
  | 'channel'; // official brand channel

export interface ResourceItem {
  title: string;
  source?: string; // publication / organisation
  year?: string;
  type: ResourceType;
  url?: string; // verified external URL only
  note?: string; // one-line description
}

export interface ResourceGroup {
  id: string;
  heading: string;
  blurb: string;
  items: ResourceItem[];
}

export const TYPE_LABEL: Record<ResourceType, string> = {
  paper: 'Paper',
  'lab-note': 'Lab note',
  lab: 'Laboratory',
  press: 'Press',
  channel: 'Official',
};

export const RESOURCE_GROUPS: ResourceGroup[] = [
  {
    id: 'literature',
    heading: 'Scientific & gemmological literature',
    blurb:
      'The peer-reviewed and laboratory record. These are the primary sources the guide is built on — the most authoritative reading on Gold Sheen Sapphire.',
    items: [
      {
        title: 'From exsolution to "gold sheen": A new variety of corundum',
        source: 'The Journal of Gemmology (Gem-A), 34(8), 678–691',
        year: '2015',
        type: 'paper',
        url: 'https://doi.org/10.15506/JoG.2015.34.8.678',
        note: 'Bui, T.N.-H. et al. The defining study of the material and the origin of its sheen.',
      },
      {
        title: 'Update on spectroscopy of "gold sheen" sapphires',
        source: 'Gems & Gemology (GIA), 52(4), Winter — Lab Notes',
        year: '2016',
        type: 'lab-note',
        note: 'Eaton-Magaña, S. GIA examined 14 stones (1.06–97.69 ct); confirmed the hematite–ilmenite inclusions.',
      },
      {
        title: 'Golden sheen and non-sheen sapphires from Kenya',
        source: 'Gem and Jewelry Institute of Thailand (GIT), pp. 282–288',
        type: 'paper',
        note: 'Narudeesombat, N. et al. Reported indicators consistent with untreated corundum.',
      },
      {
        title: 'Gold sheen sapphire',
        source: 'Gems & Jewellery (Gem-A), 27(4)',
        year: '2018',
        type: 'paper',
        note: 'Bui, T.N.-H. A trade-facing overview.',
      },
    ],
  },
  {
    id: 'labs',
    heading: 'Laboratories & certification',
    blurb:
      'Where to have a stone independently identified and confirmed natural/unheated. Ask for a report from a recognised laboratory before any significant purchase.',
    items: [
      {
        title: 'GIA — Gemological Institute of America',
        source: 'gia.edu',
        type: 'lab',
        url: 'https://www.gia.edu',
        note: 'Reports and the Gems & Gemology archive.',
      },
      {
        title: 'Gem-A — The Gemmological Association of Great Britain',
        source: 'gem-a.com',
        type: 'lab',
        url: 'https://gem-a.com',
        note: 'Publisher of The Journal of Gemmology.',
      },
      {
        title: 'GIT — Gem and Jewelry Institute of Thailand',
        source: 'git.or.th',
        type: 'lab',
        url: 'https://www.git.or.th',
        note: 'Bangkok laboratory; studied material from the deposit.',
      },
      {
        title: 'Lotus Gemology',
        source: 'lotusgemology.com',
        type: 'lab',
        url: 'https://www.lotusgemology.com',
        note: 'Specialist corundum laboratory (Bangkok).',
      },
    ],
  },
  {
    id: 'press',
    heading: 'Press & trade coverage',
    blurb:
      'Where Gold Sheen Sapphire has appeared in the trade and consumer press. Add the public link for each as you locate it.',
    items: [
      {
        title: 'InColor — the ICA magazine',
        source: 'International Colored Gemstone Association',
        type: 'press',
        note: 'Trade coverage of the deposit. Add the article URL.',
      },
      {
        title: 'JNA — Jewellery News Asia',
        source: 'JNA',
        type: 'press',
        note: 'Asia-Pacific trade coverage. Add the article URL.',
      },
      {
        title: 'Hong Kong Jewellery Magazine feature',
        source: 'Hong Kong Jewellery',
        year: '2018',
        type: 'press',
        note: 'Feature on Gold Sheen Sapphire. Add the article URL.',
      },
      {
        title: 'GemScene feature',
        source: 'By Cynthia Unninayar',
        type: 'press',
        note: 'Editorial feature. Add the article URL.',
      },
    ],
  },
  {
    id: 'official',
    heading: 'Official channels',
    blurb: 'The brand’s own home for the collection and day-to-day updates.',
    items: [
      {
        title: 'Gold Sheen Sapphire — the collection',
        source: 'goldsheensapphire.net',
        type: 'channel',
        url: 'https://goldsheensapphire.net',
        note: 'The main site: provenance, certification and enquiries.',
      },
      {
        title: '@gold_sheen_sapphire on Instagram',
        source: 'Instagram',
        type: 'channel',
        url: 'https://instagram.com/gold_sheen_sapphire',
        note: 'New stones and behind-the-scenes.',
      },
    ],
  },
];
