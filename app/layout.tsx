import type { Metadata } from "next";
import { Space_Grotesk, Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Rise n Clicks — AI-Enabled Growth Systems That Turn Attention Into Leads",
  description: "Rise n Clicks builds AI-enabled marketing systems through ads, creatives, websites, automation, and conversion-focused execution to turn attention into leads, bookings, users, and revenue.",
  keywords: [
    "AI-enabled growth agency",
    "performance marketing",
    "lead generation",
    "Meta Ads",
    "Google Ads",
    "websites",
    "landing pages",
    "automation",
    "AI workflows",
    "SaaS marketing",
    "local lead generation",
    "HVAC marketing",
    "plumbing marketing",
    "pest control marketing",
    "real estate marketing",
    "creative systems",
    "conversion-focused marketing"
  ],
  openGraph: {
    title: "Rise n Clicks — AI-Enabled Growth Systems That Turn Attention Into Leads",
    description: "Rise n Clicks builds AI-enabled marketing systems through ads, creatives, websites, automation, and conversion-focused execution to turn attention into leads, bookings, users, and revenue.",
    type: "website",
    locale: "en_US",
    siteName: "Rise n Clicks",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rise n Clicks — AI-Enabled Growth Systems",
    description: "AI-enabled marketing systems that turn attention into qualified pipeline. Performance marketing, creatives, websites, automation.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Inject structured JSON-LD schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://risenclicks.com/#organization",
        "name": "Rise n Clicks",
        "url": "https://risenclicks.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://risenclicks.com/assest/logo/ChatGPT%20Image%20May%2027,%202026,%2004_02_25%20AM.png"
        },
        "description": "AI-enabled creative systems lab that turns attention into leads, users, bookings, and revenue.",
        "sameAs": []
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://risenclicks.com/#service",
        "name": "Rise n Clicks Creative Systems Lab",
        "url": "https://risenclicks.com",
        "image": "https://risenclicks.com/assest/logo/ChatGPT%20Image%20May%2027,%202026,%2004_02_25%20AM.png",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Global",
          "addressCountry": "US"
        }
      },
      {
        "@type": "Service",
        "name": "Growth Systems",
        "description": "Paid advertising campaigns on Meta and Google Ads coupled with high-converting funnels.",
        "provider": {
          "@id": "https://risenclicks.com/#organization"
        }
      },
      {
        "@type": "Service",
        "name": "Creative Systems",
        "description": "Conversion-focused reels, ads, and AI content creation.",
        "provider": {
          "@id": "https://risenclicks.com/#organization"
        }
      }
    ]
  };

  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${spaceMono.variable} h-full antialiased text-text-primary bg-main-bg selection:bg-primary-teal/20 selection:text-primary-teal`}
      >
        {children}
      </body>
    </html>
  );
}
