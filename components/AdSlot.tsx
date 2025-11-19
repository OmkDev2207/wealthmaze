// components/AdSlot.tsx
import React from "react";

type AdSlotProps = {
  label?: string;
  className?: string;
};

export function AdSlot({ label = "Ad space", className = "" }: AdSlotProps) {
  return (
    <div
      className={`relative w-full rounded-2xl border border-dashed border-slate-600/80 bg-slate-900/80 shadow-inner overflow-hidden ${className}`}
    >
      <div className="flex h-full min-h-[130px] sm:min-h-[160px] lg:min-h-[230px] items-center justify-center px-4">
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-slate-300 text-center">
          {label} · Placeholder · AdSense code will be inserted here after
          approval
        </span>
      </div>
    </div>
  );
}
