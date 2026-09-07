import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { company, hasEmail } from "@/data/company";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | TECHNO CARE",
  description:
    "How TECHNO CARE handles information submitted through the website enquiry form and related technical data.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="This page explains, in general terms, how information collected through the TECHNO CARE website is used. It should be reviewed with legal counsel before being treated as a final legal document."
      />
      <Section className="bg-surface">
        <Container className="max-w-3xl space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-lg font-semibold text-foreground">Who we are</h2>
            <p className="mt-2">
              This website is operated by {company.name}, a multi-brand AC
              reseller and service provider in {company.city}, {company.state},{" "}
              {company.country}.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">
              Information submitted through forms
            </h2>
            <p className="mt-2">
              The contact form may collect your name, phone number, email address,
              service required, location or area, preferred contact method, and
              message. This information is used only to respond to service
              enquiries and related follow-up.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">
              Contact information
            </h2>
            <p className="mt-2">
              Phone numbers and any email addresses you provide are used to reach
              you about the enquiry you submitted. They are not sold or used for
              unrelated marketing from this website.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">
              Technical website information
            </h2>
            <p className="mt-2">
              Hosting and related infrastructure may process technical data such
              as IP address, browser type, and pages requested, as part of
              operating and securing the website.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">Cookies</h2>
            <p className="mt-2">
              This website does not rely on advertising cookies. Essential
              technical cookies or similar storage may be used by the hosting
              platform to operate the site.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">
              Third-party services
            </h2>
            <p className="mt-2">
              Directions links may open Google Maps. If an email delivery
              provider is later connected, enquiry details may be transmitted to
              that provider solely to deliver the message. Analytics tools are
              not installed by default.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">Data retention</h2>
            <p className="mt-2">
              Enquiry information is retained only as long as needed to handle
              the request and any related service communication, unless a longer
              period is required for legitimate business or legal reasons.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">Contact</h2>
            <p className="mt-2">
              Privacy questions about this website can be raised by calling{" "}
              {company.phoneDisplay}
              {hasEmail() ? ` or emailing ${company.email}` : ""}.
            </p>
          </section>
        </Container>
      </Section>
    </>
  );
}
