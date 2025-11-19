// app/blog/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "../../components/AdSlot";
import { getAllPosts } from "../../data/posts";

export const metadata: Metadata = {
  title: "Articles – WealthMaze",
  description:
    "Browse WealthMaze articles about simple money concepts, habits, and systems. Educational only. No financial advice.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.7fr)_minmax(320px,1fr)]">
      <section className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Articles
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl">
            Every piece here is written to be slow, calm, and educational. None
            of it tells you what to do with your money, and none of it is a
            promise or prediction.
          </p>
        </div>

        <div className="space-y-4">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 hover:border-emerald-500/60 transition"
            >
              <p className="text-xs uppercase tracking-wide text-emerald-400/80 mb-1">
                {post.category}
              </p>
              <h2 className="text-lg font-semibold mb-1">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-emerald-400 transition"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-xs text-slate-400 mb-2">
                <span>
                  {new Date(post.publishedAt).toLocaleDateString()}
                </span>
                <span className="mx-2">•</span>
                <span>{post.readTime} read</span>
              </p>
              <p className="text-sm text-slate-300 mb-3">
                {post.description}
              </p>
              <p className="text-xs text-slate-500">
                Educational only – not financial advice.
              </p>
            </article>
          ))}
        </div>

        {/* Mobile ad below list */}
        <div className="lg:hidden mt-4">
          <AdSlot label="Mobile Blog Ad" />
        </div>
      </section>

      <aside className="space-y-4 lg:space-y-6">
        <AdSlot label="Blog Sidebar Ad" />
        <div className="space-y-2 text-xs text-slate-400">
          <p className="font-semibold text-slate-300">Reading guidelines</p>
          <p>
            Use these articles as starting points for your own thinking. They
            are not tailored to you and cannot replace professional advice from
            someone who understands your full situation.
          </p>
        </div>
      </aside>
    </div>
  );
}
