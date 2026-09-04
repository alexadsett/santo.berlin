import { useTranslations } from "next-intl";

export function ProcessSteps() {
  const t = useTranslations("unifi.process");
  const steps = t.raw("steps") as {
    number: string;
    title: string;
    description: string;
  }[];

  return (
    <section id="process" className="relative border-t border-surface-border py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            {t("eyebrow")}
          </span>
          <h2 className="text-balance mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base text-muted">{t("subtitle")}</p>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-surface-border to-transparent lg:block" />
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-background font-mono text-sm text-accent">
                {step.number}
              </div>
              <h3 className="mt-5 text-lg font-medium text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
