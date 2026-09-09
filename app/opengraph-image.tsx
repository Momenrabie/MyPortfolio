import { ImageResponse } from "next/og";

export const alt = "Momen Rabie — Full-Stack Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#070b14",
          color: "#eef2ff",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#4d8dff",
          }}
        >
          Full-Stack Engineer
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 84, fontWeight: 700 }}>Momen Rabie</div>
          <div style={{ fontSize: 32, color: "#9aa6bd", maxWidth: 820 }}>
            I build production web apps with Next.js, TypeScript, and Node.js.
          </div>
        </div>
        <div style={{ display: "flex", gap: 16, fontSize: 22, color: "#9aa6bd" }}>
          <span>Next.js</span>
          <span>·</span>
          <span>TypeScript</span>
          <span>·</span>
          <span>PostgreSQL</span>
          <span>·</span>
          <span>Cairo, Egypt</span>
        </div>
      </div>
    ),
    size,
  );
}
