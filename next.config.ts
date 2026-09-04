import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  async redirects() {
    return [
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
