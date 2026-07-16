export const designTokens = {
  color: {
    light: {
      background: "#f8fafd",
      surface: "#ffffff",
      surfaceElevated: "#f1f4f9",
      border: "#dce2ea",
      textPrimary: "#202124",
      textMuted: "#5f6368",
      accent: "#1a73e8",
    },
    dark: {
      background: "#101214",
      surface: "#171a1f",
      surfaceElevated: "#20242b",
      border: "#30343b",
      textPrimary: "#f1f3f4",
      textMuted: "#bdc1c6",
      accent: "#8ab4f8",
    },
  },
  spacing: {
    base: 8,
    scale: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128],
  },
  radius: {
    sm: "8px",
    md: "12px",
    lg: "12px",
  },
  shadow: {
    resting: "0 1px 2px rgb(60 64 67 / 0.1), 0 1px 3px rgb(60 64 67 / 0.08)",
    hover: "0 8px 24px rgb(60 64 67 / 0.16)",
    modal: "0 24px 80px rgb(60 64 67 / 0.28)",
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
