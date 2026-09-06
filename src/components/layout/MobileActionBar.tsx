import { FileText, MapPin, Phone } from "lucide-react";
import { company, phoneHref } from "@/data/company";
import { cta } from "@/data/navigation";
import { getGoogleMapsUrl } from "@/lib/maps";

export function MobileActionBar() {
  if (!company.showMobileActionBar) return null;

  const items = [
    {
      href: phoneHref(),
      label: "Call",
      icon: Phone,
      external: true,
    },
    {
      href: cta.primary.href,
      label: "Request Service",
      icon: FileText,
      external: false,
    },
    {
      href: getGoogleMapsUrl(),
      label: "Directions",
      icon: MapPin,
      external: true,
    },
  ];

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden">
      <nav aria-label="Quick actions" className="grid grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              className="flex min-h-14 flex-col items-center justify-center gap-1 text-[0.7rem] font-semibold tracking-wide text-foreground"
              {...(item.external ? { rel: "noopener noreferrer" } : {})}
            >
              <Icon className="size-4 text-primary" aria-hidden="true" />
              {item.label}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
