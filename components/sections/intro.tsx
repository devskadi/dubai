"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type MotionValue,
  type Variants,
} from "motion/react";
import { NumberTicker } from "@/components/ui/number-ticker";

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

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function Word({ children, progress, range }: WordProps) {
  const color = useTransform(progress, range, [
    "var(--color-dark-700)",
    "var(--color-dark-900)",
  ]);

  return (
    <motion.span style={{ color }} className="inline-block mr-[0.3em]">
      {children}
    </motion.span>
  );
}

export default function About() {
  const paragraphRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ["start 0.9", "start 0.15"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    mass: 0.4,
  });

  const paragraph =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam";
  const words = paragraph.split(" ");
  const fadeWidth = 0.35;
  const step = (1 - fadeWidth) / Math.max(words.length - 1, 1);

  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={container}
      className="bg-light-100 px-40 py-24"
    >
      {/* Row 1*/}
      <div className="flex flex-col gap-10">

        {/* Row 1 - Cell 1: Heading*/}
        <div className="grid grid-cols-2 gap-10 items-stretch">
          <motion.div
            variants={item}
            className="flex flex-col border-l-8 pl-10 py-6"
            style={{
              borderImage:
                "linear-gradient(to bottom, var(--color-accent-600), var(--color-accent-500), var(--color-primary-700), var(--color-primary-800)) 1",
            }}
          >
            <p className="font-heading text-2xl uppercase font-semibold tracking-wider text-dark-800">
              About Us
            </p>
            <h2 className="font-title text-5xl font-bold leading-tight">
              <span className="text-dark-900">What makes us the </span>
              <span className="text-accent-500">right partner</span>
            </h2>
          </motion.div>
          
          {/* Row 1 - Cell 2: Image + ticker */}
          <motion.div variants={item} className="grid grid-cols-2 gap-6">

            {/*Image*/}
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="/images/about_placeholder.webp"
                alt="Recovery operations"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <span className="absolute right-3 top-3 rounded-full bg-dark-800/70 px-2 py-1 font-text text-xs text-light-100">
                Text Here
              </span>
            </div>

            {/*Ticker*/}
            <div className="flex flex-col justify-between gap-12 rounded-3xl p-6">
              <div className="flex items-baseline">
                <span className="font-digits text-5xl font-bold text-accent-500">
                  +
                </span>
                <NumberTicker
                  value={3000}
                  startValue={1800}
                  className="font-digits text-5xl font-bold tracking-tight text-accent-500"
                />
              </div>
              <p className="font-heading text-sm text-dark-800">
                Delivering results across the GCC
              </p>
            </div>
          </motion.div>
        </div>

        {/* Row 2*/}
        <div className="grid grid-cols-2 gap-10 items-stretch">

          {/* Row 2 - Cell 3: Image*/}
          <motion.div
            variants={item}
            className="relative overflow-hidden rounded-3xl"
          >
            <img
              src="/images/about_placeholder.webp"
              alt="Our team at work"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </motion.div>

          {/* Row 2 - Cell 4: Text group*/}
          <motion.div variants={container} className="flex flex-col gap-10">
            <div ref={paragraphRef}>
              <p className="font-text text-2xl leading-relaxed">
                {words.map((word, i) => {
                  const start = i * step;
                  const end = start + fadeWidth;
                  return (
                    <Word key={i} progress={smoothProgress} range={[start, end]}>
                      {word}
                    </Word>
                  );
                })}
              </p>
            </div>

            <motion.div
              variants={container}
              className="flex flex-col items-center gap-6"
            >
              <motion.p
                variants={item}
                className="font-highlight italic text-2xl text-primary-700"
              >
                We Speak Your Language
              </motion.p>

              <motion.div variants={container} className="flex items-center gap-8">
                {languages.map((lang) => (
                  <motion.div
                    key={lang.label}
                    variants={langItem}
                    className="flex flex-col items-center gap-2"
                  >
                    <span className={`${lang.font} text-3xl text-accent-500`}>
                      {lang.word}
                    </span>
                    <span className="font-text text-base text-dark-800">
                      {lang.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}