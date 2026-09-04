import { useTranslations } from "next-intl";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { GOOGLE_MAPS_URL } from "@/lib/constants";

export function Contact() {
  const t = useTranslations("contact");

  const details = [
    { icon: Mail, label: t("emailLabel"), value: "hallo@santo.berlin", href: "mailto:hallo@santo.berlin" },
    { icon: Phone, label: t("phoneLabel"), value: "+49 30 23324319", href: "tel:+493023324319" },
    { icon: MapPin, label: t("locationLabel"), value: t("location"), href: GOOGLE_MAPS_URL },
  ];

  return (
    <section id="kontakt" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <div className="text-sm font-semibold text-accent">{t("eyebrow")}</div>
          <h2 className="text-balance mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-muted-foreground">{t("description")}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-2 lg:grid-cols-1">
            {details.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent/40"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon className="size-4" strokeWidth={1.75} />
                </span>
                <div className="min-w-0">
                  <dt className="text-xs text-muted-foreground">{label}</dt>
                  <dd className="truncate text-sm font-medium text-foreground">{value}</dd>
                </div>
              </a>
            ))}
          </dl>

          <div className="lg:col-span-3">
            <ContactForm source="home" />
          </div>
        </div>
      </div>
    </section>
  );
}
