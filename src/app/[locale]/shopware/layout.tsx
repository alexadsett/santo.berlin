import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SITE_URL } from "@/lib/seo";
import { locales, localizedPath, siteDescription, type Lang } from "@/shopware/content/copy";

function isLang(value: string): value is Lang {
  return (locales as readonly string[]).includes(value);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLang } = await params;
  const lang: Lang = isLang(rawLang) ? rawLang : "de";
  const isDe = lang === "de";

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: "santo.berlin – Shopware Agentur & Pickware Partner in Berlin",
      template: "%s · santo.berlin",
    },
    description: siteDescription(lang),
    keywords: [
      "Shopware Agentur Berlin",
      "Pickware Partner",
      "Shopware Entwicklung",
      "E-Commerce Berlin",
      "Shopware Berlin",
    ],
    alternates: {
      canonical: localizedPath(lang, "home"),
      languages: {
        de: localizedPath("de", "home"),
        en: localizedPath("en", "home"),
      },
    },
    icons: {
      icon: "/-/shopware/icon.svg",
    },
    openGraph: {
      title: "santo.berlin – Shopware Agentur & Pickware Partner in Berlin",
      description: isDe
        ? "Onlineshops, ERP-Integrationen und individuelle Lösungen auf Shopware – entwickelt mitten in Berlin."
        : "Online stores, ERP integrations, and custom solutions on Shopware – built in the heart of Berlin.",
      url: localizedPath(lang, "home"),
      siteName: "santo.berlin",
      locale: isDe ? "de_DE" : "en_US",
      type: "website",
    },
  };
}

export default function ShopwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
