/**
 * Central media configuration for marketing heroes and site assets.
 *
 * CATEGORY A — Marketing / lifestyle imagery (may be owner / licensed / generated)
 * Never describe Category A images as completed TECHNO CARE projects.
 *
 * CATEGORY B — Real TECHNO CARE work lives in src/data/gallery.ts only.
 *
 * Flip enabled only after the matching file exists under /public.
 */

export type MediaSourceType = "owner" | "licensed" | "generated";

export type MarketingImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  enabled: boolean;
  type: "marketing";
  sourceType: MediaSourceType;
  attributionRequired: boolean;
  attributionText: string;
  /** CSS object-position for mobile/desktop art direction */
  objectPosition?: string;
};

export const media = {
  logo: {
    src: "/brand/logo.png",
    enabled: false,
    alt: "TECHNO CARE",
    width: 180,
    height: 48,
  },

  /** @deprecated Prefer homeHero — kept for older callers. */
  hero: {
    src: "/images/technocare/heroes/home-hero.webp",
    enabled: true,
    alt: "Modern living room with a wall-mounted split air conditioner",
    width: 1536,
    height: 1024,
  },

  homeHero: {
    src: "/images/technocare/heroes/home-hero.webp",
    alt: "Modern living room with a wall-mounted split air conditioner",
    width: 1536,
    height: 1024,
    enabled: true,
    type: "marketing",
    sourceType: "generated",
    attributionRequired: false,
    attributionText: "",
    objectPosition: "68% 40%",
  } satisfies MarketingImage,

  acSalesHero: {
    src: "/images/technocare/heroes/ac-sales-hero.webp",
    alt: "Bright living room with a premium wall-mounted split air conditioner",
    width: 1536,
    height: 1024,
    enabled: true,
    type: "marketing",
    sourceType: "generated",
    attributionRequired: false,
    attributionText: "",
    objectPosition: "70% 35%",
  } satisfies MarketingImage,

  installationHero: {
    src: "/images/technocare/heroes/installation-hero.webp",
    alt: "Technician installing a wall-mounted air conditioner indoors",
    width: 1536,
    height: 1024,
    enabled: true,
    type: "marketing",
    sourceType: "generated",
    attributionRequired: false,
    attributionText: "",
    objectPosition: "55% 35%",
  } satisfies MarketingImage,

  repairHero: {
    src: "/images/technocare/heroes/repair-service-hero.webp",
    alt: "Technician servicing a wall-mounted air conditioner",
    width: 1536,
    height: 1024,
    enabled: true,
    type: "marketing",
    sourceType: "generated",
    attributionRequired: false,
    attributionText: "",
    objectPosition: "50% 40%",
  } satisfies MarketingImage,

  amcHero: {
    src: "/images/technocare/heroes/amc-hero.webp",
    alt: "Comfortable living room with a wall-mounted air conditioner for planned maintenance",
    width: 1536,
    height: 1024,
    enabled: true,
    type: "marketing",
    sourceType: "generated",
    attributionRequired: false,
    attributionText: "",
    objectPosition: "65% 40%",
  } satisfies MarketingImage,

  refurbishingHero: {
    src: "/images/technocare/heroes/refurbishing-hero.webp",
    alt: "Technician inspecting outdoor air-conditioner components during servicing",
    width: 1536,
    height: 1024,
    enabled: true,
    type: "marketing",
    sourceType: "generated",
    attributionRequired: false,
    attributionText: "",
    objectPosition: "50% 45%",
  } satisfies MarketingImage,

  hvacHero: {
    src: "/images/technocare/heroes/hvac-commercial-hero.webp",
    alt: "Modern office with a ceiling cassette air-conditioning unit",
    width: 1536,
    height: 1024,
    enabled: true,
    type: "marketing",
    sourceType: "generated",
    attributionRequired: false,
    attributionText: "",
    objectPosition: "50% 30%",
  } satisfies MarketingImage,

  /** Lifestyle section — reuses sales lifestyle scene (Category A marketing). */
  lifestyleComfort: {
    src: "/images/technocare/heroes/ac-sales-hero.webp",
    alt: "Comfortable residential living space with wall-mounted air conditioning",
    width: 1536,
    height: 1024,
    enabled: true,
    type: "marketing",
    sourceType: "generated",
    attributionRequired: false,
    attributionText: "",
    objectPosition: "70% 40%",
  } satisfies MarketingImage,
} as const;

/** Map service slugs to marketing heroes for landing pages. */
export const serviceHeroBySlug: Record<string, MarketingImage> = {
  "ac-sales": media.acSalesHero,
  "ac-installation": media.installationHero,
  "ac-repair": media.repairHero,
  "ac-maintenance": media.repairHero,
  "ac-cleaning": media.repairHero,
  "ac-amc": media.amcHero,
  "ac-refurbishing": media.refurbishingHero,
  "hvac-system-repair": media.hvacHero,
  "hvac-system-maintenance": media.hvacHero,
  "duct-vent-installation": media.hvacHero,
  "duct-vent-repair": media.hvacHero,
  "duct-vent-cleaning": media.hvacHero,
};

export function getServiceHero(slug: string): MarketingImage | null {
  const hero = serviceHeroBySlug[slug];
  if (!hero || !hero.enabled) return null;
  return hero;
}

/** Optional landscape photos for older service cards (SVG illustrations remain default). */
export const servicePhotos: Partial<Record<string, string>> = {};

export function getServicePhoto(slug: string) {
  return servicePhotos[slug] ?? null;
}
