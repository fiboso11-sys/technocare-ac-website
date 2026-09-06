import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getServicesByCategory } from "@/data/services";

export function HvacServicesFeature() {
  const services = [
    ...getServicesByCategory("hvac"),
    ...getServicesByCategory("duct"),
  ];

  return (
    <Section className="bg-hero text-hero-foreground">
      <Container>
        <SectionHeading
          className="mb-10"
          tone="dark"
          eyebrow="HVAC & duct work"
          title="System maintenance, repair, and duct & vent services"
          description="Keep larger systems working, fix faults when they appear, and look after the ducts and vents that carry the air."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="group rounded-lg border border-white/10 bg-white/5 p-5 transition-colors hover:border-accent/40"
            >
              <h3 className="text-base font-semibold text-hero-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-hero-muted">
                {service.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                View service
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
