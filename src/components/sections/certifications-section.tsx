import Image from "next/image";
import { Award, ExternalLink } from "lucide-react";

import { Container } from "@/components/shared/container";
import { MotionReveal } from "@/components/shared/motion-reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { certifications } from "@/data/certifications";

export function CertificationsSection() {
  return (
    <Section id="certifications">
      <Container>
        <SectionHeading
          eyebrow="Certifications"
          title="Continuous learning, documented."
          description="Certificates can include optional credential links and images from a single data file."
        />
        {certifications.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {certifications.map((certification, index) => (
              <MotionReveal
                key={`${certification.name}-${certification.date}`}
                delay={index * 0.05}
              >
                <article className="rounded-lg border border-border bg-surface p-6 shadow-resting">
                  <Award className="mb-4 h-5 w-5 text-accent" aria-hidden="true" />
                  <h3 className="font-semibold text-primary">{certification.name}</h3>
                  <p className="mt-2 text-sm text-muted">{certification.issuer}</p>
                  <p className="mt-1 font-mono text-xs text-muted">{certification.date}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {certification.credentialUrl ? (
                      <Button asChild size="sm" variant="secondary">
                        <a href={certification.credentialUrl} target="_blank" rel="noreferrer">
                          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" /> View
                          Credential
                        </a>
                      </Button>
                    ) : null}
                    {certification.certificateUrl ? (
                      <Button asChild size="sm" variant="secondary">
                        <a href={certification.certificateUrl} target="_blank" rel="noreferrer">
                          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" /> View
                          Certificate
                        </a>
                      </Button>
                    ) : null}
                    {certification.image ? (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm" variant="secondary">
                            View Certificate
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogTitle>{certification.name}</DialogTitle>
                          <DialogDescription>{certification.issuer}</DialogDescription>
                          <div className="relative mt-4 aspect-[4/3] overflow-hidden rounded-md bg-elevated">
                            <Image
                              src={certification.image}
                              alt={`${certification.name} certificate`}
                              fill
                              sizes="720px"
                              className="object-contain"
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    ) : null}
                  </div>
                </article>
              </MotionReveal>
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-border bg-surface p-8 text-center text-muted">
            Certifications will appear here after they are added.
          </div>
        )}
      </Container>
    </Section>
  );
}
