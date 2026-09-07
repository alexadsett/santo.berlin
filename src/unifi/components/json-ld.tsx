import { getTranslations } from "next-intl/server";
import { SITE_URL } from "@/lib/seo";

export async function UnifiJsonLd({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "unifi" });
  const items = t.raw("services.items") as { title: string; description: string }[];

  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Netzwerkinstallation & IT-Infrastruktur",
    name: "unifi.berlin",
    url: `${SITE_URL}/unifi`,
    description: t("meta.description"),
    provider: {
      "@type": "ProfessionalService",
      name: "santo.berlin",
      url: SITE_URL,
      email: "hallo@santo.berlin",
      telephone: "+49-30-23324319",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Koppenstraße 79",
        postalCode: "10243",
        addressLocality: "Berlin",
        addressRegion: "Berlin",
        addressCountry: "DE",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Berlin",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "UniFi Leistungen",
      itemListElement: items.map((item) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: item.title,
          description: item.description,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
