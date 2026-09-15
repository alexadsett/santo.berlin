import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

// unifi.berlin and ubiquiti.berlin are both aliases for the /unifi section
// (always-prefixed locale scheme -> as-needed), so they share the same rules.
function unifiHostRedirects(host: string) {
  return [
    {
      source: "/de/impressum",
      has: [{ type: "host" as const, value: host }],
      destination: "https://www.santo.berlin/impressum",
      permanent: true,
    },
    {
      source: "/de/datenschutz",
      has: [{ type: "host" as const, value: host }],
      destination: "https://www.santo.berlin/datenschutz",
      permanent: true,
    },
    {
      source: "/en/impressum",
      has: [{ type: "host" as const, value: host }],
      destination: "https://www.santo.berlin/en/impressum",
      permanent: true,
    },
    {
      source: "/en/datenschutz",
      has: [{ type: "host" as const, value: host }],
      destination: "https://www.santo.berlin/en/datenschutz",
      permanent: true,
    },
    {
      source: "/",
      has: [{ type: "host" as const, value: host }],
      destination: "https://www.santo.berlin/unifi",
      permanent: true,
    },
    {
      source: "/de/:path*",
      has: [{ type: "host" as const, value: host }],
      destination: "https://www.santo.berlin/unifi/:path*",
      permanent: true,
    },
    {
      source: "/en/:path*",
      has: [{ type: "host" as const, value: host }],
      destination: "https://www.santo.berlin/en/unifi/:path*",
      permanent: true,
    },
  ];
}

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // leftover URLs from the old Squarespace site, still indexed by Google —
      // redirect to their modern equivalents instead of 404ing.
      {
        source: "/dienstleistungen",
        destination: "/#leistungen",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/en#kontakt",
        permanent: true,
      },

      // legal pages are consolidated to one canonical /impressum, /datenschutz —
      // these take priority over the general per-brand rules below.
      {
        source: "/impressum",
        has: [{ type: "host", value: "shopware.berlin" }],
        destination: "https://www.santo.berlin/impressum",
        permanent: true,
      },
      {
        source: "/datenschutz",
        has: [{ type: "host", value: "shopware.berlin" }],
        destination: "https://www.santo.berlin/datenschutz",
        permanent: true,
      },
      {
        source: "/en/impressum",
        has: [{ type: "host", value: "shopware.berlin" }],
        destination: "https://www.santo.berlin/en/impressum",
        permanent: true,
      },
      {
        source: "/en/datenschutz",
        has: [{ type: "host", value: "shopware.berlin" }],
        destination: "https://www.santo.berlin/en/datenschutz",
        permanent: true,
      },
      ...unifiHostRedirects("unifi.berlin"),
      ...unifiHostRedirects("ubiquiti.berlin"),

      // shopware.berlin/* -> www.santo.berlin/shopware/*  (prefix scheme already matches)
      {
        source: "/:path*",
        has: [{ type: "host", value: "shopware.berlin" }],
        destination: "https://www.santo.berlin/shopware/:path*",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
