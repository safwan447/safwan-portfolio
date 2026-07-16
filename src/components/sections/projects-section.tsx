import { Container } from "@/components/shared/container";
import { MotionReveal } from "@/components/shared/motion-reveal";
import { ProjectCard } from "@/components/shared/project-card";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <Section id="projects">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Selected work across AI, web, and product engineering."
          description="A focused set of shipped builds, hackathon projects, and product experiments."
        />
        {projects.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <MotionReveal key={project.slug} delay={index * 0.05}>
                <ProjectCard project={project} />
              </MotionReveal>
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-border bg-surface p-8 text-center text-muted">
            Projects will appear here after they are added to the data file.
          </div>
        )}
      </Container>
    </Section>
  );
}

export function ProjectsLoadingState() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" aria-label="Loading projects">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="h-80 animate-pulse rounded-lg border border-border bg-surface"
        />
      ))}
    </div>
  );
}
