import type { Metric } from "./types";

export const profile = {
  name: "Kraig Strong",
  title: "Senior Engineering Manager, Developer and AI",
  company: { name: "1Password", url: "https://1password.com" },
  location: "Portland, OR",
  email: "kraig.strong@gmail.com",
  github: "https://github.com/kraigstrong",
  linkedin: "https://www.linkedin.com/in/kraig-strong-aa353613/",
  site: "https://kraigstrong.com",
  /** Durations ending "Present" are measured to this month. Bump on each content update. */
  asOf: "2026-10",
  summary:
    "An engineering leader who still ships. I grew 1Password's Developer and AI domain from one team to three and lead its AI-agent security work, and I stay current on the latest build tools by shipping my own iOS and web apps.",
  highlights: [
    { value: "+300%", label: "Developer MAUs at 1Password in 12 months" },
    { value: "4 → 30+", label: "engineers in the org I scaled at Rebellion Defense" },
    { value: "−45%", label: "code review time at 1Password, from tooling I built" },
    { value: "M.S.", label: "Computer Science, Artificial Intelligence, Georgia Tech" },
  ] satisfies Metric[],
};

export const education = [
  {
    school: "Georgia Tech",
    degree: "M.S. Computer Science, Artificial Intelligence",
    years: "2015–2018",
  },
  {
    school: "Portland State University",
    degree: "B.S. equivalent, Computer Science",
    years: "2012–2015",
  },
  {
    school: "Oregon State University",
    degree: "B.S. Electrical and Computer Engineering",
    years: "2005–2010",
  },
];

export const earlierRoles = [
  {
    company: "Tektronix",
    title: "Software Design Engineer II, Software Quality Engineer",
    years: "2012–2016",
  },
  {
    company: "Planar Systems",
    title: "Manufacturing Test Engineer, Electrical Design Engineering Intern",
    years: "2009–2012",
  },
];

export const extras = {
  patent: {
    label: "U.S. Patent 10,585,121",
    detail: "Automating measurements based on waveform patterns",
    href: "https://patents.google.com/patent/US10585121B2",
  },
  certifications: "Security+, DoD 8570 IAT Level 2",
  languages: "Go, TypeScript, Swift, Ruby, Python, C, C++, Java",
};
