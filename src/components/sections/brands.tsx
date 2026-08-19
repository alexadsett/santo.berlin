import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { Mark } from "@/components/mark";

const CARDS = [
  { key: "shopware" as const, href: "https://shopware-berlin.vercel.app/", accent: "bg-shopware" },
  { key: "unifi" as const, href: "https://unifi-berlin.vercel.app/", accent: "bg-unifi" },
];

export function Brands() {
  const t = useTranslations("brands");

  return (
    <section id="marken" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <div className="text-sm font-semibold text-accent">
            {t("eyebrow")}
          </div>
          <h2 className="text-balance mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-muted-foreground">{t("description")}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {CARDS.map((card) => {
            const tags = t.raw(`${card.key}.tags`) as string[];
            return (
              <a
                key={card.key}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-card border border-border bg-card p-7 transition-colors hover:border-accent/60"
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`flex size-11 items-center justify-center rounded-full text-white ${card.accent}`}
                  >
                    <Mark className="size-5" />
                  </span>
                  <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                <div className="mt-5 text-xl font-semibold tracking-tight">
                  {t(`${card.key}.name`)}
                </div>
                <div className="mt-1 text-sm font-medium text-muted-foreground">
                  {t(`${card.key}.tagline`)}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  {t(`${card.key}.description`)}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  {t(`${card.key}.cta`)}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
