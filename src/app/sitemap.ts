import type { MetadataRoute } from "next";
import { hasGalleryPhotos } from "@/data/gallery";
import { services } from "@/data/services";
import { getSiteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = getSiteUrl();
  const now = new Date();

  const paths = ["", "/about", "/services", "/brands", "/contact", "/privacy"];
  if (hasGalleryPhotos()) paths.splice(4, 0, "/gallery");

  const staticRoutes = paths.map((path) => ({
    url: `${site}${path || "/"}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${site}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
