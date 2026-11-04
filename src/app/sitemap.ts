import type { MetadataRoute } from "next";
import { cafe } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: cafe.website, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
