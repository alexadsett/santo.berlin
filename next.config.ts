import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // legal pages are consolidated to one canonical /impressum, /datenschutz —
      // these take priority over the general per-brand rules below.
      {
        source: "/impressum",
        has: [{ type: "host", value: "shopware.berlin" }],
        destination: "https://santo.berlin/impressum",
        permanent: true,
      },
      {
        source: "/datenschutz",
        has: [{ type: "host", value: "shopware.berlin" }],
        destination: "https://santo.berlin/datenschutz",
        permanent: true,
      },
      {
        source: "/en/impressum",
        has: [{ type: "host", value: "shopware.berlin" }],
        destination: "https://santo.berlin/en/impressum",
        permanent: true,
      },
      {
        source: "/en/datenschutz",
        has: [{ type: "host", value: "shopware.berlin" }],
        destination: "https://santo.berlin/en/datenschutz",
        permanent: true,
      },
      {
        source: "/de/impressum",
        has: [{ type: "host", value: "unifi.berlin" }],
        destination: "https://santo.berlin/impressum",
        permanent: true,
      },
      {
        source: "/de/datenschutz",
        has: [{ type: "host", value: "unifi.berlin" }],
        destination: "https://santo.berlin/datenschutz",
        permanent: true,
      },
      {
        source: "/en/impressum",
        has: [{ type: "host", value: "unifi.berlin" }],
        destination: "https://santo.berlin/en/impressum",
        permanent: true,
      },
      {
        source: "/en/datenschutz",
        has: [{ type: "host", value: "unifi.berlin" }],
        destination: "https://santo.berlin/en/datenschutz",
        permanent: true,
      },

      // shopware.berlin/* -> santo.berlin/shopware/*  (prefix scheme already matches)
      {
        source: "/:path*",
        has: [{ type: "host", value: "shopware.berlin" }],
        destination: "https://santo.berlin/shopware/:path*",
        permanent: true,
      },

      // unifi.berlin -> santo.berlin/unifi  (always-prefixed -> as-needed)
      {
        source: "/",
        has: [{ type: "host", value: "unifi.berlin" }],
        destination: "https://santo.berlin/unifi",
        permanent: true,
      },
      {
        source: "/de/:path*",
        has: [{ type: "host", value: "unifi.berlin" }],
        destination: "https://santo.berlin/unifi/:path*",
        permanent: true,
      },
      {
        source: "/en/:path*",
        has: [{ type: "host", value: "unifi.berlin" }],
        destination: "https://santo.berlin/en/unifi/:path*",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
