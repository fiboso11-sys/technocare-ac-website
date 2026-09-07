"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { BrandMark } from "@/components/brand/BrandMark";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { company, phoneHref } from "@/data/company";
import { cta, getPrimaryNavigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const navigation = getPrimaryNavigation();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Always solid so the white header never overlaps the dark hero.
  const solid = true;
  const tone = "dark" as const;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-surface/95 pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[4.25rem]">
        <Link href="/" className="shrink-0" aria-label={`${company.name} home`}>
          <BrandMark tone={tone} />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  solid
                    ? active
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                    : active
                      ? "text-hero-foreground"
                      : "text-hero-muted hover:text-hero-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button href={phoneHref()} variant={solid ? "secondary" : "ghost"} external>
            <Phone className="size-4" aria-hidden="true" />
            <span className="xl:hidden">Call Now</span>
            <span className="hidden xl:inline">Call {company.phoneDisplay}</span>
          </Button>
          <Button href={cta.primary.href} variant="primary">
            {cta.primary.label}
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={phoneHref()}
            className={cn(
              "inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border",
              solid
                ? "border-border text-foreground"
                : "border-white/20 text-hero-foreground",
            )}
            aria-label={`Call ${company.phoneDisplay}`}
          >
            <Phone className="size-4" />
          </a>
          <button
            type="button"
            className={cn(
              "inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border",
              solid
                ? "border-border text-foreground"
                : "border-white/20 text-hero-foreground",
            )}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </Container>

      {open ? (
        <div
          id="mobile-navigation"
          className="border-t border-border bg-surface lg:hidden"
        >
          <Container className="flex min-h-[calc(100dvh-4.25rem-env(safe-area-inset-top))] flex-col gap-1 overflow-y-auto py-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-muted"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <Button href={phoneHref()} variant="secondary" external onClick={() => setOpen(false)}>
                Call {company.phoneDisplay}
              </Button>
              <Button href={cta.primary.href} variant="primary" onClick={() => setOpen(false)}>
                {cta.primary.label}
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
