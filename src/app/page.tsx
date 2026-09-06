import type { Metadata } from "next";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { AcServicesFeature } from "@/components/sections/AcServicesFeature";
import { CTASection } from "@/components/sections/CTASection";
import { Hero } from "@/components/sections/Hero";
import { HvacServicesFeature } from "@/components/sections/HvacServicesFeature";
import { LocationAndTrust } from "@/components/sections/LocationAndTrust";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "TECHNO CARE | AC & HVAC Services in Chennai",
  description:
    "TECHNO CARE provides AC and HVAC installation, repair, maintenance, and cleaning in Chennai and nearby areas. Call 094449 27947 to request service.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesOverview />
      <AboutPreview />
      <WhyChoose />
      <AcServicesFeature />
      <HvacServicesFeature />
      <ProcessSteps />
      <ServiceArea />
      <LocationAndTrust />
      <CTASection />
    </>
  );
}
