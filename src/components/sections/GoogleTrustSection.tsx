import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  company,
  hasGoogleBusinessUrl,
  hasGoogleReviewsUrl,
} from "@/data/company";
import { getGoogleMapsUrl } from "@/lib/maps";

export function GoogleTrustSection() {
  const mapsUrl = getGoogleMapsUrl();
  const hasBusiness = hasGoogleBusinessUrl();
  const hasReviews = hasGoogleReviewsUrl();

  return (
    <Section className="bg-surface">
      <Container>
        <SectionHeading
          className="mb-6"
          eyebrow="Google"
          title="TECHNO CARE on Google"
          description={`Find TECHNO CARE in ${company.locality}, ${company.city} for multi-brand AC sales, installation, service and repair.`}
        />
        <div className="flex flex-wrap gap-3">
          {hasBusiness ? (
            <Button href={company.googleBusinessUrl} variant="secondary" external>
              View Google Business
            </Button>
          ) : null}
          {hasReviews ? (
            <Button href={company.googleReviewsUrl} variant="secondary" external>
              Read Google Reviews
            </Button>
          ) : null}
          <Button href={mapsUrl} variant="dark" external>
            Get Directions
          </Button>
        </div>
      </Container>
    </Section>
  );
}
