import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/_next/",
        "/static/",
        "/temp_docx/",
        "/temp_guide/",
        "/extracted_text.txt",
        "/extracted_guide.txt",
        "/extract.js",
        "/extract_guide.js"
      ]
    },
    sitemap: `${siteConfig.url}/sitemap.xml`
  };
}
