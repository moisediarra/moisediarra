import { ArrowUp } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";
import { SECTIONS } from "@/lib/sections";
import { site } from "@/lib/site";
import { Monogram } from "./monogram";

export function Footer({ nav, footer }: { nav: Dictionary["nav"]; footer: Dictionary["footer"] }) {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <Monogram className="size-8" />
          <div className="text-sm">
            <p className="font-medium">
              © {site.name}. {footer.rights}
            </p>
            <p className="text-muted">{footer.builtWith}</p>
          </div>
        </div>

        <nav aria-label={nav.main}>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
            {SECTIONS.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className="hover:text-fg">
                  {nav[id]}
                </a>
              </li>
            ))}
            <li>
              <a href="#top" className="inline-flex items-center gap-1 hover:text-fg">
                <ArrowUp className="size-3.5" aria-hidden />
                {footer.backToTop}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
