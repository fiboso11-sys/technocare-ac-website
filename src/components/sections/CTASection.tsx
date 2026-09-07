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
        <h2 className="h2 text-balance">Need AC sales, service or AMC?</h2>
        <p className="mt-3 text-base leading-relaxed text-hero-muted">
          {company.positioning}. Contact {company.name} for{" "}
          {company.offerLine.toLowerCase()} in {company.serviceArea}.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Button href={cta.primary.href} variant="primary">
            {cta.primary.label}
          </Button>
          <Button href={cta.sales.href} variant="ghost">
            {cta.sales.label}
          </Button>
          <PhoneButton variant="ghost" showNumber />
        </div>
      </Container>
    </Section>
  );
}
