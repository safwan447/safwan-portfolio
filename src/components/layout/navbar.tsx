"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/82 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="rounded-sm text-sm font-semibold text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {siteConfig.displayName}
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {siteConfig.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-sm px-3 py-2 text-sm text-muted transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild variant="secondary" size="sm" className="hidden sm:inline-flex">
            <a href={siteConfig.resumeUrl} target="_blank" rel="noreferrer">
              Resume
            </a>
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </Button>
        </div>
      </nav>
      <div
        className={cn(
          "grid border-t border-border/80 bg-background/95 transition-all duration-200 ease-out md:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-muted hover:bg-elevated hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {item.label}
              </a>
            ))}
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-md px-3 py-3 text-sm font-medium text-accent hover:bg-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
