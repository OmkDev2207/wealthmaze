import type { MetadataRoute } from "next";
import { getAllPosts, SITE_BASE_URL } from "../data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const staticPages: MetadataRoute.Sitemap = [
    "",
    "/blog",
    "/about",
    "/terms",
    "/privacy",
  ].map((path) => ({
    url: `${SITE_BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
  }));

  return [...staticPages, ...blogPages];
}
