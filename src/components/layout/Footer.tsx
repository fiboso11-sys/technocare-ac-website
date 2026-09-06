import Link from "next/link";
import { BrandMark } from "@/components/brand/BrandMark";
import { Container } from "@/components/ui/Container";
import {
  addressLines,
  company,
  hasEmail,
  hasPhone,
  phoneHref,
} from "@/data/company";
import { footerLegalNavigation, footerServiceLinks, primaryNavigation } from "@/data/navigation";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-footer text-footer-foreground">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <BrandMark tone="light" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-hero-muted">
            {company.description}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-[0.14em] uppercase">Services</h2>
          <ul className="mt-4 space-y-2 text-sm text-hero-muted">
            {footerServiceLinks().map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-hero-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-[0.14em] uppercase">Quick links</h2>
          <ul className="mt-4 space-y-2 text-sm text-hero-muted">
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-hero-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
            {footerLegalNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-hero-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-[0.14em] uppercase">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-hero-muted">
            {hasPhone() ? (
              <li>
                <a href={phoneHref()} className="hover:text-hero-foreground">
                  {company.phoneDisplay}
                </a>
              </li>
            ) : null}
            {hasEmail() ? (
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-hero-foreground">
                  {company.email}
                </a>
              </li>
            ) : null}
            <li>
              {addressLines().map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </li>
            <li>Service area: {company.serviceArea}</li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 text-xs text-hero-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
          <p>Nolambur, Chennai</p>
        </Container>
      </div>
    </footer>
  );
}
