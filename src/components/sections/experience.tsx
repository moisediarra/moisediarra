import { Award, GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import type { Dictionary } from "@/i18n/get-dictionary";

export function Experience({ experience }: { experience: Dictionary["experience"] }) {
  return (
    <section id="experience" className="border-t border-border bg-surface/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="reveal">
          <SectionHeading index="04" eyebrow={experience.eyebrow} title={experience.title} />
        </div>

        <ol className="mt-12 border-l border-border">
          {experience.items.map((job, i) => (
            <li key={`${job.company}-${job.period}`} className="reveal relative pb-10 pl-6 last:pb-0 sm:pl-8">
              <span
                aria-hidden
                className={`absolute -left-[5px] top-1.5 size-[9px] rounded-full border-2 ${
                  i === 0 ? "border-accent bg-accent" : "border-border bg-bg"
                }`}
              />
              <div className="grid gap-2 md:grid-cols-[11rem_1fr] md:gap-8">
                <p className="font-mono text-xs leading-6 text-muted">{job.period}</p>
                <div>
                  <h3 className="font-semibold tracking-tight">{job.role}</h3>
                  <p className="text-sm text-muted">
                    {job.company}
                    {job.location && <> · {job.location}</>}
                  </p>
                  <ul className="mt-3 space-y-2 text-[0.95rem] leading-relaxed">
                    {job.points.map((point) => (
                      <li key={point} className="text-pretty">
                        {point}
                      </li>
                    ))}
                  </ul>
                  {job.tags && (
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {job.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-md bg-surface-2 px-2 py-0.5 font-mono text-[0.7rem] text-muted"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="reveal mt-10 rounded-2xl border border-dashed border-border p-5 text-sm leading-relaxed text-muted sm:p-6">
          <p className="font-medium text-fg">{experience.earlierTitle}</p>
          <p className="mt-2 text-pretty">{experience.earlier}</p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div className="reveal">
            <h3 className="flex items-center gap-2 text-lg font-semibold tracking-tight">
              <GraduationCap className="size-5 text-accent" aria-hidden />
              {experience.educationTitle}
            </h3>
            <ul className="mt-5 space-y-4">
              {experience.degrees.map((degree) => (
                <li key={degree.degree} className="rounded-2xl border border-border bg-surface p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <p className="font-semibold">{degree.degree}</p>
                    <p className="font-mono text-xs text-muted">{degree.period}</p>
                  </div>
                  <p className="mt-1 text-sm text-muted">{degree.school}</p>
                  {degree.note && (
                    <p className="mt-3 inline-flex rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent">
                      {degree.note}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal">
            <h3 className="flex items-center gap-2 text-lg font-semibold tracking-tight">
              <Award className="size-5 text-accent" aria-hidden />
              {experience.trainingTitle}
            </h3>
            <ul className="mt-5 divide-y divide-border border-y border-border text-sm">
              {experience.training.map((course) => (
                <li key={course} className="py-3 text-pretty">
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
