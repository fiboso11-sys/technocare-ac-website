import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  breadcrumbs?: React.ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section className="bg-hero text-hero-foreground">
      <Container className="pt-28 pb-12 sm:pt-32 sm:pb-16">
        {breadcrumbs}
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-accent uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="h1 max-w-3xl text-balance">{title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-hero-muted sm:text-lg">
          {description}
        </p>
        {children ? <div className="mt-7 flex flex-wrap gap-3">{children}</div> : null}
      </Container>
    </section>
  );
}

export function PageHeroShell({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={cn("bg-hero text-hero-foreground", className)}>
      {children}
    </section>
  );
}
