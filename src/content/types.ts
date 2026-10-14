/** Year-month ("2024-04") or year ("2016"). */
export type DateStamp = string;

export type Metric = {
  value: string;
  label: string;
};

export type Role = {
  title: string;
  start: DateStamp;
  end: DateStamp | null;
};

export type Chapter = {
  id: string;
  company: string;
  url: string;
  roles: Role[];
  intro: string;
  metrics: Metric[];
  /** In display order; the first few show before "Show more". */
  bullets: string[];
  tags: string[];
};

export type ProjectStatus = "live" | "review" | "beta" | "event";

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  name: string;
  status: ProjectStatus;
  platform: string;
  tagline: string;
  description: string;
  details: string[];
  stack: string[];
  links: ProjectLink[];
  /** Main-column card size. */
  featured: boolean;
};
