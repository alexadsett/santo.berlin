export const locales = ["de", "en"] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = "de";

export type PageKey = "home" | "impressum" | "datenschutz";

function pathFor(lang: Lang, page: PageKey) {
  const suffix =
    page === "home" ? "" : page === "impressum" ? "/impressum" : "/datenschutz";
  return lang === defaultLang
    ? `/shopware${suffix}`
    : `/en/shopware${suffix}`;
}

export function localizedPath(lang: Lang, page: PageKey) {
  return pathFor(lang, page);
}

export const nav = {
  de: {
    links: [
      { href: "#ueber-uns", label: "Über uns" },
      { href: "#leistungen", label: "Leistungen" },
      { href: "#pickware-partner", label: "Pickware Partner" },
      { href: "#faq", label: "FAQ" },
      { href: "#kontakt", label: "Kontakt" },
    ],
    cta: "Projekt anfragen",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    switchTo: "EN",
    switchLabel: "Auf Englisch anzeigen",
  },
  en: {
    links: [
      { href: "#ueber-uns", label: "About" },
      { href: "#leistungen", label: "Services" },
      { href: "#pickware-partner", label: "Pickware Partner" },
      { href: "#faq", label: "FAQ" },
      { href: "#kontakt", label: "Contact" },
    ],
    cta: "Start a project",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchTo: "DE",
    switchLabel: "Show in German",
  },
};

export const hero = {
  de: {
    eyebrow: "Shopware Agentur · Berlin Friedrichshain",
    titleStart: "Onlineshops, die",
    titleEmphasis: "verkaufen",
    titleEnd: "— und Systeme, die mitdenken.",
    body: "santo.berlin entwickelt Onlineshops auf Shopware und verbindet sie als zertifizierter Pickware Partner mit einer durchgängigen Warenwirtschaft – Shop, Lager und Buchhaltung, die von der ersten Idee bis zum täglichen Betrieb zusammenspielen.",
    ctaPrimary: "Projekt anfragen",
    ctaSecondary: "Leistungen ansehen",
    badge1: "Zertifizierter Pickware Partner",
    badge2: "Spezialisiert auf Shopware",
    mock: {
      badge: "Shop · Live",
      statsProducts: "128 Produkte",
      statsGrowth: "+18 % ggü. Vorwoche",
      syncLabel: "Lagerbestand synchronisiert",
    },
  },
  en: {
    eyebrow: "Shopware Agency · Berlin Friedrichshain",
    titleStart: "Online stores that",
    titleEmphasis: "sell",
    titleEnd: "— and systems that think ahead.",
    body: "santo.berlin builds online stores on Shopware and, as a certified Pickware partner, connects them to a seamless inventory system – shop, warehouse, and accounting working together from the first idea to daily operations.",
    ctaPrimary: "Start a project",
    ctaSecondary: "See our services",
    badge1: "Certified Pickware partner",
    badge2: "Specialized in Shopware",
    mock: {
      badge: "Store · Live",
      statsProducts: "128 products",
      statsGrowth: "+18% vs. last week",
      syncLabel: "Inventory synced",
    },
  },
};

export const heroProducts = [
  { icon: "Shirt", price: 49 },
  { icon: "Headphones", price: 89 },
  { icon: "Watch", price: 129 },
  { icon: "Backpack", price: 35 },
  { icon: "Gem", price: 199 },
  { icon: "Lamp", price: 59 },
] as const;

export function formatPrice(amount: number, lang: Lang) {
  return lang === "de" ? `${amount} €` : `€${amount}`;
}

export function siteDescription(lang: Lang) {
  return lang === "de"
    ? "santo.berlin ist eine Shopware Agentur mitten in Berlin. Als zertifizierter Pickware Partner entwickeln wir Onlineshops, ERP-Integrationen und individuelle Lösungen auf Shopware."
    : "santo.berlin is a Shopware agency in the heart of Berlin. As a certified Pickware partner, we build online stores, ERP integrations, and custom solutions on Shopware.";
}

