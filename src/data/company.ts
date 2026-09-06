export const company = {
  name: "TECHNO CARE",
  legalName: "",
  shortName: "TECHNO CARE",
  domain: "technocareac.com",
  siteUrl: "https://technocareac.com",
  tagline: "Professional AC & HVAC Services in Chennai",
  description:
    "TECHNO CARE provides air-conditioning and HVAC services in Chennai and nearby areas, covering installation, repair, maintenance, and cleaning.",
  category: "Air Conditioning Repair Service",
  phoneDisplay: "094449 27947",
  phoneE164: "+919444927947",
  addressLine1: "99, Andal Ammal St",
  addressLine2: "Raja Garden, Nolambur",
  addressLine3: "Ambattur Industrial Estate",
  city: "Chennai",
  state: "Tamil Nadu",
  postalCode: "600095",
  country: "India",
  countryCode: "IN",
  locality: "Nolambur",
  serviceArea: "Chennai and nearby areas",
  email: "",
  whatsapp: "",
  googleMapsUrl: "",
  googleReviewsUrl: "",
  googleRating: "5.0",
  googleReviewCount: 3,
  workingHours: "",
  showWhatsApp: false,
  showEmail: false,
  showBusinessHours: false,
  showGoogleRating: true,
  showFloatingWhatsApp: false,
  showMobileActionBar: true,
} as const;

export const hasValue = (value: string | undefined | null): value is string =>
  Boolean(value && value.trim().length > 0);

export const hasPhone = () => hasValue(company.phoneDisplay) && hasValue(company.phoneE164);
export const hasEmail = () => company.showEmail && hasValue(company.email);
export const hasWhatsApp = () => company.showWhatsApp && hasValue(company.whatsapp);
export const hasGoogleReviewsUrl = () => hasValue(company.googleReviewsUrl);
export const hasWorkingHours = () =>
  company.showBusinessHours && hasValue(company.workingHours);

export const phoneHref = () => `tel:${company.phoneE164}`;

export const emailHref = () => (hasEmail() ? `mailto:${company.email.trim()}` : "");

export const addressLines = () =>
  [
    company.addressLine1,
    company.addressLine2,
    company.addressLine3,
    `${company.city}, ${company.state} ${company.postalCode}`,
    company.country,
  ].filter((line) => hasValue(line));

export const fullAddress = () =>
  [
    company.addressLine1,
    "Raja Garden",
    "Nolambur",
    company.addressLine3,
    company.city,
    `${company.state} ${company.postalCode}`,
    company.country,
  ].join(", ");

export const streetAddress = () =>
  "99, Andal Ammal St, Raja Garden, Nolambur, Ambattur Industrial Estate";
