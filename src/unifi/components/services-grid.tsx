import { useTranslations } from "next-intl";
import {
  Wifi,
  Video,
  KeyRound,
  Phone,
  MonitorSmartphone,
  Activity,
  type LucideIcon,
} from "lucide-react";

const ICONS: LucideIcon[] = [Wifi, Video, KeyRound, Phone, MonitorSmartphone, Activity];

export function ServicesGrid() {
  const t = useTranslations("unifi.services");
  const items = t.raw("items") as { title: string; description: string }[];

  return (
    <section id="services" className="relative border-t border-surface-border py-24">
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

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-surface-border bg-surface/50 p-6 transition-colors hover:border-accent/40"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/0 blur-2xl transition-colors group-hover:bg-accent/20" />
                <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="relative mt-5 text-lg font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted">
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
