"use client";

import { motion, type Variants } from "motion/react";

const container: Variants = {
  hidden: {},
  show: {
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

const line: Variants = {
  hidden: { opacity: 0, scaleX: 0 },
  show: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Opening() {
  return (
    <motion.section
      id="our-belief"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
      className="flex min-h-[70vh] items-center justify-center bg-light-100 px-6 py-20 sm:px-12 sm:py-24 lg:min-h-[80vh] lg:px-40 lg:py-28"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center sm:gap-8">
        <motion.p
          variants={item}
          className="font-heading text-sm font-semibold uppercase tracking-widest text-accent-500 sm:text-base"
        >
          Our Belief
        </motion.p>

        <motion.h2
          variants={item}
          className="font-title text-2xl font-light leading-snug text-dark-900 sm:text-3xl md:text-4xl lg:text-5xl"
        >
          Recovery is not a transaction. It is a relationship held steady
          across borders, languages and time zones.
        </motion.h2>

        <motion.div
          variants={line}
          className="h-px w-40 origin-center bg-primary-700/50 sm:w-56 lg:w-[30vw]"
        />
      </div>
    </motion.section>
  );
}