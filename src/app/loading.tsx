import { ProjectsLoadingState } from "@/components/sections/projects-section";
import { Container } from "@/components/shared/container";

export default function Loading() {
  return (
    <Container className="py-24">
      <div className="mb-10 h-6 w-40 animate-pulse rounded-sm bg-elevated" />
      <ProjectsLoadingState />
    </Container>
  );
}
