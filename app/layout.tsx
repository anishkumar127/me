import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import Topbar from "./components/topbar";
import Providers from "./providers";
import Terminal from "./components/terminal";
import Footer from "./components/footer";
import { Analytics } from "./components/analytics";
import { JsonLd } from "./components/json-ld";
import { site } from "@/data/site";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.metadata.title,
  title: {
    default: site.metadata.title,
    template: `%s | ${site.handle}`,
  },
  description: site.metadata.description,
  keywords: [...site.metadata.keywords],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: site.url,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.metadata.title,
    title: site.metadata.title,
    description: site.metadata.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: site.metadata.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.metadata.title,
    description: site.metadata.description,
    creator: `@${site.handle}`,
    images: ["/og-image.png"],
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
  ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
    ? {
        other: {
          "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
        },
      }
    : {}),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto_mono.className} suppressHydrationWarning>
      <head>
        <JsonLd />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM summary" />
      </head>
      <body className="antialiased min-h-screen">
        <Providers>
          <div className="flex flex-col container pt-8 min-h-screen">
            <Topbar resumeLink={site.resumeUrl} />
            <main className="mb-8 flex-1">{children}</main>
            <Footer />
            <Terminal />
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
