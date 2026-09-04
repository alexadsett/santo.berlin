import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/unifi/components/logo";
import { siteConfig } from "@/unifi/lib/site-config";

export function SiteFooter() {
  const t = useTranslations("unifi");
  const year = new Date().getFullYear();

  const services = (t.raw("services.items") as { title: string }[]).map(
    (item) => item.title,
  );

  return (
    <footer className="border-t border-surface-border bg-background-elevated">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted">
              {t("footer.servicesTitle")}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted">
              {t("footer.companyTitle")}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={siteConfig.phoneHref} className="hover:text-foreground">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <Link href="/" className="hover:text-foreground">
                  {siteConfig.parentBrand}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted">
              {t("footer.legalTitle")}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li>
                <Link href="/unifi/impressum" className="hover:text-foreground">
                  {t("footer.impressum")}
                </Link>
              </li>
              <li>
                <Link href="/unifi/datenschutz" className="hover:text-foreground">
                  {t("footer.privacy")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-surface-border pt-8 text-xs text-muted sm:flex-row">
          <p>
            © {year} {siteConfig.legalName} · {t("footer.rights")}
          </p>
          <p className="font-mono">unifi.berlin · ubiquiti.berlin</p>
        </div>
      </div>
    </footer>
  );
}
