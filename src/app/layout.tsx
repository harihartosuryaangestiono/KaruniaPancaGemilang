import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { COMPANY_CONFIG } from "@/config/company";

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY_CONFIG.siteUrl),
  title: {
    default: "PT Karunia Panca Gemilang | Plywood, Veneer & Transportation",
    template: "%s | PT Karunia Panca Gemilang",
  },
  description: COMPANY_CONFIG.description,
  keywords: [
    "PT Karunia Panca Gemilang",
    "KPG",
    "plywood Indonesia",
    "veneer Indonesia",
    "plywood supplier",
    "plywood trading",
    "wood processing",
    "transportation Indonesia",
    "freight transportation",
    "tronton transportation",
    "heavy cargo logistics",
  ],
  authors: [{ name: COMPANY_CONFIG.name }],
  creator: COMPANY_CONFIG.name,
  publisher: COMPANY_CONFIG.name,
  openGraph: {
    title: "PT Karunia Panca Gemilang | Plywood, Veneer & Transportation",
    description: COMPANY_CONFIG.description,
    siteName: COMPANY_CONFIG.name,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/brand/kpg-logo.png",
        width: 1200,
        height: 630,
        alt: "PT Karunia Panca Gemilang Corporate Logo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_CONFIG.name,
    alternateName: COMPANY_CONFIG.shortName,
    url: COMPANY_CONFIG.siteUrl,
    email: COMPANY_CONFIG.email,
    telephone: COMPANY_CONFIG.phone,
    description: COMPANY_CONFIG.description,
    knowsAbout: [
      "Wood Processing",
      "Veneer Manufacturing",
      "Plywood Trading",
      "Heavy Cargo Transportation",
      "Industrial Freight Logistics",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-white antialiased text-kpg-text-primary">
        <Navbar />
        <main className="flex-grow pt-[110px] sm:pt-[130px] lg:pt-[150px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
