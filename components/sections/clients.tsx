"use client";

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

export default function Clients() {
  return (
    <section className="bg-light-100 py-20 flex flex-col gap-10">
      <p className="text-center font-title text-2xl text-accent-500">
        #1 Trusted Partner for the GCC&apos;s Largest Financial Institutions
      </p>

      <div className="flex flex-col gap-6 w-full overflow-hidden">
        <InfiniteSlider speedOnHover={20} gap={32}>
          {clients.map((client) => (
            <LogoCard key={client.src} {...client} />
          ))}
        </InfiniteSlider>

        <InfiniteSlider speedOnHover={20} gap={32} reverse>
          {clients.map((client) => (
            <LogoCard key={`${client.src}-2`} {...client} />
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
}