import { profile } from "@/content/profile";
import type { DateStamp, Role } from "@/content/types";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function parse(stamp: DateStamp) {
  const [year, month] = stamp.split("-").map(Number);
  return { year, month: month ?? null };
}

export function formatStamp(stamp: DateStamp | null) {
  if (stamp === null) return "Present";
  const { year, month } = parse(stamp);
  return month ? `${MONTHS[month - 1]} ${year}` : String(year);
}

export function formatRange(start: DateStamp, end: DateStamp | null) {
  if (start === end) return formatStamp(start);
  return `${formatStamp(start)} – ${formatStamp(end)}`;
}

/** "2 yrs 6 mos", measured to `profile.asOf` for open-ended ranges. */
export function formatDuration(start: DateStamp, end: DateStamp | null) {
  const from = parse(start);
  const to = parse(end ?? profile.asOf);
  const months =
    from.month && to.month
      ? (to.year - from.year) * 12 + (to.month - from.month)
      : (to.year - from.year) * 12;
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts = [];
  if (years) parts.push(`${years} yr${years === 1 ? "" : "s"}`);
  if (rest) parts.push(`${rest} mo${rest === 1 ? "" : "s"}`);
  return parts.join(" ") || "< 1 mo";
}

/** Earliest start and latest end across a company's roles. */
export function tenure(roles: Role[]) {
  const start = roles.map((r) => r.start).sort()[0];
  const end = roles.some((r) => r.end === null)
    ? null
    : roles.map((r) => r.end as string).sort().at(-1)!;
  return { start, end };
}

export function yearSpan(roles: Role[]) {
  const { start, end } = tenure(roles);
  return { from: parse(start).year, to: end === null ? "Now" : String(parse(end).year) };
}
