import {
  Blocks,
  Boxes,
  Check,
  ChevronDown,
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
              <details
                key={service.title}
                className={`group rounded-2xl border p-7 transition-colors ${
                  service.pickware
                    ? "border-pickware-blue/25 bg-pickware-ice/40 hover:border-pickware-blue/50"
                    : "border-border bg-background hover:border-foreground/20"
                }`}
              >
                <summary className="cursor-pointer list-none marker:content-none">
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${
                        service.pickware
                          ? "bg-pickware-blue text-white"
                          : "bg-foreground text-background group-hover:bg-accent group-hover:text-foreground"
                      }`}
                    >
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 transition-transform group-open:rotate-180 ${
                        service.pickware ? "text-pickware-navy/50" : "text-muted-foreground"
                      }`}
                      strokeWidth={2.25}
                    />
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
                </summary>

                <ul
                  className={`mt-4 space-y-2 border-t pt-4 text-sm ${
                    service.pickware ? "border-pickware-blue/20" : "border-border"
                  }`}
                >
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2">
                      <Check
                        className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${
                          service.pickware ? "text-pickware-blue" : "text-accent"
                        }`}
                        strokeWidth={2.5}
                      />
                      <span className={service.pickware ? "text-pickware-navy/80" : "text-muted-foreground"}>
                        {detail}
                      </span>
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
