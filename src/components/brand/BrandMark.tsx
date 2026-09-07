import Image from "next/image";
import { company } from "@/data/company";
import { media } from "@/data/media";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  tone?: "light" | "dark";
  className?: string;
};

export function BrandMark({ tone = "dark", className }: BrandMarkProps) {
  const word = tone === "dark" ? "text-primary" : "text-hero-foreground";
  const sub = tone === "dark" ? "text-accent" : "text-hero-muted";

  if (media.logo.enabled) {
    return (
      <span className={cn("inline-flex h-9 max-w-[14rem] items-center", className)}>
        <Image
          src={media.logo.src}
          alt={media.logo.alt}
          width={media.logo.width}
          height={media.logo.height}
          className="h-8 w-auto max-w-full object-contain object-left"
          priority
        />
      </span>
    );
  }

  return (
    <span className={cn("inline-flex max-w-[18rem] items-center gap-2.5", className)}>
      <span
        className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground shadow-sm"
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="none">
          <path
            d="M12 4v2.5M12 17.5V20M4 12h2.5M17.5 12H20"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M8.2 8.2l1.4 1.4M14.4 14.4l1.4 1.4M15.8 8.2l-1.4 1.4M9.6 14.4l-1.4 1.4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="min-w-0">
        <span className={cn("block text-[0.95rem] font-bold tracking-[0.08em]", word)}>
          {company.name}
        </span>
        <span className={cn("mt-0.5 block text-[0.58rem] leading-snug font-semibold tracking-[0.01em]", sub)}>
          Aircondition Authorised Dealer Sales &amp; Service
        </span>
      </span>
    </span>
  );
}
