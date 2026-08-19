import type { Metadata } from "next";
import { routing } from "@/i18n/routing";

export const SITE_URL = "https://santo.berlin";

export function localizedPath(locale: string, path: string) {
  if (locale === routing.defaultLocale) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

export function buildAlternates(locale: string, path: string): Metadata["alternates"] {
  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, localizedPath(l, path)])
  );

  return {
    canonical: localizedPath(locale, path),
    languages: {
      ...languages,
      "x-default": localizedPath(routing.defaultLocale, path),
    },
  };
}
