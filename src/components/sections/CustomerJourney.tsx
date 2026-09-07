import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const newCustomer = ["Choose", "Buy", "Install", "Service", "Maintain"] as const;
const existingOwner = ["Inspect", "Repair / Refurbish", "Maintain"] as const;

export function CustomerJourney() {
  return (
    <Section className="bg-background">
      <Container>
        <SectionHeading
          className="mb-8"
          eyebrow="Customer journey"
          title="Complete AC lifecycle support"
          description="From choosing a new multi-brand AC through installation, service and maintenance — and ongoing care for existing units."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <JourneyCard title="New installation" steps={newCustomer} />
          <JourneyCard title="Existing AC owners" steps={existingOwner} />
        </div>
      </Container>
    </Section>
  );
}

function JourneyCard({
  title,
  steps,
}: {
  title: string;
  steps: readonly string[];
}) {
  return (
    <article className="rounded-xl border border-border bg-surface p-5 sm:p-6">
      <h3 className="text-base font-semibold text-accent sm:text-lg">{title}</h3>
      <ol className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
        {steps.map((step, index) => (
          <li key={step} className="flex items-center gap-2">
            <span className="inline-flex min-h-10 min-w-[7.5rem] items-center justify-center rounded-md border border-border bg-secondary px-3 text-center text-sm font-semibold uppercase tracking-wide text-foreground">
              {step}
            </span>
            {index < steps.length - 1 ? (
              <span
                className="hidden text-primary sm:inline"
                aria-hidden="true"
              >
                →
              </span>
            ) : null}
            {index < steps.length - 1 ? (
              <span className="text-primary sm:hidden" aria-hidden="true">
                ↓
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </article>
  );
}
