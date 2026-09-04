import { Eyebrow } from "@/shopware/components/eyebrow";
import { Users } from "lucide-react";
import { about, type Lang } from "@/shopware/content/copy";

export function About({ lang }: { lang: Lang }) {
  const t = about[lang];

  return (
    <section id="ueber-uns" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 md:py-28">
      <div className="grid gap-14 md:grid-cols-2 md:gap-20">
        <div>
          <Eyebrow icon={Users}>{t.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-display text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl">
            {t.title}
          </h2>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-ink-muted">
          {t.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
        {t.stats.map((stat) => (
          <div
            key={stat.label}
            className={stat.pickware ? "bg-pickware-ice/40 p-8" : "bg-cream p-8"}
          >
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-ink-muted">
              {stat.label}
            </p>
            <p
              className={`mt-3 font-display text-3xl italic ${
                stat.pickware ? "text-pickware-blue-deep" : "text-ink"
              }`}
            >
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-ink-muted">{stat.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
