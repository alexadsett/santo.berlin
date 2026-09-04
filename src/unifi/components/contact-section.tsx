import { useTranslations } from "next-intl";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import { ContactForm } from "@/unifi/components/contact-form";
import { siteConfig } from "@/unifi/lib/site-config";

export function ContactSection() {
  const t = useTranslations("unifi.contact");

  const cards = [
    {
      icon: Phone,
      label: t("phoneLabel"),
      value: siteConfig.phone,
      href: siteConfig.phoneHref,
    },
    {
      icon: Mail,
      label: t("emailLabel"),
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: MessageCircle,
      label: t("whatsappLabel"),
      value: siteConfig.whatsapp,
      href: siteConfig.whatsappHref,
    },
    {
      icon: MapPin,
      label: t("locationLabel"),
      value: t("location"),
      href: undefined,
    },
  ];

  return (
    <section
      id="contact"
      className="relative border-t border-surface-border bg-background-elevated py-24"
    >
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

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
            {cards.map((card) => {
              const Icon = card.icon;
              const content = (
                <div className="flex items-center gap-4 rounded-xl border border-surface-border bg-surface/50 p-4 transition-colors hover:border-accent/40">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted">{card.label}</p>
                    <p className="truncate text-sm font-medium text-foreground">
                      {card.value}
                    </p>
                  </div>
                </div>
              );
              return card.href ? (
                <a key={card.label} href={card.href} target={card.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  {content}
                </a>
              ) : (
                <div key={card.label}>{content}</div>
              );
            })}
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
