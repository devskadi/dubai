"use client";

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

const facilityImages = [
  "/images/ph-office-1.png",
  "/images/ph-office-2.jpeg",
  "/images/ph-office-3.jpeg",
  "/images/ph-office-4.jpeg",
];

const rowOneImages = [...facilityImages, ...facilityImages];
const rowTwoImages = [...facilityImages.slice(2), ...facilityImages.slice(0, 2), ...facilityImages];

function FacilityCard({ image }: { image: string }) {
  return (
    <div className="group relative aspect-6/4 w-48 shrink-0 overflow-hidden rounded-2xl sm:w-56 lg:w-64 lg:rounded-3xl">
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
      className="flex flex-col gap-8 bg-light-100 py-16 sm:gap-10 sm:py-20"
    >
      <motion.div
        variants={item}
        className="flex flex-col gap-3 px-5 sm:gap-4 sm:px-10 lg:px-32"
      >
        <p className="relative inline-block font-heading text-base uppercase tracking-widest text-dark-700 sm:text-lg lg:text-xl">
          Our Spaces
        </p>
        <h2 className="max-w-4xl font-title text-3xl leading-tight sm:text-4xl lg:text-5xl">
          <span className="text-primary-800">Inside the facilities behind </span>
          <span className="text-accent-500">every recovery</span>
        </h2>
      </motion.div>

      {/* Tickers with faint edge fade */}
      <motion.div
        variants={item}
        className="relative flex w-full flex-col gap-6 overflow-hidden sm:gap-8"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-light-100 to-transparent sm:w-24 lg:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-light-100 to-transparent sm:w-24 lg:w-32" />

        <InfiniteSlider speed={30} speedOnHover={12} gap={16} className="gap-4 sm:gap-6">
          {rowOneImages.map((image, i) => (
            <FacilityCard key={`row1-${i}`} image={image} />
          ))}
        </InfiniteSlider>

        <InfiniteSlider speed={30} speedOnHover={12} gap={16} reverse className="gap-4 sm:gap-6">
          {rowTwoImages.map((image, i) => (
            <FacilityCard key={`row2-${i}`} image={image} />
          ))}
        </InfiniteSlider>
      </motion.div>
    </motion.section>
  );
}