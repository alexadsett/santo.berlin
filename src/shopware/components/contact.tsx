import { ArrowUpRight, Mail } from "lucide-react";
import { Eyebrow } from "@/shopware/components/eyebrow";
import { contact, type Lang } from "@/shopware/content/copy";

export function Contact({ lang }: { lang: Lang }) {
  const t = contact[lang];

  return (
    <section id="kontakt" className="scroll-mt-24 mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="relative overflow-hidden rounded-3xl border border-line bg-cream-soft px-8 py-16 text-center sm:px-16">
        <div
          className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gold-soft/70 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative">
          <Eyebrow icon={Mail}>{t.eyebrow}</Eyebrow>
          <h2 className="mx-auto mt-6 max-w-xl font-display text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl">
            {t.title}
          </h2>
          <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-ink-muted">
            {t.body}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:hallo@santo.berlin"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-gold hover:text-ink"
            >
              hallo@santo.berlin
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
