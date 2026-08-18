import { useTranslations } from "next-intl";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  const t = useTranslations("contact");

  const details = [
    { icon: Mail, label: t("emailLabel"), value: "hallo@santo.berlin", href: "mailto:hallo@santo.berlin" },
    { icon: Phone, label: t("phoneLabel"), value: "+49 30 23324319", href: "tel:+493023324319" },
    { icon: MapPin, label: t("locationLabel"), value: t("location"), href: undefined },
  ];

  return (
    <section id="kontakt" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="overflow-hidden rounded-card border border-border bg-card px-6 py-12 sm:px-12 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <div className="text-sm font-semibold text-accent">
                {t("eyebrow")}
              </div>
              <h2 className="text-balance mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                {t("title")}
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground">
                {t("description")}
              </p>
              <a
                href="mailto:hallo@santo.berlin"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                {t("ctaPrimary")}
                <ArrowRight className="size-4" />
              </a>
            </div>

            <dl className="grid gap-5 border-t border-border pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              {details.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Icon className="size-4" strokeWidth={1.75} />
                  </span>
                  <div>
                    <dt className="text-xs text-muted-foreground">{label}</dt>
                    <dd className="text-sm font-medium">
                      {href ? (
                        <a href={href} className="hover:text-accent">
                          {value}
                        </a>
                      ) : (
                        value
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
