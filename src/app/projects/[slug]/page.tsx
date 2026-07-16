import { ArrowLeft, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { GitHubIcon } from "@/components/shared/brand-icons";
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

  const description = project.description.join(" ");
  const imageUrl = `${siteConfig.url}/projects/${project.slug}/opengraph-image`;

  return {
    title: project.title,
    description,
    openGraph: {
      title: `${project.title} - ${siteConfig.displayName}`,
      description,
      url: `${siteConfig.url}/projects/${project.slug}`,
      images: [{ url: imageUrl, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} - ${siteConfig.displayName}`,
      description,
      images: [imageUrl],
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
      <Link
        href="/#projects"
        aria-label="Back to portfolio projects"
        className="fixed left-4 top-20 z-30 inline-flex h-11 items-center gap-2 rounded-md border border-border bg-background/90 px-4 text-sm font-medium text-primary shadow-resting backdrop-blur-xl transition duration-200 ease-out hover:-translate-x-0.5 hover:border-accent/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent motion-reduce:transition-none sm:left-6"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        <span className="hidden sm:inline">Back to projects</span>
      </Link>
      <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-start">
        <div>
          <p className="font-mono text-xs uppercase text-accent">
            {project.category} / {project.year}
          </p>
          <h1 className="mt-4 text-balance text-3xl font-semibold leading-tight text-primary sm:text-4xl">
            {project.title}
          </h1>
          <ul className="mt-5 max-w-3xl space-y-2 text-base leading-7 text-muted">
            {project.description.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
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
                  <GitHubIcon className="h-4 w-4" /> GitHub
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
            className="rounded-lg bg-surface p-6 shadow-resting ring-1 ring-border/70"
          >
            <h2 className="text-xl font-semibold text-primary">{title}</h2>
            <p className="mt-4 text-sm leading-7 text-muted">{body}</p>
          </section>
        ))}
      </div>
      <section className="mt-8 rounded-lg bg-surface p-6 shadow-resting ring-1 ring-border/70">
        <h2 className="text-xl font-semibold text-primary">Features</h2>
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
