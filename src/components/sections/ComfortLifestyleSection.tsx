import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { media } from "@/data/media";
import { cta } from "@/data/navigation";

export function ComfortLifestyleSection() {
  const image = media.lifestyleComfort;
  if (!image.enabled) return null;

  return (
    <Section className="bg-surface">
      <Container className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="relative overflow-hidden rounded-xl border border-border">
          <div className="relative aspect-[4/3] bg-muted">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover"
              style={{ objectPosition: image.objectPosition }}
            />
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">
            Comfort for every space
          </p>
          <h2 className="mt-3 h2 text-balance text-foreground">
            AC solutions for homes and everyday living
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            From bedrooms and living spaces to offices and commercial environments,
            TECHNO CARE provides AC sales, installation, service, AMC and HVAC support
            for different comfort requirements across Chennai.
          </p>
          <div className="mt-7">
            <Button href={cta.exploreSolutions.href} variant="primary">
              {cta.exploreSolutions.label}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
