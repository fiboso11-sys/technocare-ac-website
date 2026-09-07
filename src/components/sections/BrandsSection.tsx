import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { BrandStrip } from "@/components/brand/BrandStrip";
import { aboutContent } from "@/data/content";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";

type BrandsSectionProps = {
  className?: string;
  showLink?: boolean;
  tone?: "light" | "surface";
  compact?: boolean;
};

export function BrandsSection({
  className,
  showLink = true,
  tone = "surface",
  compact = false,
}: BrandsSectionProps) {
  return (
    <Section
      className={cn(
        tone === "surface" ? "bg-surface" : "bg-background",
        compact && "py-10 sm:py-12 lg:py-12",
        className,
      )}
    >
      <Container>
        <SectionHeading
          eyebrow="Multi-brand AC"
          title="Leading AC Brands We Deal With"
          description={aboutContent.brandsIntro}
        />
        <div className="mt-8">
          <BrandStrip />
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          {company.brandsSupportLine}
        </p>
        <p className="mt-3 max-w-3xl text-xs leading-relaxed text-muted-foreground">
          {company.trademarkDisclaimer}
        </p>
        {showLink ? (
          <div className="mt-7">
            <Button href="/brands" variant="secondary">
              View brands
            </Button>
          </div>
        ) : null}
      </Container>
    </Section>
  );
}
