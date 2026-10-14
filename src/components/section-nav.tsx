"use client";

import { useEffect, useState } from "react";

export const SECTIONS = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Side projects" },
  { id: "approach", label: "How I build" },
  { id: "contact", label: "Contact" },
] as const;

/** Scroll-spy navigation: the section nearest the top of the viewport is current. */
export function SectionNav() {
  const [active, setActive] = useState<string>(SECTIONS[0].id);

  useEffect(() => {
    const elements = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    const update = () => {
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) return setActive(elements.at(-1)!.id);
      let current = elements[0].id;
      for (const el of elements) {
        if (el.getBoundingClientRect().top <= window.innerHeight * 0.3) current = el.id;
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <nav aria-label="Sections">
      <ul className="flex flex-col gap-1">
        {SECTIONS.map(({ id, label }) => {
          const current = active === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={current ? "location" : undefined}
                className="group flex items-center gap-3 py-1.5 text-[13px] font-medium tracking-wide"
              >
                <span
                  aria-hidden="true"
                  className={`h-px transition-all duration-300 motion-reduce:transition-none ${
                    current
                      ? "w-14 bg-ink"
                      : "w-7 bg-line-strong group-hover:w-14 group-hover:bg-ink-2"
                  }`}
                />
                <span
                  className={`transition-colors ${
                    current ? "text-ink" : "text-ink-3 group-hover:text-ink-2"
                  }`}
                >
                  {label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
