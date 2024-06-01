"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useContext } from "react";
import { TerminalContext } from "../providers";

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

export default function Topbar({ resumeLink }: { resumeLink: string }) {
  let pathname = usePathname() || "/";
  const { theme, setTheme } = useTheme();
  const { isOpen, toggleIsOpen } = useContext(TerminalContext);

  return (
    <header>
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="font-bold text-xl">anish kumar</h1>
          <p className="text-sm text-neutral-500">
            {`software engineer at `}
            <a
              className="underline underline-offset-4"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.cubiclogics.com/"
            >
              Cubic Logics
            </a>
          </p>
        </div>
        <div className="relative flex items-center space-x-2 py-2">
          <SocialsLink href="tel:+919649275150">
            <PhoneIcon />
          </SocialsLink>
          <SocialsLink  href="mailto:anishbishnoi127@gmail.com">
            <GmailIcon />
          </SocialsLink>
          <SocialsLink href="https://github.com/anishkumar127">
            <GithubIcon />
          </SocialsLink>
          <SocialsLink href="https://www.linkedin.com/in/anishkumar127">
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
              }
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
              }
            )}
          ></div>
        </div>
      </div>
      <nav className="mb-6 flex justify-between items-center">
        <div className="flex flex-row space-x-4">
          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = path === pathname;
            return (
              <Link
                key={path}
                href={path}
                className={clsx(
                  "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle",
                  {
                    "text-neutral-500": !isActive,
                  }
                )}
              >
                {name}
              </Link>
            );
          })}
        </div>
        <a
          className="underline underline-offset-4"
          rel="noopener noreferrer"
          target="_blank"
          href={resumeLink}
        >
          resume
        </a>
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

function PhoneIcon() {
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
      className="lucide lucide-phone h-4 w-4"
    >
      <path d="M22 16.92V21a2 2 0 0 1-2.18 2c-4.96-.58-9.71-3.73-12.77-8C4.11 12.64 1 7.92 1 3A2 2 0 0 1 3 1h4.09a2 2 0 0 1 2 1.72c.2 1.52.57 3 1.11 4.44a2 2 0 0 1-.45 2.11l-2.2 2.2a16 16 0 0 0 6.36 6.36l2.2-2.2a2 2 0 0 1 2.11-.45c1.44.54 2.92.91 4.44 1.11A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function GmailIcon() {
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
      className="lucide lucide-mail h-4 w-4"
    >
      <path d="M22 4H2c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h20c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zM2 6l10 7 10-7" />
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
