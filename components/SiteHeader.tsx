// components/SiteHeader.tsx
import React from "react";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-slate-800/80 bg-slate-950/90 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4">
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/60 shadow-md shadow-emerald-500/15">
              <span className="text-lg font-semibold text-emerald-400">W</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
                WealthMaze
              </span>
              <span className="text-[11px] sm:text-xs md:text-sm text-slate-300 leading-snug">
                Calm, clear money education —{" "}
                <span className="text-emerald-300 font-medium">
                  never financial advice.
                </span>
              </span>
            </div>
          </div>
        </Link>

        <nav className="hidden sm:flex gap-6 text-sm md:text-[15px] text-slate-200">
          <Link href="/" className="hover:text-emerald-400 transition">
            Home
          </Link>
          <Link href="/blog" className="hover:text-emerald-400 transition">
            Articles
          </Link>
          <Link href="/about" className="hover:text-emerald-400 transition">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
