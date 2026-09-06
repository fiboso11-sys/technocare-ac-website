import { company, hasValue } from "@/data/company";

/**
 * Single source of truth for Google Maps / Directions links.
 * HTTPS only. Never invent place IDs, coordinates, or proprietary URI schemes.
 *
 * Priority:
 * 1. Exact verified place URL (googleMapsPlaceUrl or legacy googleMapsUrl)
 * 2. HTTPS Maps search for the configured business fallback query
 *
 * Do not build /maps/dir destination URLs from the postal address —
 * Google often cannot resolve that path and shows "can't find destination".
 */
export function getGoogleMapsUrl() {
  if (hasValue(company.googleMapsPlaceUrl)) {
    return company.googleMapsPlaceUrl.trim();
  }
  if (hasValue(company.googleMapsUrl)) {
    return company.googleMapsUrl.trim();
  }

  const query = hasValue(company.googleMapsFallbackQuery)
    ? company.googleMapsFallbackQuery.trim()
    : `${company.name} ${company.locality} ${company.city}`;

  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

/** @deprecated Prefer getGoogleMapsUrl — kept as a stable alias for callers. */
export function mapsSearchUrl() {
  return getGoogleMapsUrl();
}

/** Directions / Get Directions — opens place listing or safe business search. */
export function directionsUrl() {
  return getGoogleMapsUrl();
}
