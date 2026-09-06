import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
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
  title: "AC & HVAC Services in Chennai | TECHNO CARE",
  description:
    "Browse TECHNO CARE AC and HVAC services in Chennai: installation, repair, maintenance, cleaning, portable AC support, and duct and vent work.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="AC and HVAC services in Chennai"
        description={`${company.name} covers installation, repair, maintenance, and cleaning for air-conditioning and HVAC systems across ${company.serviceArea}.`}
      >
        <Button href={cta.primary.href} variant="primary">
          {cta.primary.label}
        </Button>
        <PhoneButton variant="ghost" />
      </PageHero>

      {serviceCategories.map((category) => (
        <Section
          key={category.id}
          className={category.id === "hvac" ? "bg-surface" : "bg-background"}
        >
          <Container>
            <SectionHeading
              className="mb-8"
              title={category.title}
              description={category.intro}
            />
            <ServiceGrid services={getServicesByCategory(category.id)} />
          </Container>
        </Section>
      ))}

      <CTASection />
    </>
  );
}
