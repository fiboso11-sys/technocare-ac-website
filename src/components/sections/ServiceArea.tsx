import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { DirectionsButton } from "@/components/ui/DirectionsButton";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { addressLines, company } from "@/data/company";

export function ServiceArea() {
  return (
    <Section className="bg-surface">
      <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <SectionHeading
          eyebrow="Service area"
          title="Multi-brand AC service across Chennai"
          description={`Serving ${company.serviceArea}. The workshop and office location is in ${company.locality}, ${company.city}.`}
        />
        <div className="rounded-lg border border-border bg-background p-6">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            <MapPin className="size-4" aria-hidden="true" />
            {company.name}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {addressLines().join(", ")}
          </p>
          <p className="mt-3 text-sm text-foreground">
            Confirmed location: {company.locality}, {company.city}
          </p>
          <div className="mt-6">
            <DirectionsButton variant="dark" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
