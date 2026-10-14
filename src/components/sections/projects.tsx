import { ArrowUpRight, Code2 } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { projects, type ProjectStatus } from "@/content/projects";
import type { Dictionary } from "@/i18n/get-dictionary";

const statusStyle: Record<ProjectStatus, string> = {
  live: "border-ok/30 text-ok",
  completed: "border-border text-muted",
  inProgress: "border-accent/40 text-accent",
  demo: "border-border text-muted",
  course: "border-border text-muted",
};

export function Projects({ projects: text }: { projects: Dictionary["projects"] }) {
  return (
    <section id="projects" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="reveal">
          <SectionHeading index="03" eyebrow={text.eyebrow} title={text.title} intro={text.intro} />
        </div>

        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {projects.map((project) => {
            const item = text.items[project.id];
            const featured = "featured" in project && project.featured;
            const status = "status" in project ? project.status : undefined;
            return (
              <li
                key={project.id}
                className={`reveal flex flex-col rounded-2xl border bg-surface p-6 sm:p-7 ${
                  featured
                    ? "border-accent/50 shadow-[0_0_0_1px_var(--accent-soft),0_20px_50px_-30px_var(--glow)] md:col-span-2"
                    : "border-border"
                }`}
              >
                <div className="flex flex-wrap items-center gap-2">
                  {featured && (
                    <span className="rounded-full bg-accent px-2.5 py-0.5 font-mono text-[0.7rem] font-medium text-accent-fg">
                      {text.featured}
                    </span>
                  )}
                  {status && (
                    <span
                      className={`rounded-full border px-2.5 py-0.5 font-mono text-[0.7rem] ${statusStyle[status]}`}
                    >
                      {text.status[status]}
                    </span>
                  )}
                </div>

                <h3 className={`mt-4 font-semibold tracking-tight ${featured ? "text-2xl" : "text-xl"}`}>
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted text-pretty">{item.summary}</p>

                <ul className={`mt-5 grid gap-2 text-sm ${featured ? "lg:grid-cols-3 lg:gap-4" : ""}`}>
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-accent" />
                      <span className="text-pretty">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <ul className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-md bg-surface-2 px-2 py-0.5 font-mono text-[0.7rem] text-muted"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  {(project.links.source || project.links.demo) && (
                    <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-accent hover:underline"
                        >
                          {text.demo}
                          <ArrowUpRight className="size-4" aria-hidden />
                        </a>
                      )}
                      {project.links.source && (
                        <a
                          href={project.links.source}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-muted hover:text-fg"
                        >
                          <Code2 className="size-4" aria-hidden />
                          {text.source}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
