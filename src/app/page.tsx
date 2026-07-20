import { Hero } from "@/components/sections/hero";
import { BusinessBrain } from "@/components/sections/business-brain";
import { Workforce } from "@/components/sections/workforce";
import { Pricing } from "@/components/sections/pricing";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessBrain />
      <Workforce />
      <Pricing />
      <About />
      <Contact />
    </>
  );
}
