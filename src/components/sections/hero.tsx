import { ArrowRight, Download, MapPin } from "lucide-react";
import { AskButton } from "@/components/ask-button";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { site } from "@/lib/site";

const stepColor: Record<Dictionary["hero"]["trace"]["steps"][number]["kind"], string> = {
  task: "text-muted",
  plan: "text-muted",
  tool: "text-accent",
  check: "text-ok",
  done: "text-ok",
};

export function Hero({
  lang,
  hero,
  assistant,
}: {
  lang: Locale;
  hero: Dictionary["hero"];
  assistant: boolean;
}) {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div aria-hidden className="hero-grid absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="hero-glow absolute -top-48 left-1/2 -z-10 h-[38rem] w-[60rem] -translate-x-1/2"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 font-mono text-xs text-muted">
            <span aria-hidden className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-ok opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-ok" />
            </span>
            {hero.eyebrow}
          </p>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {hero.titleLead}{" "}
            <span className="font-serif text-[1.08em] font-normal italic text-accent">
              {hero.titleAccent}
            </span>{" "}
            {hero.titleTail}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted text-pretty">{hero.intro}</p>

          <p className="mt-4 flex items-center gap-2 text-sm text-muted">
            <MapPin className="size-4 shrink-0" aria-hidden />
            {hero.location}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-fg transition-colors hover:bg-accent-strong"
            >
              {hero.ctaProjects}
              <ArrowRight className="size-4" aria-hidden />
            </a>
            {assistant ? (
              <AskButton
                label={hero.ctaAsk}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
              />
            ) : (
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
              >
                {hero.ctaContact}
              </a>
            )}
            <a
              href={site.cv[lang]}
              download
              className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-muted transition-colors hover:text-fg"
            >
              <Download className="size-4" aria-hidden />
              {hero.ctaCv}
            </a>
          </div>

          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-border pt-6">
            {hero.stats.map((stat) => (
              // Label first in the markup for screen readers, shown under the value.
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="mt-1 text-xs leading-snug text-muted sm:text-sm">{stat.label}</dt>
                <dd className="text-2xl font-semibold tracking-tight sm:text-3xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="relative rounded-2xl border border-border bg-surface shadow-2xl shadow-black/5">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <span aria-hidden className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-border" />
              <span className="size-2.5 rounded-full bg-border" />
              <span className="size-2.5 rounded-full bg-border" />
            </span>
            <span className="ml-2 font-mono text-xs text-muted">{hero.trace.label}</span>
          </div>
          <ol className="space-y-3 p-5 font-mono text-[0.8rem] leading-relaxed">
            {hero.trace.steps.map((step, i) => (
              <li
                key={i}
                style={{ "--i": i } as React.CSSProperties}
                className="trace-step flex flex-wrap items-baseline gap-x-3"
              >
                <span className={`w-12 shrink-0 text-[0.7rem] uppercase ${stepColor[step.kind]}`}>
                  {step.kind}
                </span>
                <span className="min-w-0 flex-1 break-words">{step.text}</span>
                {step.result && <span className="text-muted">→ {step.result}</span>}
              </li>
            ))}
            <li aria-hidden className="pl-15 text-muted">
              <span className="caret inline-block h-4 w-2 translate-y-0.5 bg-accent" />
            </li>
          </ol>
          <figcaption className="border-t border-border px-5 py-3 text-sm text-muted">
            {hero.trace.caption}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
