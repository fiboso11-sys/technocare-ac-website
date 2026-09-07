import Image from "next/image";
import { BrandStrip } from "@/components/brand/BrandStrip";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PhoneButton } from "@/components/ui/PhoneButton";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { company } from "@/data/company";
import type { MarketingImage } from "@/data/media";
import type { Service } from "@/types/content";

type ServiceMarketingHeroProps = {
  service: Service;
  hero: MarketingImage;
  headline?: string;
  support?: string;
  showBrandRibbon?: boolean;
  ctaHref: string;
  ctaLabel: string;
};

export function ServiceMarketingHero({
  service,
  hero,
  headline,
  support,
  showBrandRibbon = false,
  ctaHref,
  ctaLabel,
}: ServiceMarketingHeroProps) {
  return (
    <>
      <section className="bg-hero text-hero-foreground">
        <Container className="grid items-center gap-8 pt-28 pb-12 sm:pt-32 sm:pb-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
          <div>
            <Breadcrumbs
              items={[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { label: service.title },
              ]}
            />
            <p className="mt-4 mb-3 text-xs font-semibold tracking-[0.18em] text-[#ffb4b8] uppercase">
              {company.positioningShort}
            </p>
            <h1 className="h1 max-w-2xl text-balance leading-[1.15]">
              {headline ?? service.title}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-hero-muted sm:text-lg">
              {support ?? service.description}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={ctaHref} variant="primary">
                {ctaLabel}
              </Button>
              <PhoneButton variant="ghost" showNumber className="max-sm:hidden" />
              <PhoneButton variant="ghost" className="sm:hidden" />
            </div>
          </div>

          <div>
            <div className="relative overflow-hidden rounded-[1.1rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.28)]">
              <div className="relative aspect-[16/10] w-full bg-[#1a4a7a] sm:aspect-[4/3]">
                <Image
                  src={hero.src}
                  alt={hero.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="object-cover"
                  style={{ objectPosition: hero.objectPosition ?? "center" }}
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f2748]/30 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {showBrandRibbon ? (
        <section className="border-b border-border bg-surface">
          <Container className="py-8 sm:py-10">
            <p className="mb-5 text-xs font-semibold tracking-[0.16em] text-accent uppercase">
              Leading AC Brands We Deal With
            </p>
            <BrandStrip />
            <p className="mt-4 text-xs text-muted-foreground">
              {company.trademarkDisclaimer}
            </p>
          </Container>
        </section>
      ) : null}
    </>
  );
}
