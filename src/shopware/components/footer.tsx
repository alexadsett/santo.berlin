import Link from "next/link";
import { Mark } from "@/components/mark";
import { CookieSettingsLink } from "@/components/cookie-settings-link";
import { nav, footer, localizedPath, type Lang } from "@/shopware/content/copy";

export function Footer({ lang }: { lang: Lang }) {
  const t = footer[lang];
  const navT = nav[lang];
  const home = localizedPath(lang, "home");

  return (
    <footer className="border-t border-line bg-cream-soft">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href={home} className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-xl bg-shopware text-white">
                <Mark className="size-4" />
              </span>
              <span className="font-display text-lg italic tracking-tight text-ink">
                santo.berlin
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">
              {t.description}
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-ink">{t.navHeading}</p>
            <ul className="mt-4 space-y-3 text-sm text-ink-muted">
              {navT.links.map((link) => (
                <li key={link.href}>
                  <Link href={`${home}${link.href}`} className="hover:text-ink">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-ink">{t.legalHeading}</p>
            <ul className="mt-4 space-y-3 text-sm text-ink-muted">
              <li>
                <Link href={localizedPath(lang, "impressum")} className="hover:text-ink">
                  {t.impressum}
                </Link>
              </li>
              <li>
                <Link href={localizedPath(lang, "datenschutz")} className="hover:text-ink">
                  {t.datenschutz}
                </Link>
              </li>
              <li>
                <CookieSettingsLink label={t.cookieSettings} />
              </li>
              <li>
                <a href="mailto:hallo@santo.berlin" className="hover:text-ink">
                  hallo@santo.berlin
                </a>
              </li>
              <li className="text-ink-muted/80">{t.cityLabel}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-8 text-xs text-ink-muted/80 sm:flex-row sm:items-center sm:justify-between">
          <p>{t.copyright(new Date().getFullYear())}</p>
          <p>{t.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
