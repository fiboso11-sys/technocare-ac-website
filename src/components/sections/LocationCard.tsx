import { MapPin, Navigation } from "lucide-react";
import { DirectionsButton } from "@/components/ui/DirectionsButton";
import { addressLines, company } from "@/data/company";

export function LocationCard() {
  return (
    <aside className="rounded-lg border border-border bg-surface p-6">
      <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-accent uppercase">
        <MapPin className="size-4" aria-hidden="true" />
        Location
      </p>
      <h2 className="mt-3 text-lg font-semibold">{company.name}</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {addressLines().map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </p>
      <p className="mt-4 inline-flex items-center gap-2 text-sm text-foreground">
        <Navigation className="size-4 text-primary" aria-hidden="true" />
        {company.serviceArea}
      </p>
      <div className="mt-6">
        <DirectionsButton variant="dark" />
      </div>
    </aside>
  );
}
