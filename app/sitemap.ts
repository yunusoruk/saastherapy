import { prismadb } from "@/lib/prismadb";
import { MetadataRoute } from "next";
import { allPosts } from "contentlayer/generated";

const siteUrl =
  process.env.NEXT_PUBLIC_APP_URL || "https://www.saastherapy.com";

type changeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const changeFrequency = "daily" as changeFrequency;

  const companions = await prismadb.companion.findMany({});

  const blogs = allPosts.map((blog) => ({
    url: `${siteUrl}${blog.slug}`,
    lastModified: blog.date,
    changeFrequency,
    priority: 0.5,
  }));

  const chats = companions.map((companion) => ({
    url: `${siteUrl}/chat/${companion.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency,
    priority: 0.9,
  }));

  const routes = [
    "",
    "/login",
    "/pricing",
    "/blog",
    "/terms",
    "/privacy",
    "/contact",
    "/companion",
    "/chat",
    "/dashboard/billing",
    "/dashboard/settings",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency,
    priority: 0.8,
  }));

  return [...routes, ...chats, ...blogs];
}
