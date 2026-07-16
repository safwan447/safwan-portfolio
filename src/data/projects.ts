import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    slug: "infrasense-ai",
    title: "InfraSense-AI",
    description: [
      "Predicts infrastructure project risk levels with Random Forest.",
      "Exposes scoring through a FastAPI REST API.",
      "Built for early delay and budget-risk checks.",
    ],
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
        "Infrastructure teams need earlier warning signals for delays and budget overruns before projects move too far into execution.",
      approach:
        "Trained a Random Forest classifier and wrapped the prediction flow in a FastAPI service so a project record can return a risk category through one API call.",
      outcome:
        "Delivered a working AI backend with 5 core feature areas: risk classification, REST access, real-time scoring, backend integration, and lightweight planning support.",
    },
  },
  {
    slug: "privacy-guard-agent",
    title: "Privacy Guard Agent",
    description: [
      "Detects personally identifiable information in text workflows.",
      "Redacts sensitive content through an RL-based pipeline.",
      "Packaged with FastAPI and Docker for reproducible runs.",
    ],
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
        "Teams handling user text need a repeatable way to reduce accidental PII exposure before data reaches logs, demos, or downstream tools.",
      approach:
        "Built a reinforcement learning redaction environment, served inference through FastAPI, and Dockerized the service so the same setup can run across machines.",
      outcome:
        "Submitted a reproducible Meta OpenEnv Hackathon project with 6 defined capabilities, including PII detection, redaction, API inference, Docker deployment, logging, and environment setup.",
    },
  },
  {
    slug: "krishisense",
    title: "KrishiSense",
    description: [
      "Offline-first TinyML and IoT concept for smallholder farmers.",
      "Processes crop and soil signals on the edge.",
      "Designed for voice alerts without internet dependency.",
    ],
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
        "Many smallholder farmers cannot rely on stable internet access, which limits cloud-only smart farming tools in field conditions.",
      approach:
        "Designed a solar-powered edge device concept that uses TinyML locally and delivers regional-language voice alerts without sending data to the cloud.",
      outcome:
        "Built the project direction around 6 core requirements: offline operation, solar power, edge AI, crop monitoring, soil monitoring, and regional-language alerts.",
    },
  },
  {
    slug: "website-time-tracker",
    title: "Website Time Tracker Chrome Extension",
    description: [
      "Tracks website usage in real time.",
      "Keeps a live hh:mm:ss timer across tab switches.",
      "Persists sessions with Chrome Storage API.",
    ],
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
        "Users often lose track of browsing time because standard browser history does not show a live per-site timer.",
      approach:
        "Built a Chrome Extension with tab activity tracking, a live hh:mm:ss timer, and Chrome Storage API persistence across tab switches.",
      outcome:
        "Delivered a working internship project at Scaler with 5 focused capabilities: real-time tracking, tab-switch handling, persistent storage, a lightweight UI, and fast local execution.",
    },
  },
  {
    slug: "certificate-verification-system",
    title: "Certificate Verification System",
    description: [
      "Responsive certificate verification interface.",
      "Built with HTML, CSS, and JavaScript.",
      "Focused on fast lookup and mobile use.",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript"],
    image: "/images/projects/certificate-verification.svg",
    featured: false,
    category: "Web Application",
    year: "2025",
    status: "Completed",
    privateNote: "Code not publicly available",
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
    description: [
      "Website chatbot for common support questions.",
      "Built with JavaScript, HTML, and CSS.",
      "Designed for lightweight production integration.",
    ],
    technologies: ["JavaScript", "HTML5", "CSS3"],
    image: "/images/projects/chatbot.svg",
    featured: false,
    category: "Web Automation",
    year: "2024",
    status: "Completed",
    privateNote: "Code not publicly available",
    features: [
      "Automated responses",
      "Easy website integration",
      "Interactive chat interface",
      "Improved customer support workflow",
      "Lightweight implementation",
    ],
  },
];
