import { notFound } from "next/navigation";
import { Hero } from "@/shopware/components/hero";
import { About } from "@/shopware/components/about";
import { Services } from "@/shopware/components/services";
import { Process } from "@/shopware/components/process";
import { Pickware } from "@/shopware/components/pickware";
import { References } from "@/shopware/components/references";
import { Location } from "@/shopware/components/location";
import { Faq } from "@/shopware/components/faq";
import { Contact } from "@/shopware/components/contact";
import { ShopwareJsonLd } from "@/shopware/components/json-ld";
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
      <ShopwareJsonLd lang={lang} />
      <Hero lang={lang} />
      <About lang={lang} />
      <Services lang={lang} />
      <Process lang={lang} />
      <Pickware lang={lang} />
      <References lang={lang} />
      <Location lang={lang} />
      <Faq lang={lang} />
      <Contact lang={lang} />
    </>
  );
}
