import { useTranslations } from "next-intl";
import {
  Wifi,
  Video,
  KeyRound,
  Phone,
  MonitorSmartphone,
  Activity,
  Check,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";

const ICONS: LucideIcon[] = [Wifi, Video, KeyRound, Phone, MonitorSmartphone, Activity];

export function ServicesGrid() {
  const t = useTranslations("unifi.services");
  const items = t.raw("items") as {
    title: string;
    description: string;
    details: string[];
  }[];

  return (
    <section id="services" className="relative border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            {t("eyebrow")}
          </span>
          <h2 className="text-balance mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base text-muted-foreground">{t("subtitle")}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <details
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-accent/40"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/0 blur-2xl transition-colors group-hover:bg-accent/20" />
                <summary className="relative cursor-pointer list-none marker:content-none">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <ChevronDown
                      className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                      strokeWidth={2.25}
                    />
                  </div>
                  <h3 className="mt-5 text-lg font-medium text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </summary>

                <ul className="relative mt-4 space-y-2 border-t border-border pt-4 text-sm">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" strokeWidth={2.5} />
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
