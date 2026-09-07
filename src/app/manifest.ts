import type { MetadataRoute } from "next";
import { company } from "@/data/company";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${company.name} — Aircondition Authorised Dealer Sales & Service`,
    short_name: company.shortName,
    description: company.description,
    start_url: "/",
    display: "browser",
    background_color: "#f7f8fa",
    theme_color: "#143a6b",
  };
}
