import { SectionHeading } from "@/components/section-heading";
import type { Dictionary } from "@/i18n/get-dictionary";
import { site } from "@/lib/site";

export function About({ about }: { about: Dictionary["about"] }) {
  return (
    <section id="about" className="border-t border-border py-20 sm:py-28">
      <div className="reveal mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-8">
        <div>
          <SectionHeading index="01" eyebrow={about.eyebrow} title={about.title} />

          <div className="mt-10 flex items-center gap-4">
            {site.photo ? (
              // eslint-disable-next-line @next/next/no-img-element -- small static portrait
              <img
                src={site.photo}
                alt={site.name}
                width={80}
                height={80}
                className="size-20 rounded-2xl border border-border object-cover"
              />
            ) : (
              <span
                aria-hidden
                className="grid size-20 place-items-center rounded-2xl border border-border bg-surface-2 font-serif text-3xl italic text-accent"
              >
                MD
              </span>
            )}
            <div>
              <p className="font-semibold">{site.name}</p>
              <a href={`mailto:${site.email}`} className="text-sm text-muted hover:text-accent">
                {site.email}
              </a>
            </div>
          </div>

          <dl className="mt-8 divide-y divide-border border-y border-border">
            {about.facts.map((fact) => (
              <div key={fact.label} className="flex flex-wrap justify-between gap-x-6 gap-y-1 py-3 text-sm">
                <dt className="text-muted">{fact.label}</dt>
                <dd className="font-medium">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-pretty lg:pt-14">
          {about.paragraphs.map((paragraph, i) => (
            <p key={i} className={i === 0 ? "text-fg" : "text-muted"}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
