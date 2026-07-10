import Image from "next/image";
import { ArrowRight, Download, Mail } from "lucide-react";

import { AnimatedBackground } from "@/components/shared/animated-background";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { SocialLinks } from "@/components/shared/social-links";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32">
      <AnimatedBackground />
      <Container className="grid items-center gap-12 lg:grid-cols-[1.18fr_0.82fr]">
        <div>
          <p className="mb-5 font-mono text-xs font-medium uppercase text-accent">
            {siteConfig.displayName} / Computer Science Student
          </p>
          <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-normal text-primary sm:text-5xl lg:text-6xl">
            {siteConfig.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{siteConfig.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <a href="#projects">
                View projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href={siteConfig.resumeUrl} target="_blank" rel="noreferrer">
                <Download className="h-4 w-4" aria-hidden="true" /> Resume
              </a>
            </Button>
            <Button asChild variant="ghost">
              <a href={`mailto:${siteConfig.email}`}>
                <Mail className="h-4 w-4" aria-hidden="true" /> Email
              </a>
            </Button>
          </div>
          <SocialLinks className="mt-8" />
        </div>
        <div className="mx-auto w-full max-w-sm lg:mr-0">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border bg-surface shadow-hover">
            <Image
              src={siteConfig.profileImage}
              alt="Portrait of Mohammed Safwan"
              fill
              priority
              sizes="(min-width: 1024px) 360px, 80vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-background/76 p-4 backdrop-blur-md">
              <p className="text-sm font-medium text-primary">{siteConfig.name}</p>
              <p className="mt-1 text-sm text-muted">{siteConfig.location}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
