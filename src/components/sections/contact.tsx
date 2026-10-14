import { Download, Globe, Mail, MapPin } from "lucide-react";
import { CopyButton } from "@/components/copy-button";
import { SectionHeading } from "@/components/section-heading";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { site } from "@/lib/site";

export function Contact({ lang, contact }: { lang: Locale; contact: Dictionary["contact"] }) {
  const profiles = [
    { label: "LinkedIn", href: site.linkedin },
    { label: "GitHub", href: site.github },
  ].filter((profile) => profile.href);

  return (
    <section id="contact" className="border-t border-border py-20 sm:py-28">
      <div className="reveal mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-3xl border border-border bg-surface p-6 sm:p-12">
          <div
            aria-hidden
            className="hero-glow absolute -right-40 -bottom-56 -z-10 h-[30rem] w-[40rem]"
          />
          <SectionHeading index="05" eyebrow={contact.eyebrow} title={contact.title} intro={contact.text} />

          <p className="mt-8 font-mono text-lg break-all sm:text-2xl">{site.email}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-fg transition-colors hover:bg-accent-strong"
            >
              <Mail className="size-4" aria-hidden />
              {contact.email}
            </a>
            <CopyButton
              value={site.email}
              label={contact.copy}
              copiedLabel={contact.copied}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
            />
            <a
              href={site.cv[lang]}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              <Download className="size-4" aria-hidden />
              {contact.cv}
            </a>
            {profiles.map((profile) => (
              <a
                key={profile.label}
                href={profile.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
              >
                {profile.label}
              </a>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-6 text-sm text-muted">
            <p className="flex items-center gap-2">
              <MapPin className="size-4" aria-hidden />
              {contact.location}
            </p>
            <p className="flex items-center gap-2">
              <Globe className="size-4" aria-hidden />
              {contact.languages}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
