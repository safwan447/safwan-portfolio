import { Container } from "@/components/shared/container";
import { MotionReveal } from "@/components/shared/motion-reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { skills } from "@/data/skills";

export function SkillsSection() {
  return (
    <Section id="skills">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="A practical toolkit for building modern products."
          description="Core tools I use for web development, AI prototypes, APIs, and deployment."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => (
            <MotionReveal
              key={group.category}
              delay={index * 0.05}
              className="rounded-lg border border-border bg-surface p-5 shadow-resting"
            >
              <h3 className="font-semibold text-primary">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-sm border border-border bg-elevated px-2.5 py-1 font-mono text-xs text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
