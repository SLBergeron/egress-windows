import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://egressexperts.ca'),
  title: {
    default: "Egress Experts - Basement Window & Door Specialists Ottawa",
    template: "%s | Egress Experts"
  },
  description:
    "Turn your basement into a safe, legal living space. We handle basement egress windows from design to install. Full code compliance. One point of contact. Ottawa's egress specialists.",
  keywords: [
    "egress window",
    "basement egress",
    "egress window installation Ottawa",
    "basement window code compliance",
    "Ontario Building Code egress",
    "basement renovation Ottawa",
    "egress window well",
    "basement safety",
    "legal basement bedroom",
    "egress specialists Ottawa"
  ],
  authors: [{ name: "Egress Experts" }],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://egressexperts.ca",
    title: "Egress Experts - Basement Window & Door Specialists Ottawa",
    description: "Turn your basement into a safe, legal living space. Full Ontario Building Code compliance. One point of contact for all your egress needs.",
    siteName: "Egress Experts",
  },
  twitter: {
    card: "summary_large_image",
    title: "Egress Experts - Basement Window & Door Specialists Ottawa",
    description: "Turn your basement into a safe, legal living space. Full Ontario Building Code compliance.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Egress Experts",
  "description": "Basement window and door egress specialists in Ottawa. We turn basement windows into code-compliant egress systems.",
  "url": "https://egressexperts.ca",
  "telephone": "(613) XXX-XXXX",
  "email": "info@egressexperts.ca",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ottawa",
    "addressRegion": "ON",
    "addressCountry": "CA"
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "45.4215",
      "longitude": "-75.6972"
    },
    "geoRadius": "50000"
  },
  "serviceType": [
    "Egress Window Installation",
    "Basement Window Replacement",
    "Window Well Installation",
    "Egress Door Installation",
    "Building Code Compliance"
  ],
  "priceRange": "$$",
  "openingHours": "Mo-Fr 08:00-17:00"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${manrope.variable} ${inter.variable} antialiased  `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="bg-background text-foreground">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
