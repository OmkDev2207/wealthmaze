// app/blog/[slug]/page.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next"; // not used at runtime but fine
import { AdSlot } from "../../../components/AdSlot";
import { getAllPosts, SITE_BASE_URL } from "../../../data/posts";

function slugifyCategory(category: string) {
  return category.toLowerCase().replace(/\s+/g, "-");
}

export default function BlogPostPage() {
  const pathname = usePathname();
  const [scrollProgress, setScrollProgress] = useState(0);

  const slug = useMemo(() => {
    if (!pathname) return "";
    const parts = pathname.split("/").filter(Boolean);
    return parts[parts.length - 1] ?? "";
  }, [pathname]);

  const post = useMemo(() => {
    const posts = getAllPosts();
    return posts.find((p) => p.slug === slug);
  }, [slug]);

  // Reading progress
  useEffect(() => {
    function handleScroll() {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      const progress = height > 0 ? (scrollTop / height) * 100 : 0;
      setScrollProgress(progress);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!post) {
    const all = getAllPosts()
      .map((p) => p.slug)
      .join(", ");
    return (
      <div className="max-w-2xl mx-auto py-16 space-y-4">
        <h1 className="text-2xl font-semibold">Article not found</h1>
        <p className="text-slate-300">
          The slug in the URL didn’t match any article.
        </p>
        <p className="text-xs text-slate-500">
          Known slugs are: {all || "(none)"}
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Reading progress bar */}
      <div className="fixed inset-x-0 top-0 z-40 h-1.5 bg-slate-900/90 border-b border-slate-800/80 backdrop-blur">
        <div
          className="h-full bg-gradient-to-r from-emerald-400 via-cyan-300 to-emerald-500 transition-[width]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.7fr)_minmax(320px,1fr)] pt-4">
        <section className="space-y-6">
          <header className="space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-xs uppercase tracking-[0.25em] text-emerald-400/80">
                {post.category}
              </p>
              <Link
                href={`/categories/${slugifyCategory(post.category)}`}
                className="text-[11px] rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-slate-300 hover:border-emerald-400 hover:text-emerald-100"
              >
                More in {post.category}
              </Link>
            </div>

            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              {post.title}
            </h1>

            <p className="text-sm text-slate-400">
              <span>
                {new Date(post.publishedAt).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </p>

            <p className="text-sm text-slate-300 max-w-2xl">
              {post.description}
            </p>

            <p className="text-[11px] text-amber-200/90 bg-amber-950/40 border border-amber-900/60 rounded-lg px-3 py-2 max-w-xl">
              <strong>Important:</strong> {post.disclaimer}
            </p>
          </header>

          <AdSlot label="Article Top Ad (Desktop & Mobile)" />

          <article className="prose prose-invert prose-sm sm:prose-base max-w-none mt-4">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </article>

          <div className="mt-6">
            <AdSlot label="Article Bottom Ad (Desktop & Mobile)" />
          </div>

          <p className="text-[11px] text-slate-500">
            WealthMaze articles are for reflection and education only. They
            cannot tell you what to do and do not guarantee any specific
            outcome.
          </p>
        </section>

        <aside className="space-y-4 lg:space-y-6">
          <AdSlot label="Article Sidebar Ad" />
          <div className="space-y-2 text-xs text-slate-400">
            <p className="font-semibold text-slate-300">Reading tip</p>
            <p>
              If an idea here feels useful, don’t rush to act on it. Let it
              sit in your mind for a while. Notice how it shows up in your real
              life first.
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
