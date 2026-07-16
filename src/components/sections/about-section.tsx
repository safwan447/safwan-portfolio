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
          title="A developer focused on useful software."
          description="I care about shipping small, clear products that solve real user problems."
        />
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <MotionReveal className="rounded-lg bg-surface p-6 shadow-resting ring-1 ring-border/70">
            <ul className="space-y-4 text-base leading-7 text-muted">
              {siteConfig.longBio.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </MotionReveal>
          <MotionReveal delay={0.06} className="grid gap-4">
            <div className="rounded-lg bg-surface p-6 shadow-resting ring-1 ring-border/70">
              <MapPin className="mb-4 h-5 w-5 text-accent" aria-hidden="true" />
              <h3 className="font-semibold text-primary">Based in {siteConfig.location}</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
                {["Computer Engineering student", "AI, web, and browser-tool projects"].map(
                  (item) => (
                    <li key={item} className="flex gap-2">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="rounded-lg bg-surface p-6 shadow-resting ring-1 ring-border/70">
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
