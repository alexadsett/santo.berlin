import { ChevronDown, CircleHelp } from "lucide-react";
import { Eyebrow } from "@/shopware/components/eyebrow";
import { faq, type Lang } from "@/shopware/content/copy";

export function Faq({ lang }: { lang: Lang }) {
  const t = faq[lang];

  return (
    <section
      id="faq"
      className="scroll-mt-24 border-y border-border bg-muted"
    >
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <div className="text-center">
          <Eyebrow icon={CircleHelp}>{t.eyebrow}</Eyebrow>
          <h2 className="mx-auto mt-6 font-semibold text-4xl leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            {t.title}
          </h2>
        </div>

        <div className="mt-12 divide-y divide-line rounded-2xl border border-border bg-background">
          {t.items.map((item) => (
            <details key={item.question} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-foreground marker:content-none">
                {item.question}
                <ChevronDown
                  className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                  strokeWidth={2.25}
                />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
