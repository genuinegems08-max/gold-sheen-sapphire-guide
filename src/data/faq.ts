/**
 * Site-level FAQ. Rendered on /faq/ with FAQPage JSON-LD (rich-result eligible).
 * Keep answers factual and self-contained (40–300 words). Add/remove freely —
 * the schema and the page rebuild from this array.
 *
 * Note: only put a question in ONE FAQPage across the site (Google dislikes the
 * same Q&A duplicated in multiple FAQPage blocks). Article-specific Q&As belong
 * in that article's `faq:` frontmatter instead.
 */

export interface FaqEntry {
  question: string;
  answer: string;
}

export const FAQS: FaqEntry[] = [
  {
    question: 'What is Gold Sheen Sapphire?',
    answer:
      'Gold Sheen Sapphire is a variety of natural corundum (sapphire) that displays a soft, moving golden-to-bronze sheen across its surface. The effect is caused by dense fields of tiny hematite and ilmenite inclusions that formed inside the crystal as it grew, scattering light as the stone is tilted. It is a natural phenomenon, not a treatment or coating.',
  },
  {
    question: 'Where does Gold Sheen Sapphire come from?',
    answer:
      'All known Gold Sheen Sapphire came from a single deposit in Kenya, in the country\'s north-east near the Somali border. It was never a widespread material, and the deposit is now considered depleted — no significant new supply is entering the market.',
  },
  {
    question: 'Is Gold Sheen Sapphire natural or treated?',
    answer:
      'The sheen is entirely natural and structural — it comes from mineral inclusions that crystallised within the sapphire, not from heating, diffusion, coating, or dyeing. Independent laboratory reports on material from the deposit have consistently found no indication of heat treatment. Always ask for a report from a recognised lab before a significant purchase.',
  },
  {
    question: 'How is Gold Sheen Sapphire different from star sapphire?',
    answer:
      'A star sapphire shows asterism — a fixed, multi-rayed star of light produced by needle inclusions oriented along the crystal\'s symmetry. Gold Sheen Sapphire instead shows a broad, wandering band of golden light (chatoyancy / a schiller effect) produced by platy hematite–ilmenite inclusions. One is a sharp star; the other is a soft, shifting sheen.',
  },
  {
    question: 'Is Gold Sheen Sapphire valuable?',
    answer:
      'Value is driven by the strength and evenness of the sheen, body colour, cut quality, size, and the fact that the source is finite. Because the deposit is depleted, supply cannot increase. Prices vary widely by quality, so compare like-for-like stones and insist on independent certification for higher-value pieces.',
  },
  {
    question: 'Is Gold Sheen Sapphire hard enough for daily wear?',
    answer:
      'Yes. As a sapphire it has a Mohs hardness of 9 — second only to diamond — so it resists scratching and is well suited to rings and everyday jewellery. It should still be protected from hard knocks, and cleaned gently, as detailed in the care guide.',
  },
  {
    question: 'How can I tell if a Gold Sheen Sapphire is genuine?',
    answer:
      'Genuine material shows a directional sheen that moves with the light and, under magnification, a characteristic field of oriented platy inclusions. Imitations may use foil backing, glass, or assembled stones with a flat, static shimmer. The most reliable confirmation is a report from an independent gemmological laboratory. See the buying guide for a full checklist.',
  },
  {
    question: 'How do I care for Gold Sheen Sapphire?',
    answer:
      'Clean it with warm water, mild soap and a soft brush; avoid ultrasonic and steam cleaners, which can stress included stones. Store it separately so harder points do not scratch other pieces. Full guidance is in the care and maintenance pillar.',
  },
];
