import Image from "next/image";
import type { ReactNode } from "react";
import { projects, statusLabel, studio, studioLines } from "@/content/projects";
import type { Project, ProjectLink } from "@/content/types";
import { ArrowUpRight } from "./icons";
import { LoopVideo } from "./loop-video";
import { ProjectIcon } from "./project-art";
import { SectionHeading, Tag } from "./section-heading";
import { WorldSwitcher } from "./world-switcher";

const MEDIA: Record<string, ReactNode> = {
  "time-tutor": <TimeTutorGallery />,
  "math-reef": (
    <div className="bg-[#1a78b8]">
      <LoopVideo
        src="/projects/math-reef/preview.mp4"
        poster="/projects/math-reef/preview-poster.jpg"
        label="Math Reef App Store preview"
        width={960}
        height={444}
      />
    </div>
  ),
  "bigger-fish": <WorldSwitcher />,
  "double-putt": <DoublePuttCourses />,
};

export function Projects() {
  const elsewhere = projects.filter((p) => !p.studioLine);
  return (
    <section id="projects" aria-labelledby="projects-title" className="scroll-mt-24">
      <SectionHeading kicker="Independent studio">
        <span id="projects-title">{studio.name}</span>
      </SectionHeading>

      <div className="flex items-start gap-4">
        <ProjectIcon id={studio.id} name={studio.name} size={52} />
        <div className="min-w-0 flex-1">
          <p className="text-[17px] font-medium text-ink">{studio.tagline}</p>
          <p className="mt-2 max-w-[60ch] text-[15px] leading-relaxed text-ink-2">{studio.intro}</p>
        </div>
      </div>

      <h3 className="mt-7 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-3">How the studio runs</h3>
      <ul className="mt-2 flex flex-col gap-2">
        {studio.principles.map((p) => (
          <li key={p.title} className="relative pl-5 text-[14.5px] leading-relaxed text-ink-2">
            <span aria-hidden="true" className="absolute top-[0.7em] left-0 h-px w-2.5 bg-accent" />
            <span className="font-medium text-ink">{p.title}</span> {p.body}
          </li>
        ))}
      </ul>
      <CardFooter stack={[]} links={studio.links} name={studio.name} />

      {studioLines.map((line) => (
        <div key={line.id} className="mt-14">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent-ink">{line.label}</h3>
          <p className="mt-1.5 text-[14.5px] text-ink-2">{line.blurb}</p>
          <div className="mt-5 flex flex-col gap-6">
            {projects
              .filter((p) => p.studioLine === line.id)
              .map((p) => (
                <ProjectCard key={p.id} project={p} media={MEDIA[p.id]} compact={!p.featured} />
              ))}
          </div>
        </div>
      ))}

      <h3 className="mt-14 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">Also built</h3>
      <div className="mt-4 flex flex-col gap-4">
        {elsewhere.map((p) => (
          <ProjectCard key={p.id} project={p} compact />
        ))}
      </div>
    </section>
  );
}

