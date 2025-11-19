import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use – WealthMaze",
  description:
    "Simple terms of use for reading educational content on WealthMaze.",
};

export default function TermsPage() {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
        Terms of Use
      </h1>
      <div className="prose prose-invert prose-sm sm:prose-base max-w-none">
        <p>
          WealthMaze is an educational content site. By using this website, you
          agree to read it with that purpose in mind.
        </p>
        <h2>1. No Professional Advice</h2>
        <p>
          The content on WealthMaze is for general information and education
          only. It is not financial, investment, tax, legal, or any other kind
          of professional advice.
        </p>
        <h2>2. No Guarantees</h2>
        <p>
          Nothing on this website promises or guarantees any specific result,
          return, or outcome.
        </p>
        <h2>3. Third-Party Links and Ads</h2>
        <p>
          WealthMaze may display ads or links to external websites. These are
          provided for convenience only. WealthMaze does not control, endorse,
          or take responsibility for any third-party content, products, or
          services.
        </p>
        <h2>4. Use at Your Own Risk</h2>
        <p>
          You use this website at your own risk. WealthMaze is provided “as is”
          without warranties of any kind.
        </p>
        <h2>5. Changes</h2>
        <p>
          These terms may change over time. Continued use of the website means
          you accept the current version of the terms.
        </p>
      </div>
    </div>
  );
}
