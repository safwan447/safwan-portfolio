import { Container } from "@/components/shared/container";
import { MotionReveal } from "@/components/shared/motion-reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { blogs } from "@/data/blogs";
import { testimonials } from "@/data/testimonials";

export function BlogsSection() {
  if (blogs.length === 0) {
    return null;
  }

  return (
    <Section id="blogs">
      <Container>
        <SectionHeading eyebrow="Writing" title="Notes and articles." />
        <div className="grid gap-4 md:grid-cols-2">
          {blogs.map((blog, index) => (
            <MotionReveal key={blog.href} delay={index * 0.05}>
              <a
                href={blog.href}
                target="_blank"
                rel="noreferrer"
                className="block rounded-lg border border-border bg-surface p-6 shadow-resting transition hover:-translate-y-1 hover:shadow-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <p className="font-mono text-xs text-muted">{blog.date}</p>
                <h3 className="mt-3 font-semibold text-primary">{blog.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{blog.description}</p>
              </a>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function TestimonialsSection() {
  if (testimonials.length === 0) {
    return null;
  }

  return (
    <Section id="testimonials">
      <Container>
        <SectionHeading eyebrow="Testimonials" title="What collaborators say." />
        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <MotionReveal key={`${testimonial.name}-${testimonial.role}`} delay={index * 0.05}>
              <figure className="rounded-lg border border-border bg-surface p-6 shadow-resting">
                <blockquote className="leading-7 text-muted">“{testimonial.quote}”</blockquote>
                <figcaption className="mt-5 text-sm text-primary">
                  {testimonial.name}
                  <span className="block text-muted">{testimonial.role}</span>
                </figcaption>
              </figure>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
