// app/page.tsx
import { AdSlot } from "../components/AdSlot";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.7fr)_minmax(320px,1fr)]">
      {/* subtle 3D-ish animated glow */}
      <div className="hero-orb" />

      {/* Main content */}
      <section className="space-y-6 relative">
        <div className="space-y-3">
          <p className="text-xs font-semibold tracking-[0.25em] text-emerald-400/80 uppercase">
            WealthMaze
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Simple, calm money education
            <span className="block text-slate-300 text-2xl sm:text-3xl md:text-4xl mt-1">
              for real people, not daydreams.
            </span>
          </h1>
          <p className="text-slate-300 max-w-xl leading-relaxed">
            No hype. No get-rich-quick schemes. WealthMaze breaks down money
            concepts into tiny, practical ideas you can understand and think
            about—without telling you what to do with your money.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 text-xs sm:text-sm">
          <span className="px-3 py-1 rounded-full border border-emerald-500/40 bg-emerald-500/10">
            Educational only – not advice
          </span>
          <span className="px-3 py-1 rounded-full border border-slate-700 bg-slate-900/60">
            No login, no signups
          </span>
          <span className="px-3 py-1 rounded-full border border-slate-700 bg-slate-900/60">
            Ad-supported
          </span>
        </div>

        <div className="mt-4 space-y-4">
          <h2 className="text-lg font-semibold">Explore the maze</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <ArticleCard
              title="Start With Tiny Money Habits, Not Big Goals"
              tag="Habits"
            />
            <ArticleCard
              title="Thinking in Buckets: A Calm Way to Organize Money"
              tag="Planning"
            />
            <ArticleCard
              title="Understanding Risk and Uncertainty"
              tag="Foundations"
            />
            <ArticleCard
              title="Coming Soon: Simple Systems for Everyday Money"
              tag="Systems"
            />
          </div>
          <Link
            href="/blog"
            className="inline-flex text-sm text-emerald-400 hover:text-emerald-300 underline-offset-4 hover:underline"
          >
            View all articles
          </Link>
        </div>

        {/* Mobile inline ad */}
        <div className="lg:hidden mt-6">
          <AdSlot label="Mobile Inline Ad" />
        </div>
      </section>

      {/* Sidebar with big desktop ads */}
      <aside className="space-y-5 lg:space-y-6 relative">
        <AdSlot
          label="Sidebar Top Ad (Desktop)"
          className="hidden sm:block"
        />
        <AdSlot
          label="Sidebar Middle Ad (Desktop)"
          className="hidden lg:block"
        />
        <div className="space-y-2 text-xs text-slate-400">
          <p className="font-semibold text-slate-300">About this site</p>
          <p>
            WealthMaze is a content site only. It doesn&apos;t know you, your
            situation, or your goals. Treat every article as a starting point
            for your own thinking, not as instructions.
          </p>
        </div>
      </aside>
    </div>
  );
}

type ArticleCardProps = {
  title: string;
  tag: string;
};

function ArticleCard({ title, tag }: ArticleCardProps) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 hover:border-emerald-500/60 transition">
      <p className="text-xs uppercase tracking-wide text-emerald-400/80 mb-1">
        {tag}
      </p>
      <h3 className="text-sm sm:text-base font-medium mb-2">{title}</h3>
      <p className="text-xs text-slate-400">
        Educational overview only. No recommendations, no promises, no
        predictions.
      </p>
    </article>
  );
}
