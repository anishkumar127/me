import clsx from "clsx";
import type { Project, ProjectCategory } from "@/data/projects";

const categoryStyles: Record<ProjectCategory, string> = {
  "Cubic Logics":
    "text-green-600 dark:text-green-400 bg-green-500/10",
  Freelancing:
    "text-amber-600 dark:text-amber-400 bg-amber-500/10",
  Personal:
    "text-purple-600 dark:text-purple-400 bg-purple-500/10",
  Learning:
    "text-pink-600 dark:text-pink-400 bg-pink-500/10",
};

const categoryLabels: Record<ProjectCategory, string> = {
  "Cubic Logics": "Cubic Logics",
  Freelancing: "Freelancing",
  Personal: "Personal",
  Learning: "Fun / Learning",
};

function getLinkLabel(url: string) {
  if (url.includes("github.com")) return "View on GitHub";
  if (url.includes("marketplace.microsoft.com")) return "View on Marketplace";
  return "Visit website";
}

function ExternalLinkIcon() {
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
      className="shrink-0"
      aria-hidden="true"
    >
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

export default function ProjectCard({
  project,
  hideCategory = false,
}: {
  project: Project;
  hideCategory?: boolean;
}) {
  const hasUrl = project.url && project.url !== "#";

  return (
    <div className="bg-transparent border border-[#ecebeb] dark:border-[#333] transition-colors p-3 flex flex-col space-y-2 rounded-md">
      <div className="space-y-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium">{project.name}</span>
          <span
            className={clsx(
              "tracking-tighter text-xs font-medium rounded-full px-2 py-0.5",
              project.status === "Active"
                ? "text-blue-500 bg-blue-500/10"
                : "text-neutral-500 bg-neutral-500/10",
            )}
          >
            {project.status}
          </span>
          {!hideCategory && (
            <span
              className={clsx(
                "tracking-tighter text-xs font-medium rounded-full px-2 py-0.5",
                categoryStyles[project.category],
              )}
            >
              {categoryLabels[project.category]}
            </span>
          )}
        </div>
        {project.period && (
          <p className="text-xs text-neutral-400">{project.period}</p>
        )}
      </div>

      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 rounded px-1.5 py-0.5"
          >
            {t}
          </span>
        ))}
      </div>

      <p className="text-xs text-neutral-500">{project.description}</p>

      {project.highlights && project.highlights.length > 0 && (
        <ul className="text-xs text-neutral-500 list-disc list-inside space-y-0.5">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}

      {hasUrl && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline underline-offset-4 w-fit mt-1"
        >
          <ExternalLinkIcon />
          {getLinkLabel(project.url!)}
        </a>
      )}
    </div>
  );
}
