import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About – WealthMaze",
  description:
    "Learn what WealthMaze is and how it approaches money topics with a calm, educational mindset.",
};

export default function AboutPage() {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
        About WealthMaze
      </h1>
      <div className="prose prose-invert prose-sm sm:prose-base max-w-none">
        <p>
          WealthMaze exists to explain money ideas in a calm, low-pressure way.
          It is not here to shout hot tips, miracle strategies, or guaranteed
          returns.
        </p>
        <p>
          Every person has a different situation, responsibilities, and
          tolerance for risk. Because of that, WealthMaze never tells you what
          you should buy, sell, invest in, or change.
        </p>
        <p>
          Instead, think of WealthMaze as a library of mental models, habits,
          and systems you can read about and then adapt—or ignore—based on your
          own judgement and, when needed, professional advice.
        </p>
        <p>
          No article on this site is personalized. Nothing here is financial,
          investment, tax, or legal advice.
        </p>
      </div>
    </div>
  );
}
