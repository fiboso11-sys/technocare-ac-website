import { services } from "@/data/services";
import { hasGalleryPhotos } from "@/data/gallery";
import type { NavItem } from "@/types/content";

const baseNavigation: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/brands", label: "Brands" },
  { href: "/contact", label: "Contact" },
];

/** Gallery stays out of customer navigation until real work photos are enabled. */
export function getPrimaryNavigation(): NavItem[] {
  if (!hasGalleryPhotos()) return baseNavigation;
  return [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/brands", label: "Brands" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];
}

/** @deprecated Prefer getPrimaryNavigation() — kept for any static imports. */
export const primaryNavigation = getPrimaryNavigation();

export const footerLegalNavigation: NavItem[] = [
  { href: "/privacy", label: "Privacy Policy" },
];

export const footerServiceLinks = () =>
  services
    .filter((service) =>
      [
        "ac-sales",
        "ac-installation",
        "ac-repair",
        "ac-amc",
        "ac-refurbishing",
        "hvac-system-repair",
        "duct-vent-cleaning",
      ].includes(service.slug),
    )
    .map((service) => ({
      href: `/services/${service.slug}`,
      label:
        service.slug === "hvac-system-repair"
          ? "HVAC Services"
          : service.slug === "duct-vent-cleaning"
            ? "Duct & Vent Services"
            : service.shortTitle,
    }));

export const cta = {
  primary: { href: "/contact", label: "Request Service" },
  call: { label: "Call Now" },
  directions: { label: "Get Directions" },
  services: { href: "/services", label: "View Services" },
  about: { href: "/about", label: "About TECHNO CARE" },
  exploreSales: { href: "/services/ac-sales", label: "Explore AC Sales" },
  sales: { href: "/contact?service=ac-sales", label: "Enquire About AC Sales" },
  amc: { href: "/contact?service=ac-amc", label: "Request AMC Quote" },
  refurbish: {
    href: "/contact?service=ac-refurbishing",
    label: "Ask About Refurbishing",
  },
  commercial: {
    href: "/contact?service=hvac-system-repair",
    label: "Commercial Enquiry",
  },
  exploreSolutions: { href: "/services", label: "Explore AC Solutions" },
} as const;
