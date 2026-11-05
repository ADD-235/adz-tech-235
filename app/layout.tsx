import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Agence digitale au Tchad`, template: `%s | ${site.shortName}` },
  description: site.description,
  openGraph: { type: "website", locale: "fr_FR", siteName: site.name, title: site.name, description: site.slogan },
};

export const viewport: Viewport = { themeColor: "#111A35", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" translate="no" className={`${inter.variable} ${sora.variable}`}>
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
