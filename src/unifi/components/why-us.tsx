import { useTranslations } from "next-intl";
import { Check } from "lucide-react";

export function WhyUs() {
  const t = useTranslations("unifi.whyUs");
  const items = t.raw("items") as { title: string; description: string }[];

  return (
    <section className="relative border-t border-surface-border bg-background-elevated py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            {t("eyebrow")}
          </span>
          <h2 className="text-balance mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t("title")}
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                <Check className="h-3.5 w-3.5" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
