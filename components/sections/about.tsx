"use client";

import { motion, type Variants } from "motion/react";
import { NumberTicker } from "@/components/ui/number-ticker";

const languages = [
  { word: "हिन्दी", label: "HINDI", font: "font-hindi" },
  { word: "English", label: "ENGLISH", font: "font-highlight italic" },
  { word: "Filipino", label: "FILIPINO", font: "font-highlight italic" },
  { word: "العربية", label: "ARABIC", font: "font-arabic" },
];

const stats = [
  {
    value: 3000,
    prefix: "+",
    label: "Recoveries delivered across the GCC",
  },
  {
    value: 20,
    prefix: "",
    suffix: "+",
    label: "Years of operating history",
  },
  {
    value: 3,
    prefix: "",
    label: "Countries, one recovery engine",
  },
];

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

const langItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function About() {
  const paragraph =
    "For two decades we have run the front line of recovery for banks and lenders across the Gulf — combining disciplined operations, regional fluency and technology that keeps every account moving forward.";

  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={container}
      className="bg-light-200 px-32 py-20"
    >
      <div className="grid grid-cols-[40%_60%] gap-16">
        {/* Left column: heading + image */}
        <motion.div variants={item} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <p className="relative inline-block font-heading text-base text-accent-500 font-semibold uppercase tracking-widest">
              About S.P. Madrid
              <span className="absolute -bottom-1 left-0 h-px w-[40%] bg-accent-500" />
            </p>
            <h2 className="font-title text-5xl leading-tight">
              <span className="text-dark-900">What make us the </span>
              <span className="text-accent-500">right partner.</span>
            </h2>
          </div>

          <div className="relative flex-1 overflow-hidden rounded-3xl">
            <img
              src="/images/about_placeholder.webp"
              alt="Our office at work"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </motion.div>

        {/* Right column: paragraph + stats + language card */}
        <motion.div variants={container} className="flex flex-col gap-8">
          
          {/* Paragraph */}
          <p className="font-text text-2xl leading-relaxed text-dark-900">
            {paragraph}
          </p>

          {/* Stat cubes */}
          <motion.div
            variants={container}
            className="grid grid-cols-3 divide-x divide-dark-700 rounded-2xl bg-light-100 h-fit"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={item}
                className="flex flex-col items-start gap-2 p-6"
              >
                <div className="flex items-baseline">
                  {stat.prefix && (
                    <span className="font-digits text-4xl font-bold text-accent-500">
                      {stat.prefix}
                    </span>
                  )}
                  <NumberTicker
                    value={stat.value}
                    startValue={Math.max(stat.value - 100, 0)}
                    className="font-digits text-4xl font-bold tracking-tight text-accent-500"
                  />
                  {stat.suffix && (
                    <span className="font-digits text-4xl font-bold text-accent-500">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <p className="font-heading text-sm text-dark-800">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Language card */}
          <motion.div
            variants={item}
            className="flex flex-col gap-4 rounded-2xl p-6 items-center"
          >
            <p className="font-highlight text-2xl text-primary-800">
              We Speak Your Language
            </p>

            <motion.div
              variants={container}
              className="flex items-center gap-10"
            >
              {languages.map((lang) => (
                <motion.div
                  key={lang.label}
                  variants={langItem}
                  className="flex flex-col gap-2 items-center"
                >
                  <span className={`${lang.font} text-3xl text-accent-500`}>
                    {lang.word}
                  </span>
                  <span className="font-text text-sm tracking-wide text-dark-800">
                    {lang.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}