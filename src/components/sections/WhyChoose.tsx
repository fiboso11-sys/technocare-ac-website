import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyChooseItems } from "@/data/content";

export function WhyChoose() {
  return (
    <Section className="bg-background">
      <Container>
        <SectionHeading
          className="mb-8"
          eyebrow="Why choose TECHNO CARE"
          title="Clear advice and careful AC & HVAC work"
          description="We start with what you need, explain the options in plain language, and complete the agreed job carefully."
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {whyChooseItems.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-border border-l-[3px] border-l-accent bg-surface px-5 py-5"
            >
              <h3 className="text-base font-semibold sm:text-lg">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