function StatusPill({ status }: { status: Project["status"] }) {
  const tone = {
    live: "bg-live-soft text-live",
    review: "bg-review-soft text-review",
    upcoming: "bg-review-soft text-review",
    beta: "bg-beta-soft text-beta",
    event: "bg-event-soft text-event",
  }[status];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11.5px] font-medium ${tone}`}>
      <span aria-hidden="true" className="relative flex size-1.5">
        {status === "live" && (
          <span className="absolute inset-0 animate-ping rounded-full bg-current opacity-50 motion-reduce:hidden" />
        )}
        <span className="relative size-1.5 rounded-full bg-current" />
      </span>
      {statusLabel[status]}
    </span>
  );
}

function ProjectCard({ project, media, compact = false }: { project: Project; media?: ReactNode; compact?: boolean }) {
  return (
    <article
      id={`project-${project.id}`}
      className="overflow-hidden rounded-3xl border border-line bg-surface shadow-card"
    >
      {media && <div className="border-b border-line">{media}</div>}
      <div className={compact ? "p-5 sm:p-6" : "p-6 sm:p-7"}>
        <header className="flex items-start gap-4">
          <ProjectIcon id={project.id} name={project.name} size={compact ? 44 : 52} />
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <h3 className={`font-serif leading-tight text-ink ${compact ? "text-[1.6rem]" : "text-[1.85rem]"}`}>
                {project.name}
              </h3>
              <StatusPill status={project.status} />
              <span className="font-mono text-[11px] text-ink-3">{project.platform}</span>
            </div>
            <p className="mt-0.5 text-[14.5px] font-medium text-ink">{project.tagline}</p>
          </div>
        </header>

        <p className="mt-4 text-[14.5px] leading-relaxed text-ink-2">{project.description}</p>

        {project.details.length > 0 && (
          <>
            <h4 className="mt-5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-3">Under the hood</h4>
            <DetailList items={project.details} />
          </>
        )}

        <CardFooter stack={project.stack} links={project.links} name={project.name} />
      </div>
    </article>
  );
}

function DetailList({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 flex flex-col gap-2">
      {items.map((d) => (
        <li key={d} className="relative pl-5 text-[13.5px] leading-relaxed text-ink-2">
          <span aria-hidden="true" className="absolute top-[0.7em] left-0 h-px w-2.5 bg-accent" />
          {d}
        </li>
      ))}
    </ul>
  );
}

function CardFooter({ stack, links, name }: { stack: string[]; links: ProjectLink[]; name: string }) {
  return (
    <footer className="mt-5 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
      {stack.length > 0 && (
        <ul className="flex flex-wrap gap-1.5" aria-label="Stack">
          {stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </ul>
      )}
      <ul className="flex flex-wrap items-center gap-x-4 gap-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            {link.href.startsWith("https://apps.apple.com/") ? (
              <AppStoreBadge href={link.href} name={name} />
            ) : (
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1 text-[13px] font-medium text-accent-ink"
              >
                {link.label}
                <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                <span className="sr-only"> for {name} (opens in a new tab)</span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </footer>
  );
}

// Apple's artwork, unmodified: the preferred black badge (its gray rule
// carries it on dark backgrounds), 40px tall, with a quarter-height of clear space.
function AppStoreBadge({ href, name }: { href: string; name: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="block rounded-[7px]">
      <Image
        src="/badges/download-on-the-app-store.svg"
        alt={`Download ${name} on the App Store (opens in a new tab)`}
        width={120}
        height={40}
        unoptimized
      />
    </a>
  );
}

function TimeTutorGallery() {
  const shots = [
    { n: 1, alt: "Set the Clock: drag the hands to match 9:15" },
    { n: 4, alt: "Read the Clock: enter the time an analog clock shows" },
    { n: 3, alt: "Choose a mode: Explore Time, Set the Clock, Read the Clock, Elapsed Time" },
    { n: 6, alt: "Crown unlocked after mastering a challenge" },
  ];
  return (
    <div className="bg-[#F6EFE3]">
      <ul
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 py-5 [scrollbar-width:thin]"
        aria-label="Time Tutor App Store screenshots"
      >
        {shots.map((s) => (
          <li key={s.n} className="shrink-0 snap-start">
            <Image
              src={`/projects/time-tutor/appstore-${s.n}.jpg`}
              alt={s.alt}
              width={480}
              height={1040}
              sizes="170px"
              className="h-[340px] w-auto rounded-xl shadow-[0_8px_24px_-12px_rgb(18_53_91/0.35)]"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function DoublePuttCourses() {
  const courses = [
    {
      id: "nightfall",
      name: "Nightfall",
      label: "Double Putt on Nightfall: both balls slipping past a windmill's turning blades in the snow",
    },
    { id: "bigtop", name: "Big Top", label: "Double Putt on Big Top: two greens in the circus ring, both balls dropping" },
    { id: "starbase", name: "Starbase", label: "Double Putt on Starbase: a ball zipping through a teleporter pad" },
  ];
  return (
    <div className="bg-[#1f4a2c]">
      <ul className="mx-auto grid max-w-[600px] grid-cols-3 gap-3 px-4 py-5 sm:gap-4 sm:px-6">
        {courses.map((c) => (
          <li key={c.id}>
            <figure>
              <div className="overflow-hidden rounded-xl shadow-[0_12px_32px_-12px_rgb(0_0_0/0.6)]">
                <LoopVideo
                  src={`/projects/double-putt/courses/${c.id}.mp4`}
                  poster={`/projects/double-putt/courses/${c.id}-poster.jpg`}
                  label={c.label}
                  width={480}
                  height={904}
                />
              </div>
              <figcaption className="mt-2 text-center font-mono text-[11px] text-white/70">{c.name}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}
