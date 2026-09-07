import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  getEnabledGalleryItems,
  getFeaturedGalleryItems,
  hasGalleryPhotos,
} from "@/data/gallery";

type WorkGalleryProps = {
  mode?: "featured" | "full";
};

/**
 * Customer-facing gallery. Renders nothing until genuine work photos are enabled.
 */
export function WorkGallery({ mode = "featured" }: WorkGalleryProps) {
  if (!hasGalleryPhotos()) return null;

  const items =
    mode === "featured" ? getFeaturedGalleryItems(6) : getEnabledGalleryItems();
  if (!items.length) return null;

  return (
    <Section className="bg-background">
      <Container>
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Our work"
            title="Our Work Gallery"
            description="Installation, service and multi-brand AC work by TECHNO CARE in Chennai."
          />
          {mode === "featured" ? (
            <Button href="/gallery" variant="secondary" className="shrink-0">
              View gallery
            </Button>
          ) : null}
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li
              key={item.id}
              className="overflow-hidden rounded-xl border border-border bg-surface"
            >
              <div className="relative aspect-[4/3] bg-muted">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <p className="text-xs font-semibold tracking-[0.12em] text-accent uppercase">
                  {item.category}
                </p>
                <p className="mt-1 text-sm font-semibold text-foreground">
                  {item.title}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
