"use client";

import { motion, type Variants } from "motion/react";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const rowOneImages = [
  { label: "Reception", image: "/images/ph-office-1.png" },
  { label: "Operations floor", image: "/images/ph-office-2.jpeg" },
  { label: "Meeting pods", image: "/images/ph-office-3.jpeg" },
  { label: "Team lounge", image: "/images/ph-office-4.jpeg" },
  { label: "Reception", image: "/images/ph-office-1.png" },
  { label: "Operations floor", image: "/images/ph-office-2.jpeg" },
  { label: "Meeting pods", image: "/images/ph-office-3.jpeg" },
  { label: "Team lounge", image: "/images/ph-office-4.jpeg" },
];

const rowTwoImages = [
  { label: "Secure data room", image: "/images/ph-office-4.jpeg" },
  { label: "Team lounge", image: "/images/ph-office-3.jpeg" },
  { label: "Meeting pods", image: "/images/ph-office-2.jpeg" },
  { label: "Reception", image: "/images/ph-office-1.png" },
  { label: "Secure data room", image: "/images/ph-office-4.jpeg" },
  { label: "Team lounge", image: "/images/ph-office-3.jpeg" },
  { label: "Meeting pods", image: "/images/ph-office-2.jpeg" },
  { label: "Reception", image: "/images/ph-office-1.png" },
];

function FacilityCard({ label, image }: { label: string; image: string }) {
  return (
    <div className="group relative aspect-4/3 w-64 shrink-0 overflow-hidden rounded-3xl">
      <img
        src={image}
        alt={label}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-dark-900/80 to-transparent" />
      <span className="absolute bottom-6 left-6 font-heading text-xl font-semibold text-light-100">
        {label}
      </span>
    </div>
  );
}

export default function Gallery() {
  return (
    <motion.section
      id="facilities"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={container}
      className="bg-light-100 flex flex-col gap-10"
    >
      <motion.div variants={item} className="flex flex-col gap-4 px-32 pt-20 pb-8">
        <p className="relative inline-block font-heading text-xl text-dark-700 uppercase tracking-widest">
          Our Spaces
        </p>
        <div className="flex justify-between items-center">
          <h2 className="font-title text-5xl leading-tight max-w-3/7">
            <span className="text-primary-800">Inside the facilities behind </span>
            <span className="text-accent-500">every recovery</span>
          </h2>

          <p className="font-text text-base text-dark-800 max-w-2/6">
            Purpose-built floors, secure infrastructure and spaces designed
            for the disciplined, round-the-clock work our clients rely on.
          </p>
        </div>
      </motion.div>

      {/* Tickers with faint edge fade */}
      <div className="relative flex flex-col gap-8 w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-linear-to-r from-light-100 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-linear-to-l from-light-100 to-transparent" />

        <InfiniteSlider speed={30} speedOnHover={12} gap={24}>
          {rowOneImages.map((facility, i) => (
            <FacilityCard key={`${facility.label}-${i}`} {...facility} />
          ))}
        </InfiniteSlider>

        <InfiniteSlider speed={30} speedOnHover={12} gap={24} reverse>
          {rowTwoImages.map((facility, i) => (
            <FacilityCard key={`${facility.label}-${i}-2`} {...facility} />
          ))}
        </InfiniteSlider>
      </div>
    </motion.section>
  );
}