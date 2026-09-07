import Link from "next/link";
import { BrandMark } from "@/components/brand/BrandMark";
import { Container } from "@/components/ui/Container";
import {
  addressLines,
  company,
  hasEmail,
  hasPhone,
  hasSecondaryPhone,
  phoneHref,
  phoneSecondaryHref,
} from "@/data/company";
import { footerLegalNavigation, footerServiceLinks, getPrimaryNavigation } from "@/data/navigation";

export function Footer() {
  const year = new Date().getFullYear();
  const navigation = getPrimaryNavigation();

  return (
    <footer className="bg-footer text-footer-foreground">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <BrandMark tone="light" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-hero-muted">
            {company.secondaryPositioning}. {company.offerLine} across{" "}
            {company.serviceArea}.
          </p>
          <p className="mt-3 max-w-xs text-xs leading-relaxed text-hero-muted/90">
            {company.trademarkDisclaimer}
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
            {navigation.map((item) => (
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
            <li>
              <a href="/sitemap.xml" className="hover:text-hero-foreground">
                Sitemap
              </a>
            </li>
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
                {hasSecondaryPhone() ? (
                  <>
                    {" / "}
                    <a href={phoneSecondaryHref()} className="hover:text-hero-foreground">
                      {company.phoneSecondaryDisplay}
                    </a>
                  </>
                ) : null}
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
              <a
                href={`https://${company.domain}`}
                className="hover:text-hero-foreground"
                rel="noopener noreferrer"
              >
                www.{company.domain}
              </a>
            </li>
            <li>
              {addressLines().map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 text-xs text-hero-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
          <p>
            {company.positioning}
          </p>
        </Container>
      </div>
    </footer>
  );
}
