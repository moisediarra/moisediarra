import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, LOCALE_COOKIE, locales, type Locale } from "@/i18n/config";

/** Picks the visitor's language: last visited locale (cookie), then browser preference, then English. */
function preferredLocale(request: NextRequest): Locale {
  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  if (saved && isLocale(saved)) return saved;

  const ranked = (request.headers.get("accept-language") ?? "")
    .split(",")
    .map((entry) => {
      const [tag, ...params] = entry.trim().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      return {
        language: tag.toLowerCase().split("-")[0],
        quality: q ? Number(q.trim().slice(2)) : 1,
      };
    })
    .filter((entry) => entry.language && !Number.isNaN(entry.quality))
    .sort((a, b) => b.quality - a.quality);

  for (const { language } of ranked) {
    if (isLocale(language)) return language;
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const current = locales.find(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (current) {
    const response = NextResponse.next();
    if (request.cookies.get(LOCALE_COOKIE)?.value !== current) {
      response.cookies.set(LOCALE_COOKIE, current, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
        sameSite: "lax",
      });
    }
    return response;
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next.js internals, the API and any file with an extension (images, CV, sitemap.xml…)
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
