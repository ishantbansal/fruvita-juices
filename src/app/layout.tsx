import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fruvitajuices.com"),
  title: {
    default: "Fruvita Juices — Real Fruit. Real Fruvita.",
    template: "%s — Fruvita",
  },
  description:
    "Fruvita makes real-fruit juices — from classic mango and guava to bold new blends. Orchard to bottle, no shortcuts.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fruvita Juices — Real Fruit. Real Fruvita.",
    description:
      "Fruvita makes real-fruit juices — from classic mango and guava to bold new blends. Orchard to bottle, no shortcuts.",
    url: "/",
    siteName: "Fruvita Juices",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fruvita Juices — real-fruit juice bottles",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fruvita Juices — Real Fruit. Real Fruvita.",
    description:
      "Fruvita makes real-fruit juices — from classic mango and guava to bold new blends.",
    images: ["/og-image.jpg"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Fruvita Juices",
  url: "https://fruvitajuices.com",
  logo: "https://fruvitajuices.com/brand/fruvita-icon.webp",
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-[var(--color-cream)] text-[var(--color-ink)] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
