import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowLeft } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });
  return { title: t("impressumTitle") };
}

export default async function ImpressumPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });

  return (
    <div className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-24">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        {t("back")}
      </Link>

      <h1 className="mt-8 text-3xl font-semibold tracking-tight">
        {t("impressumTitle")}
      </h1>

      <div className="prose mt-8 space-y-6 text-sm leading-relaxed text-foreground/90">
        <section>
          <h2 className="text-base font-semibold">
            Angaben gemäß § 5 TMG
          </h2>
          <p className="mt-2">
            Adsett &amp; Heilmann GbR
            <br />
            [Straße und Hausnummer]
            <br />
            [PLZ] Berlin
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold">Kontakt</h2>
          <p className="mt-2">
            Telefon: +49 30 23324319
            <br />
            E-Mail: hallo@santo.berlin
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold">Vertretungsberechtigte Gesellschafter</h2>
          <p className="mt-2">[Name der Gesellschafter]</p>
        </section>

        <section>
          <h2 className="text-base font-semibold">Umsatzsteuer-ID</h2>
          <p className="mt-2">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            <br />
            [USt-IdNr., falls vorhanden]
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p className="mt-2">[Name], Adsett &amp; Heilmann GbR, Anschrift wie oben</p>
        </section>

        <section>
          <h2 className="text-base font-semibold">EU-Streitschlichtung</h2>
          <p className="mt-2">
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:underline"
            >
              ec.europa.eu/consumers/odr
            </a>
            . Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>
      </div>
    </div>
  );
}
