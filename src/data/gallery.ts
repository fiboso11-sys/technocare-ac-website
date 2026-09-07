/**
 * Our Work Gallery — owner photos only.
 * Add files under public/images/technocare/gallery/ then register here with enabled: true.
 * Do not mark stock or generated images as completed TECHNO CARE jobs.
 */

export type GalleryCategory =
  | "AC Sales"
  | "Installation"
  | "Service"
  | "Repair"
  | "Cleaning"
  | "Refurbishing"
  | "HVAC"
  | "Commercial";

export type GalleryItem = {
  id: string;
  title: string;
  category: GalleryCategory;
  src: string;
  alt: string;
  width: number;
  height: number;
  enabled: boolean;
  featured?: boolean;
};

export const galleryItems: GalleryItem[] = [
  // Example (disabled until owner photo exists):
  // {
  //   id: "install-01",
  //   title: "Split AC installation",
  //   category: "Installation",
  //   src: "/images/technocare/gallery/install-01.webp",
  //   alt: "TECHNO CARE split AC installation in Chennai.",
  //   width: 1200,
  //   height: 900,
  //   enabled: true,
  //   featured: true,
  // },
];

export const getEnabledGalleryItems = () =>
  galleryItems.filter((item) => item.enabled);

export const getFeaturedGalleryItems = (limit = 6) =>
  getEnabledGalleryItems()
    .filter((item) => item.featured)
    .slice(0, limit);

export const hasGalleryPhotos = () => getEnabledGalleryItems().length > 0;
