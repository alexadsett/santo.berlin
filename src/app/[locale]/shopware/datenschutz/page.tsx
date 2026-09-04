import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/shopware/components/navbar";
import { Footer } from "@/shopware/components/footer";
import { LegalNotice } from "@/shopware/components/legal-notice";
import { Linkify } from "@/shopware/components/linkify";
import { locales, type Lang } from "@/shopware/content/copy";
import { datenschutz } from "@/shopware/content/legal";

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
  const t = datenschutz[lang];
  return { title: t.heading, description: t.metaDescription };
}

export default async function DatenschutzPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLang } = await params;
  if (!isLang(rawLang)) notFound();
  const lang = rawLang;
  const t = datenschutz[lang];

  return (
    <>
      <Navbar lang={lang} page="datenschutz" />
      <main id="main" className="flex-1">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <h1 className="font-display text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl">
            {t.heading}
          </h1>

          <div className="mt-8">
            <LegalNotice>{t.notice}</LegalNotice>
          </div>

          <div className="mt-14 space-y-12 text-ink-muted">
            {t.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-lg font-medium text-ink">{section.heading}</h2>
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i} className="mt-3 leading-relaxed whitespace-pre-line">
                    <Linkify text={paragraph} />
                  </p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer lang={lang} />
    </>
  );
}