export const about = {
  de: {
    eyebrow: "Über uns",
    title: "Ein Berliner Team für Shopware.",
    body: [
      "santo.berlin ist eine Agentur für E-Commerce, die sich ganz auf Shopware konzentriert. Statt vieler Baukästen setzen wir auf ein System, das wir bis in die letzte Ecke kennen – und ergänzen es um Pickware, wenn Warenwirtschaft, Versand und Buchhaltung mit dem Shop verschmelzen sollen.",
      "Wir arbeiten mit kurzen Wegen: von der ersten Skizze über Design und Entwicklung bis zum Go-live betreut euch dasselbe Team. Das hält Projekte übersichtlich – und Shops schnell, stabil und gut zu bedienen.",
    ],
    stats: [
      { label: "Fokus", value: "Shopware", detail: "Entwicklung, Migration & Relaunch" },
      { label: "Partner", value: "Pickware", detail: "Zertifizierte Integration & Support", pickware: true },
      { label: "Standort", value: "Berlin", detail: "Koppenstraße 79, 10243 Berlin", maps: true },
    ],
  },
  en: {
    eyebrow: "About us",
    title: "A Berlin team for Shopware.",
    body: [
      "santo.berlin is an e-commerce agency fully focused on Shopware. Instead of juggling a dozen platforms, we go deep on one system we know inside out – and extend it with Pickware whenever inventory, shipping, and accounting need to merge with the shop.",
      "We work with short paths: the same team stays with you from the first sketch through design and development to go-live. That keeps projects easy to follow – and shops fast, stable, and a pleasure to use.",
    ],
    stats: [
      { label: "Focus", value: "Shopware", detail: "Development, migration & relaunch" },
      { label: "Partner", value: "Pickware", detail: "Certified integration & support", pickware: true },
      { label: "Location", value: "Berlin", detail: "Koppenstraße 79, 10243 Berlin", maps: true },
    ],
  },
};

export const services = {
  de: {
    eyebrow: "Leistungen",
    title: "Alles rund um euren Shopware-Shop.",
    subtitle: "Ein Team, ein Ansprechpartner – von der ersten Idee bis zum laufenden Betrieb.",
    items: [
      {
        title: "Shopware Entwicklung",
        description: "Individuelle Onlineshops auf Shopware – von der Konzeption über das Design bis zur technischen Umsetzung.",
        details: [
          "Konzeption & Informationsarchitektur",
          "Individuelles Design & UX",
          "Technische Umsetzung & Testing",
        ],
      },
      {
        title: "Pickware Integration",
        description: "Lagerverwaltung, Versand und Buchhaltung direkt im Shop – wir richten Pickware passgenau für euren Betrieb ein.",
        pickware: true,
        details: [
          "Lagerverwaltung & Bestandsführung",
          "Versand direkt aus dem Shop",
          "Automatisierte Buchhaltung",
        ],
      },
      {
        title: "Migration & Relaunch",
        description: "Umzug von einem bestehenden System auf Shopware, sauber geplant und ohne Umsatzeinbußen im laufenden Betrieb.",
        details: [
          "Datenübernahme ohne Verluste",
          "SEO-sicherer Umzug inkl. Redirects",
          "Umsetzung ohne Downtime",
        ],
      },
      {
        title: "Plugins & Individualentwicklung",
        description: "Maßgeschneiderte Erweiterungen für Prozesse, die Standard-Plugins nicht abdecken.",
        details: [
          "Individuelle Funktionen",
          "Anbindung an interne Prozesse",
          "Wartbare, dokumentierte Lösungen",
        ],
      },
      {
        title: "Schnittstellen & ERP",
        description: "Anbindung von Warenwirtschaft, Marktplätzen und Zahlungsdienstleistern an euren Shopware-Shop.",
        details: [
          "Warenwirtschaft & ERP-Anbindung",
          "Marktplatz-Integrationen (Amazon, eBay …)",
          "Zahlungsdienstleister-Anbindung",
        ],
      },
      {
        title: "Betreuung & Support",
        description: "Laufende Pflege, Updates und ein Ansprechpartner, wenn im Tagesgeschäft schnell Hilfe gebraucht wird.",
        details: [
          "Laufende Updates & Sicherheits-Patches",
          "Monitoring & Performance",
          "Fester Ansprechpartner",
        ],
      },
    ],
  },
  en: {
    eyebrow: "Services",
    title: "Everything around your Shopware store.",
    subtitle: "One team, one point of contact – from the first idea to daily operations.",
    items: [
      {
        title: "Shopware Development",
        description: "Custom online stores built on Shopware – from concept through design to technical implementation.",
        details: [
          "Concept & information architecture",
          "Custom design & UX",
          "Technical implementation & testing",
        ],
      },
      {
        title: "Pickware Integration",
        description: "Warehouse management, shipping, and accounting built right into the shop – we set up Pickware to fit your operations exactly.",
        pickware: true,
        details: [
          "Warehouse management & stock control",
          "Shipping straight from the shop",
          "Automated accounting",
        ],
      },
      {
        title: "Migration & Relaunch",
        description: "Moving from an existing system to Shopware, carefully planned with no lost revenue while your shop stays live.",
        details: [
          "Data migration without losses",
          "SEO-safe move, redirects included",
          "Zero-downtime rollout",
        ],
      },
      {
        title: "Plugins & Custom Development",
        description: "Bespoke extensions for processes that off-the-shelf plugins simply don't cover.",
        details: [
          "Purpose-built functionality",
          "Hooks into your internal processes",
          "Maintainable, documented solutions",
        ],
      },
      {
        title: "Integrations & ERP",
        description: "Connecting inventory systems, marketplaces, and payment providers to your Shopware store.",
        details: [
          "Inventory & ERP integration",
          "Marketplace integrations (Amazon, eBay …)",
          "Payment provider integration",
        ],
      },
      {
        title: "Support & Maintenance",
        description: "Ongoing maintenance, updates, and a single point of contact for when you need fast help in daily business.",
        details: [
          "Ongoing updates & security patches",
          "Monitoring & performance",
          "One dedicated point of contact",
        ],
      },
    ],
  },
};

