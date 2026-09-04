import { MapPin } from "lucide-react";
import { Eyebrow } from "@/shopware/components/eyebrow";
import { location, type Lang } from "@/shopware/content/copy";
import { GOOGLE_MAPS_URL } from "@/lib/constants";

export function Location({ lang }: { lang: Lang }) {
  const t = location[lang];

  return (
    <section className="border-y border-border bg-muted">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <Eyebrow icon={MapPin}>{t.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-semibold text-4xl leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            {t.title}
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
            {t.body}
          </p>
        </div>

        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noreferrer"
          className="group relative aspect-square w-full max-w-md justify-self-center overflow-hidden rounded-3xl border border-border bg-background transition-colors hover:border-accent/40 sm:justify-self-end"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(var(--border) 1.5px, transparent 1.5px)",
              backgroundSize: "22px 22px",
            }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, transparent 30%, var(--muted) 78%)",
            }}
            aria-hidden="true"
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform group-hover:scale-105">
            <span className="absolute -inset-6 animate-ping rounded-full bg-accent/30" />
            <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background shadow-[0_15px_30px_-10px_rgba(22,19,15,0.5)]">
              <MapPin className="h-6 w-6" strokeWidth={2.25} />
            </span>
          </div>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-border bg-background px-4 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            {t.badge}
          </div>
        </a>
      </div>
    </section>
  );
}
