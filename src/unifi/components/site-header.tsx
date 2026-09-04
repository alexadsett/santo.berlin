"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/unifi/components/logo";
import { LocaleSwitcher } from "@/unifi/components/locale-switcher";
import { ThemeToggle } from "@/unifi/components/theme-toggle";

export function SiteHeader() {
  const t = useTranslations("unifi.nav");
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#services", label: t("services") },
    { href: "#process", label: t("process") },
    { href: "#about", label: t("about") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-surface-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/unifi" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <LocaleSwitcher />
          <a
            href="#contact"
            className="inline-flex items-center gap-1 rounded-full bg-accent px-4 py-2 text-sm font-medium text-on-accent transition-transform hover:scale-[1.03]"
          >
            {t("cta")}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-surface-border bg-background px-4 pb-6 md:hidden">
          <nav className="flex flex-col gap-4 pt-4 text-sm text-muted">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <LocaleSwitcher />
            </div>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-1 rounded-full bg-accent px-4 py-2 text-sm font-medium text-on-accent"
            >
              {t("cta")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
