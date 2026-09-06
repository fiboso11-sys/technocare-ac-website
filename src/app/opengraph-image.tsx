import { ImageResponse } from "next/og";
import { company } from "@/data/company";

export const alt = "TECHNO CARE — AC & HVAC Services in Chennai";
export const size = { width: 1200, height: 630 };
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
          background: "#0b1f2e",
          color: "#f3f7fb",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.28em",
            color: "#7bd4cf",
            fontWeight: 600,
          }}
        >
          {company.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 64, fontWeight: 600, lineHeight: 1.1, maxWidth: 900 }}>
            AC & HVAC Services in Chennai
          </div>
          <div style={{ marginTop: 24, fontSize: 28, color: "#b7c6d3" }}>
            Installation · Repair · Maintenance · Cleaning
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#b7c6d3" }}>
          <span>{company.phoneDisplay}</span>
          <span>{company.domain}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
