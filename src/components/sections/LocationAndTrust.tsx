import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { GoogleRating } from "@/components/sections/GoogleRating";
import { LocationCard } from "@/components/sections/LocationCard";

export function LocationAndTrust() {
  return (
    <Section className="bg-background">
      <Container className="grid gap-4 lg:grid-cols-2">
        <LocationCard />
        <GoogleRating />
      </Container>
    </Section>
  );
}
