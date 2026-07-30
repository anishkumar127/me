"use client";

import clsx from "clsx";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ProjectCard from "./project-card";
import type { Project, ProjectTabId } from "@/data/projects";
import { projectTabs } from "@/data/projects";

type StatusFilter = "All" | "Active" | "Completed";

type ProjectsBrowserProps = {
  projects: Project[];
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

export default function ProjectsBrowser({ projects }: ProjectsBrowserProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeTab = (searchParams.get("tab") as ProjectTabId) || "cubic";
  const validTab = projectTabs.some((t) => t.id === activeTab)
    ? activeTab
    : "cubic";

  const [search, setSearch] = useState("");
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("All");
  const [techFilterOpen, setTechFilterOpen] = useState(false);

  const setTab = useCallback(
    (tabId: ProjectTabId) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("tab", tabId);
      router.replace(`/projects?${params.toString()}`, { scroll: false });
    },
    [router, searchParams],
  );

  const activeCategory = projectTabs.find((t) => t.id === validTab)?.category;

  const tabTech = useMemo(() => {
    const techSet = new Set<string>();
    for (const project of projects) {
      if (activeCategory && project.category !== activeCategory) continue;
      for (const t of project.tech) techSet.add(t);
    }
    return Array.from(techSet).sort();
  }, [projects, activeCategory]);

  useEffect(() => {
    setSelectedTech([]);
    setTechFilterOpen(false);
  }, [validTab]);

  const toggleTech = (tech: string) => {
    setSelectedTech((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech],
    );
  };

  const hasActiveFilters =
    search.length > 0 || statusFilter !== "All" || selectedTech.length > 0;

  const clearFilters = () => {
    setSearch("");
    setStatusFilter("All");
    setSelectedTech([]);
  };

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
        className="inline-flex flex-nowrap sm:flex-wrap items-center gap-1 rounded-lg border p-1 border-neutral-300 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900/60 tab-scroll overflow-x-auto max-w-full w-full"
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
                "px-3 py-1.5 rounded-md text-sm transition-all whitespace-nowrap shrink-0",
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

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
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

          <button
            type="button"
            onClick={() => setTechFilterOpen((open) => !open)}
            aria-expanded={techFilterOpen}
            className={clsx(
              "text-xs px-2 py-0.5 rounded-full border transition-colors",
              techFilterOpen || selectedTech.length > 0
                ? "bg-neutral-800 text-white border-neutral-800 dark:bg-neutral-200 dark:text-black dark:border-neutral-200"
                : "border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:border-neutral-400",
            )}
          >
            Tech
            {selectedTech.length > 0 ? ` (${selectedTech.length})` : ""}
          </button>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="text-xs text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 underline underline-offset-2"
            >
              Clear filters
            </button>
          )}
        </div>

        {techFilterOpen && (
          <div className="rounded-md border border-neutral-200 dark:border-neutral-800 p-3 space-y-2">
            <p className="text-xs text-neutral-500">
              Technologies in this tab — select one or more
            </p>
            <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto scrollcontainer">
              {tabTech.map((tech) => {
                const isSelected = selectedTech.includes(tech);
                return (
                  <button
                    key={tech}
                    type="button"
                    onClick={() => toggleTech(tech)}
                    className={clsx(
                      "text-xs px-2 py-0.5 rounded-full border transition-colors",
                      isSelected
                        ? "bg-neutral-800 text-white border-neutral-800 dark:bg-neutral-200 dark:text-black dark:border-neutral-200"
                        : "border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:border-neutral-400",
                    )}
                  >
                    {tech}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {selectedTech.length > 0 && !techFilterOpen && (
          <div className="flex flex-wrap gap-1.5">
            {selectedTech.map((tech) => (
              <button
                key={tech}
                type="button"
                onClick={() => toggleTech(tech)}
                className="text-xs px-2 py-0.5 rounded-full border border-neutral-800 bg-neutral-800 text-white dark:bg-neutral-200 dark:text-black dark:border-neutral-200"
              >
                {tech} ×
              </button>
            ))}
          </div>
        )}
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
