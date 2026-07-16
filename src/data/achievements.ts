import type { Achievement } from "@/types/content";

export const achievements: Achievement[] = [
  {
    title: "Smart India Hackathon (SIH) 2025",
    description: [
      "Won the institutional selection round at Presidency University.",
      "Qualified as the university's official SIH representative.",
    ],
    date: "2025",
    event: "Presidency University",
    certificateImage: "/images/certificates/sih-cert.jpeg",
  },
  {
    title: "Samsung Solve for Tomorrow 2026",
    description: ["Developed KrishiSense under the AI Living for India theme."],
    date: "2026",
    event: "Samsung Solve for Tomorrow",
  },
  {
    title: "Meta OpenEnv Hackathon",
    description: [
      "Built Privacy Guard Agent for automated PII redaction.",
      "Packaged the FastAPI service with Docker for reproducible runs.",
    ],
    date: "2025",
    event: "Meta OpenEnv Hackathon",
  },
  {
    title: "Agritech Hackathon",
    description: [
      "Placed 6th with an agriculture-focused software solution.",
      "Worked on practical crop and field-support use cases.",
    ],
    date: "2025",
    event: "Agritech Hackathon",
    position: "6th place",
  },
];
