import { useTranslations } from "next-intl";
import { ArrowUpRight, Wifi } from "lucide-react";
import { NetworkMesh } from "@/unifi/components/network-mesh";

export function Hero() {
  const t = useTranslations("unifi.hero");

  const stats = [
    { value: t("stat1Value"), label: t("stat1Label") },
    { value: t("stat2Value"), label: t("stat2Label") },
    { value: t("stat3Value"), label: t("stat3Label") },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="absolute inset-x-0 top-0 h-[520px] opacity-70">
        <NetworkMesh className="h-full w-full" />
      </div>
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-20 sm:px-6 sm:pt-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
            <Wifi className="h-3.5 w-3.5 text-accent" />
            {t("eyebrow")}
          </span>

          <h1 className="text-balance mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {t("headline")}{" "}
            <span className="bg-gradient-to-r from-accent to-accent bg-clip-text text-transparent">
              {t("highlight")}
            </span>
          </h1>

          <p className="text-balance mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            {t("subheadline")}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.02] sm:w-auto"
            >
              {t("ctaPrimary")}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:bg-card sm:w-auto"
            >
              {t("ctaSecondary")}
            </a>
          </div>
        </div>

        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-4 border-t border-border pt-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-2xl font-semibold text-foreground sm:text-3xl">
                {stat.value}
              </dd>
              <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
