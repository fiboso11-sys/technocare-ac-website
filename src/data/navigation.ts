import { services } from "@/data/services";
import type { NavItem } from "@/types/content";

export const primaryNavigation: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export const footerLegalNavigation: NavItem[] = [
  { href: "/privacy", label: "Privacy Policy" },
];

export const footerServiceLinks = () =>
  services
    .filter((service) =>
      [
        "ac-installation",
        "ac-repair",
        "ac-maintenance",
        "hvac-system-repair",
        "hvac-system-maintenance",
        "duct-vent-cleaning",
      ].includes(service.slug),
    )
    .map((service) => ({
      href: `/services/${service.slug}`,
      label: service.shortTitle,
    }));

export const cta = {
  primary: { href: "/contact", label: "Request Service" },
  call: { label: "Call Now" },
  directions: { label: "Get Directions" },
  services: { href: "/services", label: "View Services" },
  about: { href: "/about", label: "About TECHNO CARE" },
} as const;
