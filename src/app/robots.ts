import type { MetadataRoute } from "next";
import { cafe } from "@/lib/data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${cafe.website}/sitemap.xml`,
  };
}
