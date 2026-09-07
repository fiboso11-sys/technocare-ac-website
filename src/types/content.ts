export type ServiceCategory = "ac" | "hvac" | "duct";

export type ServiceIconName =
  | "snowflake"
  | "wrench"
  | "clipboardCheck"
  | "sparkles"
  | "airVent"
  | "settings"
  | "shield"
  | "pipe"
  | "wind"
  | "fan";

export type Service = {
  id: string;
  slug: string;
  category: ServiceCategory;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  icon: ServiceIconName;
  image: string;
  imageAlt: string;
  benefits: string[];
  serviceIncludes: string[];
  commonReasons: string[];
  relatedServices: string[];
  seoTitle: string;
  seoDescription: string;
  featured: boolean;
  order: number;
  /** Optional lead CTA label on the service detail page. */
  ctaLabel?: string;
};

export type NavItem = {
  href: string;
  label: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type TrustItem = {
  title: string;
  description: string;
};

export type ContactMethod = "phone" | "email";
