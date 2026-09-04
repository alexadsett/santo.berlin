import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SiteHeader } from "@/unifi/components/site-header";
import { SiteFooter } from "@/unifi/components/site-footer";
import { SITE_URL, buildAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "unifi.meta" });

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t("title"),
      template: `%s · unifi.berlin`,
    },
    description: t("description"),
    alternates: buildAlternates(locale, "/unifi"),
    icons: {
      icon: "/-/unifi/icon.svg",
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      siteName: "unifi.berlin",
      locale,
      type: "website",
    },
  };
}

export default function UnifiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="theme-unifi flex min-h-full flex-1 flex-col">
      <SiteHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
