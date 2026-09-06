import { MapPin } from "lucide-react";
import { cta } from "@/data/navigation";
import { directionsUrl } from "@/lib/maps";
import { Button } from "@/components/ui/Button";

type DirectionsButtonProps = {
  variant?: "primary" | "secondary" | "dark" | "ghost";
  className?: string;
};

export function DirectionsButton({
  variant = "secondary",
  className,
}: DirectionsButtonProps) {
  return (
    <Button href={directionsUrl()} variant={variant} external className={className}>
      <MapPin className="size-4" aria-hidden="true" />
      {cta.directions.label}
    </Button>
  );
}
