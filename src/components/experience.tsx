import { experience, VISIBLE_BULLETS } from "@/content/experience";
import { earlierRoles, education, extras } from "@/content/profile";
import type { Chapter } from "@/content/types";
import { formatDuration, formatRange, tenure, yearSpan } from "@/lib/dates";
import { ExpandToggle } from "./expand-toggle";
import { ArrowUpRight } from "./icons";
import { MetricTile, SectionHeading, Tag } from "./section-heading";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="scroll-mt-24">
      <SectionHeading kicker="Career">
        <span id="experience-title">Experience</span>
      </SectionHeading>
      <div className="flex flex-col gap-16">
        {experience.map((chapter) => (
          <ChapterEntry key={chapter.id} chapter={chapter} />
        ))}
      </div>
      <Earlier />
    </section>
  );
}

function ChapterEntry({ chapter }: { chapter: Chapter }) {
  const { start, end } = tenure(chapter.roles);
  const span = yearSpan(chapter.roles);
  const listId = `${chapter.id}-bullets`;
  // A single leftover bullet isn't worth a "Show 1 more" button.
  const visible =
    chapter.bullets.length - VISIBLE_BULLETS > 1 ? VISIBLE_BULLETS : chapter.bullets.length;

  return (
    <article data-expanded="false" className="grid gap-x-8 gap-y-3 md:grid-cols-[6.5rem_1fr]">
      <p className="pt-2 font-mono text-[12px] tracking-wide text-ink-3">
        {span.from} — {span.to}
      </p>
      <div className="min-w-0">
        <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="font-serif text-[2rem] leading-tight text-ink">
            <a
              href={chapter.url}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-baseline gap-1.5 hover:text-accent-ink"
            >
              {chapter.company}
              <ArrowUpRight className="size-4 translate-y-[-2px] text-ink-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-1 group-hover:text-accent-ink" />
            </a>
          </h3>
          <span className="font-mono text-[12px] text-ink-3">{formatDuration(start, end)}</span>
        </header>

        <p className="mt-2 max-w-[60ch] text-[15px] leading-relaxed text-ink-2">
          {chapter.intro}
        </p>

        <ol className="mt-5 flex flex-col gap-2 border-l border-line pl-4">
          {chapter.roles.map((role, i) => (
            <li key={role.title + role.start} className="relative flex flex-wrap items-baseline justify-between gap-x-4">
              <span
                aria-hidden="true"
                className={`absolute top-[0.55em] -left-[21px] size-[9px] rounded-full border-2 ${
                  i === 0 ? "border-accent bg-accent" : "border-line-strong bg-paper"
                }`}
              />
              <span className={`text-[14.5px] ${i === 0 ? "font-semibold text-ink" : "text-ink-2"}`}>
                {role.title}
              </span>
              <span className="font-mono text-[11.5px] text-ink-3">{formatRange(role.start, role.end)}</span>
            </li>
          ))}
        </ol>

        <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 rounded-2xl border border-line bg-surface p-5 sm:grid-cols-3">
          {chapter.metrics.map((m) => (
            <MetricTile key={m.label} {...m} />
          ))}
        </dl>

        <ul id={listId} className="mt-6 flex flex-col gap-3">
          {chapter.bullets.map((bullet, i) => (
            <li
              key={bullet}
              className={`relative pl-5 text-[14.5px] leading-relaxed text-ink-2 ${i >= visible ? "extra" : ""}`}
            >
              <span aria-hidden="true" className="absolute top-[0.7em] left-0 h-px w-2.5 bg-accent" />
              {bullet}
            </li>
          ))}
        </ul>
        <ExpandToggle count={chapter.bullets.length - visible} controls={listId} />

        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Focus areas">
          {chapter.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </ul>
      </div>
    </article>
  );
}

function Earlier() {
  return (
    <div className="mt-16 grid gap-x-8 gap-y-10 md:grid-cols-[6.5rem_1fr]">
      <p className="pt-1 font-mono text-[12px] tracking-wide text-ink-3">2005 — 2016</p>
      <div className="grid gap-10 sm:grid-cols-2">
        <div>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">Earlier</h3>
          <ul className="mt-3 flex flex-col gap-3">
            {earlierRoles.map((r) => (
              <li key={r.company}>
                <p className="text-[15px] font-semibold text-ink">
                  {r.company} <span className="font-mono text-[11.5px] font-normal text-ink-3">{r.years}</span>
                </p>
                <p className="text-[13.5px] leading-snug text-ink-2">{r.title}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">Education</h3>
          <ul className="mt-3 flex flex-col gap-3">
            {education.map((e) => (
              <li key={e.school}>
                <p className="text-[15px] font-semibold text-ink">
                  {e.school} <span className="font-mono text-[11.5px] font-normal text-ink-3">{e.years}</span>
                </p>
                <p className="text-[13.5px] leading-snug text-ink-2">{e.degree}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:col-span-2">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">Also</h3>
          <dl className="mt-3 grid gap-x-8 gap-y-3 text-[13.5px] sm:grid-cols-[auto_1fr]">
            <dt className="font-semibold text-ink">Patent</dt>
            <dd className="text-ink-2">
              <a href={extras.patent.href} target="_blank" rel="noreferrer" className="underline decoration-line-strong underline-offset-4 hover:text-accent-ink hover:decoration-accent">
                {extras.patent.label}
              </a>
              : {extras.patent.detail}
            </dd>
            <dt className="font-semibold text-ink">Certifications</dt>
            <dd className="text-ink-2">{extras.certifications}</dd>
            <dt className="font-semibold text-ink">Languages</dt>
            <dd className="text-ink-2">{extras.languages}</dd>
          </dl>
        </div>
      </div>
    </div>
  );
}
