import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 max-w-2xl", className)}>
      {eyebrow ? (
        <p className="mb-3 font-mono text-xs font-medium uppercase text-accent">{eyebrow}</p>
      ) : null}
      <h2 className="text-balance text-2xl font-semibold tracking-normal text-primary sm:text-3xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-base leading-7 text-muted">{description}</p> : null}
    </div>
  );
}
