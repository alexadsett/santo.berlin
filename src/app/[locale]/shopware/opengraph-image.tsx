import { ImageResponse } from "next/og";
import { hero, locales, type Lang } from "@/shopware/content/copy";

export const alt = "santo.berlin – Shopware Agentur & Pickware Partner in Berlin";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function isLang(value: string): value is Lang {
  return (locales as readonly string[]).includes(value);
}

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLang } = await params;
  const lang: Lang = isLang(rawLang) ? rawLang : "de";
  const t = hero[lang];

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
          backgroundColor: "#16130f",
          backgroundImage:
            "radial-gradient(circle at 85% 8%, rgba(204,154,61,0.35), transparent 55%)",
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
                borderRadius: 16,
                backgroundColor: "#fbf6ec",
                color: "#16130f",
                fontSize: 26,
                fontStyle: "italic",
              }}
            >
              s.
            </div>
            <div style={{ display: "flex", fontSize: 32, color: "#fbf6ec" }}>santo.berlin</div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 20,
              color: "#cc9a3d",
              textTransform: "uppercase",
              letterSpacing: 3,
            }}
          >
            {t.eyebrow}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: 62,
            lineHeight: 1.15,
            color: "#fbf6ec",
            maxWidth: 980,
          }}
        >
          <span>{t.titleStart}&nbsp;</span>
          <span style={{ color: "#cc9a3d" }}>{t.titleEmphasis}&nbsp;</span>
          <span>{t.titleEnd}</span>
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
              backgroundColor: "#19a6eb",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 13l4 4L19 7"
                stroke="#fbf6ec"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span style={{ fontSize: 24, color: "#19a6eb" }}>Pickware</span>
          <span style={{ fontSize: 24, color: "rgba(251,246,236,0.6)" }}>{t.badge1}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
