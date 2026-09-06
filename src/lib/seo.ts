import type { Metadata } from "next";
import { company } from "@/data/company";
import { absoluteUrl, getSiteUrl } from "@/lib/utils";

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
};

export function buildMetadata({
  title,
  description,
  path = "/",
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      siteName: company.name,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function defaultMetadata(): Metadata {
  return {
    metadataBase: new URL(getSiteUrl()),
    title: {
      default: "TECHNO CARE | AC & HVAC Services in Chennai",
      template: "%s",
    },
    description:
      "TECHNO CARE provides AC and HVAC installation, repair, maintenance, and cleaning services in Chennai and nearby areas. Call 094449 27947.",
    applicationName: company.name,
    authors: [{ name: company.name }],
    creator: company.name,
    publisher: company.name,
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: company.name,
      url: getSiteUrl(),
    },
    twitter: {
      card: "summary_large_image",
    },
    formatDetection: {
      telephone: false,
      email: false,
      address: false,
    },
  };
}
