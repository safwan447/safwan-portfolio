import { AboutSection } from "@/components/sections/about-section";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { BlogsSection, TestimonialsSection } from "@/components/sections/optional-sections";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { ContactSection } from "@/components/sections/contact-section";
import { EducationSection, ExperienceSection } from "@/components/sections/timeline-sections";
import { Hero } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <CertificationsSection />
      <AchievementsSection />
      <BlogsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
