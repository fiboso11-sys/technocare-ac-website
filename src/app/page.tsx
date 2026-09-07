import type { Metadata } from "next";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { BrandsSection } from "@/components/sections/BrandsSection";
import { ComfortLifestyleSection } from "@/components/sections/ComfortLifestyleSection";
import { CommercialSolutionsSection } from "@/components/sections/CommercialSolutionsSection";
import { CTASection } from "@/components/sections/CTASection";
import { CustomerJourney } from "@/components/sections/CustomerJourney";
import { GoogleTrustSection } from "@/components/sections/GoogleTrustSection";
import { Hero } from "@/components/sections/Hero";
import { LocationAndTrust } from "@/components/sections/LocationAndTrust";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { WorkGallery } from "@/components/sections/WorkGallery";
import { company } from "@/data/company";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "TECHNO CARE | Aircondition Authorised Dealer Sales & Service Chennai",
  description: `${company.description} Call ${company.phoneDisplay}.`,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandsSection compact />
      <TrustStrip />
      <ServicesOverview />
      <ComfortLifestyleSection />
      <CommercialSolutionsSection />
      <WhyChoose />
      <CustomerJourney />
      <WorkGallery mode="featured" />
      <AboutPreview />
      <GoogleTrustSection />
      <ServiceArea />
      <LocationAndTrust />
      <CTASection />
    </>
  );
}
