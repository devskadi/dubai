"use client";

import { motion, type Variants } from "motion/react";
import Image from "next/image";
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

const langItem: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
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
      className="bg-light-200 px-5 py-16 sm:px-10 sm:py-20 lg:px-32"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[40%_60%] lg:gap-16">
        {/* Left column: heading + image */}
        <motion.div variants={item} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <p className="relative inline-block font-heading text-base uppercase tracking-widest text-dark-700 sm:text-lg lg:text-xl">
              About S.P. Madrid
            </p>
            <h2 className="font-title text-3xl leading-tight sm:text-4xl lg:text-5xl">
              <span className="text-primary-800">What make us the </span>
              <span className="text-accent-500">right partner.</span>
            </h2>
          </div>

          <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl lg:aspect-auto lg:flex-1">
            <Image
              src="/images/about_placeholder.webp"
              alt="Our office at work"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Right column: paragraph + stats + language card */}
        <motion.div variants={container} className="flex flex-col gap-8">
          {/* Paragraph */}
          <p className="font-text text-lg leading-relaxed text-dark-900 sm:text-xl lg:text-2xl">
            {paragraph}
          </p>

          {/* Stat cubes */}
          <motion.div
            variants={container}
            className="grid h-fit grid-cols-1 divide-y divide-dark-700 rounded-2xl bg-light-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={item}
                className="flex flex-col items-start gap-2 p-6"
              >
                <div className="flex items-baseline">
                  {stat.prefix && (
                    <span className="font-digits text-3xl font-bold text-accent-500 sm:text-4xl">
                      {stat.prefix}
                    </span>
                  )}
                  <NumberTicker
                    value={stat.value}
                    startValue={Math.max(stat.value - 100, 0)}
                    className="font-digits text-3xl font-bold tracking-tight text-accent-500 sm:text-4xl"
                  />
                  {stat.suffix && (
                    <span className="font-digits text-3xl font-bold text-accent-500 sm:text-4xl">
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
            className="flex flex-col items-center gap-4 rounded-2xl p-6"
          >
            <p className="font-highlight text-xl text-primary-800 sm:text-2xl">
              We Speak Your Language
            </p>

            <motion.div
              variants={container}
              className="flex flex-wrap items-center justify-center gap-6 sm:gap-10"
            >
              {languages.map((lang) => (
                <motion.div
                  key={lang.label}
                  variants={langItem}
                  className="flex flex-col items-center gap-2"
                >
                  <span className={`${lang.font} text-2xl text-accent-500 sm:text-3xl`}>
                    {lang.word}
                  </span>
                  <span className="font-text text-xs tracking-wide text-dark-800 sm:text-sm">
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