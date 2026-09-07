import Link from "next/link";
import {
  ArrowRight,
  ClipboardCheck,
  Settings,
  Shield,
  Snowflake,
  Sparkles,
  Wrench,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { acHighlights } from "@/data/content";

const hrefs = [
  "/services/ac-sales",
  "/services/ac-installation",
  "/services/ac-repair",
  "/services/ac-amc",
  "/services/ac-refurbishing",
] as const;

const icons = [Snowflake, Wrench, Settings, Shield, Sparkles] as const;

export function AcServicesFeature() {
  return (
    <Section className="bg-secondary/40">
      <Container>
        <SectionHeading
          className="mb-8"
          eyebrow="Air conditioning"
          title="Sales, installation, service, AMC and more"
          description="The AC jobs customers ask for most often — each with a clear service page and a direct way to request help."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {acHighlights.map((item, index) => {
            const Icon = icons[index] ?? ClipboardCheck;
            const href = hrefs[index] ?? "/services";
            return (
              <Link
                key={item.title}
                href={href}
                className="group flex gap-4 rounded-lg border border-border bg-surface p-5 transition-colors hover:border-primary/35"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-md bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <ArrowRight className="size-4 shrink-0 text-primary opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </span>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
