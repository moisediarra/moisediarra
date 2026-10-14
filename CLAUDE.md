@AGENTS.md

# Project notes

- Bilingual site: every text lives in `src/i18n/dictionaries/en.ts` and `fr.ts`, typed by `src/i18n/types.ts`. Change both languages together.
- Language-independent data (projects, skills, contact links) lives in `src/content/` and `src/lib/site.ts`.
- The AI assistant's knowledge is generated from the English dictionary and `src/content/` (`src/lib/ai/system-prompt.ts`), so content must stay factual — it is what the assistant tells recruiters.
- Colours are CSS variables in `src/app/globals.css` (light, OS dark, and `data-theme` overrides); use the Tailwind tokens (`bg-surface`, `text-muted`, `text-accent`…) rather than raw colours.
