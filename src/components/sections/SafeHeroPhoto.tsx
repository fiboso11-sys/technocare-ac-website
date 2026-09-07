"use client";

import { useState } from "react";
import Image from "next/image";
import { HeroFallbackVisual } from "@/components/sections/HeroFallbackVisual";
import { cn } from "@/lib/utils";

type SafeHeroPhotoProps = {
  src: string;
  alt: string;
  priority?: boolean;
  objectPosition?: string;
  className?: string;
  sizes?: string;
};

/**
 * Marketing or owner photo path. On load failure, falls back once to the inline SVG.
 */
export function SafeHeroPhoto({
  src,
  alt,
  priority = true,
  objectPosition = "center",
  className,
  sizes = "(max-width: 1024px) 100vw, 48vw",
}: SafeHeroPhotoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <HeroFallbackVisual />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={cn("object-cover", className)}
      style={{ objectPosition }}
      onError={() => setFailed(true)}
    />
  );
}
