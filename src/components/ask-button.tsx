"use client";

import { Sparkles } from "lucide-react";

/** Event the chat widget listens to, so any button on the page can open it. */
export const OPEN_ASSISTANT_EVENT = "assistant:open";

export function AskButton({ label, className = "" }: { label: string; className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_ASSISTANT_EVENT))}
      className={className}
    >
      <Sparkles className="size-4" aria-hidden />
      {label}
    </button>
  );
}
