import { ImageResponse } from "next/og";

export const alt = "santo.berlin — Digitale Infrastruktur aus einer Hand";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const tagline =
    locale === "en"
      ? "Digital infrastructure that just works."
      : "Digitale Infrastruktur, die einfach läuft.";
  const sub =
    locale === "en"
      ? "Online shops · Networks · Digital systems · Berlin"
      : "Onlineshops · Netzwerke · Digitale Systeme · Berlin";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "88px",
          backgroundColor: "#0a0b0d",
          backgroundImage:
            "radial-gradient(circle at 12% 8%, rgba(117,131,255,0.4), transparent 55%), radial-gradient(circle at 100% 100%, rgba(47,209,201,0.28), transparent 55%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              display: "flex",
              width: 76,
              height: 76,
              borderRadius: 38,
              background: "#3654f4",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="38" height="38" viewBox="0 0 32 32" fill="none">
              <path
                d="M16 6v4.2M12 8h8l-1.4 4h-5.2L12 8Z"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <circle cx="16" cy="6" r="2.4" fill="#ffffff" />
              <path
                d="M14.6 12.2h2.8l1.6 15.8a2 2 0 0 1-2 2.2h-2a2 2 0 0 1-2-2.2l1.6-15.8Z"
                fill="#ffffff"
              />
            </svg>
          </div>
          <div style={{ display: "flex", fontSize: 42, color: "#ffffff", fontWeight: 700 }}>
            santo.berlin
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 52,
            fontSize: 58,
            color: "#ffffff",
            fontWeight: 700,
            maxWidth: 920,
            lineHeight: 1.15,
          }}
        >
          {tagline}
        </div>

        <div style={{ display: "flex", marginTop: 28, fontSize: 28, color: "#9aa0aa" }}>
          {sub}
        </div>
      </div>
    ),
    { ...size }
  );
}
