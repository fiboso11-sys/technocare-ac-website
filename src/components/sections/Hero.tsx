import { PhoneButton } from "@/components/ui/PhoneButton";
import { DirectionsButton } from "@/components/ui/DirectionsButton";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroFallbackVisual } from "@/components/sections/HeroFallbackVisual";
import { SafeHeroPhoto } from "@/components/sections/SafeHeroPhoto";
import { company } from "@/data/company";
import { media } from "@/data/media";
import { cta } from "@/data/navigation";

const offerIcons = [
  "Sales",
  "Installation",
  "Service",
  "Repair",
  "Maintenance",
  "AMC",
  "Refurbishing",
  "HVAC",
] as const;

export function Hero() {
  const hero = media.homeHero;
  const usePhoto = hero.enabled;

  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-hero text-hero-foreground">
      <div className="hero-grid absolute inset-0 opacity-15" aria-hidden="true" />
      <Container className="relative grid items-center gap-5 pt-[calc(4rem+2rem+env(safe-area-inset-top))] pb-8 sm:gap-7 sm:pt-[calc(4.25rem+2rem+env(safe-area-inset-top))] sm:pb-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 lg:pt-32 lg:pb-16">
        <div className="order-1">
          <p className="mb-2 text-xs font-semibold tracking-[0.18em] text-[#ffb4b8] uppercase sm:mb-3">
            {company.name} · {company.locality}, {company.city}
          </p>
          <h1 className="h1 max-w-xl text-pretty leading-[1.12] max-sm:text-[1.5rem]">
            <span className="block">Aircondition Authorised Dealer</span>
            <span className="mt-1 block">Sales &amp; Service</span>
          </h1>
          <p className="mt-3 max-w-lg text-base leading-[1.65] text-hero-muted sm:mt-4 sm:text-lg">
            {company.heroSupport}
          </p>
          <p className="mt-2 max-w-lg text-sm text-hero-muted/90">
            {company.secondaryPositioning}
          </p>

          <ul className="mt-4 hidden flex-wrap gap-2 sm:mt-5 sm:flex">
            {offerIcons.map((item) => (
              <li
                key={item}
                className="rounded-md border border-white/15 bg-white/5 px-2.5 py-1 text-[0.7rem] font-semibold tracking-wide text-hero-foreground"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-col gap-3 sm:mt-6">
            <div className="flex flex-wrap gap-3">
              <Button href={cta.exploreSales.href} variant="primary">
                {cta.exploreSales.label}
              </Button>
              <Button href={cta.primary.href} variant="dark">
                {cta.primary.label}
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <PhoneButton
                variant="ghost"
                className="min-h-10 border-transparent px-0 text-sm font-semibold text-hero-foreground hover:bg-transparent hover:underline"
              />
              <DirectionsButton
                variant="ghost"
                className="min-h-10 border-transparent px-0 text-sm font-medium text-hero-muted hover:bg-transparent hover:text-hero-foreground hover:underline max-sm:hidden"
              />
            </div>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-hero-muted sm:mt-4">
            <a href={`tel:${company.phoneE164}`} className="font-semibold text-hero-foreground">
              {company.phoneDisplay}
            </a>
            <span className="text-hero-muted"> / </span>
            <a
              href={`tel:${company.phoneSecondaryE164}`}
              className="font-semibold text-hero-foreground"
            >
              {company.phoneSecondaryDisplay}
            </a>
          </p>
        </div>

        <div className="order-2">
          <div className="relative overflow-hidden rounded-[1.1rem] border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.28)]">
            <div className="relative aspect-[16/10] w-full max-h-[9.5rem] bg-[#1a4a7a] sm:aspect-[4/3] sm:max-h-none lg:max-h-[30rem]">
              {usePhoto ? (
                <SafeHeroPhoto
                  src={hero.src}
                  alt={hero.alt}
                  objectPosition={hero.objectPosition}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 48vw"
                />
              ) : (
                <HeroFallbackVisual />
              )}
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f2748]/30 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
