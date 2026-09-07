/**
 * Central brand configuration for the public website brand strip.
 * Flip logo.enabled only after a real owner-provided logo file exists under /public.
 * Never use generated, distorted, or third-party "fake" logos.
 */
export type BrandLogo = {
  src: string;
  width: number;
  height: number;
  enabled: boolean;
};

export type Brand = {
  id: string;
  name: string;
  shortName: string;
  logo: BrandLogo;
  /**
   * Future brand landing path (e.g. /brands/daikin).
   * Do not publish thin SEO pages until owner supplies useful content.
   */
  futurePath: string;
  /** Publish only when dedicated content is ready. */
  pagePublished: boolean;
};

export const brands: Brand[] = [
  {
    id: "panasonic",
    name: "Panasonic",
    shortName: "Panasonic",
    futurePath: "/brands/panasonic",
    pagePublished: false,
    logo: {
      src: "/images/technocare/brands/panasonic.png",
      width: 200,
      height: 36,
      enabled: true,
    },
  },
  {
    id: "ifb",
    name: "IFB",
    shortName: "IFB",
    futurePath: "/brands/ifb",
    pagePublished: false,
    logo: {
      src: "/images/technocare/brands/ifb.png",
      width: 100,
      height: 36,
      enabled: true,
    },
  },
  {
    id: "daikin",
    name: "Daikin",
    shortName: "Daikin",
    futurePath: "/brands/daikin",
    pagePublished: false,
    logo: {
      src: "/images/technocare/brands/daikin.png",
      width: 200,
      height: 55,
      enabled: true,
    },
  },
  {
    id: "o-general",
    name: "O General",
    shortName: "O General",
    futurePath: "/brands/o-general",
    pagePublished: false,
    logo: {
      src: "/images/technocare/brands/o-general.png",
      width: 200,
      height: 29,
      enabled: true,
    },
  },
  {
    id: "mitsubishi-electric",
    name: "Mitsubishi Electric",
    shortName: "Mitsubishi Electric",
    futurePath: "/brands/mitsubishi-electric",
    pagePublished: false,
    logo: {
      src: "/images/technocare/brands/mitsubishi-electric.svg",
      width: 160,
      height: 68,
      enabled: true,
    },
  },
];

export const brandNames = brands.map((brand) => brand.name);

/** Optional preferred-brand values for the lead form. */
export const preferredBrandOptions = [
  ...brandNames,
  "Other / Not sure",
] as const;

/**
 * Future brand landing template notes (do not invent models/prices):
 * Brand identity + lifestyle hero + logo + sales/install/service/AMC enquiry CTAs.
 */
export const brandLandingTemplate = {
  sections: [
    "Brand identity",
    "AC categories supported",
    "Sales enquiry",
    "Installation",
    "Service",
    "Maintenance / AMC",
    "Contact CTA",
  ],
  heroRule:
    "Use a premium generic AC lifestyle image + official brand logo + TECHNO CARE enquiry CTA. Do not fabricate branded equipment inside generated imagery.",
} as const;
