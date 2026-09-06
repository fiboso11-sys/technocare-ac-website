import { localBusinessJsonLd } from "@/lib/schema";

export function JsonLd() {
  const json = JSON.stringify(localBusinessJsonLd());
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
