import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import Topbar from "./components/topbar";
import Providers from "./providers";
import Terminal from "./components/terminal";

const API_ENDPOINT = "https://api.github.com/graphql";
const query = `
  query {
    viewer {
      repository(name: "resume") {
        homepageUrl
      }
    }
  }
`;
type ResumeRepo = {
  data: {
    viewer: {
      repository: {
        homepageUrl: string;
      };
    };
  };
};

async function getResumeRepo() {
  const res = await fetch(API_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GH_API_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({ query: query }),
  });

  return (await res.json()) as ResumeRepo;
}

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Anish Kumar | anishkumar127",
    template: "%s | anishkumar127",
  },
  description:
    "Software engineer, Coding for survival with a spark of passion on the side.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data } = await getResumeRepo();
  const resumeLink = data?.viewer?.repository?.homepageUrl;

  return (
    <html lang="en" className={roboto_mono.className}>
      <body className="antialiased min-h-screen">
        <Providers>
          <div className="flex flex-col container pt-8">
            <Topbar resumeLink={resumeLink} />
            <main className="mb-8">{children}</main>
            <Terminal />
          </div>
        </Providers>
      </body>
    </html>
  );
}
