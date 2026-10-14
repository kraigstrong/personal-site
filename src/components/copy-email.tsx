"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "./icons";

export async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

export function CopyEmail({ email, className = "" }: { email: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(t);
  }, [copied]);

  return (
    <button
      type="button"
      onClick={async () => {
        if (await copyText(email)) setCopied(true);
        else window.location.assign(`mailto:${email}`);
      }}
      className={`group inline-flex items-center gap-2 ${className}`}
    >
      <span>{email}</span>
      <span className="text-ink-3 transition-colors group-hover:text-ink" aria-hidden="true">
        {copied ? <Check /> : <Copy />}
      </span>
      <span className="sr-only" aria-live="polite">
        {copied ? "Email copied" : "Copy email"}
      </span>
    </button>
  );
}
