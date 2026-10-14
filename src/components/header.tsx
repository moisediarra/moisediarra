"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { localeNames, locales, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { SECTIONS } from "@/lib/sections";
import { site } from "@/lib/site";
import { Monogram } from "./monogram";
import { ThemeToggle } from "./theme-toggle";

export function Header({ lang, nav }: { lang: Locale; nav: Dictionary["nav"] }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav item of the section currently in the middle of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of ["top", ...SECTIONS]) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Switching language keeps the visitor on the same section.
  const hash = active && active !== "top" ? `#${active}` : "";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color] duration-300 ${
        scrolled || open
          ? "border-b border-border bg-bg/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-fg focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
      >
        {nav.skip}
      </a>

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href={`/${lang}`} aria-label={nav.home} className="flex shrink-0 items-center gap-2.5">
          <Monogram className="size-8" />
          <span className="hidden text-sm font-semibold tracking-tight sm:inline">{site.name}</span>
        </Link>

        <nav aria-label={nav.main} className="hidden md:block">
          <ul className="flex items-center gap-1">
            {SECTIONS.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "true" : undefined}
                  className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                    active === id ? "bg-accent-soft text-fg" : "text-muted hover:text-fg"
                  }`}
                >
                  {nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.cv[lang]}
            download
            className="hidden items-center gap-1.5 rounded-full border border-border bg-surface/70 px-3.5 py-1.5 text-sm font-medium transition-colors hover:bg-surface-2 lg:inline-flex"
          >
            <Download className="size-3.5" aria-hidden />
            {nav.cv}
          </a>

          <div
            role="group"
            aria-label={nav.language}
            className="flex rounded-full border border-border bg-surface/70 p-0.5 font-mono text-xs"
          >
            {locales.map((locale) =>
              locale === lang ? (
                <span
                  key={locale}
                  aria-current="true"
                  className="rounded-full bg-fg px-2.5 py-1 uppercase text-bg"
                >
                  {locale}
                </span>
              ) : (
                <Link
                  key={locale}
                  href={`/${locale}${hash}`}
                  hrefLang={locale}
                  lang={locale}
                  aria-label={localeNames[locale]}
                  className="rounded-full px-2.5 py-1 uppercase text-muted transition-colors hover:text-fg"
                >
                  {locale}
                </Link>
              ),
            )}
          </div>

          <ThemeToggle label={nav.theme} />

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? nav.closeMenu : nav.openMenu}
            className="grid size-9 place-items-center rounded-full text-fg transition-colors hover:bg-surface-2 md:hidden"
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label={nav.main} className="border-t border-border md:hidden">
          <ul className="mx-auto grid max-w-6xl gap-1 px-4 py-3 sm:px-6">
            {SECTIONS.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2.5 font-medium hover:bg-surface-2"
                >
                  {nav[id]}
                </a>
              </li>
            ))}
            <li className="pt-1">
              <a
                href={site.cv[lang]}
                download
                className="flex items-center gap-2 rounded-xl px-3 py-2.5 font-medium text-accent hover:bg-surface-2"
              >
                <Download className="size-4" aria-hidden />
                {nav.cv}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
