import { Container } from "@/components/shared/container";
import { MotionReveal } from "@/components/shared/motion-reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Timeline } from "@/components/shared/timeline";
import { education } from "@/data/education";
import { experience } from "@/data/experience";

export function ExperienceSection() {
  return (
    <Section id="experience">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Internships and hands-on product work."
          description="A concise timeline of shipped projects, development ownership, and remote collaboration."
        />
        <MotionReveal>
          <Timeline items={experience} />
        </MotionReveal>
      </Container>
    </Section>
  );
}

export function EducationSection() {
  return (
    <Section id="education">
      <Container>
        <SectionHeading
          eyebrow="Education"
          title="Computer engineering foundation with active project building."
        />
        <MotionReveal>
          <Timeline items={education} />
        </MotionReveal>
      </Container>
    </Section>
  );
}
