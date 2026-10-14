import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.name}, ${profile.title} at ${profile.company.name}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#f6f4ef",
          color: "#1a1814",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 24, color: "#716c62", letterSpacing: 2 }}>
          <div style={{ width: 40, height: 4, background: "#d4520f" }} />
          KRAIGSTRONG.COM
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 112, fontFamily: "serif", letterSpacing: -3, lineHeight: 1 }}>{profile.name}</div>
          <div style={{ marginTop: 28, fontSize: 38, color: "#57534b", maxWidth: 900, lineHeight: 1.3 }}>
            {`${profile.title} at ${profile.company.name}`}
          </div>
        </div>
        <div style={{ display: "flex", gap: 48, fontSize: 26, color: "#57534b" }}>
          <span>+300% developer MAUs</span>
          <span>4 → 30+ engineers</span>
          <span>$100M+ revenue product owned</span>
        </div>
      </div>
    ),
    size,
  );
}
