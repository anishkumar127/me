import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import Topbar from "./components/topbar";
import Providers from "./providers";
import Terminal from "./components/terminal";
import { site } from "@/data/site";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: site.metadata.title,
    template: "%s | anishkumar127",
  },
  description: site.metadata.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto_mono.className}>
      <body className="antialiased min-h-screen">
        <Providers>
          <div className="flex flex-col container pt-8">
            <Topbar resumeLink={site.resumeUrl} />
            <main className="mb-8">{children}</main>
            <Terminal />
          </div>
        </Providers>
      </body>
    </html>
  );
}
