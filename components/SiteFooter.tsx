// components/SiteFooter.tsx
import React from "react";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800/80 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 text-xs sm:text-sm text-slate-400 space-y-3">
        <p className="leading-relaxed">
          <strong>Disclaimer:</strong> WealthMaze shares general, educational
          information only. Nothing on this site is financial, investment, tax,
          legal, or any other kind of professional advice. Always do your own
          research and, if needed, consult a licensed professional.
        </p>
        <div className="flex flex-wrap gap-4 justify-between items-center">
          <p>© {new Date().getFullYear()} WealthMaze. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-emerald-400">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-emerald-400">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
