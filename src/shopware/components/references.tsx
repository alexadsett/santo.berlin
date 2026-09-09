import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { Eyebrow } from "@/shopware/components/eyebrow";
import { references, type Lang } from "@/shopware/content/copy";

export function References({ lang }: { lang: Lang }) {
  const t = references[lang];
  const isSingle = t.items.length === 1;

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="max-w-2xl">
        <Eyebrow icon={BadgeCheck}>{t.eyebrow}</Eyebrow>
        <h2 className="mt-6 font-semibold text-4xl leading-[1.1] tracking-tight text-foreground sm:text-5xl">
          {t.title}
        </h2>
      </div>

      <div className={`mt-12 grid gap-6 ${isSingle ? "sm:grid-cols-1" : "sm:grid-cols-2"}`}>
        {t.items.map((ref) => (
          <a
            key={ref.name}
            href={ref.url}
            target="_blank"
            rel="noreferrer"
            className={`group flex flex-col rounded-2xl border border-border bg-background p-8 transition-colors hover:border-accent/40 ${
              isSingle ? "max-w-xl" : ""
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground">
                {ref.tag}
              </span>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
            <h3 className="mt-5 text-lg font-medium text-foreground">{ref.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {ref.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
