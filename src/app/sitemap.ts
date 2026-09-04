import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { SITE_URL, localizedPath } from "@/lib/seo";

const PATHS = [
  "/",
  "/impressum",
  "/datenschutz",
  "/unifi",
  "/unifi/impressum",
  "/unifi/datenschutz",
  "/shopware",
  "/shopware/impressum",
  "/shopware/datenschutz",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map((path) => ({
    url: `${SITE_URL}${localizedPath(routing.defaultLocale, path)}`,
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [
          locale,
          `${SITE_URL}${localizedPath(locale, path)}`,
        ])
      ),
    },
  }));
}
