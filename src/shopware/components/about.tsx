import { Eyebrow } from "@/shopware/components/eyebrow";
import { Users } from "lucide-react";
import { about, type Lang } from "@/shopware/content/copy";
import { GOOGLE_MAPS_URL } from "@/lib/constants";

export function About({ lang }: { lang: Lang }) {
  const t = about[lang];

  return (
    <section id="ueber-uns" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 md:py-28">
      <div className="grid gap-14 md:grid-cols-2 md:gap-20">
        <div>
          <Eyebrow icon={Users}>{t.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-semibold text-4xl leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            {t.title}
          </h2>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          {t.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
        {t.stats.map((stat) => {
          const className = `block transition-opacity ${
            stat.pickware ? "bg-pickware-ice/40 p-8" : "bg-background p-8"
          } ${stat.maps ? "hover:opacity-80" : ""}`;
          const content = (
            <>
              <p
                className={`text-xs font-medium uppercase tracking-[0.14em] ${
                  stat.pickware ? "text-pickware-navy/70" : "text-muted-foreground"
                }`}
              >
                {stat.label}
              </p>
              <p
                className={`mt-3 font-semibold text-3xl ${
                  stat.pickware ? "text-pickware-blue-deep" : "text-foreground"
                }`}
              >
                {stat.value}
              </p>
              <p
                className={`mt-2 text-sm ${
                  stat.pickware ? "text-pickware-navy/70" : "text-muted-foreground"
                }`}
              >
                {stat.detail}
              </p>
            </>
          );

          return stat.maps ? (
            <a
              key={stat.label}
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className={className}
            >
              {content}
            </a>
          ) : (
            <div key={stat.label} className={className}>
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
}
