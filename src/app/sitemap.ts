import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { SITE_URL, localizedPath } from "@/lib/seo";

const PATHS = ["/", "/impressum", "/datenschutz"];

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
