import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

export const runtime = "edge";
export const alt = siteConfig.seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "#05070b",
        color: "#f4f7fb",
        padding: 72,
        fontFamily: "Arial",
      }}
    >
      <div style={{ color: "#60a5fa", fontSize: 24, marginBottom: 28 }}>{siteConfig.name}</div>
      <div style={{ maxWidth: 900, fontSize: 72, fontWeight: 700, lineHeight: 1.06 }}>
        {siteConfig.tagline}
      </div>
      <div style={{ marginTop: 36, color: "#9aa4b2", fontSize: 28 }}>{siteConfig.location}</div>
    </div>,
    size,
  );
}
