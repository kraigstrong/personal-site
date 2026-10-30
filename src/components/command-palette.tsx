"use client";

import { Command } from "cmdk";
import { useEffect, useState, type ReactNode } from "react";
import { profile } from "@/content/profile";
import { projects, studio } from "@/content/projects";
import { toggleTheme, useTheme } from "@/lib/theme";
import { copyText } from "./copy-email";
import { SECTIONS } from "./section-nav";
import { ArrowUpRight, Command as CommandIcon, Copy, GitHub, LinkedIn, Mail, Moon, Search, Sun } from "./icons";

const OPEN_EVENT = "open-command-palette";

export function openCommandPalette() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const theme = useTheme();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_EVENT, onOpen);
    };
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 1800);
    return () => clearTimeout(t);
  }, [toast]);

  const run = (action: () => void) => () => {
    setOpen(false);
    action();
  };

  const go = (id: string) =>
    run(() => {
      document.getElementById(id)?.scrollIntoView();
      history.replaceState(history.state, "", `${location.pathname}${location.search}#${id}`);
    });

  const visit = (href: string) => run(() => window.open(href, "_blank", "noopener"));

  return (
    <>
      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Command menu"
        className="overflow-hidden rounded-2xl border border-line bg-surface text-ink shadow-[0_24px_64px_-16px_rgb(0_0_0/0.35)]"
      >
        <div className="flex items-center gap-3 border-b border-line px-4">
          <Search className="shrink-0 text-ink-3" />
          <Command.Input
            autoFocus
            placeholder="Jump to a section, open a project, copy my email…"
            className="h-12 w-full bg-transparent text-[15px] text-ink outline-none placeholder:text-ink-3"
          />
          <kbd className="rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-ink-3">
            esc
          </kbd>
        </div>
        <Command.List className="max-h-[min(420px,60vh)] overflow-y-auto overscroll-contain p-2">
          <Command.Empty className="px-3 py-8 text-center text-sm text-ink-3">
            Nothing matches. Try “email” or “Bigger Fish”.
          </Command.Empty>

          <Command.Group heading="Go to">
            {SECTIONS.map((s) => (
              <Item key={s.id} onSelect={go(s.id)} hint="Section">
                {s.label}
              </Item>
            ))}
          </Command.Group>

          <Command.Group heading="View">
            <Item
              onSelect={run(toggleTheme)}
              keywords={["theme", "dark", "light", "mode"]}
              icon={theme === "dark" ? <Sun /> : <Moon />}
            >
              Switch to {theme === "dark" ? "light" : "dark"} mode
            </Item>
          </Command.Group>

          <Command.Group heading="Contact">
            <Item
              icon={<Copy />}
              keywords={["email", "contact"]}
              onSelect={run(async () => setToast((await copyText(profile.email)) ? "Email copied" : profile.email))}
            >
              Copy email address
            </Item>
            <Item icon={<Mail />} onSelect={run(() => window.location.assign(`mailto:${profile.email}`))}>
              Send an email
            </Item>
            <Item icon={<GitHub />} onSelect={visit(profile.github)}>
              GitHub
            </Item>
            {profile.linkedin && (
              <Item icon={<LinkedIn />} onSelect={visit(profile.linkedin)}>
                LinkedIn
              </Item>
            )}
          </Command.Group>

          <Command.Group heading="Projects">
            {[studio, ...projects].flatMap((p) =>
              p.links.map((link) => (
                <Item
                  key={`${p.id}-${link.href}`}
                  value={`${p.name} ${link.label}`}
                  keywords={[p.tagline]}
                  icon={<ArrowUpRight />}
                  onSelect={visit(link.href)}
                >
                  {p.name} <span className="text-ink-3">· {link.label}</span>
                </Item>
              )),
            )}
          </Command.Group>
        </Command.List>
        <div className="flex items-center justify-between border-t border-line px-4 py-2 font-mono text-[11px] text-ink-3">
          <span className="inline-flex items-center gap-1.5">
            <CommandIcon className="size-3" />K to toggle
          </span>
          <span>↑↓ to move · ↵ to select</span>
        </div>
      </Command.Dialog>

      <div
        role="status"
        aria-live="polite"
        className={`pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center transition-all duration-300 ${
          toast ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        }`}
      >
        {toast && (
          <span className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper shadow-card">
            {toast}
          </span>
        )}
      </div>
    </>
  );
}

function Item({
  children,
  onSelect,
  icon,
  hint,
  keywords,
  value,
}: {
  children: ReactNode;
  onSelect: () => void;
  icon?: ReactNode;
  hint?: string;
  keywords?: string[];
  value?: string;
}) {
  return (
    <Command.Item
      onSelect={onSelect}
      keywords={keywords}
      value={value}
      className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-[14px] text-ink-2 data-[selected=true]:text-ink"
    >
      <span className="flex size-4 shrink-0 items-center justify-center text-ink-3">
        {icon ?? <span className="size-1.5 rounded-full bg-line-strong" />}
      </span>
      <span className="flex-1 truncate">{children}</span>
      {hint && (
        <span data-hint className="font-mono text-[10px] uppercase tracking-wider text-ink-3 opacity-0">
          {hint}
        </span>
      )}
    </Command.Item>
  );
}

export function CommandButton({ className = "", children }: { className?: string; children?: ReactNode }) {
  return (
    <button
      type="button"
      onClick={openCommandPalette}
      className={`inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-[12px] text-ink-2 transition-colors hover:border-line-strong hover:text-ink ${className}`}
    >
      {children ?? (
        <>
          <span>Quick nav</span>
          <kbd className="inline-flex items-center gap-0.5 font-mono text-[11px] text-ink-3">
            <CommandIcon className="size-3" />K
          </kbd>
        </>
      )}
    </button>
  );
}
