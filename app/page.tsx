// app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "../data/posts";
import { AdSlot } from "../components/AdSlot";

export const metadata: Metadata = {
  title: "WealthMaze – Calm Money Habits, Psychology & Budgeting",
  description:
    "WealthMaze is a calm, no-advice money blog focused on habits, psychology, stress, decision fatigue and gentle budgeting. Educational only.",
  alternates: {
    canonical: "https://wealthmaze.vercel.app/",
  },
  openGraph: {
    title: "WealthMaze – Calm Money Habits & Everyday Money Psychology",
    description:
      "Articles about money behaviour, overspending, tiny habits, stress, budgeting and clarity. Educational only – not financial advice.",
    url: "https://wealthmaze.vercel.app/",
    type: "website",
  },
};

export default function HomePage() {
  const posts = getAllPosts();
  const latestPosts = posts.slice(0, 3);

  return (
    <main className="space-y-12">
      {/* Hero */}
      <section className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            Calm money, no financial advice
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            Understand your{" "}
            <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
              money mind
            </span>{" "}
            without charts, tips or hype.
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl">
            WealthMaze is a slow, distraction-free corner of the internet about
            habits, overspending, stress, and everyday money psychology.
            Everything here is educational only, and nothing tells you what to
            do with your money.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400 transition"
            >
              Read all articles
            </Link>
            <Link
              href="/blog/the-cost-of-decision-fatigue"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/50 px-4 py-2 text-sm text-slate-200 hover:bg-slate-900 transition"
            >
              Start with decision fatigue →
            </Link>
          </div>

          <ul className="text-xs sm:text-sm text-slate-400 space-y-1">
            <li>• No investing tips, no product recommendations.</li>
            <li>• Clear, calm explanations.</li>
            <li>• Designed for mobile + desktop readability.</li>
          </ul>
        </div>

        {/* Soft “3D” Card Section */}
        <div className="relative">
          <div className="absolute -inset-6 bg-emerald-500/20 blur-3xl opacity-60 pointer-events-none" />
          <div className="relative rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 shadow-xl shadow-emerald-500/10">
            <p className="text-xs font-medium text-emerald-300 uppercase tracking-[0.3em] mb-4">
              WEALTHMAZE SNAPSHOT
            </p>
            <div className="space-y-4 text-sm text-slate-200">
              <div className="flex items-center justify-between">
                <span>Focus</span>
                <span className="text-xs rounded-full bg-slate-900 px-3 py-1 border border-slate-700">
                  Habits • Psychology • Stress
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Articles live</span>
                <span className="text-lg font-semibold">
                  {posts.length.toString().padStart(2, "0")}+
                </span>
              </div>
              <div className="flex flex-col gap-2 text-xs text-slate-400">
                <p>Topics covered:</p>
                <ul className="grid grid-cols-2 gap-1">
                  <li>• Overspending</li>
                  <li>• Tiny habits</li>
                  <li>• Budget calm</li>
                  <li>• Decision fatigue</li>
                  <li>• Stress & money</li>
                  <li>• Micro-decisions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================ */}
      {/* HOMEPAGE FEATURED AD SLOT (high RPM placement) */}
      {/* ================================================ */}
      <div className="my-10">
        <AdSlot label="Homepage Featured Ad" />
      </div>

      {/* Latest articles */}
      <section className="space-y-5">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
            Latest from WealthMaze
          </h2>
          <Link
            href="/blog"
            className="text-xs sm:text-sm text-emerald-300 hover:text-emerald-200"
          >
            View all →
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-4 hover:border-emerald-400/70 hover:bg-slate-900 transition flex flex-col justify-between"
            >
              <div className="mb-3">
                <p className="text-[10px] uppercase tracking-[0.3em] text-emerald-300 mb-2">
                  {post.category}
                </p>
                <h3 className="text-sm sm:text-base font-semibold group-hover:text-emerald-100">
                  {post.title}
                </h3>
                <p className="mt-2 text-xs text-slate-400 line-clamp-3">
                  {post.description}
                </p>
              </div>
              <p className="text-[11px] text-slate-500">
                {new Date(post.publishedAt).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}{" "}
                • {post.readTime}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ================================================ */}
      {/* HOMEPAGE BOTTOM AD SLOT (great for mobile RPM) */}
      {/* ================================================ */}
      <div className="mt-12">
        <AdSlot label="Homepage Bottom Ad" />
      </div>
    </main>
  );
}
