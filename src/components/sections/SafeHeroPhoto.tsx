"use client";

import { useState } from "react";
import Image from "next/image";
import { HeroFallbackVisual } from "@/components/sections/HeroFallbackVisual";

type SafeHeroPhotoProps = {
  src: string;
  alt: string;
};

/**
 * Owner photo path only. On load failure, falls back once to the inline SVG.
 * Never requests a known-missing placeholder file.
 */
export function SafeHeroPhoto({ src, alt }: SafeHeroPhotoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <HeroFallbackVisual />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority
      sizes="(max-width: 1024px) 100vw, 48vw"
      className="object-cover"
      onError={() => setFailed(true)}
    />
  );
}
