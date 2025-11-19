import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy – WealthMaze",
  description:
    "Overview of how WealthMaze handles basic analytics and advertising data.",
};

export default function PrivacyPage() {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
        Privacy
      </h1>
      <div className="prose prose-invert prose-sm sm:prose-base max-w-none">
        <p>
          WealthMaze is a simple content website. It does not offer user
          accounts, logins, or direct payments.
        </p>
        <h2>Analytics and Ads</h2>
        <p>
          Over time, WealthMaze may use analytics tools and advertising networks
          (such as Google AdSense) to understand site traffic and support the
          cost of running the site.
        </p>
        <p>
          These tools may use cookies or similar technologies to measure
          visits, page views, and ad performance. Details will depend on the
          specific services used and will be updated here when they are added.
        </p>
        <h2>No Personal Accounts</h2>
        <p>
          WealthMaze does not create user accounts or store passwords. You can
          read all content without logging in.
        </p>
        <h2>Contact</h2>
        <p>
          If you later add a contact email or form, you can describe it here.
        </p>
      </div>
    </div>
  );
}
