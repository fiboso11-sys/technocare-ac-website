import type { MetadataRoute } from "next";
import { company } from "@/data/company";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${company.name} — AC & HVAC Services`,
    short_name: company.shortName,
    description: company.description,
    start_url: "/",
    display: "browser",
    background_color: "#f3f6f8",
    theme_color: "#0b1f2e",
  };
}
