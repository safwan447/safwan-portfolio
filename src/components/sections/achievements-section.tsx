import Image from "next/image";
import { Trophy } from "lucide-react";

import { Container } from "@/components/shared/container";
import { MotionReveal } from "@/components/shared/motion-reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { achievements } from "@/data/achievements";

export function AchievementsSection() {
  return (
    <Section id="achievements">
      <Container>
        <SectionHeading
          eyebrow="Achievements"
          title="Hackathons, selections, and recognition."
          description="Selected results from hackathons, institutional rounds, and applied build challenges."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {achievements.map((achievement, index) => (
            <MotionReveal key={achievement.title} delay={index * 0.05}>
              <article className="h-full rounded-lg bg-surface p-6 shadow-resting ring-1 ring-border/70">
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
                <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
                  {achievement.description.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {achievement.certificateImage ? (
                  <Dialog>
                    <DialogTrigger asChild>
                      <button
                        type="button"
                        className="mt-5 flex w-full items-center gap-3 rounded-lg bg-elevated p-2 text-left ring-1 ring-border/70 transition hover:ring-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      >
                        <span className="relative h-16 w-20 shrink-0 overflow-hidden rounded-md bg-surface">
                          <Image
                            src={achievement.certificateImage}
                            alt=""
                            fill
                            sizes="80px"
                            className="object-cover"
                          />
                        </span>
                        <span>
                          <span className="block text-sm font-medium text-primary">
                            View certificate
                          </span>
                          <span className="mt-1 block text-xs text-muted">SIH certificate</span>
                        </span>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="w-[min(calc(100vw-2rem),920px)]">
                      <DialogTitle>{achievement.title}</DialogTitle>
                      <DialogDescription>{achievement.event}</DialogDescription>
                      <div className="relative mt-4 aspect-[4/3] overflow-hidden rounded-lg bg-elevated">
                        <Image
                          src={achievement.certificateImage}
                          alt={`${achievement.title} certificate`}
                          fill
                          sizes="860px"
                          className="object-contain"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                ) : null}
              </article>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
