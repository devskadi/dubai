import About from "@/components/sections/about";
import Clients from "@/components/sections/clients";
import Gallery from "@/components/sections/gallery";
import Hero from "@/components/sections/hero";
import Intro from "@/components/sections/intro";
import Stats from "@/components/sections/stats";

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <Intro />
      <Stats />
      <About />
      <Gallery />
      {/* other sections go here */}
    </main>
  );
}