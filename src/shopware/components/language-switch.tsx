import Link from "next/link";
import { nav, localizedPath, type Lang, type PageKey } from "@/shopware/content/copy";

export function LanguageSwitch({ lang, page }: { lang: Lang; page: PageKey }) {
  const otherLang: Lang = lang === "de" ? "en" : "de";
  const t = nav[lang];

  return (
    <Link
      href={localizedPath(otherLang, page)}
      hrefLang={otherLang}
      aria-label={t.switchLabel}
      className="rounded-full border border-line px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-ink-muted transition-colors hover:border-ink hover:text-ink"
    >
      {t.switchTo}
    </Link>
  );
}
