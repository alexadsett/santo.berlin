import { CheckCircle2, ShieldCheck } from "lucide-react";
import { PickwareSeal } from "@/shopware/components/pickware-seal";
import { pickware, type Lang } from "@/shopware/content/copy";

export function Pickware({ lang }: { lang: Lang }) {
  const t = pickware[lang];

  return (
    <section
      id="pickware-partner"
      className="scroll-mt-24 mx-auto max-w-6xl px-6 py-20 md:py-28"
    >
      <div className="relative overflow-hidden rounded-3xl border border-pickware-blue-deep/40 bg-pickware-navy px-8 py-14 text-cream md:px-16 md:py-20">
        <div
          className="pointer-events-none absolute -top-24 right-[-8%] h-96 w-96 rounded-full bg-pickware-blue/25 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative grid items-center gap-16 md:grid-cols-[0.9fr_1.1fr]">
          <div className="flex justify-center md:justify-start">
            <div className="h-56 w-56 rounded-full bg-cream text-pickware-navy sm:h-64 sm:w-64">
              <PickwareSeal className="h-full w-full p-6" />
            </div>
          </div>

          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-pickware-blue/30 bg-pickware-blue/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-pickware-ice">
              <ShieldCheck className="h-3.5 w-3.5 text-pickware-blue" strokeWidth={2.25} />
              {t.badge}
            </span>

            <h2 className="mt-6 font-display text-4xl leading-[1.1] tracking-tight sm:text-5xl">
              {t.titleStart}{" "}
              <em className="italic text-pickware-blue">{t.titleEmphasis}</em>{" "}
              {t.titleEnd}
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/70">
              {t.body}
            </p>

            <ul className="mt-8 space-y-3">
              {t.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-cream/80">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-pickware-blue"
                    strokeWidth={2}
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
