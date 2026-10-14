"use client";

import { toggleTheme, useTheme } from "@/lib/theme";
import { Moon, Sun } from "./icons";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const theme = useTheme();
  const next = theme === "dark" ? "light" : "dark";
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
      className={`inline-flex size-8 items-center justify-center rounded-full text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink ${className}`}
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
}
