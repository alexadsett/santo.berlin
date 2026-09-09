import Link from "next/link";
import {
  ArrowUpRight,
  Backpack,
  Gem,
  Headphones,
  Lamp,
  MapPin,
  Shirt,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Watch,
} from "lucide-react";
import { Eyebrow } from "@/shopware/components/eyebrow";
import { PickwareSeal } from "@/shopware/components/pickware-seal";
import { hero, heroProducts, formatPrice, localizedPath, type Lang } from "@/shopware/content/copy";

const productIcons = { Shirt, Headphones, Watch, Backpack, Gem, Lamp };

export function Hero({ lang }: { lang: Lang }) {
  const t = hero[lang];
  const home = localizedPath(lang, "home");

  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-32 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-accent/10/60 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 pb-20 pt-16 md:grid-cols-[1.1fr_0.9fr] md:pb-28 md:pt-24">
        <div>
          <Eyebrow icon={MapPin}>{t.eyebrow}</Eyebrow>

          <h1 className="mt-6 max-w-xl font-semibold text-[2.75rem] leading-[1.05] tracking-tight text-foreground sm:text-6xl">
            {t.titleStart}{" "}
            <em className="not-italic font-semibold text-accent">{t.titleEmphasis}</em>{" "}
            {t.titleEnd}
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            {t.body}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href={`${home}#kontakt`}
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-colors hover:bg-accent hover:text-foreground"
            >
              {t.ctaPrimary}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href={`${home}#leistungen`}
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-foreground"
            >
              {t.ctaSecondary}
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-pickware-blue" strokeWidth={2.25} />
              {t.badge1}
            </span>
            <span className="inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-accent" strokeWidth={2.25} />
              {t.badge2}
            </span>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-sm rounded-3xl border border-border bg-foreground p-8 text-background shadow-[0_30px_60px_-25px_rgba(22,19,15,0.45)]">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-base">santo.berlin</span>
              <span className="rounded-full bg-background/10 px-3 py-1 text-[11px] uppercase tracking-wider text-background/70">
                {t.mock.badge}
              </span>
            </div>

            <div className="mt-8 flex items-center justify-between text-xs">
              <span className="text-background/70">{t.mock.statsProducts}</span>
              <span className="inline-flex items-center gap-1 font-medium text-accent">
                <TrendingUp className="h-3.5 w-3.5" strokeWidth={2.5} />
                {t.mock.statsGrowth}
              </span>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              {heroProducts.map(({ icon, price }, i) => {
                const Icon = productIcons[icon];
                return (
                  <div
                    key={icon}
                    className="flex aspect-square flex-col items-center justify-center gap-1.5 rounded-xl bg-background/10"
                    style={{ opacity: 1 - i * 0.06 }}
                  >
                    <Icon className="h-5 w-5 text-background/80" strokeWidth={1.75} />
                    <span className="text-[11px] font-medium text-background/60">
                      {formatPrice(price, lang)}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex items-center justify-between rounded-2xl bg-background/10 px-4 py-3 text-xs">
              <span className="text-background/70">{t.mock.syncLabel}</span>
              <span className="font-medium text-pickware-blue">Pickware ✓</span>
            </div>

            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-background text-foreground shadow-[0_20px_45px_-20px_rgba(22,19,15,0.35)] sm:h-36 sm:w-36">
              <PickwareSeal className="h-full w-full p-3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
