import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { BrandsSection } from "@/components/sections/BrandsSection";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { PhoneButton } from "@/components/ui/PhoneButton";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { company } from "@/data/company";
import { cta } from "@/data/navigation";
import { serviceCategories, getServicesByCategory } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "AC Sales, Service & HVAC Work in Chennai | TECHNO CARE",
  description: `${company.positioning}. ${company.offerLine} across ${company.serviceArea}. Call ${company.phoneDisplay}.`,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Multi-brand AC sales and service in Chennai"
        description={`${company.name} — ${company.positioning}. Also ${company.secondaryPositioning.toLowerCase()}, covering ${company.offerLine.toLowerCase()}, plus HVAC support across ${company.serviceArea}.`}
      >
        <Button href={cta.primary.href} variant="primary">
          {cta.primary.label}
        </Button>
        <PhoneButton variant="ghost" />
      </PageHero>

      {serviceCategories.map((category) => (
        <Section
          key={category.id}
          id={category.id}
          className={category.id === "hvac" ? "bg-surface" : "bg-background"}
        >
          <Container>
            <SectionHeading
              className="mb-8"
              title={
                category.id === "hvac"
                  ? "HVAC Services"
                  : category.id === "duct"
                    ? "Duct & Vent Services"
                    : category.title
              }
              description={category.intro}
            />
            <ServiceGrid services={getServicesByCategory(category.id)} />
          </Container>
        </Section>
      ))}

      <BrandsSection tone="surface" />
      <CTASection />
    </>
  );
}
