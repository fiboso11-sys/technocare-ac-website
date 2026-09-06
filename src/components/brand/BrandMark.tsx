import Image from "next/image";
import { company } from "@/data/company";
import { media } from "@/data/media";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  tone?: "light" | "dark";
  className?: string;
};

export function BrandMark({ tone = "dark", className }: BrandMarkProps) {
  const mark = tone === "dark" ? "text-primary" : "text-hero-foreground";
  const word = tone === "dark" ? "text-foreground" : "text-hero-foreground";

  if (media.logo.enabled) {
    return (
      <span className={cn("inline-flex h-9 max-w-[11rem] items-center", className)}>
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
    <span className={cn("inline-flex max-w-[12.5rem] items-center gap-2.5", className)}>
      <span
        className={cn(
          "grid size-9 shrink-0 place-items-center rounded-md border border-current/25 bg-current/5",
          mark,
        )}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" className="size-4" fill="none">
          <path
            d="M4 14c4-8 12-8 16 0"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M7 17c3-5 7-5 10 0"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="12" cy="8" r="1.6" fill="currentColor" />
        </svg>
      </span>
      <span className="min-w-0">
        <span className={cn("block text-[0.9rem] font-semibold tracking-[0.14em]", word)}>
          {company.name}
        </span>
        <span
          className={cn(
            "mt-0.5 block truncate text-[0.65rem] tracking-[0.04em]",
            tone === "dark" ? "text-muted-foreground" : "text-hero-muted",
          )}
        >
          AC & HVAC · {company.city}
        </span>
      </span>
    </span>
  );
}
