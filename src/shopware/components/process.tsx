import { Route } from "lucide-react";
import { Eyebrow } from "@/shopware/components/eyebrow";
import { process, type Lang } from "@/shopware/content/copy";

export function Process({ lang }: { lang: Lang }) {
  const t = process[lang];

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="max-w-2xl">
        <Eyebrow icon={Route}>{t.eyebrow}</Eyebrow>
        <h2 className="mt-6 font-display text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl">
          {t.title}
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-ink-muted">
          {t.subtitle}
        </p>
      </div>

      <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {t.steps.map((step, i) => (
          <li
            key={step.title}
            className="rounded-2xl border border-line bg-cream-soft p-7"
          >
            <span className="font-display text-3xl italic text-gold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 text-lg font-medium text-ink">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
