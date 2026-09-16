import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Skills } from "@/components/sections/skills";
import { Portfolio } from "@/components/sections/portfolio";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Portfolio />
      <Experience />
      <Education />
      <Contact />
    </>
  );
}
