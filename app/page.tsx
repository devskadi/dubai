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
      {/* Spacer reserves one viewport-height of scroll room while Hero
          is pinned to the actual viewport beneath everything else. */}
      <div className="relative h-screen">
        <div className="fixed inset-0 z-0">
          <Hero />
        </div>
      </div>

      {/* Everything below scrolls over the pinned Hero, covering it. */}
      <div className="relative z-10">
        <Clients />
        <Opening />
        <About />
        <Services />
        <Bento />
        <Gallery />
        <Team />
        <Contact />
        {/* other sections go here */}
      </div>
    </main>
  );
}