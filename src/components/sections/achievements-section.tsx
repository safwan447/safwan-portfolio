import { Trophy } from "lucide-react";

import { Container } from "@/components/shared/container";
import { MotionReveal } from "@/components/shared/motion-reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { achievements } from "@/data/achievements";

export function AchievementsSection() {
  return (
    <Section id="achievements">
      <Container>
        <SectionHeading
          eyebrow="Achievements"
          title="Hackathons, selections, and recognition."
          description="Achievement cards support ranks, links, certificates, and future image galleries."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {achievements.map((achievement, index) => (
            <MotionReveal key={achievement.title} delay={index * 0.05}>
              <article className="h-full rounded-lg border border-border bg-surface p-6 shadow-resting">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <Trophy className="h-5 w-5 text-accent" aria-hidden="true" />
                  <span className="font-mono text-xs text-muted">{achievement.date}</span>
                </div>
                <h3 className="font-semibold text-primary">{achievement.title}</h3>
                <p className="mt-1 text-sm text-muted">{achievement.event}</p>
                {achievement.position ? (
                  <p className="mt-3 font-mono text-xs uppercase text-accent">
                    {achievement.position}
                  </p>
                ) : null}
                <p className="mt-4 text-sm leading-6 text-muted">{achievement.description}</p>
              </article>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
