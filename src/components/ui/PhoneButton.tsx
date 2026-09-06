import { Phone } from "lucide-react";
import { company, phoneHref } from "@/data/company";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type PhoneButtonProps = {
  variant?: "primary" | "secondary" | "dark" | "ghost";
  label?: string;
  showNumber?: boolean;
  className?: string;
};

export function PhoneButton({
  variant = "secondary",
  label,
  showNumber = false,
  className,
}: PhoneButtonProps) {
  return (
    <Button
      href={phoneHref()}
      variant={variant}
      external
      className={cn(className)}
    >
      <Phone className="size-4" aria-hidden="true" />
      {label ?? (showNumber ? `Call ${company.phoneDisplay}` : "Call Now")}
    </Button>
  );
}
