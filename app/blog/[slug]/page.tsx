// app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AdSlot } from "../../../components/AdSlot";
import { getAllPosts, getPostBySlug, SITE_BASE_URL } from "../../../data/posts";

type Params = {
  slug: string;
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Article not found – WealthMaze",
    };
  }

  const url = `${SITE_BASE_URL}/blog/${post.slug}`;

  return {
    title: `${post.title} – WealthMaze`,
    description: post.description,
    openGraph: {
      title: `${post.title} – WealthMaze`,
      description: post.description,
      url,
      type: "article",
    },
    alternates: {
      canonical: url,
    },
  };
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.7fr)_minmax(320px,1fr)]">
      <section className="space-y-6">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-400/80">
            {post?.category}
          </p>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            {post?.title}
          </h1>
          <p className="text-sm text-slate-400">
            <span>
              {post &&
                new Date(post.publishedAt).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
            </span>
            <span className="mx-2">•</span>
            <span>{post?.readTime}</span>
          </p>
          <p className="text-sm text-slate-300 max-w-2xl">
            {post?.description}
          </p>
          <p className="text-xs text-amber-300/90 bg-amber-950/40 border border-amber-900/60 rounded-lg px-3 py-2 max-w-xl">
            <strong>Important:</strong> {post?.disclaimer}
          </p>
        </header>

        <AdSlot label="Article Top Ad (Desktop & Mobile)" />

        <article className="prose prose-invert prose-sm sm:prose-base max-w-none mt-4">
          {post?.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </article>

        <div className="mt-6">
          <AdSlot label="Article Bottom Ad (Desktop & Mobile)" />
        </div>

        <p className="text-[11px] text-slate-500">
          This article shares general, non-personal explanations only. It cannot
          tell you what is appropriate for you, and it does not offer any
          guarantee about outcomes.
        </p>
      </section>

      <aside className="space-y-4 lg:space-y-6">
        <AdSlot label="Article Sidebar Ad" />
        <div className="space-y-2 text-xs text-slate-400">
          <p className="font-semibold text-slate-300">Reminder</p>
          <p>
            WealthMaze is not a professional advisor. Consider speaking with a
            licensed financial planner or other qualified professional before
            making important decisions.
          </p>
        </div>
      </aside>
    </div>
  );
}
