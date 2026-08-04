"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "motion/react";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 56, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
};

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
    <div className="group relative flex h-16 w-32 items-center justify-center sm:h-20 sm:w-40">
      <div className="relative h-8 w-24 sm:h-12 sm:w-32">
        <Image
          src={src}
          alt={name}
          fill
          sizes="128px"
          className="object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-100"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-primary-800/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="px-2 text-center font-title text-sm text-light-100 sm:text-base">
          {name}
        </span>
      </div>
    </div>
  );
}

export default function Clients() {
  // Shuffled client-side after mount so both rows get an independent, varied
  // order without causing a server/client render mismatch on first paint.
  const [rowOne, setRowOne] = useState(clients);
  const [rowTwo, setRowTwo] = useState(clients);

  useEffect(() => {
    setRowOne(shuffle(clients));
    setRowTwo(shuffle(clients));
  }, []);

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
      className="flex flex-col gap-8 bg-light-200 pb-8 pt-14 sm:gap-10 sm:pt-20"
    >
      {/* Section heading */}
      <motion.div variants={item} className="flex flex-col gap-2 px-5 sm:px-6">
        <p className="text-center font-title text-sm font-semibold uppercase tracking-widest text-accent-600 sm:text-base">
          Trusted Partner
        </p>
        <p className="mx-auto max-w-xs text-center font-title text-sm tracking-widest text-dark-800 sm:max-w-none sm:text-base">
          #1 Trusted Partner for the GCC&apos;s Largest Financial Institutions
        </p>
      </motion.div>

      {/* Scrollers */}
      <motion.div
        variants={item}
        className="relative flex w-full flex-col gap-4 overflow-hidden sm:gap-6"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-light-200 to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-light-200 to-transparent sm:w-32" />

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
      </motion.div>
    </motion.section>
  );
}