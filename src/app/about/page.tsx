import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { BrandsSection } from "@/components/sections/BrandsSection";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { PhoneButton } from "@/components/ui/PhoneButton";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutContent } from "@/data/content";
import { company } from "@/data/company";
import { cta } from "@/data/navigation";
import { getServicesByCategory } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About TECHNO CARE | Aircondition Authorised Dealer Sales & Service",
  description: aboutContent.whoWeAre,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={`${company.name} — ${company.positioning}`}
        description={aboutContent.whoWeAre}
      >
        <PhoneButton variant="ghost" />
        <Button href={cta.primary.href} variant="primary">
          {cta.primary.label}
        </Button>
      </PageHero>

      <Section className="bg-surface">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading title="Who we are" description={aboutContent.whoWeAre} />
          </div>
          <div>
            <SectionHeading title="What we do" description={aboutContent.whatWeDo} />
          </div>
        </Container>
      </Section>

      <BrandsSection showLink tone="light" />

      <Section className="bg-background">
        <Container>
          <SectionHeading
            className="mb-8"
            title="AC services"
            description="Air-conditioning sales support, installation, repair, maintenance, cleaning, AMC, and portable AC support."
          />
          <ServiceGrid services={getServicesByCategory("ac")} />
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <SectionHeading
            className="mb-8"
            title="HVAC services"
            description="HVAC system repair and maintenance, plus duct and vent installation, repair, and cleaning."
          />
          <ServiceGrid
            services={[
              ...getServicesByCategory("hvac"),
              ...getServicesByCategory("duct"),
            ]}
          />
        </Container>
      </Section>

      <Section className="bg-background">
        <Container className="max-w-3xl">
          <SectionHeading
            title="Our service approach"
            description={aboutContent.approach}
          />
        </Container>
      </Section>

      <ProcessSteps />
      <ServiceArea />
      <CTASection />
    </>
  );
}
