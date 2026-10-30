import type { Project, StudioLine } from "./types";

export const studio = {
  id: "brightbench",
  name: "BrightBench",
  tagline: "Games to play. Apps to learn.",
  intro:
    "BrightBench is the small independent studio where I make family-friendly games and focused learning apps for iPhone and iPad. I build each one myself, from idea through release, with Claude as my pair.",
  principles: [
    { title: "No ads.", body: "Kids' attention isn't the product." },
    { title: "One-time unlocks.", body: "Pay once and it's yours. No subscriptions." },
    {
      title: "Privacy first.",
      body: "First-party analytics to see what's working without tracking anyone: anonymous daily counters and no identifiers.",
    },
  ],
  links: [
    { label: "brightbench.app", href: "https://brightbench.app" },
    { label: "Source", href: "https://github.com/kraigstrong/BrightBench" },
  ],
};

export const studioLines: { id: StudioLine; label: string; blurb: string }[] = [
  {
    id: "play",
    label: "Play",
    blurb: "Family-friendly games for iPhone and iPad, with no accounts and offline play.",
  },
  { id: "learn", label: "Learn", blurb: "Focused learning apps for tricky elementary skills." },
];

export const projects: Project[] = [
  {
    id: "bigger-fish",
    name: "Bigger Fish",
    status: "upcoming",
    platform: "iOS",
    tagline: "A one-touch arcade game. Eat fast. Stay alive.",
    description:
      "Hold to rise, release to fall, eat anything smaller than you. Every other fish is eating too, so skip a risky meal and something else grows into a threat.",
    details: [
      "A meeting planner solves spawns backward, so every designed encounter lands within 0.05 s and 3 pt of its plan.",
      "Deterministic 60 Hz simulation with seeded AI; frozen level plans are checked in CI so a shipped level never changes.",
      "Balanced with 1,496 recorded playtest runs and bot rollouts. Shares a fish engine with Math Reef, extracted on day two.",
    ],
    stack: ["Swift", "SpriteKit", "SwiftUI"],
    links: [
      { label: "biggerfish.app", href: "https://biggerfish.app" },
      { label: "Source", href: "https://github.com/kraigstrong/bigger-fish" },
    ],
    studioLine: "play",
    featured: true,
  },
  {
    id: "double-putt",
    name: "Double Putt",
    status: "beta",
    platform: "iOS",
    tagline: "One swing. Two greens.",
    description:
      "A mini golf puzzle game where every swing plays two greens at once. Aim once, choose whether the second ball copies the shot or mirrors it, and find the one putt that sinks both. Nine courses, 81 holes.",
    details: [],
    stack: [],
    links: [{ label: "doubleputt.app", href: "https://doubleputt.app" }],
    studioLine: "play",
    featured: true,
  },
  {
    id: "time-tutor",
    name: "Time Tutor",
    status: "live",
    platform: "iOS",
    tagline: "Clock practice for grades 1–3.",
    description:
      "Kids drag real clock hands, read analog clocks, and reason about elapsed time, with calm practice and timed challenges that award stars and crowns.",
    details: [
      "First prototype to a 1.0 release build in four days, then rebuilt as the visual source of truth for the BrightBench suite.",
      "Saved stars, streaks and progress have to survive every update; release preflight fails if version numbers drift between package.json, app.json and Xcode.",
      "82 tests across practice, challenge and progress flows.",
    ],
    stack: ["Expo", "React Native", "TypeScript"],
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/app/time-tutor-clock-practice/id6761587276",
      },
      { label: "Product page", href: "https://brightbench.app/products/time-tutor" },
    ],
    studioLine: "learn",
    featured: true,
  },
  {
    id: "math-reef",
    name: "Math Reef",
    status: "live",
    platform: "iOS",
    tagline: "Math practice for grades 1–5. Swim into the right answer.",
    description:
      "Hold to swim up, let go to sink, and eat the fish carrying the right answer. Five worlds and 64 levels climb from first sums to exponents.",
    details: [
      "Curriculum sequenced by fluency strategy (make 10, doubles, near doubles), with wrong answers that model real slips like a forgotten carry or 4² = 8.",
      "An autopilot that plays like a kid drives a fully automated App Store screenshot and preview-video pipeline.",
      "Kids-category privacy: no identifiers or timestamps, and a test pins the exact analytics payload keys.",
    ],
    stack: ["Swift", "SwiftUI", "SpriteKit"],
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/math-reef-math-games-for-kids/id6817532623",
      },
      { label: "Product page", href: "https://brightbench.app/products/math-reef" },
    ],
    studioLine: "learn",
    featured: true,
  },
  {
    id: "keepsake",
    name: "Keepsake",
    status: "beta",
    platform: "iOS",
    tagline: "A calm recipe app where AI quietly does the cleanup.",
    description:
      "Import a recipe from anywhere and Claude normalizes the messy text into structured, plannable data, then gets out of the way.",
    details: [
      "Claude runs server-side only, behind Supabase; the app never holds a model key.",
      "Built with a phased rollout plan and adversarial review from a second model.",
      "1,300+ app tests plus pgTAP tests for the database.",
    ],
    stack: ["Expo", "Supabase", "Claude API"],
    links: [{ label: "Source", href: "https://github.com/kraigstrong/Keepsake" }],
    featured: false,
  },
  {
    id: "photoframe",
    name: "Photoframe",
    status: "event",
    platform: "Web",
    tagline: "Event photo frames where the photo never leaves the phone.",
    description:
      "Guests scan a QR code, frame a photo under the event overlay and share it. Decoding, cropping and compositing all happen in the browser.",
    details: [
      "No upload, no backend, no account. Exactly seven allowlisted telemetry events, stripped by two independent layers.",
      "About one line of test per line of source, plus Playwright end-to-end tests.",
      "A test guards the printed QR code's path, because deleting one rewrite would break every printed code.",
    ],
    stack: ["React", "Vite", "TypeScript"],
    links: [{ label: "Source", href: "https://github.com/kraigstrong/photoframe" }],
    featured: false,
  },
];

export const statusLabel: Record<Project["status"], string> = {
  live: "Live",
  review: "In App Review",
  upcoming: "Coming soon",
  beta: "TestFlight beta",
  event: "Ran for one event",
};
