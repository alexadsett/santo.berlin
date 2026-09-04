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
  return { title: t("impressumTitle") };
}

export default async function ImpressumPage({
  params,
}: PageProps<"/[locale]/unifi/impressum">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "unifi.legal" });
  const isDe = locale === "de";

  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground">
        {t("impressumTitle")}
      </h1>

      <div className="prose-invert mt-10 space-y-8 text-sm leading-relaxed text-muted">
        <section>
          <h2 className="text-base font-medium text-foreground">
            {isDe ? "Angaben gemäß § 5 TMG" : "Information pursuant to § 5 TMG"}
          </h2>
          <p className="mt-3">
            {siteConfig.legalName}
            <br />
            Alex Adsett, Tobias Heilmann
            <br />
            [Straße und Hausnummer einfügen]
            <br />
            [PLZ] {siteConfig.city}, {siteConfig.country}
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium text-foreground">
            {isDe ? "Kontakt" : "Contact"}
          </h2>
          <p className="mt-3">
            {isDe ? "Telefon" : "Phone"}: {siteConfig.phone}
            <br />
            E-Mail: {siteConfig.email}
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium text-foreground">
            {isDe
              ? "Umsatzsteuer-Identifikationsnummer"
              : "VAT Identification Number"}
          </h2>
          <p className="mt-3">
            {isDe
              ? "Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: [USt-IdNr. einfügen]"
              : "VAT ID according to §27 a German VAT Act: [insert VAT ID]"}
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium text-foreground">
            {isDe ? "Verantwortlich für den Inhalt" : "Responsible for content"}
          </h2>
          <p className="mt-3">
            {isDe
              ? "gemäß § 55 Abs. 2 RStV: Alex Adsett, Tobias Heilmann, Anschrift wie oben."
              : "pursuant to § 55 (2) RStV: Alex Adsett, Tobias Heilmann, address as above."}
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium text-foreground">
            {isDe ? "Streitschlichtung" : "Dispute resolution"}
          </h2>
          <p className="mt-3">
            {isDe
              ? "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen."
              : "The European Commission provides a platform for online dispute resolution (ODR): https://ec.europa.eu/consumers/odr/. We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board."}
          </p>
        </section>

        <p className="text-xs text-muted/70">
          {isDe
            ? "unifi.berlin und ubiquiti.berlin sind Marken von " +
              siteConfig.legalName +
              ", betrieben unter " +
              siteConfig.parentBrand +
              "."
            : "unifi.berlin and ubiquiti.berlin are brands of " +
              siteConfig.legalName +
              ", operated under " +
              siteConfig.parentBrand +
              "."}
        </p>
      </div>
    </div>
  );
}
