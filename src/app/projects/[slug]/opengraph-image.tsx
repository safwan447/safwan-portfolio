import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";
import { projects } from "@/data/projects";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type OgProps = {
  params: Promise<{ slug: string }>;
};

export default async function Image({ params }: OgProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  const title = project?.title ?? siteConfig.displayName;
  const description = project?.description ?? siteConfig.seo.description;
  const category = project?.category ?? "Portfolio";

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
      <div style={{ color: "#60a5fa", fontSize: 24, marginBottom: 28 }}>{category}</div>
      <div style={{ maxWidth: 940, fontSize: 72, fontWeight: 700, lineHeight: 1.06 }}>{title}</div>
      <div
        style={{ marginTop: 32, maxWidth: 860, color: "#9aa4b2", fontSize: 28, lineHeight: 1.35 }}
      >
        {description}
      </div>
    </div>,
    size,
  );
}
