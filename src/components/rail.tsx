import { profile } from "@/content/profile";
import { CommandButton } from "./command-palette";
import { GitHub, LinkedIn, Mail } from "./icons";
import { SectionNav } from "./section-nav";
import { ThemeToggle } from "./theme-toggle";

const iconLink =
  "inline-flex size-9 items-center justify-center rounded-full text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink";

/** Identity and navigation. Sticky beside the content on large screens. */
export function Rail() {
  return (
    <header className="pt-10 lg:sticky lg:top-0 lg:flex lg:h-dvh lg:w-[min(38%,26rem)] lg:shrink-0 lg:flex-col lg:justify-between lg:py-20">
      <div>
        <h1 className="animate-rise font-serif text-[3.25rem] leading-[0.95] tracking-[-0.02em] text-ink sm:text-6xl">
          <a href="#top">{profile.name}</a>
        </h1>
        <p className="animate-rise mt-4 text-[16px] font-medium leading-snug text-ink [animation-delay:60ms]">
          {profile.title}
          <span className="text-ink-2">
            {" "}at{" "}
            <a
              href={profile.company.url}
              target="_blank"
              rel="noreferrer"
              className="text-ink underline decoration-line-strong underline-offset-4 hover:decoration-accent"
            >
              {profile.company.name}
            </a>
          </span>
        </p>
        <p className="animate-rise mt-4 max-w-[38ch] text-[15px] leading-relaxed text-ink-2 [animation-delay:120ms]">
          {profile.summary}
        </p>

        <div className="mt-12 hidden lg:block">
          <SectionNav />
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-1 lg:mt-10">
        <a href={`mailto:${profile.email}`} className={iconLink} aria-label="Email" title="Email">
          <Mail />
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" className={iconLink} aria-label="GitHub" title="GitHub">
          <GitHub />
        </a>
        {profile.linkedin && (
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className={iconLink} aria-label="LinkedIn" title="LinkedIn">
            <LinkedIn />
          </a>
        )}
        {/* The mobile bar carries these below lg. */}
        <span className="hidden lg:contents">
          <span className="mx-2 h-4 w-px bg-line" aria-hidden="true" />
          <ThemeToggle />
          <CommandButton className="ml-1" />
        </span>
      </div>
    </header>
  );
}

/** Small-screen bar: theme and quick navigation stay in reach while scrolling. */
export function MobileBar() {
  return (
    <div className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-md lg:hidden">
      <div className="mx-auto flex h-14 max-w-[1180px] items-center justify-between gap-3 px-5 sm:px-10">
        <a href="#top" className="font-serif text-[1.35rem] leading-none text-ink">
          KS
        </a>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <CommandButton className="border-transparent px-2">
            <span className="sr-only">Open quick navigation</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h10" />
            </svg>
          </CommandButton>
        </div>
      </div>
    </div>
  );
}

export function Highlights() {
  return (
    <section aria-label="At a glance" className="rounded-3xl border border-line bg-surface p-6 shadow-card sm:p-7">
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">At a glance</p>
      <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
        {profile.highlights.map((m) => (
          <div key={m.label} className="flex flex-col gap-1.5">
            <dt className="order-2 text-[12.5px] leading-snug text-ink-2">{m.label}</dt>
            <dd className="order-1 font-serif text-[2.1rem] leading-none tracking-tight text-ink">{m.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
