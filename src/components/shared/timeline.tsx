import type { TimelineItem } from "@/types/content";

type TimelineProps = {
  items: TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="space-y-5">
      {items.map((item) => (
        <article
          key={`${item.organization}-${item.duration}`}
          className="relative rounded-lg border border-border bg-surface p-6 shadow-resting"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="font-semibold text-primary">{item.title}</h3>
              <p className="mt-1 text-sm text-muted">{item.organization}</p>
            </div>
            <div className="font-mono text-xs text-muted sm:text-right">
              <p>{item.duration}</p>
              {item.location ? <p className="mt-1">{item.location}</p> : null}
            </div>
          </div>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-muted">
            {item.description.map((entry) => (
              <li key={entry} className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden="true"
                />
                <span>{entry}</span>
              </li>
            ))}
            {item.highlights?.map((entry) => (
              <li key={entry} className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden="true"
                />
                <span>{entry}</span>
              </li>
            ))}
          </ul>
          {item.technologies ? (
            <div className="mt-5 flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-sm bg-elevated px-2 py-1 font-mono text-xs text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          ) : null}
        </article>
      ))}
    </div>
  );
}
