"use client";

import { motion, type Variants } from "motion/react";

const languages = [
  { word: "हिन्दी", label: "HINDI", font: "font-hindi" },
  { word: "English", label: "ENGLISH", font: "font-highlight italic" },
  { word: "Filipino", label: "FILIPINO", font: "font-highlight italic" },
  { word: "العربية", label: "ARABIC", font: "font-arabic" },
];

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

const langItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Intro() {
  return (
    <motion.section
      id="intro"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
      className="bg-light-100 px-32 py-24 flex flex-col items-center text-center gap-4"
    >
      <motion.h2
        variants={item}
        className="font-title text-6xl font-bold text-primary-800"
      >
        What makes us the right partner
      </motion.h2>

      <motion.p
        variants={item}
        className="font-text text-lg text-dark-800 max-w-2xl"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam
      </motion.p>

      <motion.p
        variants={item}
        className="font-highlight italic text-xl text-primary-700 mt-12"
      >
        We Speak Your Language
      </motion.p>

      <motion.div
        variants={container}
        className="flex items-center gap-16 mt-6"
      >
        {languages.map((lang) => (
          <motion.div
            key={lang.label}
            variants={langItem}
            className="flex flex-col items-center gap-2"
          >
            <span className={`${lang.font} text-3xl text-accent-500`}>
              {lang.word}
            </span>
            <span className="font-text text-xs tracking-widest text-dark-700">
              {lang.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}