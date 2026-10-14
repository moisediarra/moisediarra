import { Bot, Layers, Rocket, Sparkles, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { skills, type SkillGroup } from "@/content/skills";
import type { Dictionary } from "@/i18n/get-dictionary";

/** One icon per expertise area, in the order of `expertise.areas`. */
const icons: LucideIcon[] = [Bot, Sparkles, Layers, Rocket];

export function Expertise({ expertise }: { expertise: Dictionary["expertise"] }) {
  return (
    <section id="expertise" className="border-t border-border bg-surface/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="reveal">
          <SectionHeading
            index="02"
            eyebrow={expertise.eyebrow}
            title={expertise.title}
            intro={expertise.intro}
          />
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {expertise.areas.map((area, i) => {
            const Icon = icons[i] ?? Sparkles;
            return (
              <article
                key={area.title}
                className="reveal group rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/50 sm:p-7"
              >
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-accent-soft text-accent">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight">{area.title}</h3>
                </div>
                <p className="mt-4 leading-relaxed text-muted text-pretty">{area.text}</p>
                <ul className="mt-5 grid gap-2 text-sm sm:grid-cols-2">
                  {area.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="reveal mt-16">
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">{expertise.stackTitle}</h3>
          <dl className="mt-5 divide-y divide-border border-y border-border">
            {(Object.keys(skills) as SkillGroup[]).map((group) => (
              <div key={group} className="grid gap-3 py-4 sm:grid-cols-[13rem_1fr] sm:gap-6">
                <dt className="text-sm font-medium">{expertise.groups[group]}</dt>
                <dd className="flex flex-wrap gap-2">
                  {skills[group].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
