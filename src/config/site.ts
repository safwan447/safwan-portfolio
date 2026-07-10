import type { SocialLink } from "@/types/content";

export const siteConfig = {
  name: "Mohammed Safwan",
  displayName: "Safwan",
  tagline: "Building products with clean code and thoughtful design.",
  description:
    "Computer Science student passionate about software development, AI, and building intuitive web applications.",
  longBio: [
    "Hi, I'm Safwan, a Computer Science student with a strong interest in software engineering, artificial intelligence, and modern web development. I enjoy turning ideas into polished digital experiences by combining clean code with thoughtful design.",
    "Outside of academics, I spend my time exploring new technologies, contributing to personal projects, and continuously improving my development skills. My goal is to build impactful products, collaborate with talented people, and grow into a well-rounded software engineer who creates technology that makes a difference.",
  ],
  email: "mohammedsafwan12000@gmail.com",
  location: "Bangalore, India",
  availability:
    "Open to internships, software engineering roles, hackathons, open-source contributions, and collaboration on impactful projects.",
  profileImage: "/images/profile.jpeg",
  resumeUrl: "/resume/Safwan_Resume.pdf",
  url: "https://personal-portfolio.vercel.app",
  repositoryName: "personal-portfolio",
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
      "Portfolio of Mohammed Safwan, a Computer Science student building software, AI projects, and modern web applications.",
    ogImage: "/opengraph-image",
  },
};
