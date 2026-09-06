import { company, streetAddress } from "@/data/company";
import { getSiteUrl } from "@/lib/utils";

export function localBusinessJsonLd() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: company.name,
    url: getSiteUrl(),
    image: `${getSiteUrl()}/opengraph-image`,
    description: company.description,
    telephone: company.phoneE164,
    areaServed: {
      "@type": "City",
      name: company.city,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: streetAddress(),
      addressLocality: company.city,
      addressRegion: company.state,
      postalCode: company.postalCode,
      addressCountry: company.countryCode,
    },
  };

  return data;
}
