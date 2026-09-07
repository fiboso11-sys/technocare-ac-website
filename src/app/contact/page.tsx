import type { Metadata } from "next";
import { Suspense } from "react";
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
  title: "Contact TECHNO CARE | AC Sales & Service Chennai",
  description: `Contact TECHNO CARE in Nolambur, Chennai — ${company.positioning}. ${company.offerLine}. Call ${company.phoneDisplay}.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={`Contact ${company.name}`}
        description={`Call or request AC sales, installation, service, AMC or refurbishing in ${company.locality}, ${company.city}.`}
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
              description="Use the phone number for the fastest response, or send a request for AC sales, installation, service, repair, AMC, or refurbishing."
            />
            <ContactCards />
            <p className="mt-6 text-sm text-muted-foreground">
              Service area: {company.serviceArea}
            </p>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              {company.trademarkDisclaimer}
            </p>
          </div>
          <div>
            <SectionHeading
              className="mb-6"
              title="Request service"
              description={`${company.secondaryPositioning}. Mention the brand and work you need in your message.`}
            />
            <Suspense fallback={<div className="rounded-lg border border-border bg-surface p-6 text-sm text-muted-foreground">Loading form…</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </Container>
      </Section>
    </>
  );
}
