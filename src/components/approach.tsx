import { approach, approachIntro } from "@/content/approach";
import { SectionHeading } from "./section-heading";

export function Approach() {
  return (
    <section id="approach" aria-labelledby="approach-title" className="scroll-mt-24">
      <SectionHeading kicker="Practice">
        <span id="approach-title">How I build</span>
      </SectionHeading>
      <p className="max-w-[60ch] text-[15px] leading-relaxed text-ink-2">{approachIntro}</p>
      <ol className="mt-8 grid gap-4 sm:grid-cols-2">
        {approach.map((item, i) => (
          <li key={item.title} className="rounded-2xl border border-line bg-surface p-5">
            <p className="font-mono text-[11px] text-accent-ink">{String(i + 1).padStart(2, "0")}</p>
            <h3 className="mt-2 font-serif text-[1.45rem] leading-snug text-ink">{item.title}</h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-ink-2">{item.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
