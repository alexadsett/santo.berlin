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
  return { title: t("datenschutzTitle") };
}

export default async function DatenschutzPage({
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
        {t("datenschutzTitle")}
      </h1>

      <div className="prose mt-8 space-y-6 text-sm leading-relaxed text-foreground/90">
        <section>
          <h2 className="text-base font-semibold">Verantwortlicher</h2>
          <p className="mt-2">
            Adsett &amp; Heilmann GbR
            <br />
            Koppenstraße 79, 10243 Berlin
            <br />
            E-Mail: hallo@santo.berlin
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold">Hosting</h2>
          <p className="mt-2">
            Diese Website wird bei Vercel Inc., 340 S Lemon Ave #4133, Walnut,
            CA 91789, USA gehostet. Beim Aufruf der Seite verarbeitet Vercel
            technisch notwendige Server-Logdaten (u. a. IP-Adresse, Zeitpunkt
            der Anfrage, aufgerufene Seite) zur Bereitstellung und
            Absicherung der Website. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
            DSGVO (berechtigtes Interesse am sicheren und stabilen Betrieb).
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold">Kontaktaufnahme</h2>
          <p className="mt-2">
            Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten
            wir Ihre Angaben ausschließlich zur Bearbeitung Ihrer Anfrage und
            für eine mögliche Anschlusskommunikation. Rechtsgrundlage ist
            Art. 6 Abs. 1 lit. b bzw. f DSGVO.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold">Cookies</h2>
          <p className="mt-2">
            Es wird ein technisch notwendiges Cookie (<code>NEXT_LOCALE</code>)
            gesetzt, das Ihre gewählte Sprache (Deutsch/Englisch) speichert.
            Dieses Cookie ist zur Bereitstellung der von Ihnen gewählten
            Funktion erforderlich (§ 25 Abs. 2 Nr. 2 TTDSG) und bedarf keiner
            Einwilligung.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold">Google Analytics</h2>
          <p className="mt-2">
            Diese Website nutzt Google Analytics, einen Webanalysedienst der
            Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
            Irland (&quot;Google&quot;). Google Analytics verwendet Cookies,
            die eine Analyse der Benutzung dieser Website durch Sie
            ermöglichen (u. a. IP-Adresse (gekürzt), Geräte- und
            Browserinformationen, besuchte Seiten, Verweildauer). Diese
            Informationen werden an einen Server von Google, auch in die USA,
            übertragen und dort gespeichert.
          </p>
          <p className="mt-2">
            Google Analytics wird nur eingesetzt, wenn Sie über den
            Cookie-Hinweis auf dieser Website eingewilligt haben.
            Rechtsgrundlage ist in diesem Fall Ihre Einwilligung gemäß
            Art. 6 Abs. 1 lit. a DSGVO i. V. m. § 25 Abs. 1 TTDSG. Sie können
            Ihre Einwilligung jederzeit mit Wirkung für die Zukunft über die
            Cookie-Einstellungen im Seitenfooter widerrufen.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold">Ihre Rechte</h2>
          <p className="mt-2">
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung und
            Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
            sowie ein Recht auf Datenübertragbarkeit und Widerspruch.
            Wenden Sie sich dazu an hallo@santo.berlin. Außerdem besteht ein
            Beschwerderecht bei der zuständigen Datenschutzaufsichtsbehörde.
          </p>
        </section>
      </div>
    </div>
  );
}
