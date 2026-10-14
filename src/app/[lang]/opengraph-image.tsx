import { ImageResponse } from "next/og";
import { defaultLocale, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Moise Diarra — Software Engineer · Agentic & Generative AI";

/** Social preview card, generated at build time for each language. */
export default async function OpengraphImage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const { hero } = await getDictionary(isLocale(lang) ? lang : defaultLocale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0b0d11",
          backgroundImage: "radial-gradient(circle at 85% 0%, rgba(245,176,65,0.22), transparent 55%)",
          color: "#eceae4",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 14,
              background: "#eceae4",
              color: "#0b0d11",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            MD
          </div>
          <div style={{ fontSize: 30, color: "#9ba1ab" }}>{hero.eyebrow}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -2 }}>{site.name}</div>
          <div style={{ display: "flex", flexWrap: "wrap", fontSize: 44, lineHeight: 1.25, maxWidth: 1000 }}>
            {hero.titleLead}&nbsp;<span style={{ color: "#f5b041" }}>{hero.titleAccent}</span>&nbsp;
            {hero.titleTail}
          </div>
        </div>

        <div style={{ fontSize: 26, color: "#9ba1ab" }}>{hero.location}</div>
      </div>
    ),
    size,
  );
}
