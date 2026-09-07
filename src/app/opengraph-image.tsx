import { ImageResponse } from "next/og";
import { company } from "@/data/company";

export const alt = "TECHNO CARE — Aircondition Authorised Dealer Sales & Service";
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
          background: "#143a6b",
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
            color: "#ffb4b8",
            fontWeight: 600,
          }}
        >
          {company.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 52, fontWeight: 600, lineHeight: 1.1, maxWidth: 980 }}>
            Aircondition Authorised Dealer Sales & Service
          </div>
          <div style={{ marginTop: 20, fontSize: 24, color: "#c5d3e6" }}>
            Multi-Brand AC Reseller & Service Provider
          </div>
          <div style={{ marginTop: 16, fontSize: 22, color: "#ffb4b8" }}>
            Panasonic · IFB · Daikin · O General · Mitsubishi Electric
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#c5d3e6" }}>
          <span>{company.phoneDisplay}</span>
          <span>www.{company.domain}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
