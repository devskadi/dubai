import Bento from "@/components/sections/bento";
import Clients from "@/components/sections/clients";
import Gallery from "@/components/sections/gallery";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Team from "@/components/sections/team";
import Contact from "@/components/sections/contact";
import Opening from "@/components/sections/intro";
import Services from "@/components/sections/services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <Opening />
      <About />
      <Services />
      <Bento />
      <Gallery />
      <Team />
      <Contact />
      {/* other sections go here */}
    </main>
  );
}