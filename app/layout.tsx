import type { Metadata } from "next";
import Link from "next/link";
import { Space_Grotesk, Inter } from "next/font/google";
import { PROFILE } from "@/data/profile";
import { ThemeProvider } from "@/context/theme-provider";
import { LanguageProvider } from "@/context/language-context";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { Footer } from "@/components/layout/footer";
import { ScrollToTopButton } from "@/components/layout/scroll-to-top-button";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://chade-liamidi.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Chade Liamidi — Développeuse Web Frontend",
    template: "%s · Chade Liamidi",
  },
  description:
    "Portfolio de Chade Liamidi, développeuse Web Frontend spécialisée Next.js, TypeScript et Tailwind CSS, basée à Cotonou, Bénin.",
  keywords: [
    "Chade Liamidi",
    "développeuse frontend",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Cotonou",
    "Bénin",
    "portfolio développeur web",
  ],
  authors: [{ name: PROFILE.fullName }],
  openGraph: {
    type: "website",
    title: "Chade Liamidi — Développeuse Web Frontend",
    description:
      "Portfolio de Chade Liamidi, développeuse Web Frontend spécialisée Next.js, TypeScript et Tailwind CSS.",
    url: SITE_URL,
    siteName: "Chade Liamidi",
    images: [{ url: "/images/og-cover.svg", width: 1200, height: 630 }],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chade Liamidi — Développeuse Web Frontend",
    description:
      "Portfolio de Chade Liamidi, développeuse Web Frontend spécialisée Next.js, TypeScript et Tailwind CSS.",
    images: ["/images/og-cover.svg"],
  },
  icons: {
    icon: "/images/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            <Link
              href="/#hero"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent-cyan focus:px-4 focus:py-2 focus:text-bg"
            >
              Aller au contenu principal
            </Link>
            <div className="ambient-glow" aria-hidden="true" />
            <Header />
            <Sidebar />
            <main className="relative z-10">{children}</main>
            <Footer />
            <ScrollToTopButton />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
