"use client";

import { useRef, type ReactNode } from "react";

/** Horizontal scroll-snap carousel with Previous/Next controls. */
export default function Carousel({ children, light = false, label }: { children: ReactNode; light?: boolean; label: string }) {
  const track = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  const btn = `flex h-12 w-12 items-center justify-center border-2 text-xl transition-colors ${
    light ? "border-white/40 text-white hover:border-lime-300 hover:bg-lime-300 hover:text-forest-950" : "border-forest-700/30 text-forest-700 hover:border-forest-700 hover:bg-forest-700 hover:text-white"
  }`;

  return (
    <div>
      <div ref={track} className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2" role="region" aria-label={label}>
        {children}
      </div>
      <div className="mt-8 flex gap-3">
        <button type="button" className={btn} onClick={() => scroll(-1)} aria-label="Previous">
          ←
        </button>
        <button type="button" className={btn} onClick={() => scroll(1)} aria-label="Next">
          →
        </button>
      </div>
    </div>
  );
}
