"use client";

import { motion, type Variants } from "motion/react";

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

const facilities = [
  {
    label: "Operations floor",
    image: "images/ph-office-1.png",
  },
  {
    label: "Meeting pods",
    image: "images/ph-office-2.jpeg",
  },
  {
    label: "Team lounge",
    image: "images/ph-office-3.jpeg",
  },
  {
    label: "Secure data room",
    image: "images/ph-office-4.jpeg",
  },
];

export default function Gallery() {
  return (
    <motion.section
      id="facilities"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={container}
      className="bg-light-100 px-48 py-20"
    >
      <motion.div variants={item} className="flex flex-col gap-4">
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

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        <motion.div
          variants={item}
          className="relative overflow-hidden rounded-3xl md:col-span-1 md:row-span-2"
        >
          <img
            src="/images/ph-office-1.png"
            alt="Reception"
            className="h-full w-full object-cover md:min-h-0"
          />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-dark-900/80 to-transparent" />
          <span className="absolute bottom-6 left-6 font-heading text-2xl font-semibold text-light-100">
            Reception
          </span>
        </motion.div>

        {/* 2x2 grid of smaller images on the right */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:col-span-2">
          {facilities.map((facility) => (
            <motion.div
              key={facility.label}
              variants={item}
              className="relative overflow-hidden rounded-3xl"
            >
              <img
                src={facility.image}
                alt={facility.label}
                className="h-64 w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-dark-900/80 to-transparent" />
              <span className="absolute bottom-5 left-5 font-heading text-xl font-semibold text-light-100">
                {facility.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}