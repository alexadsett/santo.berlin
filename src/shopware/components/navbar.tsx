import Link from "next/link";
import { Mark } from "@/components/mark";
import { MobileMenu } from "./mobile-menu";
import { LanguageSwitch } from "./language-switch";
import { nav, localizedPath, type Lang, type PageKey } from "@/shopware/content/copy";

export function Navbar({ lang, page }: { lang: Lang; page: PageKey }) {
  const t = nav[lang];
  const home = localizedPath(lang, "home");

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-cream/85 backdrop-blur-md">
      <div className="relative mx-auto flex h-18 max-w-6xl items-center justify-between px-6 py-3">
        <Link href={home} className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-xl bg-shopware text-white">
            <Mark className="size-4" />
          </span>
          <span className="font-display text-lg italic tracking-tight text-ink">
            santo.berlin
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {t.links.map((link) => (
            <Link
              key={link.href}
              href={`${home}${link.href}`}
              className="text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitch lang={lang} page={page} />
          <Link
            href={`${home}#kontakt`}
            className="inline-flex items-center rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-gold hover:text-ink"
          >
            {t.cta}
          </Link>
        </div>

        <MobileMenu lang={lang} page={page} />
      </div>
    </header>
  );
}
