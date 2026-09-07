import Image from "next/image";
import { brands } from "@/data/brands";
import { cn } from "@/lib/utils";

type BrandStripProps = {
  className?: string;
  tone?: "light" | "dark";
  /** Card grid presentation for brands page / richer strips */
  variant?: "strip" | "cards";
};

/**
 * Professional brand presentation.
 * Uses official logo files when enabled; otherwise clean typography cards
 * (never fake or distorted trademark artwork).
 */
export function BrandStrip({
  className,
  tone = "light",
  variant = "strip",
}: BrandStripProps) {
  if (variant === "cards") {
    return (
      <ul
        className={cn(
          "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5",
          className,
        )}
        aria-label="AC brands TECHNO CARE supplies and services"
      >
        {brands.map((brand, index) => (
          <li
            key={brand.id}
            className={cn(
              "flex min-h-[5rem] items-center justify-center rounded-lg border border-border bg-surface px-5 py-6",
              /* Center the odd final card on 2-col mobile */
              index === brands.length - 1 &&
                brands.length % 2 === 1 &&
                "col-span-2 justify-self-center w-full max-w-[calc(50%-0.375rem)] sm:col-span-1 sm:max-w-none",
            )}
          >
            {brand.logo.enabled ? (
              <Image
                src={brand.logo.src}
                alt={brand.name}
                width={brand.logo.width}
                height={brand.logo.height}
                unoptimized={brand.logo.src.endsWith(".svg")}
                className="h-9 w-auto max-w-[11rem] object-contain"
              />
            ) : (
              <span className="text-center text-sm font-semibold tracking-[0.04em] text-foreground sm:text-base">
                {brand.name}
              </span>
            )}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul
      className={cn(
        "grid grid-cols-2 gap-3 sm:grid sm:grid-cols-3 lg:grid-cols-5 lg:gap-4",
        className,
      )}
      aria-label="AC brands TECHNO CARE supplies and services"
    >
      {brands.map((brand, index) => (
        <li
          key={brand.id}
          className={cn(
            "flex min-h-[4.25rem] items-center justify-center rounded-lg border border-border bg-background px-4 py-4",
            index === brands.length - 1 &&
              brands.length % 2 === 1 &&
              "col-span-2 justify-self-center w-full max-w-[calc(50%-0.375rem)] sm:col-span-1 sm:max-w-none",
          )}
        >
          {brand.logo.enabled ? (
            <Image
              src={brand.logo.src}
              alt={brand.name}
              width={brand.logo.width}
              height={brand.logo.height}
              unoptimized={brand.logo.src.endsWith(".svg")}
              className="h-8 w-auto max-w-[10.5rem] object-contain"
            />
          ) : (
            <span
              className={cn(
                "text-center text-sm font-semibold tracking-[0.03em] sm:text-[0.95rem]",
                tone === "dark" ? "text-hero-foreground" : "text-foreground",
              )}
            >
              {brand.name}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
