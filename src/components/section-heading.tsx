import type { ReactNode } from "react";

export function SectionHeading({ kicker, children }: { kicker: string; children: ReactNode }) {
  return (
    <header className="mb-10">
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent-ink">{kicker}</p>
      <h2 className="mt-2 font-serif text-[2.5rem] leading-[1.05] tracking-[-0.01em] text-ink sm:text-5xl">
        {children}
      </h2>
    </header>
  );
}

export function MetricTile({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <dt className="order-2 text-[12.5px] leading-snug text-ink-2">{label}</dt>
      <dd className="order-1 font-serif text-[1.75rem] leading-none tracking-tight text-ink sm:text-[2rem]">{value}</dd>
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] text-ink-2">{children}</li>
  );
}
