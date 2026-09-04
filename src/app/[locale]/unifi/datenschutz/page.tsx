import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { siteConfig } from "@/unifi/lib/site-config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "unifi.legal" });
  return { title: t("datenschutzTitle") };
}

export default async function DatenschutzPage({
  params,
}: PageProps<"/[locale]/unifi/datenschutz">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "unifi.legal" });
  const isDe = locale === "de";

  const sections = isDe
    ? [
        {
          title: "1. Verantwortlicher",
          body: `Verantwortlich für die Datenverarbeitung auf dieser Website ist ${siteConfig.legalName}, [Straße und Hausnummer einfügen], [PLZ] ${siteConfig.city}, ${siteConfig.country}, E-Mail: ${siteConfig.email}, Telefon: ${siteConfig.phone}.`,
        },
        {
          title: "2. Erhebung und Speicherung personenbezogener Daten",
          body: "Beim Aufruf unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Website gesendet (u. a. IP-Adresse, Datum und Uhrzeit der Anfrage, Browsertyp). Diese Daten werden temporär in einem Logfile gespeichert und dienen ausschließlich der technischen Bereitstellung und Sicherheit der Website.",
        },
        {
          title: "3. Kontaktaufnahme",
          body: "Wenn Sie uns per Kontaktformular, E-Mail, Telefon oder WhatsApp kontaktieren, werden Ihre Angaben zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO. Bei Kontakt über WhatsApp gelten zusätzlich die Datenschutzbestimmungen von WhatsApp/Meta.",
        },
        {
          title: "4. Hosting",
          body: "Diese Website wird bei Vercel Inc. gehostet. Anbieter ist Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. Die Nutzung erfolgt im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots (Art. 6 Abs. 1 lit. f DSGVO).",
        },
        {
          title: "5. Ihre Rechte",
          body: "Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten. Wenden Sie sich hierzu an die oben genannte Kontaktadresse.",
        },
        {
          title: "6. Änderungen dieser Datenschutzerklärung",
          body: "Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht.",
        },
      ]
    : [
        {
          title: "1. Data controller",
          body: `The controller responsible for data processing on this website is ${siteConfig.legalName}, [insert street and number], [insert postcode] ${siteConfig.city}, ${siteConfig.country}, email: ${siteConfig.email}, phone: ${siteConfig.phone}.`,
        },
        {
          title: "2. Collection and storage of personal data",
          body: "When you visit our website, your browser automatically sends information to our server (including IP address, date and time of the request, browser type). This data is temporarily stored in a log file and used solely to provide and secure the website.",
        },
        {
          title: "3. Contacting us",
          body: "If you contact us via the contact form, email, phone or WhatsApp, your details are stored in order to process your enquiry and for any follow-up questions. The legal basis is Art. 6 (1)(b) GDPR. If you contact us via WhatsApp, WhatsApp/Meta's own privacy policy also applies.",
        },
        {
          title: "4. Hosting",
          body: "This website is hosted with Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. This is done in the interest of a secure, fast and efficient provision of our online offering (Art. 6 (1)(f) GDPR).",
        },
        {
          title: "5. Your rights",
          body: "You have the right at any time to obtain information about, correct, delete or restrict the processing of your personal data, as well as the right to data portability and objection. Please contact us using the address above.",
        },
        {
          title: "6. Changes to this privacy policy",
          body: "We reserve the right to amend this privacy policy to ensure it always complies with current legal requirements.",
        },
      ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground">
        {t("datenschutzTitle")}
      </h1>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-base font-medium text-foreground">
              {section.title}
            </h2>
            <p className="mt-3">{section.body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
