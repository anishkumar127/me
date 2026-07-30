import type { Metadata } from "next";
import { Suspense } from "react";
import ProjectsBrowser from "@/app/components/projects-browser";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { canonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Production work at Cubic Logics, client deliverables, and personal projects.",
  alternates: { canonical: canonicalUrl("/projects") },
  openGraph: {
    title: `Projects | ${site.handle}`,
    url: canonicalUrl("/projects"),
  },
};

export default function Page() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-neutral-500">
        Production work at Cubic Logics, client deliverables, and personal
        projects.
      </p>

      <Suspense
        fallback={
          <p className="text-sm text-neutral-500">Loading projects...</p>
        }
      >
        <ProjectsBrowser projects={projects} />
      </Suspense>
    </div>
  );
}
