import {
  AirVent,
  ClipboardCheck,
  Fan,
  Settings,
  Shield,
  Snowflake,
  Sparkles,
  Wind,
  Wrench,
} from "lucide-react";
import type { ServiceIconName } from "@/types/content";
import { cn } from "@/lib/utils";

const icons = {
  snowflake: Snowflake,
  wrench: Wrench,
  clipboardCheck: ClipboardCheck,
  sparkles: Sparkles,
  airVent: AirVent,
  settings: Settings,
  shield: Shield,
  pipe: AirVent,
  wind: Wind,
  fan: Fan,
} satisfies Record<ServiceIconName, typeof Snowflake>;

export function ServiceIcon({
  name,
  className,
}: {
  name: ServiceIconName;
  className?: string;
}) {
  const Icon = icons[name];
  return <Icon className={cn("size-5", className)} aria-hidden="true" />;
}
