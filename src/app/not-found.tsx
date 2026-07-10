import Link from "next/link";

import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-start justify-center">
      <p className="font-mono text-xs uppercase text-accent">404</p>
      <h1 className="mt-4 max-w-xl text-4xl font-semibold text-primary">
        This page is not available.
      </h1>
      <p className="mt-4 max-w-lg text-muted">
        The page may have moved, or the link may be incomplete.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Return home</Link>
      </Button>
    </Container>
  );
}
