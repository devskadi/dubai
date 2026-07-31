import About from "@/components/sections/about";
import Clients from "@/components/sections/clients";
import Gallery from "@/components/sections/gallery";
import GlobalPresence from "@/components/sections/global-presence";
import Hero from "@/components/sections/hero";
import Intro from "@/components/sections/intro";
import Team from "@/components/sections/team";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <Intro />
      <About />
      <Gallery />
      <GlobalPresence />
      <Team />
      <Contact />
      {/* other sections go here */}
    </main>
  );
}