import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PhoneButton } from "@/components/ui/PhoneButton";
import { aboutContent } from "@/data/content";
import { company } from "@/data/company";
import { cta } from "@/data/navigation";

export function AboutPreview() {
  return (
    <Section className="bg-surface">
      <Container className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-center lg:gap-12">
        <div>
          <SectionHeading
            eyebrow="About TECHNO CARE"
            title={`${company.name} in ${company.locality}, ${company.city}`}
            description={`${company.positioning}. ${aboutContent.whoWeAre}`}
          />
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            {aboutContent.whatWeDo}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href={cta.about.href} variant="dark">
              {cta.about.label}
            </Button>
            <PhoneButton variant="secondary" showNumber />
          </div>
        </div>
        <aside className="rounded-xl border border-border bg-background p-6 sm:p-7">
          <p className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">
            Visit / call
          </p>
          <p className="mt-3 text-lg font-semibold text-foreground">{company.name}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {company.addressLine1}
            <br />
            {company.addressLine2}
            <br />
            {company.addressLine3}
            <br />
            {company.city}, {company.state} {company.postalCode}
          </p>
          <p className="mt-4 text-sm font-semibold text-foreground">
            Serving {company.serviceArea}
          </p>
          <a
            href={`tel:${company.phoneE164}`}
            className="mt-3 inline-block text-base font-semibold text-primary"
          >
            {company.phoneDisplay}
          </a>
        </aside>
      </Container>
    </Section>
  );
}
