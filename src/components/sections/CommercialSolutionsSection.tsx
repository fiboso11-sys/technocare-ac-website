import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { media } from "@/data/media";
import { cta } from "@/data/navigation";

export function CommercialSolutionsSection() {
  const image = media.hvacHero;
  if (!image.enabled) return null;

  return (
    <Section className="bg-background">
      <Container className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="order-2 lg:order-1">
          <p className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">
            AC solutions for business
          </p>
          <h2 className="mt-3 h2 text-balance text-foreground">
            Commercial and HVAC comfort for workplaces
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Offices, shops, commercial premises and larger facilities can discuss sales,
            installation, maintenance, AMC and HVAC support with TECHNO CARE — with a
            practical plan based on the site.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2 text-sm font-semibold text-foreground">
            {["Sales", "Installation", "Maintenance", "AMC", "HVAC"].map((item) => (
              <li
                key={item}
                className="rounded-md border border-border bg-surface px-3 py-1.5"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-7">
            <Button href={cta.commercial.href} variant="dark">
              {cta.commercial.label}
            </Button>
          </div>
        </div>
        <div className="order-1 lg:order-2 relative overflow-hidden rounded-xl border border-border">
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
      </Container>
    </Section>
  );
}
