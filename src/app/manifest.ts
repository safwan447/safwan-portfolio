import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.displayName,
    description: siteConfig.seo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#05070b",
    theme_color: "#05070b",
  };
}
