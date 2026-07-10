export type SocialLink = {
  label: string;
  href: string;
  username?: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  image?: string;
  featured: boolean;
  category: string;
  year: string;
  status: "Completed" | "In Progress" | "Prototype";
  features: string[];
  caseStudy?: {
    problem: string;
    approach: string;
    outcome: string;
  };
};

export type SkillGroup = {
  category: string;
  skills: string[];
};

export type TimelineItem = {
  title: string;
  organization: string;
  duration: string;
  location?: string;
  description: string[];
  technologies?: string[];
  highlights?: string[];
};

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  image?: string;
};

export type Achievement = {
  title: string;
  description: string;
  date: string;
  event: string;
  position?: string;
  certificateImage?: string;
  galleryImages?: string[];
  externalLink?: string;
};

export type BlogPost = {
  title: string;
  description: string;
  date: string;
  href: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};
