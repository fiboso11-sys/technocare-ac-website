import { MapPin, Phone, Snowflake, Wrench } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";

const items = [
  {
    icon: Snowflake,
    label: "Authorised Dealer",
    detail: company.secondaryPositioning,
  },
  {
    icon: MapPin,
    label: company.serviceArea,
    detail: `${company.locality}, ${company.city}`,
  },
  {
    icon: Wrench,
    label: "Sales • Service • Repair • AMC",
    detail: "Complete AC lifecycle support",
  },
  {
    icon: Phone,
    label: `Call ${company.phoneDisplay}`,
    detail: "One-tap on mobile",
    href: `tel:${company.phoneE164}`,
  },
];

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-surface">
      <Container className="grid gap-3 py-4 sm:grid-cols-2 sm:gap-4 sm:py-5 lg:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;
          const content = (
            <span className="flex min-h-14 items-center gap-3 rounded-md border border-transparent px-1 py-1 sm:min-h-16">
              <span className="grid size-10 shrink-0 place-items-center rounded-md bg-secondary text-primary">
                <Icon className="size-4" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-foreground">
                  {item.label}
                </span>
                <span className="mt-0.5 block text-xs text-muted-foreground">
                  {item.detail}
                </span>
              </span>
            </span>
          );
          return item.href ? (
            <a
              key={item.label}
              href={item.href}
              className="rounded-md transition-colors hover:bg-muted/70"
            >
              {content}
            </a>
          ) : (
            <div key={item.label}>{content}</div>
          );
        })}
      </Container>
    </section>
  );
}
