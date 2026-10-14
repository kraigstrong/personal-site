import type { MetadataRoute } from "next";
import { profile } from "@/content/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: profile.site, lastModified: `${profile.asOf}-01`, changeFrequency: "monthly", priority: 1 }];
}
