export const designTokens = {
  color: {
    light: {
      background: "#f7f8fb",
      surface: "#ffffff",
      surfaceElevated: "#f3f5f8",
      border: "#dfe3ea",
      textPrimary: "#111318",
      textMuted: "#5f6673",
      accent: "#3b82f6",
    },
    dark: {
      background: "#05070b",
      surface: "#0d1117",
      surfaceElevated: "#151a22",
      border: "#252c37",
      textPrimary: "#f4f7fb",
      textMuted: "#9aa4b2",
      accent: "#60a5fa",
    },
  },
  spacing: {
    base: 8,
    scale: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128],
  },
  radius: {
    sm: "8px",
    md: "12px",
    lg: "16px",
  },
  shadow: {
    resting: "0 1px 2px rgb(0 0 0 / 0.08)",
    hover: "0 16px 40px rgb(0 0 0 / 0.14)",
    modal: "0 24px 80px rgb(0 0 0 / 0.35)",
  },
  typography: {
    scale: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "30px"],
      xl: ["24px", "32px"],
      "2xl": ["32px", "40px"],
      "3xl": ["48px", "56px"],
    },
    weights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  motion: {
    micro: { duration: 0.18, ease: "easeOut" },
    reveal: { duration: 0.42, stagger: 0.06, once: true },
  },
} as const;
