import { Hero } from "@/components/sections/hero";
import { Brands } from "@/components/sections/brands";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Brands />
      <Process />
      <About />
      <Contact />
    </>
  );
}
