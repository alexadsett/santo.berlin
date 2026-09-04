import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/unifi/components/hero";
import { TrustBar } from "@/unifi/components/trust-bar";
import { ServicesGrid } from "@/unifi/components/services-grid";
import { ProcessSteps } from "@/unifi/components/process-steps";
import { WhyUs } from "@/unifi/components/why-us";
import { AboutSection } from "@/unifi/components/about-section";
import { ContactSection } from "@/unifi/components/contact-section";

export default async function HomePage({
  params,
}: PageProps<"/[locale]/unifi">) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <ProcessSteps />
      <WhyUs />
      <AboutSection />
      <ContactSection />
    </>
  );
}
