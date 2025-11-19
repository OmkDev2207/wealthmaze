// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "WealthMaze – Simple Money Education (Not Financial Advice)",
  description:
    "WealthMaze shares clear, simple explanations about money, habits, and systems. Educational only. No financial advice.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
      <meta name="google-site-verification" content="0kNEQ3B5yVJiyPVlYEvVmge-m-wt6P76nh3yFhmu_64" />
      </head>
      <body className="bg-slate-950 text-slate-50 antialiased bg-soft-radial">
        <div className="min-h-screen flex flex-col">
          <SiteHeader />
          <main className="flex-1">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
              {children}
            </div>
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
