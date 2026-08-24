import { MetadataRoute } from "next";
import { COMPANY_CONFIG } from "@/config/company";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = COMPANY_CONFIG.siteUrl;

  const routes = [
    "",
    "/about",
    "/products",
    "/products/plywood",
    "/products/veneer",
    "/capabilities",
    "/transportation",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
