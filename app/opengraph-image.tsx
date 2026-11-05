import { ImageResponse } from "next/og";

export const alt = "ADZ-tech Digital Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#111A35", color: "#fff" }}>
        <div style={{ fontSize: 84, fontWeight: 700, color: "#EE8A2A" }}>ADZ-tech Digital Solutions</div>
        <div style={{ fontSize: 36, marginTop: 24 }}>L'innovation numérique au service de vos ambitions.</div>
        <div style={{ fontSize: 28, marginTop: 40, opacity: 0.7 }}>N'Djamena, Tchad</div>
      </div>
    ),
    size
  );
}
