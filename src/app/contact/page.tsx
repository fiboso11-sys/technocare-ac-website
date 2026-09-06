import type { Metadata } from "next";
import { ContactCards } from "@/components/contact/ContactCards";
import { ContactForm } from "@/components/contact/ContactForm";
import { DirectionsButton } from "@/components/ui/DirectionsButton";
import { PageHero } from "@/components/ui/PageHero";
import { PhoneButton } from "@/components/ui/PhoneButton";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { company } from "@/data/company";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact TECHNO CARE | AC & HVAC Service Chennai",
  description:
    "Contact TECHNO CARE in Nolambur, Chennai for AC and HVAC installation, repair, maintenance, and cleaning. Call 094449 27947 or request service online.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={`Contact ${company.name}`}
        description={`Call, request service, or get directions to the Nolambur, Chennai location. ${company.name} serves ${company.serviceArea}.`}
      >
        <PhoneButton variant="primary" showNumber />
        <DirectionsButton variant="ghost" />
      </PageHero>

      <Section className="bg-background">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <SectionHeading
              className="mb-6"
              title="Reach the team"
              description="Use the phone number for the fastest response, or send a service request with the details of the job."
            />
            <ContactCards />
            <p className="mt-6 text-sm text-muted-foreground">
              Service area: {company.serviceArea}
            </p>
          </div>
          <div>
            <SectionHeading className="mb-6" title="Request service" />
            <ContactForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
