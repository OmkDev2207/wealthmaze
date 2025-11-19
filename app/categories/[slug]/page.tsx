// app/categories/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, SITE_BASE_URL } from "../../../data/posts";
import { BlogListClient } from "../../../components/BlogListClient";

function slugifyCategory(category: string) {
  return category.toLowerCase().replace(/\s+/g, "-");
}

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  const posts = getAllPosts();
  const categories = Array.from(new Set(posts.map((p) => p.category)));
  return categories.map((cat) => ({ slug: slugifyCategory(cat) }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const posts = getAllPosts();
  const categories = Array.from(new Set(posts.map((p) => p.category)));
  const category = categories.find(
    (cat) => slugifyCategory(cat) === params.slug
  );

  if (!category) {
    return {
      title: "Category not found – WealthMaze",
    };
  }

  const url = `${SITE_BASE_URL}/categories/${params.slug}`;

  return {
    title: `${category} – Articles on WealthMaze`,
    description: `Educational, calm articles on ${category.toLowerCase()} from WealthMaze. No tips, no recommendations—just clear explanations.`,
    alternates: { canonical: url },
    openGraph: {
      title: `${category} – WealthMaze`,
      description: `Browse WealthMaze articles about ${category.toLowerCase()}.`,
      url,
      type: "website",
    },
  };
}

export default function CategoryPage({ params }: PageProps) {
  const posts = getAllPosts();
  const categories = Array.from(new Set(posts.map((p) => p.category)));
  const category = categories.find(
    (cat) => slugifyCategory(cat) === params.slug
  );

  if (!category) {
    notFound();
  }

  const categoryPosts = posts.filter((p) => p.category === category);

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">
          Category
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">{category}</h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
          You’re looking at all articles on WealthMaze that touch{" "}
          <span className="font-semibold lowercase">{category}</span>. These
          pieces focus on behaviour, psychology and everyday patterns—not
          advice, predictions or recommendations.
        </p>
      </header>

      <BlogListClient posts={categoryPosts} />
    </div>
  );
}
