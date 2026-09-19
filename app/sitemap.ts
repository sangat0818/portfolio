import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { resources } from "@/data/resources";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: profile.siteUrl, changeFrequency: "monthly", priority: 1 },
    ...projects.map((project) => ({ url: `${profile.siteUrl}/experience/${project.slug}`, changeFrequency: "yearly" as const, priority: 0.7 })),
    ...resources.filter((resource) => resource.published).map((resource) => ({ url: `${profile.siteUrl}/insights/${resource.slug}`, changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}
