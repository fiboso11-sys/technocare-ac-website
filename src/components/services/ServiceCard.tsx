import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/types/content";
import { ServiceIcon } from "@/components/services/ServiceIcon";
import { getServicePhoto } from "@/data/media";
import { cn } from "@/lib/utils";

const categoryAccent: Record<Service["category"], string> = {
  ac: "from-primary/15 to-secondary",
  hvac: "from-[#12324d]/20 to-secondary",
  duct: "from-accent/15 to-secondary",
};

export function ServiceCard({ service }: { service: Service }) {
  const photo = getServicePhoto(service.slug);

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface shadow-[var(--shadow)] transition-[border-color,transform,box-shadow] hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-[0_16px_36px_rgba(11,31,46,0.12)]"
    >
      <div
        className={cn(
          "relative flex min-h-[7.5rem] items-end bg-gradient-to-br px-4 py-3",
          categoryAccent[service.category],
        )}
      >
        {photo ? (
          <Image
            src={photo}
            alt={service.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : null}
        {photo ? (
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f2e]/55 to-transparent" />
        ) : null}
        <span
          className={cn(
            "relative z-[1] grid size-11 place-items-center rounded-md border border-white/40 bg-surface/95 text-primary shadow-sm",
            photo && "border-white/20 bg-[#0b1f2e]/70 text-hero-foreground",
          )}
        >
          <ServiceIcon name={service.icon} className="size-5" />
        </span>
      </div>

      <div className="flex flex-1 flex-col px-4 pt-4 pb-4">
        <p className="text-[0.65rem] font-semibold tracking-[0.16em] text-accent uppercase">
          {service.category === "ac"
            ? "Air conditioning"
            : service.category === "hvac"
              ? "HVAC"
              : "Duct & vent"}
        </p>
        <h3 className="mt-1.5 text-[1.05rem] font-semibold text-foreground">
          {service.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          View service
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
