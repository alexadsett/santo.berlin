import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";

export const alt = "unifi.berlin – Zertifizierter Ubiquiti Installationspartner in Berlin";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "unifi.hero" });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#0a0b0d",
          backgroundImage:
            "radial-gradient(circle at 85% 8%, rgba(54,84,244,0.35), transparent 55%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 56,
                height: 56,
                borderRadius: 999,
                backgroundColor: "#3654f4",
                color: "#ffffff",
                fontSize: 26,
                fontWeight: 700,
              }}
            >
              i
            </div>
            <div style={{ display: "flex", fontSize: 32, color: "#f3f2ee" }}>santo.berlin</div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 20,
              color: "#7583ff",
              textTransform: "uppercase",
              letterSpacing: 3,
            }}
          >
            unifi.berlin
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: 58,
            lineHeight: 1.15,
            color: "#f3f2ee",
            maxWidth: 980,
          }}
        >
          <span>{t("headline")}&nbsp;</span>
          <span style={{ color: "#7583ff" }}>{t("highlight")}</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 30,
              height: 30,
              borderRadius: 999,
              backgroundColor: "#3654f4",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 13l4 4L19 7"
                stroke="#ffffff"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span style={{ fontSize: 24, color: "#7583ff" }}>UniFi</span>
          <span style={{ fontSize: 24, color: "rgba(243,242,238,0.6)" }}>
            {t("eyebrow")}
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
