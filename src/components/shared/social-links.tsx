import { BriefcaseBusiness, Code2, GitBranch, Mail } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const iconMap = {
  GitHub: GitBranch,
  LinkedIn: BriefcaseBusiness,
  LeetCode: Code2,
  Email: Mail,
};

type SocialLinksProps = {
  className?: string;
  showLabels?: boolean;
};

export function SocialLinks({ className, showLabels = false }: SocialLinksProps) {
  const links = [...siteConfig.socials, { label: "Email", href: `mailto:${siteConfig.email}` }];

  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {links.map((link) => {
        const Icon = iconMap[link.label as keyof typeof iconMap] ?? Code2;

        return (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
            className="inline-flex h-10 items-center gap-2 rounded-md border border-border bg-surface px-3 text-sm font-medium text-muted transition duration-200 ease-out hover:-translate-y-0.5 hover:border-accent/40 hover:text-primary hover:shadow-resting focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent motion-reduce:transition-none"
            aria-label={link.label}
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
            {showLabels ? <span>{link.label}</span> : null}
          </a>
        );
      })}
    </div>
  );
}
