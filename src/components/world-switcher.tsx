"use client";

import { useState } from "react";
import { LoopVideo } from "./loop-video";

const WORLDS = [
  { id: "shallow-reef", name: "Shallow Reef", line: "Eat. Dodge. Grow." },
  { id: "jelly-bloom", name: "Jelly Bloom", line: "Bounce the tops. Dodge the tentacles." },
  { id: "kelp-forest", name: "Kelp Forest", line: "Dive into the kelp. Mind what's hiding." },
  { id: "midnight-zone", name: "Midnight Zone", line: "Light the way. Mind the dark." },
];

export function WorldSwitcher() {
  const [index, setIndex] = useState(0);
  const world = WORLDS[index];
  const base = `/projects/bigger-fish/worlds/${world.id}`;

  return (
    <div className="bg-[#0a2a40]">
      <LoopVideo
        key={world.id}
        src={`${base}.mp4`}
        poster={`${base}-poster.jpg`}
        label={`Bigger Fish gameplay in ${world.name}`}
        width={1280}
        height={588}
      />
      <div className="flex flex-col gap-3 px-4 pt-3 pb-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Choose a world">
          {WORLDS.map((w, i) => (
            <button
              key={w.id}
              type="button"
              aria-pressed={i === index}
              onClick={() => setIndex(i)}
              className={`rounded-full px-3 py-1 text-[12px] font-medium transition-colors ${
                i === index ? "bg-[#ff9e29] text-[#0a2a40]" : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
              }`}
            >
              {w.name}
            </button>
          ))}
        </div>
        <p className="text-[12.5px] text-white/70" aria-live="polite">
          {world.line}
        </p>
      </div>
    </div>
  );
}
