/**
 * Contact details and links used across the site.
 * An empty value is simply hidden on the site.
 */
export const site = {
  name: "Moise Diarra",

  /**
   * Public URL of the site (no trailing "/"). On Vercel the production domain is detected
   * automatically; set NEXT_PUBLIC_SITE_URL if you use a custom domain.
   */
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),

  email: "moisepr@gmail.com",

  /** e.g. "https://www.linkedin.com/in/your-handle" */
  linkedin: "",

  /** e.g. "https://github.com/your-handle" */
  github: "https://github.com/moisediarra",

  /** Downloadable résumé for each language, served from public/cv/. */
  cv: {
    en: "/cv/Moise-Diarra-CV-EN.pdf",
    fr: "/cv/Moise-Diarra-CV-FR.pdf",
  },

  /** Square profile photo in public/, e.g. "/images/moise.jpg". Empty shows the initials. */
  photo: "",
};
