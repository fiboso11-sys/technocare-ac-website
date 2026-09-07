export const company = {
  name: "TECHNO CARE",
  legalName: "",
  shortName: "TECHNO CARE",
  domain: "technocareac.com",
  siteUrl: "https://www.technocareac.com",
  /** Primary owner-approved business positioning (British spelling preserved). */
  tagline: "Aircondition Authorised Dealer Sales & Service",
  positioning: "Aircondition Authorised Dealer Sales & Service",
  positioningShort: "Aircondition Authorised Dealer Sales & Service",
  /** Secondary business description where appropriate. */
  secondaryPositioning: "Multi-Brand AC Reseller & Service Provider",
  offerLine: "AC Sales, Installation, Service, Repair, AMC & Refurbishing",
  heroSupport:
    "Multi-brand AC sales, installation, service, repair, maintenance, AMC, refurbishing and HVAC solutions in Chennai.",
  brandsSupportLine:
    "TECHNO CARE provides sales and service support across multiple AC brands for homes and commercial premises in Chennai.",
  trademarkDisclaimer:
    "Brand names and trademarks are the property of their respective owners.",
  description:
    "TECHNO CARE is an aircondition authorised dealer for sales and service in Nolambur, Chennai — a multi-brand AC reseller and service provider covering sales, installation, service, repair, AMC, and refurbishing across Chennai and nearby areas.",
  category: "Air Conditioning Repair Service",
  phoneDisplay: "9444 927 947",
  phoneE164: "+919444927947",
  phoneSecondaryDisplay: "8056 292 900",
  phoneSecondaryE164: "+918056292900",
  addressLine1: "No. 99, Andal Ammal Street",
  addressLine2: "Opp. Indian Bank, VGN Nagar",
  addressLine3: "Nolambur",
  city: "Chennai",
  state: "Tamil Nadu",
  postalCode: "600095",
  country: "India",
  countryCode: "IN",
  locality: "Nolambur",
  serviceArea: "Chennai and nearby areas",
  email: "technocareac@gmail.com",
  whatsapp: "",
  /** Phase 2 billing fields — keep in data; do not feature on marketing pages. */
  gstin: "33AYKPR1351F1ZK",
  pan: "AYKPR1351F",
  /** Exact Google Business / Maps / Reviews URLs only. Leave empty until owner supplies. */
  googleBusinessUrl: "",
  googleMapsPlaceUrl: "",
  /** Legacy alias — prefer googleMapsPlaceUrl. */
  googleMapsUrl: "",
  googleReviewsUrl: "",
  /** HTTPS Maps search query used when no verified place URL is configured. */
  googleMapsFallbackQuery: "TECHNO CARE Nolambur Chennai",
  googleRating: "",
  googleReviewCount: 0,
  workingHours: "",
  showWhatsApp: false,
  showEmail: true,
  showBusinessHours: false,
  showGoogleRating: false,
  showFloatingWhatsApp: false,
  showMobileActionBar: true,
} as const;

export const hasValue = (value: string | undefined | null): value is string =>
  Boolean(value && value.trim().length > 0);

export const hasPhone = () => hasValue(company.phoneDisplay) && hasValue(company.phoneE164);
export const hasSecondaryPhone = () =>
  hasValue(company.phoneSecondaryDisplay) && hasValue(company.phoneSecondaryE164);
export const hasEmail = () => company.showEmail && hasValue(company.email);
export const hasWhatsApp = () => company.showWhatsApp && hasValue(company.whatsapp);
export const hasGoogleBusinessUrl = () => hasValue(company.googleBusinessUrl);
export const hasGoogleReviewsUrl = () => hasValue(company.googleReviewsUrl);
export const hasGoogleMapsPlaceUrl = () =>
  hasValue(company.googleMapsPlaceUrl) || hasValue(company.googleMapsUrl);
export const hasWorkingHours = () =>
  company.showBusinessHours && hasValue(company.workingHours);

export const phoneHref = () => `tel:${company.phoneE164}`;
export const phoneSecondaryHref = () => `tel:${company.phoneSecondaryE164}`;

export const emailHref = () => (hasEmail() ? `mailto:${company.email.trim()}` : "");

export const addressLines = () =>
  [
    company.addressLine1,
    company.addressLine2,
    company.addressLine3,
    `${company.city} - ${company.postalCode}`,
    company.state,
    company.country,
  ].filter((line) => hasValue(line));

export const fullAddress = () =>
  [
    company.addressLine1,
    company.addressLine2,
    company.addressLine3,
    company.city,
    `${company.state} ${company.postalCode}`,
    company.country,
  ].join(", ");

export const streetAddress = () =>
  "No. 99, Andal Ammal Street, Opp. Indian Bank, VGN Nagar, Nolambur";
