import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { GitHubIcon } from "@/components/shared/brand-icons";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types/content";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const detailHref = project.caseStudy ? `/projects/${project.slug}` : undefined;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg bg-surface shadow-resting ring-1 ring-border/70 transition duration-200 ease-out hover:-translate-y-1 hover:shadow-hover motion-reduce:transition-none">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border/70 bg-elevated">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} project thumbnail`}
            fill
            sizes="(min-width: 1024px) 360px, 100vw"
            className="object-cover transition duration-300 group-hover:scale-[1.02] motion-reduce:transition-none"
          />
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
          <span className="font-mono">{project.year}</span>
          <span aria-hidden="true">/</span>
          <span>{project.category}</span>
        </div>
        <h3 className="mt-3 text-lg font-semibold text-primary">{project.title}</h3>
        <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
          {project.description.map((item) => (
            <li key={item} className="flex gap-2">
              <span
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded-sm bg-elevated px-2 py-1 font-mono text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {detailHref ? (
            <Button asChild size="sm">
              <Link href={detailHref}>
                Case study <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </Button>
          ) : null}
          {project.github ? (
            <Button asChild size="sm" variant="secondary">
              <a href={project.github} target="_blank" rel="noreferrer">
                <GitHubIcon className="h-3.5 w-3.5" /> GitHub
              </a>
            </Button>
          ) : null}
          {project.live ? (
            <Button asChild size="sm" variant="secondary">
              <a href={project.live} target="_blank" rel="noreferrer">
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" /> Live
              </a>
            </Button>
          ) : null}
          {project.privateNote ? (
            <span className="inline-flex h-9 items-center rounded-md bg-elevated px-3 text-xs font-medium text-muted ring-1 ring-border/70">
              {project.privateNote}
            </span>
          ) : null}
        </div>
      </div>
    </article>
  );
}
