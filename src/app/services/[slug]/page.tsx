import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { PhoneButton } from "@/components/ui/PhoneButton";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { ServiceIcon } from "@/components/services/ServiceIcon";
import { ServiceMarketingHero } from "@/components/services/ServiceMarketingHero";
import { CTASection } from "@/components/sections/CTASection";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { company } from "@/data/company";
import { cta } from "@/data/navigation";
import {
  getRelatedServices,
  getServiceBySlug,
  services,
} from "@/data/services";
import { getServiceHero, getServicePhoto } from "@/data/media";
import { buildMetadata } from "@/lib/seo";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

const marketingCopy: Record<
  string,
  { headline: string; support: string; showBrandRibbon?: boolean }
> = {
  "ac-sales": {
    headline: "Multi-Brand AC Sales & Installation",
    support:
      "Helping homes and businesses choose, buy and install air-conditioning solutions across Chennai.",
    showBrandRibbon: true,
  },
  "ac-installation": {
    headline: "Professional AC Installation",
    support:
      "Careful placement, connections and commissioning so a new air-conditioner is ready for everyday use.",
  },
  "ac-repair": {
    headline: "AC Repair & Service",
    support:
      "Practical fault-finding and servicing when cooling, noise, leaks or start-up problems appear.",
  },
  "ac-amc": {
    headline: "Annual Maintenance Contracts (AMC)",
    support:
      "Planned preventive servicing for residential and commercial air-conditioners — details confirmed in writing for each enquiry.",
  },
  "ac-refurbishing": {
    headline: "AC Refurbishing",
    support:
      "Inspection, diagnosis, cleaning, repair, parts assessment and testing for serviceable air-conditioning equipment.",
  },
  "hvac-system-repair": {
    headline: "HVAC & Commercial AC Solutions",
    support:
      "System-level HVAC repair and support for offices, shops and commercial premises across Chennai.",
  },
  "hvac-system-maintenance": {
    headline: "HVAC System Maintenance",
    support:
      "Scheduled HVAC maintenance for commercial and larger cooling systems.",
  },
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return buildMetadata({
      title: "Service not found | TECHNO CARE",
      description: "The requested service page is not available.",
      path: `/services/${slug}`,
    });
  }
  return buildMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(service.slug);
  const marketingHero = getServiceHero(service.slug);
  const copy = marketingCopy[service.slug];
  const photo = getServicePhoto(service.slug) ?? service.image;
  const photoIsSvg = photo.endsWith(".svg");
  const ctaHref = `/contact?service=${service.slug}`;
  const ctaLabel = service.ctaLabel ?? cta.primary.label;

  return (
    <>
      {marketingHero && copy ? (
        <ServiceMarketingHero
          service={service}
          hero={marketingHero}
          headline={copy.headline}
          support={copy.support}
          showBrandRibbon={copy.showBrandRibbon}
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
        />
      ) : (
        <PageHero
          breadcrumbs={
            <Breadcrumbs
              items={[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { label: service.title },
              ]}
            />
          }
          title={service.title}
          description={service.description}
        >
          <Button href={ctaHref} variant="primary">
            {ctaLabel}
          </Button>
          <PhoneButton variant="ghost" showNumber className="max-sm:hidden" />
          <PhoneButton variant="ghost" className="sm:hidden" />
        </PageHero>
      )}

      <Section className="bg-surface">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div>
            <SectionHeading title="About this service" description={service.longDescription} />
            <p className="mt-4 text-sm text-muted-foreground">
              Serving {company.serviceArea}.
            </p>
          </div>
          <aside className="overflow-hidden rounded-lg border border-border bg-background">
            {marketingHero ? (
              <div className="relative aspect-[16/10] bg-secondary">
                <Image
                  src={marketingHero.src}
                  alt={marketingHero.alt}
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 360px"
                  style={{ objectPosition: marketingHero.objectPosition }}
                />
              </div>
            ) : (
              <div className="relative aspect-[16/10] bg-secondary">
                <Image
                  src={photo}
                  alt={service.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 360px"
                  unoptimized={photoIsSvg}
                />
              </div>
            )}
            <div className="p-6">
              <span className="grid size-12 place-items-center rounded-md bg-secondary text-primary">
                <ServiceIcon name={service.icon} className="size-6" />
              </span>
              <h2 className="mt-4 text-lg font-semibold">{service.shortTitle}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
            </div>
          </aside>
        </Container>
      </Section>

      <Section className="bg-background">
        <Container className="grid gap-8 lg:grid-cols-3">
          <div>
            <h2 className="text-xl font-semibold">Common reasons</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {service.commonReasons.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">What this service covers</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {service.serviceIncludes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Benefits</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {service.benefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <ProcessSteps />

      {related.length ? (
        <Section className="bg-surface">
          <Container>
            <SectionHeading className="mb-8" title="Related services" />
            <ServiceGrid services={related} />
          </Container>
        </Section>
      ) : null}

      <CTASection />
    </>
  );
}
