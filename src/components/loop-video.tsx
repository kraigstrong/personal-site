"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "./icons";

/**
 * A muted gameplay loop that plays only while on screen. Reduced-motion
 * visitors get the poster and a play button instead of autoplay.
 */
export function LoopVideo({
  src,
  poster,
  label,
  width,
  height,
}: {
  src: string;
  poster: string;
  label: string;
  width: number;
  height: number;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [pausedByUser, setPausedByUser] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || pausedByUser) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.4 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [pausedByUser, src]);

  function toggle() {
    const video = ref.current;
    if (!video) return;
    if (video.paused) {
      setPausedByUser(false);
      video.play().catch(() => {});
    } else {
      setPausedByUser(true);
      video.pause();
    }
  }

  return (
    <div className="relative">
      <video
        ref={ref}
        src={src}
        poster={poster}
        width={width}
        height={height}
        muted
        loop
        playsInline
        preload="none"
        aria-label={label}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="block h-auto w-full"
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? `Pause ${label}` : `Play ${label}`}
        className="absolute right-3 bottom-3 inline-flex size-8 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition-colors hover:bg-black/65"
      >
        {playing ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
      </button>
    </div>
  );
}
