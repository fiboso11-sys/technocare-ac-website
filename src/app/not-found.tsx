import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PhoneButton } from "@/components/ui/PhoneButton";
import { cta } from "@/data/navigation";

export default function NotFound() {
  return (
    <section className="bg-hero text-hero-foreground">
      <Container className="flex min-h-[70vh] flex-col justify-center pt-28 pb-16">
        <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
          404
        </p>
        <h1 className="h1 mt-3 max-w-xl">This page is not available</h1>
        <p className="mt-4 max-w-lg text-hero-muted">
          The page you requested does not exist or is no longer published. You
          can return home, view services, or contact TECHNO CARE directly.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/" variant="primary">
            Back to home
          </Button>
          <Button href={cta.services.href} variant="ghost">
            View services
          </Button>
          <PhoneButton variant="ghost" />
        </div>
        <p className="mt-8 text-sm text-hero-muted">
          Or go to{" "}
          <Link href="/contact" className="text-hero-foreground underline">
            the contact page
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}
