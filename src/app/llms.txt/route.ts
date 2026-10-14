import { experience } from "@/content/experience";
import { earlierRoles, education, extras, profile } from "@/content/profile";
import { projects, statusLabel } from "@/content/projects";
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
    "## Side projects",
  );
  for (const p of projects) {
    lines.push("", `### ${p.name} (${statusLabel[p.status]}, ${p.platform})`, "", `${p.tagline} ${p.description}`, "");
    for (const d of p.details) lines.push(`- ${d}`);
    for (const l of p.links) lines.push(`- ${l.label}: ${l.href}`);
  }
  return lines.join("\n") + "\n";
}

export function GET() {
  return new Response(body(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
