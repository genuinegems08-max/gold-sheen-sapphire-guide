/**
 * Gemstone-terminology glossary. Rendered on /glossary/ with in-page anchors
 * (great for long-tail search + internal linking). Each `term` gets an id of
 * its slug so you can deep-link, e.g. /glossary/#chatoyancy.
 *
 * `related` values are slugs of other glossary terms (auto-cross-linked).
 */

export interface GlossaryTerm {
  term: string;
  slug: string;
  definition: string;
  related?: string[];
}

const raw: Omit<GlossaryTerm, 'slug'>[] = [
  {
    term: 'Asterism',
    definition:
      'A star-shaped figure of light seen in some cabochon-cut gems, caused by reflections from sets of parallel needle-like inclusions. Distinct from the broad, wandering sheen of Gold Sheen Sapphire.',
    related: ['chatoyancy', 'silk', 'cabochon'],
  },
  {
    term: 'Cabochon',
    definition:
      'A gem cut with a smooth, domed (unfaceted) top and a flat or gently curved base. Chatoyant and asteriated stones are almost always cut en cabochon so the sheen or star can be seen.',
    related: ['chatoyancy', 'asterism'],
  },
  {
    term: 'Chatoyancy',
    definition:
      'The "cat\'s-eye" optical effect: a band of light that appears to glide across a stone as it is tilted, produced by reflection from parallel inclusions or structures. Gold Sheen Sapphire shows a broad, golden form of chatoyancy often described as a schiller or sheen.',
    related: ['silk', 'schiller', 'asterism'],
  },
  {
    term: 'Corundum',
    definition:
      'The mineral species (aluminium oxide, Al₂O₃) to which both ruby and sapphire belong. Gold Sheen Sapphire is corundum coloured and patterned by iron- and titanium-bearing inclusions.',
    related: ['sapphire', 'inclusion'],
  },
  {
    term: 'Hematite',
    definition:
      'An iron-oxide mineral (Fe₂O₃). Platy hematite inclusions, together with ilmenite, are the principal cause of the golden sheen in Gold Sheen Sapphire.',
    related: ['ilmenite', 'inclusion', 'schiller'],
  },
  {
    term: 'Ilmenite',
    definition:
      'An iron-titanium oxide (FeTiO₃). Intergrown with hematite as fine platelets inside the corundum, it contributes to the reflective sheen.',
    related: ['hematite', 'inclusion'],
  },
  {
    term: 'Inclusion',
    definition:
      'Any material — mineral, fluid, or gas — enclosed within a gemstone. In Gold Sheen Sapphire the inclusions are the feature, not a flaw: they create the phenomenon.',
    related: ['hematite', 'ilmenite', 'silk'],
  },
  {
    term: 'Mohs hardness',
    definition:
      'A 1–10 scale of scratch resistance. Sapphire sits at 9, second only to diamond, which is why Gold Sheen Sapphire is durable enough for everyday rings.',
    related: ['corundum', 'sapphire'],
  },
  {
    term: 'Phenomenal gem',
    definition:
      'A gemstone valued for an optical effect (phenomenon) such as chatoyancy, asterism, adularescence, or play-of-colour, rather than for colour and clarity alone. Gold Sheen Sapphire is a phenomenal gem.',
    related: ['chatoyancy', 'asterism', 'schiller'],
  },
  {
    term: 'Schiller',
    definition:
      'A metallic or iridescent lustre produced by light reflecting from internal structures or inclusions. The golden "sheen" of Gold Sheen Sapphire is a schiller effect.',
    related: ['chatoyancy', 'sheen', 'silk'],
  },
  {
    term: 'Sheen',
    definition:
      'A soft, diffuse reflection of light across a stone\'s surface. In Gold Sheen Sapphire it appears as a moving golden-to-bronze glow — the trait that gives the variety its name.',
    related: ['schiller', 'chatoyancy'],
  },
  {
    term: 'Silk',
    definition:
      'A gemmological term for fine, needle- or plate-like inclusions that scatter light. Dense, oriented silk is what produces both asterism and the Gold Sheen effect.',
    related: ['inclusion', 'chatoyancy', 'asterism'],
  },
  {
    term: 'Sapphire',
    definition:
      'Gem-quality corundum of any colour other than red (red corundum is ruby). Gold Sheen Sapphire is a phenomenal, sheen-bearing member of the sapphire family.',
    related: ['corundum', 'phenomenal-gem'],
  },
  {
    term: 'Unheated',
    definition:
      'Describes corundum that has not been heat-treated to alter its colour or clarity. Material from the Gold Sheen deposit is characteristically unheated, as confirmed by independent laboratory reports.',
    related: ['corundum', 'inclusion'],
  },
];

export const GLOSSARY: GlossaryTerm[] = raw
  .map((t) => ({ ...t, slug: t.term.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') }))
  .sort((a, b) => a.term.localeCompare(b.term));
