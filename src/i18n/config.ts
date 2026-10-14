export const locales = ["en", "fr"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Remembers the language the visitor last viewed, so `/` sends them back to it. */
export const LOCALE_COOKIE = "NEXT_LOCALE";

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const openGraphLocale: Record<Locale, string> = {
  en: "en_US",
  fr: "fr_FR",
};

/** Each language written in its own language, for the language switcher. */
export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
};