export const process = {
  de: {
    eyebrow: "Ablauf",
    title: "So arbeiten wir zusammen.",
    subtitle: "Ein klarer Ablauf von der ersten Anfrage bis zum laufenden Betrieb – ohne Überraschungen.",
    steps: [
      {
        title: "Erstgespräch & Analyse",
        description: "Wir hören zu: Ziele, bestehende Systeme und was euer Shop wirklich leisten muss.",
        duration: "30–60 Minuten",
        details: [
          "Ziele und Anforderungen klären",
          "Bestandsaufnahme bestehender Systeme",
          "Erste Einschätzung zu Umfang und Zeitrahmen",
        ],
      },
      {
        title: "Konzept & Design",
        description: "Struktur, User Experience und Design – abgestimmt auf eure Marke und eure Kund:innen.",
        duration: "1–2 Wochen",
        details: [
          "Struktur & Informationsarchitektur",
          "Design-Entwürfe abgestimmt auf eure Marke",
          "Freigabe vor Entwicklungsstart",
        ],
      },
      {
        title: "Entwicklung & Integration",
        description: "Umsetzung in Shopware, inklusive Pickware- und Systemanbindungen, mit regelmäßigen Zwischenständen.",
        duration: "2–8 Wochen, je nach Umfang",
        details: [
          "Umsetzung in Shopware",
          "Pickware- und Systemanbindungen",
          "Regelmäßige Zwischenstände zum Testen",
        ],
      },
      {
        title: "Launch & Betreuung",
        description: "Sauberer Go-live und danach ein Team, das erreichbar bleibt – für Updates, Fragen und Weiterentwicklung.",
        duration: "Laufend",
        details: [
          "Sauberer Go-live ohne Downtime",
          "Laufende Wartung und Updates",
          "Fester Ansprechpartner für Weiterentwicklung",
        ],
      },
    ],
  },
  en: {
    eyebrow: "Process",
    title: "How we work together.",
    subtitle: "A clear path from first contact to daily operations – no surprises.",
    steps: [
      {
        title: "Discovery & analysis",
        description: "We start by listening: your goals, existing systems, and what your shop actually needs to do.",
        duration: "30–60 minutes",
        details: [
          "Clarify goals and requirements",
          "Review of existing systems",
          "Initial read on scope and timeline",
        ],
      },
      {
        title: "Concept & design",
        description: "Structure, user experience, and design – tailored to your brand and your customers.",
        duration: "1–2 weeks",
        details: [
          "Structure & information architecture",
          "Design drafts tailored to your brand",
          "Sign-off before development starts",
        ],
      },
      {
        title: "Development & integration",
        description: "Built in Shopware, including Pickware and system integrations, with regular check-ins along the way.",
        duration: "2–8 weeks, depending on scope",
        details: [
          "Built in Shopware",
          "Pickware and system integrations",
          "Regular check-ins to test progress",
        ],
      },
      {
        title: "Launch & support",
        description: "A clean go-live, and a team that stays reachable afterwards – for updates, questions, and further development.",
        duration: "Ongoing",
        details: [
          "Clean go-live, zero downtime",
          "Ongoing maintenance and updates",
          "One dedicated contact for further development",
        ],
      },
    ],
  },
};

