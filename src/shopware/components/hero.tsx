import Link from "next/link";
import { ArrowUpRight, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { Eyebrow } from "@/shopware/components/eyebrow";
import { PickwareSeal } from "@/shopware/components/pickware-seal";
import { hero, localizedPath, type Lang } from "@/shopware/content/copy";

export function Hero({ lang }: { lang: Lang }) {
  const t = hero[lang];
  const home = localizedPath(lang, "home");

  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-32 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-accent/10/60 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="flex items-start justify-between gap-6">
          <Eyebrow icon={MapPin}>{t.eyebrow}</Eyebrow>
          <div className="relative hidden h-20 w-20 shrink-0 rounded-full bg-background text-foreground shadow-[0_15px_30px_-15px_rgba(22,19,15,0.35)] sm:block">
            <PickwareSeal className="h-full w-full p-2.5" />
          </div>
        </div>

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
    </section>
  );
}
