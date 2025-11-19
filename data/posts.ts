// data/posts.ts
export type Post = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string; // ISO date string
  readTime: string;
  disclaimer: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "start-with-tiny-money-habits",
    title: "Start With Tiny Money Habits, Not Big Goals",
    description:
      "Why beginning with extremely small, low-pressure money habits can be more realistic than chasing big goals.",
    category: "Habits",
    publishedAt: "2025-11-19",
    readTime: "6 min",
    disclaimer:
      "Educational only. This article explains general ideas about habits and money. It does not know your situation and is not financial advice.",
    content: [
      "Most people try to fix money by setting huge goals: a big number in a savings account, an income target, or a deadline. The problem is that life does not stay perfectly calm while you try to do this.",
      "A tiny habit is something so small that it almost feels silly to skip. It could be writing down one line about what you spent today, checking your account balance once a week, or moving a small fixed amount into a separate bucket whenever you get paid.",
      "The benefit of tiny habits is not the size of the money on day one. The benefit is that you start paying gentle, regular attention to money instead of only thinking about it when there is a problem.",
      "Nothing here tells you what you should buy, sell, or invest in. Instead, think of these ideas as prompts to design your own simple, boring, repeatable money systems.",
    ],
  },
  {
    slug: "thinking-in-buckets-not-one-big-account",
    title: "Thinking in Buckets: A Calm Way to Organize Money",
    description:
      "A simple mental model for splitting money into separate 'buckets' so it feels less chaotic.",
    category: "Planning",
    publishedAt: "2025-11-19",
    readTime: "7 min",
    disclaimer:
      "Educational explanation of a general framework only. It does not recommend any specific bank, product, or strategy.",
    content: [
      "When everything sits in a single account, it is hard to see what is actually free to use. A rent payment, a subscription, and a future purchase can all be hiding in the same balance.",
      "One way to think more clearly is to use the idea of 'buckets'. Each bucket represents a purpose: regular bills, irregular but predictable costs, fun, long-term goals, and so on.",
      "Some people implement buckets with multiple bank accounts, some with app-based tools, and some only with a spreadsheet. The important part is clarity, not the specific tool you pick.",
      "Treat this as a thinking tool. It cannot tell you the 'right' bucket amounts, because that depends entirely on your income, responsibilities, and comfort with uncertainty.",
    ],
  },
  {
    slug: "understanding-risk-and-uncertainty",
    title: "Understanding Risk and Uncertainty Without Predicting the Future",
    description:
      "A simple way to think about risk without pretending anyone can forecast markets or life events.",
    category: "Foundations",
    publishedAt: "2025-11-19",
    readTime: "8 min",
    disclaimer:
      "General educational content only. It does not predict returns or recommend any investment.",
    content: [
      "Risk isn't only about losing money. It's about the range of outcomes that could happen and how much those outcomes would affect your life.",
      "Two people can face the same decision but experience completely different risk levels because their incomes, savings, and responsibilities are different.",
      "No article on the internet can calculate risk for you. What it can do is invite you to think through a few possible scenarios and consider how you'd feel in each.",
      "Any time you see content guaranteeing a specific result, be cautious. Reality is uncertain. Good money thinking usually begins with accepting that uncertainty rather than fighting it.",
    ],
  },
];

export function getAllPosts(): Post[] {
  return [...posts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

// update this after deploy
export const SITE_BASE_URL = "https://wealthmaze.vercel.app";

