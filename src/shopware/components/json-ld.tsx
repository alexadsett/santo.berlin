import { SITE_URL } from "@/lib/seo";
import { services, siteDescription, type Lang } from "@/shopware/content/copy";

export function ShopwareJsonLd({ lang }: { lang: Lang }) {
  const items = services[lang].items;

  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Shopware Entwicklung & Pickware Integration",
    name: "shopware.berlin",
    url: `${SITE_URL}/shopware`,
    description: siteDescription(lang),
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
      name: "Shopware Leistungen",
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
