import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Mark } from "@/components/mark";

export function SiteFooter() {
  const t = useTranslations("footer");
  const tBrands = useTranslations("brands");

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 font-semibold tracking-tight">
              <span className="flex size-8 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Mark className="size-4" />
              </span>
              santo.berlin
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              {t("description")}
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-foreground">
              {t("brandsHeading")}
            </div>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://unifi-berlin.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <span className="size-1.5 rounded-full bg-unifi" />
                  {tBrands("unifi.name")}
                </a>
              </li>
              <li>
                <a
                  href="https://shopware-berlin.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <span className="size-1.5 rounded-full bg-shopware" />
                  {tBrands("shopware.name")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-foreground">
              {t("legalHeading")}
            </div>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/impressum"
                  className="transition-colors hover:text-foreground"
                >
                  {t("impressum")}
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="transition-colors hover:text-foreground"
                >
                  {t("datenschutz")}
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hallo@santo.berlin"
                  className="transition-colors hover:text-foreground"
                >
                  hallo@santo.berlin
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {t("rights")}
          </p>
          <p className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-accent" />
            Berlin Mitte
          </p>
        </div>
      </div>
    </footer>
  );
}
