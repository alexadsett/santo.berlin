"use client";

import { useState } from "react";
import { Check, Route } from "lucide-react";
import { Eyebrow } from "@/shopware/components/eyebrow";
import { process, type Lang } from "@/shopware/content/copy";

export function Process({ lang }: { lang: Lang }) {
  const t = process[lang];
  const [active, setActive] = useState(0);
  const step = t.steps[active];

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="max-w-2xl">
        <Eyebrow icon={Route}>{t.eyebrow}</Eyebrow>
        <h2 className="mt-6 font-semibold text-4xl leading-[1.1] tracking-tight text-foreground sm:text-5xl">
          {t.title}
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          {t.subtitle}
        </p>
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-12">
        <ol className="flex gap-2 overflow-x-auto pb-2 lg:relative lg:flex-col lg:gap-0 lg:overflow-visible lg:pb-0">
          {t.steps.map((s, i) => {
            const isActive = i === active;
            return (
              <li key={s.title} className="relative shrink-0 lg:shrink lg:pb-8 last:lg:pb-0">
                {i < t.steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-4 top-9 hidden h-full w-px bg-border lg:block"
                  />
                )}
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-current={isActive}
                  className={`relative flex w-full items-center gap-3 rounded-full px-4 py-2 text-left transition-colors lg:rounded-none lg:px-0 lg:py-0 ${
                    isActive ? "bg-accent/10 lg:bg-transparent" : "hover:bg-background lg:hover:bg-transparent"
                  }`}
                >
                  <span
                    className={`flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                      isActive
                        ? "bg-accent text-accent-foreground"
                        : "bg-background text-muted-foreground border border-border"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`text-sm font-medium transition-colors ${
                      isActive ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {s.title}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>

        <div
          key={active}
          className="rounded-2xl border border-border bg-muted p-8 sm:p-10"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-semibold text-3xl text-accent">
              {String(active + 1).padStart(2, "0")}
            </span>
            <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground">
              {step.duration}
            </span>
          </div>
          <h3 className="mt-4 text-2xl font-medium text-foreground">{step.title}</h3>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
            {step.description}
          </p>
          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {step.details.map((detail) => (
              <li key={detail} className="flex items-start gap-2 text-sm">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" strokeWidth={2.5} />
                <span className="text-foreground/90">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
