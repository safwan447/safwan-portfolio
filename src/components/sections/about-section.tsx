import { MapPin, Sparkles } from "lucide-react";

import { Container } from "@/components/shared/container";
import { MotionReveal } from "@/components/shared/motion-reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteConfig } from "@/config/site";

export function AboutSection() {
  return (
    <Section id="about">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="A developer focused on useful, polished software."
          description="I care about the full path from idea to working product: the user flow, the architecture, the details, and the final feel."
        />
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <MotionReveal className="space-y-5 rounded-lg border border-border bg-surface p-6 shadow-resting">
            {siteConfig.longBio.map((paragraph) => (
              <p key={paragraph} className="leading-8 text-muted">
                {paragraph}
              </p>
            ))}
          </MotionReveal>
          <MotionReveal delay={0.06} className="grid gap-4">
            <div className="rounded-lg border border-border bg-surface p-6 shadow-resting">
              <MapPin className="mb-4 h-5 w-5 text-accent" aria-hidden="true" />
              <h3 className="font-semibold text-primary">Based in {siteConfig.location}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                Building across AI, full-stack web development, browser tools, and practical
                software systems.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-6 shadow-resting">
              <Sparkles className="mb-4 h-5 w-5 text-accent" aria-hidden="true" />
              <h3 className="font-semibold text-primary">Currently open</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{siteConfig.availability}</p>
            </div>
          </MotionReveal>
        </div>
      </Container>
    </Section>
  );
}
