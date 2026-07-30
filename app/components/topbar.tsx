"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useContext } from "react";
import { TerminalContext } from "../providers";
import { site } from "@/data/site";

const navItems = {
  "/": {
    name: "about",
  },
  "/projects": {
    name: "projects",
  },
  // "/blog": {
  //   name: "blog",
  // },
  // "/contact": {
  //   name: "contact",
  // },
};

export default function Topbar({ resumeLink }: { resumeLink?: string }) {
  let pathname = usePathname() || "/";
  const { theme, setTheme } = useTheme();
  const { isOpen, toggleIsOpen } = useContext(TerminalContext);

  return (
    <header>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-start">
        <div>
          <h1 className="font-bold text-xl">anish kumar</h1>
          <p className="text-sm text-neutral-500">
            {site.title} · Previously at{" "}
            <Link
              className="underline underline-offset-4"
              rel="noopener noreferrer"
              target="_blank"
              href={site.companyUrl}
            >
              {site.company}
            </Link>
          </p>
          <p className="text-sm text-green-700 dark:text-green-400 mt-1">
            {site.openToWork}
          </p>
          <p className="text-sm mt-1">
            <a
              href={`tel:${site.phone}`}
              className="underline underline-offset-4 hover:text-neutral-600 dark:hover:text-neutral-300"
            >
              {site.phoneDisplay}
            </a>
            <span className="text-neutral-400 mx-2">·</span>
            <a
              href={`mailto:${site.email}`}
              className="underline underline-offset-4 hover:text-neutral-600 dark:hover:text-neutral-300"
            >
              {site.email}
            </a>
          </p>
        </div>
        <div className="relative flex items-center space-x-2 py-2 sm:py-0">
          <SocialsLink href={site.github}>
            <GithubIcon />
          </SocialsLink>
          <SocialsLink href={site.linkedin}>
            <LinkedinIcon />
          </SocialsLink>
          <button
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
            className="h-7 w-7 rounded-md hover:bg-gray-100 hover:dark:bg-[#1c1c1c] flex justify-center items-center"
          >
            <BrushIcon />
          </button>
          <button
            onClick={toggleIsOpen}
            className={clsx(
              "h-7 w-7 rounded-md hover:bg-gray-100 hover:dark:bg-[#1c1c1c] flex justify-center items-center",
              {
                "bg-gray-100 dark:bg-[#1c1c1c]": isOpen,
              },
            )}
          >
            <TerminalIcon />
          </button>
          <div
            className={clsx(
              "absolute w-[4px] h-[4px] bg-green-600 rounded-lg bottom-0 right-3 transition-all",
              {
                "opacity-0": !isOpen,
                "animate-pulse": isOpen,
              },
            )}
          ></div>
        </div>
      </div>
      <nav className="mb-6 flex flex-wrap justify-between items-center gap-3">
        <div
          className="inline-flex items-center gap-1 rounded-lg border border-neutral-200 dark:border-neutral-700 p-1 bg-neutral-50 dark:bg-neutral-900/60"
          role="tablist"
          aria-label="Site navigation"
        >
          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = path === pathname;
            return (
              <Link
                key={path}
                href={path}
                role="tab"
                aria-selected={isActive}
                className={clsx(
                  "px-3 py-1.5 rounded-md text-sm transition-all capitalize",
                  isActive
                    ? "bg-white dark:bg-neutral-800 text-black dark:text-white font-medium shadow-sm"
                    : "text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800",
                )}
              >
                {name}
              </Link>
            );
          })}
        </div>
        {resumeLink ? (
          <a
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/60 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors capitalize"
            rel="noopener noreferrer"
            target="_blank"
            href={resumeLink}
          >
            resume
            <ResumeIcon />
          </a>
        ) : null}
      </nav>
    </header>
  );
}

export function SocialsLink(props: any) {
  return (
    <a
      {...props}
      target="_blank"
      className="h-7 w-7 rounded-md hover:bg-gray-100 hover:dark:bg-[#1c1c1c] flex justify-center items-center"
    />
  );
}

function BrushIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-paintbrush-2 h-4 w-4"
    >
      <path d="M14 19.9V16h3a2 2 0 0 0 2-2v-2H5v2c0 1.1.9 2 2 2h3v3.9a2 2 0 1 0 4 0Z" />
      <path d="M6 12V2h12v10" />
      <path d="M14 2v4" />
      <path d="M10 2v2" />
    </svg>
  );
}

export function GithubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-github h-4 w-4"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
function LinkedinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-linkedin h-4 w-4"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function ResumeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 opacity-70"
      aria-hidden="true"
    >
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

function TerminalIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-terminal h-4 w-4"
    >
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" x2="20" y1="19" y2="19" />
    </svg>
  );
}
