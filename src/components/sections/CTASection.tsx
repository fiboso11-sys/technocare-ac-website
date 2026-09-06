import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PhoneButton } from "@/components/ui/PhoneButton";
import { Section } from "@/components/ui/Section";
import { company } from "@/data/company";
import { cta } from "@/data/navigation";

export function CTASection() {
  return (
    <Section className="bg-hero text-hero-foreground">
      <Container className="max-w-3xl">
        <h2 className="h2 text-balance">Need AC or HVAC service?</h2>
        <p className="mt-3 text-base leading-relaxed text-hero-muted">
          Contact {company.name} for installation, repair, maintenance, and
          cleaning requirements in {company.serviceArea}.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Button href={cta.primary.href} variant="primary">
            {cta.primary.label}
          </Button>
          <PhoneButton variant="ghost" showNumber />
        </div>
      </Container>
    </Section>
  );
}
