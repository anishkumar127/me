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
import { canonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About",
  description: site.metadata.description,
  alternates: { canonical: canonicalUrl("/") },
  openGraph: {
    title: `About | ${site.handle}`,
    url: canonicalUrl("/"),
  },
};

export default function Page() {
  return (
    <div className="space-y-6 text-base sm:text-sm leading-relaxed">
      <section>
        <p className="text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed">
          {about.hook}
        </p>
      </section>

      <section>
        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
          Hi, I&apos;m {site.name}, a {site.title} based in{" "}
          {site.workLocation}. {about.intro} <EasterEgg />
        </p>
      </section>

      <section>
        <SectionHeading>What I build</SectionHeading>
        <ul className="list-disc list-outside ml-4 space-y-2 text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {about.whatIDo.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <SectionHeading>Strengths</SectionHeading>
        <ul className="list-disc list-outside ml-4 space-y-2 text-neutral-600 dark:text-neutral-400 leading-relaxed">
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
        <ul className="list-disc list-outside ml-4 space-y-2 text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {about.achievements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <SectionHeading>Technical expertise</SectionHeading>
        <div className="space-y-3">
          {Object.entries(about.skills).map(([category, skills]) => (
            <div key={category}>
              <p className="text-sm font-bold text-neutral-800 dark:text-neutral-200 mb-1.5">
                {category}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs text-neutral-600 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 rounded px-2 py-0.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
