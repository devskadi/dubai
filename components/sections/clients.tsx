"use client";

import { useEffect, useState } from "react";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";

const clients = [
  { name: "Dubai Islamic Bank", src: "/clients/dubaiislamicbank.png" },
  { name: "Metrobank", src: "/clients/metrobank.png" },
  { name: "Gulf International Bank", src: "/clients/gulf.png" },
  { name: "BDO", src: "/clients/bdo.png" },
  { name: "HSBC", src: "/clients/hsbc.png" },
  { name: "Maybank", src: "/clients/maybank.png" },
  { name: "Chinabank", src: "/clients/chinabank.png" },
  { name: "Emirates Islamic", src: "/clients/emiratesislamic.png" },
  { name: "Emirates NBD", src: "/clients/emiratesnbd.png" },
  { name: "PSBank", src: "/clients/psbank.png" },
  { name: "Eastwest", src: "/clients/eastwest.png" },
];

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function LogoCard({ name, src }: { name: string; src: string }) {
  return (
    <div className="group relative flex h-20 w-40 items-center justify-center">
      <img
        src={src}
        alt={name}
        className="max-h-12 w-auto max-w-32 object-contain opacity-80 transition-all duration-300 group-hover:opacity-100"
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-primary-800/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="font-title text-base text-light-100 text-center px-2">
          {name}
        </span>
      </div>
    </div>
  );
}
{/* Shuffle the client logos*/}
export default function Clients() {
  const [rowOne, setRowOne] = useState(clients);
  const [rowTwo, setRowTwo] = useState(clients);

  useEffect(() => {
    setRowOne(shuffle(clients));
    setRowTwo(shuffle(clients));
  }, []);

  return (
    <section className="bg-light-200 pb-8 flex pt-20 flex-col gap-10">
    
      {/* Section heading */}
      <div className="flex flex-col gap-2">
        <p className="text-center font-title font-semibold uppercase text-base tracking-widest text-accent-600">
          Trusted Partner
        </p>
        <p className="text-center font-title text-base tracking-widest text-dark-800">
          #1 Trusted Partner for the GCC's Largest Financial Institutions
        </p>
      </div>

      {/* Scrollers */}
      <div className="relative flex flex-col gap-6 w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-linear-to-r from-light-200 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-linear-to-l from-light-200 to-transparent" />

        <InfiniteSlider speed={40} speedOnHover={20} gap={32}>
          {rowOne.map((client) => (
            <LogoCard key={client.src} {...client} />
          ))}
        </InfiniteSlider>

        <InfiniteSlider speed={40} speedOnHover={20} gap={32} reverse>
          {rowTwo.map((client) => (
            <LogoCard key={`${client.src}-2`} {...client} />
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
}