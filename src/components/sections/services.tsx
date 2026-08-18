import { useTranslations } from "next-intl";
import {
  ShoppingBag,
  Wifi,
  Plug,
  Compass,
  LifeBuoy,
  RefreshCcw,
  type LucideIcon,
} from "lucide-react";

const ICONS: LucideIcon[] = [
  ShoppingBag,
  Wifi,
  Plug,
  Compass,
  LifeBuoy,
  RefreshCcw,
];

export function Services() {
  const t = useTranslations("services");
  const items = t.raw("items") as { title: string; description: string }[];

  return (
    <section
      id="leistungen"
      className="border-t border-border bg-muted/40 py-20 sm:py-28"
    >
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

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <div
                key={item.title}
                className="rounded-card border border-border bg-card p-6"
              >
                <span className="flex size-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Icon className="size-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-base font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
