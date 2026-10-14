"use client";

import { Moon, Sun } from "lucide-react";

/** Switches between light and dark, remembering the choice. The visible icon is chosen in CSS. */
export function ThemeToggle({ label }: { label: string }) {
  const toggle = () => {
    const root = document.documentElement;
    const current =
      root.dataset.theme ?? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be unavailable (private mode); the theme still applies for this visit.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="grid size-9 place-items-center rounded-full border border-border bg-surface/70 text-fg transition-colors hover:bg-surface-2"
    >
      <Sun className="theme-icon-sun size-4" aria-hidden />
      <Moon className="theme-icon-moon size-4" aria-hidden />
    </button>
  );
}
