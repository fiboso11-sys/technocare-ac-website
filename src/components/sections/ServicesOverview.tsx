import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceIcon } from "@/components/services/ServiceIcon";
import { homepageServiceCards } from "@/data/content";
import { cta } from "@/data/navigation";

export function ServicesOverview() {
  return (
    <Section className="bg-background">
      <Container>
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Services"
            title="AC sales, service and HVAC support"
            description="Clear service paths for buying, installing, repairing, maintaining and refurbishing multi-brand air-conditioners in Chennai."
          />
          <Button href={cta.services.href} variant="secondary" className="shrink-0">
            {cta.services.label}
          </Button>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {homepageServiceCards.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group flex h-full gap-4 rounded-lg border border-border bg-surface p-5 transition-colors hover:border-primary/35"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-md bg-primary/10 text-primary">
                  <ServiceIcon name={item.icon} className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-base font-semibold text-foreground group-hover:text-primary">
                    {item.title}
                  </span>
                  <span className="mt-1.5 block text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
