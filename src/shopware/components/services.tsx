import {
  Blocks,
  Boxes,
  LayoutTemplate,
  LifeBuoy,
  RefreshCw,
  Warehouse,
} from "lucide-react";
import { Eyebrow } from "@/shopware/components/eyebrow";
import { services, type Lang } from "@/shopware/content/copy";

const icons = [LayoutTemplate, Warehouse, RefreshCw, Blocks, Boxes, LifeBuoy];

export function Services({ lang }: { lang: Lang }) {
  const t = services[lang];

  return (
    <section
      id="leistungen"
      className="scroll-mt-24 border-y border-border bg-muted"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-semibold text-4xl leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            {t.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {t.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((service, i) => {
            const Icon = icons[i];
            return (
              <div
                key={service.title}
                className={`group rounded-2xl border p-7 transition-colors ${
                  service.pickware
                    ? "border-pickware-blue/25 bg-pickware-ice/40 hover:border-pickware-blue/50"
                    : "border-border bg-background hover:border-foreground/20"
                }`}
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${
                    service.pickware
                      ? "bg-pickware-blue text-white"
                      : "bg-foreground text-background group-hover:bg-accent group-hover:text-foreground"
                  }`}
                >
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3
                  className={`mt-5 text-lg font-medium ${
                    service.pickware ? "text-pickware-navy" : "text-foreground"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    service.pickware ? "text-pickware-navy/70" : "text-muted-foreground"
                  }`}
                >
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
