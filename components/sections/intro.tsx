"use client";

import { motion, type Variants } from "motion/react";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const line: Variants = {
  hidden: { opacity: 0, scaleX: 0 },
  show: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 0.6, ease: "easeOut" },
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
      className="flex min-h-[80vh] items-center justify-center bg-light-100 px-40 py-28"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        <motion.p
          variants={item}
          className="font-heading text-base font-semibold uppercase tracking-widest text-accent-500"
        >
          Our Belief
        </motion.p>

        <motion.h2
          variants={item}
          className="font-title text-5xl font-light leading-snug text-dark-900"
        >
          Recovery is not a transaction. It is a relationship held steady
          across borders, languages and time zones.
        </motion.h2>

        <motion.div
          variants={line}
          className="h-px w-[30vw] origin-center bg-primary-700/50 transition-transform duration-500 ease-out"
        />
      </div>
    </motion.section>
  );
}