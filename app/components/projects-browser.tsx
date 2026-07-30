"use client";

import clsx from "clsx";
import { useCallback, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ProjectCard from "./project-card";
import type { Project, ProjectTabId } from "@/data/projects";
import { projectTabs } from "@/data/projects";

type StatusFilter = "All" | "Active" | "Completed";

type ProjectsBrowserProps = {
  projects: Project[];
  allTech: string[];
};

function matchesSearch(project: Project, query: string): boolean {
  if (!query) return true;
  const haystack = [
    project.name,
    project.description,
    ...(project.highlights ?? []),
    ...project.tech,
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(query.toLowerCase());
}

export default function ProjectsBrowser({
  projects,
  allTech,
}: ProjectsBrowserProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeTab = (searchParams.get("tab") as ProjectTabId) || "cubic";
  const validTab = projectTabs.some((t) => t.id === activeTab)
    ? activeTab
    : "cubic";

  const [search, setSearch] = useState("");
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("All");

  const setTab = useCallback(
    (tabId: ProjectTabId) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("tab", tabId);
      router.replace(`/projects?${params.toString()}`, { scroll: false });
    },
    [router, searchParams],
  );

  const toggleTech = (tech: string) => {
    setSelectedTech((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech],
    );
  };

  const activeCategory = projectTabs.find((t) => t.id === validTab)?.category;

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      if (activeCategory && project.category !== activeCategory) return false;
      if (statusFilter !== "All" && project.status !== statusFilter)
        return false;
      if (
        selectedTech.length > 0 &&
        !selectedTech.every((t) => project.tech.includes(t))
      )
        return false;
      if (!matchesSearch(project, search)) return false;
      return true;
    });
  }, [projects, activeCategory, statusFilter, selectedTech, search]);

  return (
    <div className="space-y-5">
      <div
        className="inline-flex flex-wrap items-center gap-1 rounded-lg border p-1 border-neutral-300 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900/60"
        role="tablist"
        aria-label="Project categories"
      >
        {projectTabs.map((tab) => {
          const isActive = tab.id === validTab;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setTab(tab.id)}
              className={clsx(
                "px-3 py-1.5 rounded-md text-sm transition-all",
                isActive
                  ? "bg-white text-black font-semibold shadow-sm border border-neutral-300 dark:bg-neutral-800 dark:text-white dark:border-neutral-600"
                  : "text-neutral-600 hover:text-black hover:bg-white/80 dark:text-neutral-500 dark:hover:text-neutral-200 dark:hover:bg-neutral-800",
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="space-y-3" role="search">
        <input
          type="search"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search projects"
          className="w-full px-3 py-2 text-sm rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-400 dark:focus:ring-neutral-500"
        />

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-neutral-500">Status:</span>
          {(["All", "Active", "Completed"] as const).map((status) => (
            <button
              key={status}
              type="button"
              onClick={() => setStatusFilter(status)}
              className={clsx(
                "text-xs px-2 py-0.5 rounded-full border transition-colors",
                statusFilter === status
                  ? "bg-neutral-800 text-white border-neutral-800 dark:bg-neutral-200 dark:text-black dark:border-neutral-200"
                  : "border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:border-neutral-400",
              )}
            >
              {status}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {allTech.map((tech) => {
            const isSelected = selectedTech.includes(tech);
            return (
              <button
                key={tech}
                type="button"
                onClick={() => toggleTech(tech)}
                className={clsx(
                  "text-xs rounded px-1.5 py-0.5 transition-colors",
                  isSelected
                    ? "bg-blue-600 text-white dark:bg-blue-500"
                    : "text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700",
                )}
              >
                {tech}
              </button>
            );
          })}
        </div>
      </div>

      <section role="tabpanel" aria-label={activeCategory}>
        {filteredProjects.length > 0 ? (
          <ul className="space-y-3">
            {filteredProjects.map((project) => (
              <li key={project.id}>
                <ProjectCard project={project} hideCategory />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-neutral-500 py-8 text-center">
            No projects match your filters.
          </p>
        )}
      </section>
    </div>
  );
}
