"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Mark } from "@/components/mark";
import { ThemeToggle } from "@/components/theme-toggle";
import { LocaleSwitch } from "@/components/locale-switch";

export function SiteHeader() {
  const t = useTranslations("nav");
  const tTheme = useTranslations("theme");
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#leistungen", label: t("services") },
    { href: "#marken", label: t("brands") },
    { href: "#ablauf", label: t("process") },
    { href: "#ueber-uns", label: t("about") },
    { href: "#kontakt", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight text-foreground"
        >
          <span className="flex size-8 items-center justify-center rounded-full bg-accent text-accent-foreground">
            <Mark className="size-4" />
          </span>
          santo.berlin
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-foreground/70 lg:flex">
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

        <div className="hidden items-center gap-3 lg:flex">
          <LocaleSwitch />
          <ThemeToggle
            labels={{
              theme: tTheme("theme"),
              light: tTheme("light"),
              dark: tTheme("dark"),
              system: tTheme("system"),
            }}
          />
          <a
            href="#kontakt"
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            {t("cta")}
          </a>
        </div>

        <button
          type="button"
          className="flex size-9 items-center justify-center rounded-full border border-border lg:hidden"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-4 text-sm font-medium text-foreground/80">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex items-center justify-between gap-3">
            <LocaleSwitch />
            <ThemeToggle
              labels={{
                theme: tTheme("theme"),
                light: tTheme("light"),
                dark: tTheme("dark"),
                system: tTheme("system"),
              }}
            />
          </div>
          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-accent px-4 py-2.5 text-center text-sm font-semibold text-accent-foreground"
          >
            {t("cta")}
          </a>
        </div>
      )}
    </header>
  );
}
