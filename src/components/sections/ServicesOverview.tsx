import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { cta } from "@/data/navigation";
import {
  getFeaturedServices,
  getServicesByCategory,
  serviceCategories,
} from "@/data/services";

export function ServicesOverview() {
  const featured = getFeaturedServices();
  const byCategory = serviceCategories.map((category) => ({
    ...category,
    services: getServicesByCategory(category.id).filter((service) =>
      featured.some((item) => item.id === service.id),
    ),
  }));

  const grouped = byCategory.filter((group) => group.services.length > 0);
  const fallback = featured.length
    ? featured
    : [
        ...getServicesByCategory("ac"),
        ...getServicesByCategory("hvac"),
        ...getServicesByCategory("duct"),
      ].slice(0, 6);

  return (
    <Section className="bg-background">
      <Container>
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Services"
            title="Choose the AC or HVAC help you need"
            description="Installation, repair, maintenance, cleaning, and duct work for Chennai and nearby areas. Open a service for details or request assistance."
          />
          <Button href={cta.services.href} variant="secondary" className="shrink-0">
            {cta.services.label}
          </Button>
        </div>

        {grouped.length > 1 ? (
          <div className="space-y-10">
            {grouped.map((group) => (
              <div key={group.id}>
                <div className="mb-4 flex items-center gap-3">
                  <h3 className="text-sm font-semibold tracking-[0.14em] text-primary uppercase">
                    {group.title}
                  </h3>
                  <span className="h-px flex-1 bg-border" aria-hidden="true" />
                </div>
                <ServiceGrid services={group.services} />
              </div>
            ))}
          </div>
        ) : (
          <ServiceGrid services={fallback} />
        )}
      </Container>
    </Section>
  );
}
