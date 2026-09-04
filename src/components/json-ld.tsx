import { SITE_URL } from "@/lib/seo";

const data = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "santo.berlin",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
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
  areaServed: {
    "@type": "City",
    name: "Berlin",
  },
  description:
    "Digitale Infrastruktur aus einer Hand: Onlineshops, Netzwerke und digitale Systeme für Unternehmen in Berlin.",
  department: [
    {
      "@type": "ProfessionalService",
      name: "unifi.berlin",
      url: `${SITE_URL}/unifi`,
      description:
        "Zertifizierter Ubiquiti-Partner: WLAN, Videoüberwachung, Zugangskontrolle und Telefonie.",
    },
    {
      "@type": "ProfessionalService",
      name: "shopware.berlin",
      url: `${SITE_URL}/shopware`,
      description:
        "Shopware-Onlineshops mit Pickware-Integration für Warenwirtschaft, Versand und Buchhaltung.",
    },
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
