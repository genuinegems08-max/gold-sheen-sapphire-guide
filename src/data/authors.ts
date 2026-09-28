/**
 * ────────────────────────────────────────────────────────────────────────────
 *  AUTHORS & REVIEWERS  (E-E-A-T signals)
 * ────────────────────────────────────────────────────────────────────────────
 *  Google rewards content with clear expertise, authoritativeness and trust.
 *  Every article shows an author byline and (optionally) a "reviewed by"
 *  credit. Reference these by `id` from an MDX file's `author` / `reviewer`
 *  frontmatter.
 *
 *  ⚠️  REPLACE THE PLACEHOLDER BIOS BELOW WITH REAL PEOPLE AND REAL CREDENTIALS.
 *      Fabricated expertise is an E-E-A-T risk, not a benefit. Use the real
 *      name, title, and verifiable qualifications of whoever authors/reviews.
 * ────────────────────────────────────────────────────────────────────────────
 */

export interface Person {
  id: string;
  name: string;
  role: string;
  /** Short credential line shown under the name, e.g. "GIA Graduate Gemologist". */
  credential?: string;
  bio: string;
  /** Optional avatar in /public/authors/… (square, ≥ 160px). */
  avatar?: string;
  /** Optional links used for schema.org sameAs + the byline. */
  links?: { label: string; href: string }[];
}

export const AUTHORS: Record<string, Person> = {
  'editorial-team': {
    id: 'editorial-team',
    name: 'The Editorial Team', // ← replace with a named author where possible
    role: 'Gold Sheen Sapphire Guide',
    credential: 'Independent gemstone documentation',
    bio: 'The editorial team documents Gold Sheen Sapphire from primary sources — laboratory reports, peer-reviewed gemmological journals, and first-hand examination of material from the original Kenyan deposit.',
    avatar: '/authors/editorial-team.svg',
    links: [{ label: 'Instagram', href: 'https://instagram.com/gold_sheen_sapphire' }],
  },

  // ── TEMPLATE: duplicate and edit for your real reviewing gemologist ──────
  'reviewer-gemologist': {
    id: 'reviewer-gemologist',
    name: 'Reviewer Name', // ← REPLACE
    role: 'Consulting Gemologist', // ← REPLACE
    credential: 'Add real qualification, e.g. FGA / GIA GG', // ← REPLACE
    bio: 'Replace this with a short, factual biography of the qualified gemologist who fact-checks the guide. Include verifiable credentials and, ideally, a link to a professional profile.',
    avatar: '/authors/reviewer.svg',
    links: [],
  },
};

export function getPerson(id: string): Person {
  return AUTHORS[id] ?? AUTHORS['editorial-team'];
}
