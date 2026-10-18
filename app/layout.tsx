import type { Metadata } from "next";
import { IBM_Plex_Mono, Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Preloader } from "@/components/preloader";
import { site } from "@/lib/site";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus",
  display: "swap",
});

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: `${site.name} — ${site.role}`, template: `%s — ${site.name}` },
  description: site.description,
  metadataBase: new URL(site.url),
  keywords: ["email marketing", "social media management", "newsletter design", "Klaviyo", "content strategy"],
  openGraph: {
    type: "website",
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">
        <Preloader />
        <Header />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
