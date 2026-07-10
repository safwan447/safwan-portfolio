import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    slug: "infrasense-ai",
    title: "InfraSense-AI",
    description:
      "An AI-powered infrastructure risk prediction platform that helps government agencies identify potential project delays and budget overruns using machine learning.",
    technologies: ["Python", "Scikit-learn", "Random Forest", "FastAPI", "Pandas"],
    github: "https://github.com/safwan447/InfraSense-AI",
    image: "/images/projects/infrasense-ai.svg",
    featured: true,
    category: "AI / Infrastructure",
    year: "2025",
    status: "Completed",
    features: [
      "Predicts infrastructure project risk levels",
      "Multi-class risk prediction using Random Forest",
      "REST API built with FastAPI",
      "Real-time risk scoring",
      "Easy backend integration",
    ],
    caseStudy: {
      problem:
        "Government infrastructure projects often face delays and budget overruns, making early risk assessment difficult.",
      approach:
        "Developed a machine learning model using Random Forest to classify project risk levels and exposed predictions through a FastAPI REST API.",
      outcome:
        "Created an end-to-end AI solution capable of providing actionable risk insights for infrastructure planning.",
    },
  },
  {
    slug: "privacy-guard-agent",
    title: "Privacy Guard Agent",
    description:
      "An RL-powered privacy protection system that automatically detects and redacts personally identifiable information, built for the Meta OpenEnv Hackathon.",
    technologies: ["Python", "Reinforcement Learning", "FastAPI", "Docker"],
    github: "https://github.com/safwan447/privacy-guard-agent",
    image: "/images/projects/privacy-guard-agent.svg",
    featured: true,
    category: "AI / Privacy",
    year: "2025",
    status: "Completed",
    features: [
      "Automated PII detection",
      "Intelligent data redaction",
      "FastAPI inference server",
      "Dockerized deployment",
      "Standardized logging",
      "Reproducible environment",
    ],
    caseStudy: {
      problem:
        "Organizations need automated privacy protection to prevent sensitive user data from being exposed.",
      approach:
        "Built a reinforcement learning environment for PII redaction and deployed it as a Dockerized FastAPI service.",
      outcome:
        "Submitted the project to the Meta OpenEnv Hackathon with a fully reproducible deployment pipeline.",
    },
  },
  {
    slug: "krishisense",
    title: "KrishiSense",
    description:
      "An offline-first TinyML and IoT solution that helps smallholder farmers monitor crops and soil conditions using edge AI without requiring internet connectivity.",
    technologies: ["TinyML", "IoT", "Edge AI", "Python"],
    image: "/images/projects/krishisense.svg",
    featured: true,
    category: "AI / Agriculture",
    year: "2026",
    status: "In Progress",
    features: [
      "Offline-first operation",
      "Solar-powered device",
      "Edge AI processing",
      "Voice alerts in regional Indian languages",
      "Crop and soil monitoring",
      "Zero internet dependency",
    ],
    caseStudy: {
      problem:
        "Many smallholder farmers lack reliable internet access, limiting the effectiveness of conventional smart farming solutions.",
      approach:
        "Designed a TinyML-powered edge device capable of processing agricultural data locally and delivering multilingual voice alerts.",
      outcome:
        "Selected as an institutional representative for Samsung Solve for Tomorrow 2026 under the AI Living for India theme.",
    },
  },
  {
    slug: "website-time-tracker",
    title: "Website Time Tracker Chrome Extension",
    description:
      "A Chrome Extension that tracks time spent on websites in real time, featuring a modern interface and persistent session tracking.",
    technologies: ["JavaScript", "Chrome Extensions API", "HTML5", "CSS3", "Chrome Storage API"],
    image: "/images/projects/time-tracker.svg",
    featured: true,
    category: "Browser Extension",
    year: "2024",
    status: "Completed",
    features: [
      "Real-time website usage tracking",
      "Live hh:mm:ss timer",
      "Persistent tracking across tab switches",
      "Chrome Storage API integration",
      "Lightweight and fast",
    ],
    caseStudy: {
      problem:
        "Users often underestimate the amount of time spent on distracting websites and lack simple tools to monitor browsing habits.",
      approach:
        "Built a Chrome Extension using the Chrome Extensions API with persistent storage to accurately track browsing sessions across tabs and browser restarts.",
      outcome:
        "Deployed a fully functional extension during a Software Development Internship at Scaler.",
    },
  },
  {
    slug: "certificate-verification-system",
    title: "Certificate Verification System",
    description:
      "A web application that enables users to verify certificates instantly through a simple, responsive interface.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    image: "/images/projects/certificate-verification.svg",
    featured: false,
    category: "Web Application",
    year: "2025",
    status: "Completed",
    features: [
      "Instant certificate verification",
      "Mobile-first responsive design",
      "Cross-browser compatibility",
      "Fast and lightweight interface",
      "Production-ready workflow",
    ],
  },
  {
    slug: "website-support-chatbot",
    title: "Website Support Chatbot",
    description:
      "A conversational chatbot integrated into a production website to automate responses to common user queries and improve customer support.",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    image: "/images/projects/chatbot.svg",
    featured: false,
    category: "Web Automation",
    year: "2024",
    status: "Completed",
    features: [
      "Automated responses",
      "Easy website integration",
      "Interactive chat interface",
      "Improved customer support workflow",
      "Lightweight implementation",
    ],
  },
];
