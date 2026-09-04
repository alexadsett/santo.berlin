import { notFound } from "next/navigation";
import { Navbar } from "@/shopware/components/navbar";
import { Footer } from "@/shopware/components/footer";
import { Hero } from "@/shopware/components/hero";
import { About } from "@/shopware/components/about";
import { Services } from "@/shopware/components/services";
import { Process } from "@/shopware/components/process";
import { Pickware } from "@/shopware/components/pickware";
import { Location } from "@/shopware/components/location";
import { Faq } from "@/shopware/components/faq";
import { Contact } from "@/shopware/components/contact";
import { locales, type Lang } from "@/shopware/content/copy";

function isLang(value: string): value is Lang {
  return (locales as readonly string[]).includes(value);
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLang } = await params;
  if (!isLang(rawLang)) notFound();
  const lang = rawLang;

  return (
    <>
      <Navbar lang={lang} page="home" />
      <main id="main" className="flex-1">
        <Hero lang={lang} />
        <About lang={lang} />
        <Services lang={lang} />
        <Process lang={lang} />
        <Pickware lang={lang} />
        <Location lang={lang} />
        <Faq lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
