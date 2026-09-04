"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { LanguageSwitch } from "./language-switch";
import { nav, localizedPath, type Lang, type PageKey } from "@/shopware/content/copy";

export function MobileMenu({ lang, page }: { lang: Lang; page: PageKey }) {
  const [open, setOpen] = useState(false);
  const t = nav[lang];
  const home = localizedPath(lang, "home");

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? t.closeMenu : t.openMenu}
        aria-expanded={open}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full border-b border-line bg-cream px-6 pb-6 pt-2 shadow-[0_20px_30px_-20px_rgba(22,19,15,0.25)]">
          <nav className="flex flex-col divide-y divide-line">
            {t.links.map((link) => (
              <Link
                key={link.href}
                href={`${home}${link.href}`}
                onClick={() => setOpen(false)}
                className="py-4 text-base text-ink-muted hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-4">
            <LanguageSwitch lang={lang} page={page} />
          </div>
        </div>
      )}
    </div>
  );
}
