import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/unifi/lib/site-config";

export function AboutSection() {
  const t = useTranslations("unifi.about");

  return (
    <section id="about" className="relative border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              {t("eyebrow")}
            </span>
            <h2 className="text-balance mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              {t("body")}
            </p>
            <a
              href={siteConfig.parentBrandUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
            >
              {t("cta")}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card/50 p-8 font-mono text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-accent/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
              </div>
              <p className="mt-5 leading-relaxed">
                <span className="text-accent">$</span> whoami
                <br />
                {siteConfig.legalName}
                <br />
                <span className="text-accent">$</span> brand --parent
                <br />
                {siteConfig.parentBrand}
                <br />
                <span className="text-accent">$</span> location
                <br />
                {siteConfig.city}, {siteConfig.country}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
