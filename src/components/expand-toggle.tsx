"use client";

import { useState } from "react";

/** Reveals a chapter's remaining bullets; the chapter element owns `data-expanded`. */
export function ExpandToggle({ count, controls }: { count: number; controls: string }) {
  const [expanded, setExpanded] = useState(false);
  if (count === 0) return null;

  return (
    <button
      type="button"
      aria-expanded={expanded}
      aria-controls={controls}
      onClick={(event) => {
        const next = !expanded;
        event.currentTarget.closest("[data-expanded]")?.setAttribute("data-expanded", String(next));
        setExpanded(next);
      }}
      className="group mt-3 inline-flex items-center gap-2 text-[13px] font-medium text-accent-ink"
    >
      <span
        aria-hidden="true"
        className={`inline-block transition-transform duration-200 motion-reduce:transition-none ${expanded ? "rotate-45" : ""}`}
      >
        +
      </span>
      {expanded ? "Show less" : `Show ${count} more`}
    </button>
  );
}
