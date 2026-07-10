import { ArrowLeft, ExternalLink, GitBranch } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects
    .filter((project) => project.caseStudy)
    .map((project) => ({
      slug: project.slug,
    }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} - ${siteConfig.displayName}`,
      description: project.description,
      images: [{ url: `/projects/${project.slug}/opengraph-image`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} - ${siteConfig.displayName}`,
      description: project.description,
      images: [`/projects/${project.slug}/opengraph-image`],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project?.caseStudy) {
    notFound();
  }

  return (
    <Container className="py-14 sm:py-20">
      <Button asChild variant="ghost" size="sm" className="mb-8">
        <Link href="/#projects">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to projects
        </Link>
      </Button>
      <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-start">
        <div>
          <p className="font-mono text-xs uppercase text-accent">
            {project.category} / {project.year}
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight text-primary sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-sm bg-elevated px-2.5 py-1 font-mono text-xs text-muted"
              >
                {technology}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.github ? (
              <Button asChild variant="secondary">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <GitBranch className="h-4 w-4" aria-hidden="true" /> GitHub
                </a>
              </Button>
            ) : null}
            {project.live ? (
              <Button asChild variant="secondary">
                <a href={project.live} target="_blank" rel="noreferrer">
                  <ExternalLink className="h-4 w-4" aria-hidden="true" /> Live demo
                </a>
              </Button>
            ) : null}
          </div>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border bg-surface shadow-resting">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} thumbnail`}
              fill
              priority
              sizes="(min-width: 1024px) 420px, 100vw"
              className="object-cover"
            />
          ) : null}
        </div>
      </div>
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {[
          ["Problem", project.caseStudy.problem],
          ["Approach", project.caseStudy.approach],
          ["Outcome", project.caseStudy.outcome],
        ].map(([title, body]) => (
          <section
            key={title}
            className="rounded-lg border border-border bg-surface p-6 shadow-resting"
          >
            <h2 className="font-semibold text-primary">{title}</h2>
            <p className="mt-4 text-sm leading-7 text-muted">{body}</p>
          </section>
        ))}
      </div>
      <section className="mt-8 rounded-lg border border-border bg-surface p-6 shadow-resting">
        <h2 className="font-semibold text-primary">Features</h2>
        <ul className="mt-5 grid gap-3 text-sm text-muted sm:grid-cols-2">
          {project.features.map((feature) => (
            <li key={feature} className="flex gap-3">
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                aria-hidden="true"
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}
