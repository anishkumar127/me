import type { Metadata } from "next";
import { EasterEgg } from "./components/easter-egg";
import SectionHeading from "./components/section-heading";
import {
  EducationTimeline,
  ExperienceTimeline,
} from "./components/experience-timeline";
import { about } from "@/data/about";
import { education, workExperience } from "@/data/experience";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: site.metadata.description,
};

export default function Page() {
  return (
    <div className="space-y-6 text-sm">
      <section>
        <p className="text-neutral-600 dark:text-neutral-400 font-medium">
          {about.hook}
        </p>
      </section>

      <section>
        <p className="text-justify">
          Hi, I&apos;m {site.name}, a {site.title} based in{" "}
          {site.workLocation}. {about.intro} <EasterEgg />
        </p>
      </section>

      <section>
        <SectionHeading>What I build</SectionHeading>
        <ul className="list-disc list-inside space-y-1 text-neutral-600 dark:text-neutral-400">
          {about.whatIDo.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <SectionHeading>Strengths</SectionHeading>
        <ul className="list-disc list-inside space-y-1 text-neutral-600 dark:text-neutral-400">
          {about.strengths.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <SectionHeading>Experience</SectionHeading>
        <ExperienceTimeline items={workExperience} />
      </section>

      <section>
        <SectionHeading>Education</SectionHeading>
        <EducationTimeline items={education} />
      </section>

      <section>
        <SectionHeading>Selected achievements</SectionHeading>
        <ul className="list-disc list-inside space-y-1 text-neutral-600 dark:text-neutral-400">
          {about.achievements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <SectionHeading>Technical expertise</SectionHeading>
        <ul className="space-y-1.5">
          {Object.entries(about.skills).map(([category, skills]) => (
            <li key={category}>
              <strong>{category}:</strong> {skills.join(", ")}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
