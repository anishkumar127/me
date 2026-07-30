import Link from "next/link";
import type { EducationEntry, ExperienceEntry } from "@/data/experience";

function TimelineItem({
  title,
  subtitle,
  period,
  meta,
  progression,
  url,
}: {
  title: string;
  subtitle: string;
  period: string;
  meta?: string;
  progression?: string;
  url?: string;
}) {
  return (
    <li className="relative pl-4 border-l border-neutral-200 dark:border-neutral-700 pb-4 last:pb-0">
      <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-neutral-300 dark:bg-neutral-600" />
      <p className="text-sm font-medium">{title}</p>
      <p className="text-xs text-neutral-500">
        {url ? (
          <Link
            href={url}
            className="underline underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            {subtitle}
          </Link>
        ) : (
          subtitle
        )}
        {" · "}
        {period}
      </p>
      {progression && (
        <p className="text-xs text-neutral-400 mt-0.5">{progression}</p>
      )}
      {meta && <p className="text-xs text-neutral-400">{meta}</p>}
    </li>
  );
}

export function ExperienceTimeline({
  items,
}: {
  items: ExperienceEntry[];
}) {
  return (
    <ul className="space-y-0">
      {items.map((item) => (
        <TimelineItem
          key={`${item.role}-${item.period}`}
          title={item.role}
          subtitle={item.company}
          period={item.period}
          meta={item.location}
          progression={item.progression}
          url={item.companyUrl}
        />
      ))}
    </ul>
  );
}

export function EducationTimeline({ items }: { items: EducationEntry[] }) {
  return (
    <ul className="space-y-0">
      {items.map((item) => (
        <TimelineItem
          key={`${item.degree}-${item.period}`}
          title={item.degree}
          subtitle={item.school}
          period={item.period}
        />
      ))}
    </ul>
  );
}
