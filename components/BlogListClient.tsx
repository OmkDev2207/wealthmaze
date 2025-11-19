// components/BlogListClient.tsx
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Post } from "../data/posts";

function slugifyCategory(category: string) {
  return category.toLowerCase().replace(/\s+/g, "-");
}

type Props = {
  posts: Post[];
};

export function BlogListClient({ posts }: Props) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | "all">("all");

  const categories = useMemo(
    () => Array.from(new Set(posts.map((p) => p.category))),
    [posts]
  );

  const filteredPosts = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesQuery =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.description.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q);
      const matchesCategory =
        activeCategory === "all" || post.category === activeCategory;
      return matchesQuery && matchesCategory;
    });
  }, [posts, query, activeCategory]);

  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <input
          type="text"
          placeholder="Search topics like habits, stress, overspending, budgeting..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full sm:max-w-sm rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-sm text-slate-100 placeholder-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-500"
        />

        {/* Category filter pills */}
        <div className="flex flex-wrap gap-2 text-[11px] sm:text-xs">
          <button
            onClick={() => setActiveCategory("all")}
            className={`rounded-full px-3 py-1 border ${
              activeCategory === "all"
                ? "border-emerald-400 bg-emerald-500/10 text-emerald-100"
                : "border-slate-700 bg-slate-900/70 text-slate-300 hover:border-slate-500"
            }`}
          >
            All topics
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-3 py-1 border ${
                activeCategory === cat
                  ? "border-emerald-400 bg-emerald-500/10 text-emerald-100"
                  : "border-slate-700 bg-slate-900/70 text-slate-300 hover:border-slate-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Article cards */}
      <div className="mt-4 space-y-4">
        {filteredPosts.map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.slug}
            className="block rounded-2xl border border-slate-800 bg-slate-900/70 hover:bg-slate-900 hover:border-emerald-500/60 transition p-4 sm:p-5"
          >
            <div className="flex gap-4">
              {/* “Thumbnail” – simple soft 3D pill with initial */}
              <div className="hidden sm:flex items-center justify-center">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-emerald-500/70 to-cyan-500/70 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                  <span className="text-xl font-semibold text-slate-950">
                    {post.category.charAt(0)}
                  </span>
                </div>
              </div>

              <div className="flex-1 space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-emerald-300">
                    {post.category}
                  </p>
                  <Link
                    href={`/categories/${slugifyCategory(post.category)}`}
                    onClick={(e) => e.stopPropagation()}
                    className="text-[10px] rounded-full border border-slate-700 bg-slate-900/70 px-2 py-[2px] text-slate-300 hover:border-emerald-400 hover:text-emerald-200"
                  >
                    View more in {post.category}
                  </Link>
                </div>

                <h2 className="text-base sm:text-lg font-semibold text-slate-50">
                  {post.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-300">
                  {post.description}
                </p>

                <p className="text-[11px] text-slate-500 mt-1.5">
                  {new Date(post.publishedAt).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}{" "}
                  • {post.readTime}
                </p>
              </div>
            </div>
          </Link>
        ))}

        {filteredPosts.length === 0 && (
          <p className="text-xs sm:text-sm text-slate-400">
            No articles match that search yet. Try a different word like
            “habits”, “stress”, “overspending” or “budgeting”.
          </p>
        )}
      </div>
    </div>
  );
}
