import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const t = useTranslations("hero");

  const stats = [
    { value: t("stat1Value"), label: t("stat1Label") },
    { value: t("stat2Value"), label: t("stat2Label") },
    { value: t("stat3Value"), label: t("stat3Label") },
  ];

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 15% 0%, color-mix(in oklab, var(--accent) 22%, transparent), transparent 70%), radial-gradient(50% 40% at 100% 10%, color-mix(in oklab, var(--unifi) 16%, transparent), transparent 70%)",
        }}
      />
      <div className="bg-grain pointer-events-none absolute inset-0 -z-10 opacity-[0.035]" />

      <div className="mx-auto max-w-6xl px-5 pb-20 pt-20 sm:px-8 sm:pt-28 lg:pb-28 lg:pt-36">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
          <span className="size-1.5 rounded-full bg-accent" />
          {t("eyebrow")}
        </div>

        <h1 className="text-balance mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {t("title")}
        </h1>

        <p className="text-balance mt-6 max-w-xl text-lg text-muted-foreground">
          {t("description")}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            {t("ctaPrimary")}
            <ArrowRight className="size-4" />
          </a>
          <a
            href="#leistungen"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent"
          >
            {t("ctaSecondary")}
          </a>
        </div>

        <dl className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-border pt-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dd className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {stat.value}
              </dd>
              <dt className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
