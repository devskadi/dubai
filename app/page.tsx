import About from "@/components/sections/about";
import Clients from "@/components/sections/clients";
import Gallery from "@/components/sections/gallery";
import GlobalPresence from "@/components/sections/global-presence";
import Hero from "@/components/sections/hero";
import Intro from "@/components/sections/intro";
import Stats from "@/components/sections/stats";
import Team from "@/components/sections/team";

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <Intro />
      <Stats />
      <About />
      <Gallery />
      <GlobalPresence />
      <Team />
      {/* other sections go here */}
    </main>
  );
}