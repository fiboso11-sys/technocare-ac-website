import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/content";

export function ProcessSteps() {
  return (
    <Section className="bg-background">
      <Container>
        <SectionHeading
          className="mb-10"
          eyebrow="How it works"
          title="A clear path from first contact to completed work"
        />
        <ol className="grid gap-4 md:grid-cols-5">
          {processSteps.map((step) => (
            <li
              key={step.step}
              className="rounded-lg border border-border bg-surface p-5"
            >
              <p className="text-xs font-semibold tracking-[0.16em] text-accent">
                {step.step}
              </p>
              <h3 className="mt-3 text-base font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
