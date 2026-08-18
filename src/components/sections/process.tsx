import { useTranslations } from "next-intl";

export function Process() {
  const t = useTranslations("process");
  const steps = t.raw("steps") as {
    number: string;
    title: string;
    description: string;
  }[];

  return (
    <section id="ablauf" className="border-t border-border py-20 sm:py-28">
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

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.number} className="relative pl-0">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm text-accent">
                  {step.number}
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>
              <h3 className="mt-4 text-base font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {step.description}
              </p>
              {i < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="mt-6 h-px w-full bg-border sm:hidden"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
