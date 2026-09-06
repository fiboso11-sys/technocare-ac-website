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
import { CTASection } from "@/components/sections/CTASection";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { company } from "@/data/company";
import { cta } from "@/data/navigation";
import {
  getRelatedServices,
  getServiceBySlug,
  services,
} from "@/data/services";
import { getServicePhoto } from "@/data/media";
import { buildMetadata } from "@/lib/seo";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
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
  const photo = getServicePhoto(service.slug) ?? service.image;
  const photoIsSvg = photo.endsWith(".svg");

  return (
    <>
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
        <Button href={cta.primary.href} variant="primary">
          {cta.primary.label}
        </Button>
        <PhoneButton variant="ghost" showNumber className="max-sm:hidden" />
        <PhoneButton variant="ghost" className="sm:hidden" />
      </PageHero>

      <Section className="bg-surface">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div>
            <SectionHeading title="About this service" description={service.longDescription} />
            <p className="mt-4 text-sm text-muted-foreground">
              Serving {company.serviceArea}.
            </p>
          </div>
          <aside className="overflow-hidden rounded-lg border border-border bg-background">
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
