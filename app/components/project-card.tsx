import clsx from "clsx";
import type { Project, ProjectCategory } from "@/data/projects";

const categoryStyles: Record<ProjectCategory, string> = {
  "Cubic Logics":
    "text-green-600 dark:text-green-400 bg-green-500/10",
  Freelancing:
    "text-amber-600 dark:text-amber-400 bg-amber-500/10",
  Personal:
    "text-purple-600 dark:text-purple-400 bg-purple-500/10",
};

export default function ProjectCard({ project }: { project: Project }) {
  const hasUrl = project.url && project.url !== "#";

  const content = (
    <>
      <div className="flex flex-wrap items-center gap-2">
        <span
          className={clsx("text-sm", {
            "underline underline-offset-4": hasUrl,
          })}
        >
          {project.name}
        </span>
        <span className="tracking-tighter text-xs font-medium text-blue-500 bg-blue-500/10 rounded-full px-2 py-0.5">
          {project.status}
        </span>
        <span
          className={clsx(
            "tracking-tighter text-xs font-medium rounded-full px-2 py-0.5",
            categoryStyles[project.category],
          )}
        >
          {project.category}
        </span>
        {project.period && (
          <span className="text-xs text-neutral-400">{project.period}</span>
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
      <span className="text-xs text-neutral-500">{project.description}</span>
      {project.highlights && project.highlights.length > 0 && (
        <ul className="text-xs text-neutral-500 list-disc list-inside space-y-0.5">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}
    </>
  );

  const className =
    "bg-transparent border border-[#ecebeb] hover:border-[#999] dark:border-[#333] hover:dark:bg-[#ffffff05] transition-colors p-3 flex flex-col space-y-2 !no-underline rounded-md";

  if (hasUrl) {
    return (
      <a
        className={className}
        rel="noopener noreferrer"
        target="_blank"
        href={project.url}
      >
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}
