import { company, fullAddress, hasValue } from "@/data/company";

export function mapsSearchUrl() {
  if (hasValue(company.googleMapsUrl)) return company.googleMapsUrl;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress())}`;
}

export function directionsUrl() {
  if (hasValue(company.googleMapsUrl)) return company.googleMapsUrl;
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress())}`;
}