export const pickware = {
  de: {
    badge: "Zertifizierter Partner",
    titleStart: "Offizieller",
    titleEmphasis: "Pickware",
    titleEnd: "Partner",
    body: "Als zertifizierter Pickware Partner verbinden wir euren Shopware-Shop mit einer Warenwirtschaft, die im Alltag wirklich trägt: Lagerbestände, Versand und Buchhaltung in einem System – betreut von einem Team, das Pickware von innen kennt.",
    points: [
      "Einrichtung von Lager, Versand und Bestandsführung direkt in Shopware",
      "Anbindung an Buchhaltung und Rechnungsstellung",
      "Laufende Betreuung und Updates durch ein zertifiziertes Team",
    ],
  },
  en: {
    badge: "Certified partner",
    titleStart: "Official",
    titleEmphasis: "Pickware",
    titleEnd: "partner",
    body: "As a certified Pickware partner, we connect your Shopware store to an inventory system that actually holds up in daily business: stock, shipping, and accounting in one system – supported by a team that knows Pickware inside out.",
    points: [
      "Setting up warehouse, shipping, and stock management directly in Shopware",
      "Integration with accounting and invoicing",
      "Ongoing support and updates from a certified team",
    ],
  },
};

export const faq = {
  de: {
    eyebrow: "Häufige Fragen",
    title: "Fragen, die uns oft gestellt werden.",
    items: [
      {
        question: "Wie lange dauert ein Shopware-Projekt?",
        answer: "Je nach Umfang zwischen sechs Wochen für einen fokussierten Relaunch und mehreren Monaten für komplexe Individualprojekte. Nach dem Erstgespräch bekommt ihr einen realistischen Zeitplan.",
      },
      {
        question: "Übernehmt ihr auch bestehende Shops und Migrationen?",
        answer: "Ja. Wir migrieren bestehende Shops – auch von anderen Systemen – sauber nach Shopware, ohne dass der laufende Betrieb darunter leidet.",
      },
      {
        question: "Was kostet ein Shopware-Shop bei euch?",
        answer: "Das hängt vom Umfang ab. Nach einem kurzen Erstgespräch bekommt ihr ein transparentes Angebot, ohne versteckte Kosten.",
      },
      {
        question: "Was ist Pickware und brauche ich das?",
        answer: "Pickware verbindet Lagerverwaltung, Versand und Buchhaltung direkt mit eurem Shop. Sinnvoll, sobald ihr diese Prozesse nicht mehr manuell oder über mehrere Tools pflegen wollt.",
      },
      {
        question: "Bietet ihr auch laufenden Support nach dem Launch?",
        answer: "Ja, wir betreuen Shops langfristig – von Updates über neue Features bis zu schnellem Support im Tagesgeschäft.",
      },
      {
        question: "Arbeitet ihr nur mit Berliner Kund:innen?",
        answer: "Unser Studio ist in Berlin, aber wir betreuen Kund:innen überregional. Persönliche Termine sind vor Ort natürlich auch möglich.",
      },
    ],
  },
  en: {
    eyebrow: "FAQ",
    title: "Questions we hear a lot.",
    items: [
      {
        question: "How long does a Shopware project take?",
        answer: "Depending on scope, anywhere from six weeks for a focused relaunch to several months for complex custom projects. After our first call, you'll get a realistic timeline.",
      },
      {
        question: "Do you take over existing shops and handle migrations?",
        answer: "Yes. We migrate existing shops – including from other platforms – cleanly onto Shopware, without disrupting your day-to-day business.",
      },
      {
        question: "What does a Shopware shop with you cost?",
        answer: "It depends on scope. After a short first conversation, you'll get a transparent quote with no hidden costs.",
      },
      {
        question: "What is Pickware, and do I need it?",
        answer: "Pickware connects warehouse management, shipping, and accounting directly to your shop. It's worth it once you no longer want to manage those processes manually or across several separate tools.",
      },
      {
        question: "Do you offer ongoing support after launch?",
        answer: "Yes, we support shops long-term – from updates and new features to fast support for day-to-day issues.",
      },
      {
        question: "Do you only work with clients in Berlin?",
        answer: "Our studio is based in Berlin, but we support clients across the country. In-person meetings are of course also possible locally.",
      },
    ],
  },
};

