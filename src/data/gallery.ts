/**
 * Gallery manifest. Images are imported (not string paths) so Astro's
 * <Image>/<Picture> pipeline optimises them to WebP/AVIF with responsive
 * srcset. To add a photo: drop it in src/assets/images/ with a descriptive,
 * keyword-relevant filename, import it here, and add an entry with real,
 * specific alt text.
 *
 * ⚠️  ALT TEXT IS REQUIRED and should describe the stone: cut, colour,
 *     sheen behaviour — not "image1.jpg".
 */
import type { ImageMetadata } from 'astro';

import teardropCream from '../assets/images/stone-teardrop-cream.jpg';
import hexagonGold from '../assets/images/stone-hexagon-gold.jpg';
import blueMacro from '../assets/images/stone-blue-macro.jpg';
import goldOvalInhand from '../assets/images/stone-gold-oval-inhand.jpg';
import teardropWhite from '../assets/images/stone-teardrop-white.jpg';
import ovalMoody from '../assets/images/stone-oval-moody.jpg';
import sheenGoldSilk from '../assets/images/sheen-gold-silk.jpg';
import sheenNavySilk from '../assets/images/sheen-navy-silk.jpg';
import blueStarGrading from '../assets/images/stone-blue-star-grading.jpg';
import igOvalBanded from '../assets/images/stone-ig-oval-banded.jpg';
import igTeardropBlue from '../assets/images/stone-ig-teardrop-blue.jpg';
import igRoundBanded from '../assets/images/stone-ig-round-banded.jpg';

export interface GalleryImage {
  src: ImageMetadata;
  alt: string;
  caption: string;
  plate: string;
}

export const GALLERY: GalleryImage[] = [
  {
    src: teardropCream,
    alt: 'Polished Gold Sheen Sapphire cabochon, teardrop cut, showing banded blue body colour with a golden sheen',
    caption: 'Teardrop cabochon — banded body colour with a golden sheen',
    plate: 'Plate I',
  },
  {
    src: sheenGoldSilk,
    alt: 'Macro view of golden hematite–ilmenite silk inclusions inside Gold Sheen Sapphire',
    caption: 'The needle field, magnified — the source of the sheen',
    plate: 'Plate II',
  },
  {
    src: hexagonGold,
    alt: 'Gold Sheen Sapphire cabochon in a hexagonal cut with warm golden tones',
    caption: 'Hexagonal cut — warm, even golden sheen',
    plate: 'Plate III',
  },
  {
    src: blueMacro,
    alt: 'Macro photograph of a blue Gold Sheen Sapphire cabochon showing sheen banding, held between fingers',
    caption: 'Blue-bodied stone — sheen banding at macro scale',
    plate: 'Plate IV',
  },
  {
    src: goldOvalInhand,
    alt: 'Large oval Gold Sheen Sapphire held in hand, golden sheen crossing the surface',
    caption: 'Oval cabochon in hand — scale and sheen movement',
    plate: 'Plate V',
  },
  {
    src: ovalMoody,
    alt: 'Oval Gold Sheen Sapphire in low, directional light emphasising the moving band of sheen',
    caption: 'Directional light — the sheen reads as a moving band',
    plate: 'Plate VI',
  },
  {
    src: teardropWhite,
    alt: 'Gold Sheen Sapphire teardrop cabochon on a white ground, blue and gold banding',
    caption: 'Teardrop cabochon on white — colour and sheen together',
    plate: 'Plate VII',
  },
  {
    src: sheenNavySilk,
    alt: 'Microscope view of hematite and ilmenite inclusions inside a navy-bodied Gold Sheen Sapphire',
    caption: 'Navy body — oriented inclusion planes under magnification',
    plate: 'Plate VIII',
  },
  {
    src: blueStarGrading,
    alt: 'Blue Gold Sheen Sapphire cabochon photographed for grading, showing sheen direction',
    caption: 'Grading view — assessing sheen strength and direction',
    plate: 'Plate IX',
  },
  {
    src: igOvalBanded,
    alt: 'Oval Gold Sheen Sapphire cabochon with strong banded chatoyancy',
    caption: 'Strong banding across an oval cabochon',
    plate: 'Plate X',
  },
  {
    src: igTeardropBlue,
    alt: 'Blue teardrop Gold Sheen Sapphire cabochon with a crossing golden sheen',
    caption: 'Blue teardrop — sheen crossing the long axis',
    plate: 'Plate XI',
  },
  {
    src: igRoundBanded,
    alt: 'Round Gold Sheen Sapphire cabochon with concentric banded sheen',
    caption: 'Round cabochon — concentric banded sheen',
    plate: 'Plate XII',
  },
];
