"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

type Status = "idle" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !message || !email.includes("@")) {
      setStatus("error");
      return;
    }

    setStatus("success");
    event.currentTarget.reset();
  }

  return (
    <Section id="contact">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Let’s build something thoughtful."
              description={siteConfig.availability}
              className="mb-0"
            />
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-6 inline-flex rounded-sm text-sm font-medium text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {siteConfig.email}
            </a>
          </div>
          <form
            onSubmit={onSubmit}
            className="rounded-lg border border-border bg-surface p-5 shadow-resting sm:p-6"
            noValidate
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-medium text-primary">
                Name
                <input
                  name="name"
                  required
                  className="mt-2 h-11 w-full rounded-md border border-border bg-background px-3 text-primary outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/25"
                  placeholder="Your name"
                />
              </label>
              <label className="text-sm font-medium text-primary">
                Email
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-2 h-11 w-full rounded-md border border-border bg-background px-3 text-primary outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/25"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="mt-4 block text-sm font-medium text-primary">
              Message
              <textarea
                name="message"
                required
                rows={6}
                className="mt-2 w-full resize-y rounded-md border border-border bg-background px-3 py-3 text-primary outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/25"
                placeholder="Tell me about the opportunity, project, or idea."
              />
            </label>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button type="submit">
                <Send className="h-4 w-4" aria-hidden="true" /> Send message
              </Button>
              {status === "success" ? (
                <p className="text-sm text-accent" role="status">
                  Placeholder success. Connect this form to a service when ready.
                </p>
              ) : null}
              {status === "error" ? (
                <p className="text-sm text-red-400" role="alert">
                  Please enter a valid name, email, and message.
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </Container>
    </Section>
  );
}
