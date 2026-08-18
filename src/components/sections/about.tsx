import { useTranslations } from "next-intl";
import { Check } from "lucide-react";

export function About() {
  const t = useTranslations("about");
  const points = t.raw("points") as string[];

  return (
    <section
      id="ueber-uns"
      className="border-t border-border bg-muted/40 py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="text-sm font-semibold text-accent">
            {t("eyebrow")}
          </div>
          <h2 className="text-balance mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("title")}
          </h2>
        </div>
        <div>
          <p className="text-muted-foreground">{t("description")}</p>
          <ul className="mt-6 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Check className="size-3" strokeWidth={2.5} />
                </span>
                <span className="text-foreground/90">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
