import type { Chapter } from "./types";

export const experience: Chapter[] = [
  {
    id: "1password",
    company: "1Password",
    url: "https://1password.com",
    roles: [
      { title: "Senior Engineering Manager, Developer and AI", start: "2025-10", end: null },
      { title: "Engineering Manager, Developer Experience", start: "2024-04", end: "2025-10" },
    ],
    intro:
      "Built the Developer and AI domain from a single team into three and set its direction around securing AI-native developers and coding agents, while prototyping the hardest pieces myself.",
    metrics: [
      { value: "6×", label: "machine users in 12 months" },
      { value: "1 → 3", label: "engineering teams" },
      { value: "+60%", label: "CI pipeline reliability" },
    ],
    bullets: [
      "Set technical direction and led the teams that shipped 1Password's AI-agent security lineup, including 1Password for Claude, an MCP server for OpenAI Codex, and 1Password Unified Access, launched with partners including Anthropic, OpenAI, Cursor, and GitHub.",
      "Grew Developer MAUs by 300% and machine users 6× in 12 months by driving improvements across product, platform, and ecosystems.",
      "Personally designed and built a proof of concept for secure, in-memory secret generation and storage for AI agents.",
      "Scaled the organization from 1 to 3 engineering teams and defined the strategy and operating model for the Developer and AI domain from inception.",
      "Built a Windows proof of concept extending 1Password's Mac-only secure-secrets mounting to Windows, gating in-memory AI-agent secrets per process.",
      "Reduced code review time by 45% across the company by building tooling that automatically identifies code owners and triggers review requests.",
      "Delivered 1Password's first OAuth-backed API, establishing the foundational authentication layer for internal and external platform adoption.",
      "Shaped extensibility strategy across hooks, marketplace, and MCP integrations to enable ecosystem growth.",
      "Defined 1Password's developer strategy for the year ahead, centered on securing and enabling AI-native developers and coding agents.",
      "Increased CX match accuracy from 20% to 77%, significantly reducing customer support turnaround times.",
      "Improved developer productivity at scale by leading company-wide developer experience initiatives and increasing CI pipeline reliability by 60%.",
    ],
    tags: ["Developer platform", "AI agents", "MCP", "OAuth", "CI / DevEx"],
  },
  {
    id: "rebellion",
    company: "Rebellion Defense",
    url: "https://rebelliondefense.com",
    roles: [
      { title: "Director of Engineering", start: "2022-06", end: "2024-02" },
      { title: "Engineering Manager", start: "2022-04", end: "2022-06" },
    ],
    intro:
      "Grew engineering from 4 to 30+ and took a pre–product-market-fit defense product from concept to a paying contract, including a cloud-scale simulation platform and a classified deployment.",
    metrics: [
      { value: "$1M+", label: "first Mission Engineering contract" },
      { value: "100%", label: "contract line items delivered, with perfect reviews" },
    ],
    bullets: [
      "Led Rebellion's first Mission Engineering initiative from concept to execution, securing a $1M+ contract and unlocking new business opportunities.",
      "Scaled the engineering organization from 4 to 30+ engineers, establishing the team structure and execution model to support product-market exploration.",
      "Led development of a complex cloud-scale simulation platform built ahead of a strategic contract opportunity, coordinating engineers and subject matter experts in a constrained, pre-product-market-fit environment.",
      "Managed development and deployment of a pre-product-market-fit solution in a classified environment, delivering all contract line items to key stakeholders with perfect reviews.",
      "Partnered in sales engagements and product demonstrations, contributing directly to increased customer engagement and deal progression.",
    ],
    tags: ["0 → 1", "Simulation", "Classified environments", "Customer-facing"],
  },
  {
    id: "tripwire",
    company: "Tripwire",
    url: "https://www.tripwire.com",
    roles: [
      { title: "Senior Engineering Manager", start: "2021", end: "2022" },
      { title: "Engineering Manager", start: "2019", end: "2021" },
      { title: "Principal Software Engineer", start: "2019", end: "2019" },
      { title: "Senior Software Engineer", start: "2016", end: "2019" },
    ],
    intro:
      "Six years and four roles, from senior and principal engineer to senior engineering manager, owning a product line behind $100M+ in annual revenue.",
    metrics: [
      { value: "$100M+", label: "annual revenue supported" },
      { value: "2 wks → <24 h", label: "release cycle" },
      { value: "−95%", label: "new platform delivery time" },
    ],
    bullets: [
      "Owned the data acquisition agent supporting $100M+ in annual revenue, ensuring reliability, scalability, and continued product growth.",
      "Led the company's most critical 2021 initiative, coordinating execution across 8+ global engineering teams and aligning delivery across product and platform groups.",
      "Led a sustaining engineering team that reduced release cycle time from 2 weeks to under 24 hours.",
      "Led a migration from static virtual machines to a dynamic environment, reducing new platform delivery time by 95%.",
      "Managed customer escalations for the data acquisition agent, achieving >85% customer retention through rapid resolution of Tier 1 issues and strong MTTR.",
      "Built a prototype automated asset classification system using decision trees to accurately identify machine use cases.",
    ],
    tags: ["Security", "Endpoint agents", "Release engineering", "Infrastructure"],
  },
];

/** Bullets shown before "Show more" in each chapter. */
export const VISIBLE_BULLETS = 4;
