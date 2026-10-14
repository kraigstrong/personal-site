import { profile } from "@/content/profile";
import { CopyEmail } from "./copy-email";
import { GitHub, LinkedIn, Mail } from "./icons";
import { SectionHeading } from "./section-heading";

const button =
  "inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-[13.5px] font-medium text-ink transition-colors hover:border-line-strong";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-24">
      <SectionHeading kicker="Contact">
        <span id="contact-title">Get in touch</span>
      </SectionHeading>
      <p className="max-w-[52ch] text-[15px] leading-relaxed text-ink-2">
        Email is the best way to reach me. I&apos;m always happy to talk about developer platforms,
        AI agents, or building engineering teams.
      </p>
      <CopyEmail
        email={profile.email}
        className="mt-6 font-serif text-[1.75rem] text-ink hover:text-accent-ink sm:text-[2.25rem]"
      />
      <div className="mt-8 flex flex-wrap gap-2">
        <a href={`mailto:${profile.email}`} className={button}>
          <Mail /> Email
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" className={button}>
          <GitHub /> GitHub
        </a>
        {profile.linkedin && (
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className={button}>
            <LinkedIn /> LinkedIn
          </a>
        )}
      </div>
    </section>
  );
}
