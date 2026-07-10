import { Container } from "@/components/shared/container";
import { SocialLinks } from "@/components/shared/social-links";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js.
        </p>
        <SocialLinks />
      </Container>
    </footer>
  );
}
