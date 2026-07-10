import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        elevated: "var(--surface-elevated)",
        border: "var(--border)",
        primary: "var(--text-primary)",
        muted: "var(--text-muted)",
        accent: "var(--accent)",
      },
      fontFamily: {
        heading: "var(--font-cormorant)",
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
      },
      boxShadow: {
        resting: "var(--shadow-resting)",
        hover: "var(--shadow-hover)",
        modal: "var(--shadow-modal)",
      },
      fontSize: {
        xs: ["12px", "16px"],
        sm: ["14px", "20px"],
        base: ["16px", "24px"],
        lg: ["20px", "30px"],
        xl: ["24px", "32px"],
        "2xl": ["32px", "40px"],
        "3xl": ["48px", "56px"],
      },
    },
  },
};

export default config;
