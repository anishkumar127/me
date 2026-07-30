import type { Metadata } from "next";
import ProjectCard from "@/app/components/project-card";
import SectionHeading from "@/app/components/section-heading";
import {
  cubicProjects,
  freelanceProjects,
  personalProjects,
} from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Production work at Cubic Logics, client deliverables, and personal projects.",
};

export default function Page() {
  return (
    <div className="space-y-8">
      <p className="text-sm text-neutral-500">
        Production work at Cubic Logics, client deliverables, and personal
        projects.
      </p>

      <section>
        <SectionHeading>Cubic Logics</SectionHeading>
        <ul className="space-y-3">
          {cubicProjects.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </section>

      <section>
        <SectionHeading>Freelancing</SectionHeading>
        <ul className="space-y-3">
          {freelanceProjects.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </section>

      <section>
        <SectionHeading>Personal</SectionHeading>
        <ul className="space-y-3">
          {personalProjects.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