export const location = {
  de: {
    eyebrow: "Standort",
    title: "Mitten in Berlin zuhause.",
    body: "Unser Studio liegt in der Koppenstraße 79, 10243 Berlin. Persönliche Termine vor Ort, kurze Wege und ein Team, das für Rückfragen erreichbar ist – kein anonymes Ticketsystem.",
    badge: "Berlin Friedrichshain",
  },
  en: {
    eyebrow: "Location",
    title: "At home in the middle of Berlin.",
    body: "Our studio is at Koppenstraße 79, 10243 Berlin. In-person meetings, short distances, and a team that's reachable when you have questions – no anonymous ticket system.",
    badge: "Berlin Friedrichshain",
  },
};

export const contact = {
  de: {
    eyebrow: "Kontakt",
    title: "Lasst uns über euren Shop sprechen.",
    body: "Ob neuer Shop, Relaunch oder Pickware-Integration – schreibt uns, wir melden uns innerhalb von zwei Werktagen.",
  },
  en: {
    eyebrow: "Contact",
    title: "Let's talk about your shop.",
    body: "Whether it's a new shop, a relaunch, or a Pickware integration – get in touch, and we'll get back to you within two business days.",
  },
};

export const footer = {
  de: {
    description: "Shopware Agentur und zertifizierter Pickware Partner mitten in Berlin. Wir entwickeln Onlineshops, die verkaufen – und Warenwirtschaft, die mitdenkt.",
    navHeading: "Navigation",
    legalHeading: "Rechtliches",
    impressum: "Impressum",
    datenschutz: "Datenschutz",
    cookieSettings: "Cookie-Einstellungen",
    cityLabel: "Berlin Friedrichshain",
    copyright: (year: number) => `© ${year} santo.berlin – Alle Rechte vorbehalten.`,
    tagline: "Shopware Agentur · Pickware Partner · Berlin",
  },
  en: {
    description: "Shopware agency and certified Pickware partner right in the heart of Berlin. We build online stores that sell – and inventory systems that think ahead.",
    navHeading: "Navigation",
    legalHeading: "Legal",
    impressum: "Legal Notice",
    datenschutz: "Privacy Policy",
    cookieSettings: "Cookie settings",
    cityLabel: "Berlin Friedrichshain",
    copyright: (year: number) => `© ${year} santo.berlin – All rights reserved.`,
    tagline: "Shopware Agency · Pickware Partner · Berlin",
  },
};

export const cookie = {
  de: {
    text: "Wir verwenden nur technisch notwendige Cookies bzw. lokalen Speicher, um diese Auswahl zu merken. Aktuell setzen wir keine Analyse- oder Marketing-Cookies ein. Details dazu in unserer",
    linkLabel: "Datenschutzerklärung",
    accept: "Alle akzeptieren",
    necessary: "Nur notwendige",
  },
  en: {
    text: "We only use technically necessary cookies (or local storage) to remember this choice. We currently don't use any analytics or marketing cookies. See our",
    linkLabel: "privacy policy",
    accept: "Accept all",
    necessary: "Necessary only",
  },
};
