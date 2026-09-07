import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { BrandStrip } from "@/components/brand/BrandStrip";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { PhoneButton } from "@/components/ui/PhoneButton";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { brandNames } from "@/data/brands";
import { company } from "@/data/company";
import { aboutContent } from "@/data/content";
import { cta } from "@/data/navigation";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Multi-Brand AC Solutions | TECHNO CARE Chennai",
  description: `${company.positioning}. Multi-brand AC sales and service including ${brandNames.join(", ")}.`,
  path: "/brands",
});

export default function BrandsPage() {
  return (
    <>
      <PageHero
        eyebrow="Brands"
        title="Multi-Brand AC Solutions"
        description={`${company.positioning}. ${company.secondaryPositioning}. ${aboutContent.brandsIntro}`}
      >
        <PhoneButton variant="ghost" />
        <Button href={cta.sales.href} variant="primary">
          {cta.sales.label}
        </Button>
      </PageHero>

      <Section className="bg-background">
        <Container>
          <SectionHeading
            className="mb-8"
            eyebrow="Leading AC brands"
            title="Brands we supply and service"
            description="TECHNO CARE supports sales and service across multiple AC brands for homes and commercial premises in Chennai."
          />
          <BrandStrip variant="cards" />
          <p className="mt-6 max-w-3xl text-xs leading-relaxed text-muted-foreground">
            {company.trademarkDisclaimer}
          </p>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container className="max-w-3xl">
          <SectionHeading
            title="Sales, installation and after-sales support"
            description="Discuss capacity, brand preference and installation or service needs with TECHNO CARE. Product models and pricing are confirmed at the time of enquiry."
          />
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href={cta.sales.href} variant="primary">
              {cta.sales.label}
            </Button>
            <Button href={cta.primary.href} variant="secondary">
              {cta.primary.label}
            </Button>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
