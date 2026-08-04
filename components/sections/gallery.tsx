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

function FacilityCard({ image }: { label: string; image: string }) {
  return (
    <div className="group relative aspect-6/4 w-64 shrink-0 overflow-hidden rounded-3xl">
      <img
        src={image}
        alt=""
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
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
      className="bg-light-100 flex flex-col gap-10 py-20"
    >
      <motion.div variants={item} className="flex flex-col gap-4 px-32 pt-20 pb-8">
        <p className="relative inline-block font-heading text-xl text-dark-700 uppercase tracking-widest">
          Our Spaces
        </p>
        <div className="flex items-center max-w-4xl">
          <h2 className="font-title text-5xl leading-tight">
            <span className="text-primary-800">Inside the facilities behind </span>
            <span className="text-accent-500">every recovery</span>
          </h2>
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