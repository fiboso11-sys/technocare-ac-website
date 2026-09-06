import { PhoneButton } from "@/components/ui/PhoneButton";
import { DirectionsButton } from "@/components/ui/DirectionsButton";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroFallbackVisual } from "@/components/sections/HeroFallbackVisual";
import { SafeHeroPhoto } from "@/components/sections/SafeHeroPhoto";
import { company } from "@/data/company";
import { media } from "@/data/media";
import { cta } from "@/data/navigation";

export function Hero() {
  const useOwnerPhoto = media.hero.enabled;

  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-hero text-hero-foreground">
      <div className="hero-grid absolute inset-0 opacity-20" aria-hidden="true" />
      <Container className="relative grid items-center gap-5 pt-[calc(4rem+2.25rem+env(safe-area-inset-top))] pb-9 sm:gap-7 sm:pt-[calc(4.25rem+2rem+env(safe-area-inset-top))] sm:pb-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12 lg:pt-32 lg:pb-16">
        <div className="order-1">
          <p className="mb-2.5 text-xs font-semibold tracking-[0.2em] text-accent uppercase sm:mb-3">
            {company.locality}, {company.city}
          </p>
          <h1 className="h1 max-w-none text-pretty leading-[1.22] max-sm:text-[1.65rem] sm:max-w-xl sm:leading-[1.15]">
            <span className="block">
              Professional <span className="whitespace-nowrap">AC & HVAC</span>
            </span>
            <span className="block sm:inline">services in Chennai</span>
          </h1>
          <p className="mt-3.5 max-w-[32ch] text-base leading-[1.65] text-hero-muted sm:mt-4 sm:max-w-lg sm:text-lg sm:leading-relaxed">
            Installation, repair, maintenance, and cleaning for air-conditioning
            and HVAC systems across {company.serviceArea}.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 sm:mt-6">
            <Button href={cta.primary.href} variant="primary">
              {cta.primary.label}
            </Button>
            <PhoneButton variant="ghost" showNumber className="max-sm:hidden" />
            <PhoneButton variant="ghost" className="sm:hidden" />
            <DirectionsButton variant="ghost" />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-hero-muted sm:mt-5">
            Serving {company.serviceArea}
            <span className="whitespace-nowrap">
              {" "}
              · Call{" "}
              <a href={`tel:${company.phoneE164}`} className="font-semibold text-hero-foreground">
                {company.phoneDisplay}
              </a>
            </span>
          </p>
        </div>

        <div className="order-2">
          <div className="relative overflow-hidden rounded-[1.1rem] border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
            <div className="relative aspect-[16/10] w-full max-h-[10rem] bg-[#12384a] sm:aspect-[4/3] sm:max-h-none lg:max-h-[28rem]">
              {useOwnerPhoto ? (
                <SafeHeroPhoto src={media.hero.src} alt={media.hero.alt} />
              ) : (
                <HeroFallbackVisual />
              )}
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1f2e]/45 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>
            <div className="absolute bottom-2.5 left-2.5 right-2.5 flex flex-wrap gap-2 sm:bottom-4 sm:left-4 sm:right-auto">
              <span className="rounded-md bg-[#0b1f2e]/85 px-3 py-1.5 text-xs font-semibold tracking-wide text-hero-foreground backdrop-blur-sm">
                AC · HVAC · Chennai
              </span>
              <span className="rounded-md bg-accent/95 px-3 py-1.5 text-xs font-semibold tracking-wide text-accent-foreground">
                {company.locality}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
