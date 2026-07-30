import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-12 pt-6 pb-4 border-t border-neutral-200 dark:border-neutral-800 text-xs text-neutral-400">
      <p>
        © {new Date().getFullYear()} {site.name} · Built with Next.js
      </p>
    </footer>
  );
}
