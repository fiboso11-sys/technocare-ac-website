/**
 * Owner-replaceable media paths.
 * Flip enabled flags only after the matching file exists under /public.
 * Do not point these at third-party or competitor images.
 *
 * When hero.enabled is false, the homepage renders an inline SVG fallback
 * (no image request). Never leave enabled:true pointing at a missing file.
 */
export const media = {
  hero: {
    /** Drop owner file at public/images/technocare/hero.webp then set enabled: true */
    src: "/images/technocare/hero.webp",
    enabled: false,
    alt: "Air-conditioning service work for homes and premises in Chennai.",
    width: 1600,
    height: 1200,
  },
  logo: {
    /** Drop official logo at public/brand/logo.png or logo.svg then set enabled: true */
    src: "/brand/logo.png",
    enabled: false,
    alt: "TECHNO CARE",
    width: 180,
    height: 48,
  },
} as const;

/** Optional landscape photos for service cards. Keys match service slugs. */
export const servicePhotos: Partial<Record<string, string>> = {
  // "ac-installation": "/services/ac-installation.webp",
  // "ac-repair": "/services/ac-repair.webp",
  // "ac-maintenance": "/services/ac-maintenance.webp",
  // "ac-cleaning": "/services/ac-cleaning.webp",
  // "portable-ac-services": "/services/portable-ac.webp",
  // "hvac-system-repair": "/services/hvac-repair.webp",
  // "hvac-system-maintenance": "/services/hvac-maintenance.webp",
  // "duct-vent-installation": "/services/duct-installation.webp",
  // "duct-vent-repair": "/services/duct-repair.webp",
  // "duct-vent-cleaning": "/services/duct-cleaning.webp",
};

export function getServicePhoto(slug: string) {
  return servicePhotos[slug] ?? null;
}
