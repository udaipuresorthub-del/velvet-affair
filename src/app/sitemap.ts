import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = ["", "/profiles", "/terms", "/privacy"];
  
  return routes.map((route) => {
    let priority = 0.8;
    let changeFrequency: "daily" | "weekly" | "monthly" = "weekly";

    if (route === "") {
      priority = 1.0;
      changeFrequency = "daily";
    } else if (route === "/profiles") {
      priority = 0.9;
      changeFrequency = "daily";
    } else {
      priority = 0.5;
      changeFrequency = "monthly";
    }

    return {
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
      changeFrequency,
      priority
    };
  });
}
