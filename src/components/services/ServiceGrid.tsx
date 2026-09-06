import type { Service } from "@/types/content";
import { ServiceCard } from "@/components/services/ServiceCard";

export function ServiceGrid({ services }: { services: Service[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}
