// app/blog/page.tsx
import { getAllPosts } from "../../data/posts";
import { AdSlot } from "../../components/AdSlot";
import { BlogListClient } from "../../components/BlogListClient";

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.7fr)_minmax(320px,1fr)]">
      <section className="space-y-6">
        <h1 className="text-3xl font-semibold tracking-tight">Articles</h1>

        <p className="text-slate-300 max-w-2xl text-sm sm:text-base">
          Everything here is written to be calm, readable and free from
          financial advice. Use these pieces as starting points to understand
          your own habits, emotions and patterns around money.
        </p>

        <BlogListClient posts={posts} />
      </section>

      <aside className="space-y-4 lg:space-y-6">
        <AdSlot label="Blog Sidebar Ad" />
        <div className="space-y-2 text-xs text-slate-400">
          <p className="font-semibold text-slate-300">
            How to read WealthMaze
          </p>
          <p>
            None of these articles know your full situation. They don’t give
            instructions. Instead, they explain ideas—so you can think about
            what fits your own life, ideally alongside professional advice if
            you ever need it.
          </p>
        </div>
      </aside>
    </div>
  );
}
