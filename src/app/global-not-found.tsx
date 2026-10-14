import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { site } from "@/lib/site";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `Page not found · Page introuvable — ${site.name}`,
};

// Shown for any URL that doesn't match a page. Bilingual because the language is unknown here.
export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} antialiased`}>
      <body className="font-sans">
        <main className="grid min-h-dvh place-items-center px-4 py-16 text-center">
          <div>
            <p className="font-mono text-sm text-accent">404</p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight">
              Page not found
              <span lang="fr" className="mt-1 block text-xl font-normal text-muted">
                Page introuvable
              </span>
            </h1>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                href="/en"
                className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-fg transition-colors hover:bg-accent-strong"
              >
                Back to home
              </Link>
              <Link
                href="/fr"
                lang="fr"
                className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
              >
                Retour à l’accueil
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
