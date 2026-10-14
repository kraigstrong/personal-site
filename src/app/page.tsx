import { Approach } from "@/components/approach";
import { CommandPalette } from "@/components/command-palette";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Highlights, MobileBar, Rail } from "@/components/rail";
import { education, profile } from "@/content/profile";
import { formatStamp } from "@/lib/dates";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: profile.site,
  email: `mailto:${profile.email}`,
  jobTitle: profile.title,
  worksFor: { "@type": "Organization", name: profile.company.name, url: profile.company.url },
  address: { "@type": "PostalAddress", addressLocality: "Portland", addressRegion: "OR" },
  alumniOf: education.map((e) => ({ "@type": "CollegeOrUniversity", name: e.school })),
  sameAs: [profile.github, profile.linkedin].filter(Boolean),
};

export default function Home() {
  return (
    <>
      <a
        href="#content"
        className="sr-only z-50 rounded-full bg-ink px-4 py-2 text-paper focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <MobileBar />
      <div id="top" className="mx-auto max-w-[1180px] px-5 sm:px-10 lg:flex lg:gap-16 xl:gap-24">
        <Rail />
        <main id="content" className="flex min-w-0 flex-1 flex-col gap-24 pt-12 pb-16 lg:gap-28 lg:py-20">
          <Highlights />
          <Experience />
          <Projects />
          <Approach />
          <Contact />
          <footer className="flex flex-wrap justify-between gap-2 border-t border-line pt-6 font-mono text-[11px] text-ink-3">
            <span>Updated {formatStamp(profile.asOf)}</span>
            <span>
              Built with Next.js · Press <kbd className="font-mono">⌘K</kbd> to get around
            </span>
          </footer>
        </main>
      </div>
      <CommandPalette />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
