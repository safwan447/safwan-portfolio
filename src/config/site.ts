import type { SocialLink } from "@/types/content";

export const siteConfig = {
  name: "Mohammed Safwan",
  displayName: "Safwan",
  tagline: "Building products with clean code and thoughtful design.",
  description:
    "Computer Engineering student building AI projects, web apps, and practical software tools.",
  longBio: [
    "3rd-year Computer Engineering student in Bangalore.",
    "Building across AI, full-stack web development, browser extensions, and practical automation tools.",
    "Open to software engineering internships, hackathons, and product-focused collaborations.",
  ],
  email: "mohammedsafwan12000@gmail.com",
  location: "Bangalore, India",
  availability:
    "Open to internships, software engineering roles, hackathons, open-source contributions, and collaboration on impactful projects.",
  profileImage: "/images/profile.jpeg",
  resumeUrl: "/resume/Safwan_Resume.pdf",
  url: "https://safwan-portfolio-taupe.vercel.app",
  repositoryName: "safwan-portfolio",
  keywords: [
    "Mohammed Safwan",
    "Safwan",
    "software engineer",
    "computer science",
    "AI",
    "Next.js",
    "portfolio",
  ],
  navigation: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Certifications", href: "#certifications" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ],
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/safwan447",
      username: "safwan447",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/safwan-n",
      username: "safwan-n",
    },
    {
      label: "LeetCode",
      href: "https://leetcode.com/u/safwan1124/",
      username: "safwan1124",
    },
  ] satisfies SocialLink[],
  seo: {
    title: "Safwan - Software Developer Portfolio",
    description:
      "Portfolio of Mohammed Safwan, a Computer Engineering student building software, AI projects, and modern web applications.",
    ogImage: "https://safwan-portfolio-taupe.vercel.app/opengraph-image",
  },
};
