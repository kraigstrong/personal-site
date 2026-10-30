import { experience } from "@/content/experience";
import { earlierRoles, education, extras, profile } from "@/content/profile";
import { projects, statusLabel, studio, studioLines } from "@/content/projects";
import type { Project } from "@/content/types";
import { formatRange } from "@/lib/dates";

// A plain-text version of the site for language models and quick reading,
// generated from the same content files as the page.

function body() {
  const lines = [
    `# ${profile.name}`,
    "",
    `> ${profile.title} at ${profile.company.name}. ${profile.location}.`,
    "",
    profile.summary,
    "",
    `- Email: ${profile.email}`,
    `- GitHub: ${profile.github}`,
    ...(profile.linkedin ? [`- LinkedIn: ${profile.linkedin}`] : []),
    "",
    "## Experience",
  ];
  for (const chapter of experience) {
    lines.push("", `### ${chapter.company}`, "");
    for (const role of chapter.roles) lines.push(`- ${role.title} (${formatRange(role.start, role.end)})`);
    lines.push("");
    for (const bullet of chapter.bullets) lines.push(`- ${bullet}`);
  }
  lines.push("", "### Earlier", "");
  for (const r of earlierRoles) lines.push(`- ${r.company}: ${r.title} (${r.years})`);
  lines.push("", "## Education", "");
  for (const e of education) lines.push(`- ${e.school}: ${e.degree} (${e.years})`);
  lines.push(
    "",
    "## Also",
    "",
    `- ${extras.patent.label}: ${extras.patent.detail}`,
    `- Certifications: ${extras.certifications}`,
    `- Languages: ${extras.languages}`,
    "",
    `## ${studio.name}`,
    "",
    `${studio.tagline} ${studio.intro}`,
    "",
  );
  for (const p of studio.principles) lines.push(`- ${p.title} ${p.body}`);
  for (const l of studio.links) lines.push(`- ${l.label}: ${l.href}`);
  for (const line of studioLines) {
    lines.push("", `### ${line.label}`, "", line.blurb);
    for (const p of projects.filter((p) => p.studioLine === line.id)) pushProject(lines, p, "####");
  }
  lines.push("", "## Also built");
  for (const p of projects.filter((p) => !p.studioLine)) pushProject(lines, p, "###");
  return lines.join("\n") + "\n";
}

function pushProject(lines: string[], p: Project, heading: string) {
  lines.push("", `${heading} ${p.name} (${statusLabel[p.status]}, ${p.platform})`, "", `${p.tagline} ${p.description}`, "");
  for (const d of p.details) lines.push(`- ${d}`);
  for (const l of p.links) lines.push(`- ${l.label}: ${l.href}`);
}

export function GET() {
  return new Response(body(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
