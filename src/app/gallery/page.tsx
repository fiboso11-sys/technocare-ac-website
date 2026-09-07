import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { CTASection } from "@/components/sections/CTASection";
import { WorkGallery } from "@/components/sections/WorkGallery";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { PhoneButton } from "@/components/ui/PhoneButton";
import { Section } from "@/components/ui/Section";
import { company } from "@/data/company";
import { hasGalleryPhotos } from "@/data/gallery";
import { cta } from "@/data/navigation";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Our Work Gallery | TECHNO CARE Chennai",
  description: `See TECHNO CARE AC sales, installation and service work in ${company.city}.`,
  path: "/gallery",
});

export default function GalleryPage() {
  if (!hasGalleryPhotos()) {
    redirect("/services");
  }

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Our Work Gallery"
        description={`Installation, service and multi-brand AC work by TECHNO CARE across ${company.serviceArea}.`}
      >
        <PhoneButton variant="ghost" />
        <Button href={cta.primary.href} variant="primary">
          {cta.primary.label}
        </Button>
      </PageHero>

      <WorkGallery mode="full" />

      <Section className="bg-surface">
        <Container className="flex flex-wrap gap-3">
          <Button href={cta.primary.href} variant="primary">
            {cta.primary.label}
          </Button>
          <Button href={cta.exploreSales.href} variant="secondary">
            {cta.exploreSales.label}
          </Button>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
