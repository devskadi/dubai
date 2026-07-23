import About from "@/components/sections/about";
import Clients from "@/components/sections/clients";
import Hero from "@/components/sections/hero";
import Stats from "@/components/sections/stats";

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <Stats />
      <About />
      {/* other sections go here */}
    </main>
  );
}