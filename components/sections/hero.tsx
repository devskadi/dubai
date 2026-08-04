"use client";

import { motion, type Variants } from "motion/react";
import { TextLoop } from "@/components/motion-primitives/text-loop";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.3 },
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

const languages = [
  { text: "العربية", className: "font-arabic" },
  { text: "Arabic", className: "font-highlight italic" },
  { text: "English", className: "font-highlight italic" },
  { text: "हिन्दी", className: "font-hindi" },
  { text: "Hindi", className: "font-highlight italic" },
  { text: "Filipino", className: "font-highlight italic" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-dark-900 px-5 sm:px-6">
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        poster="/hero-poster.jpg"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero-dubai.mp4" type="video/mp4" />
      </video>

      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-linear-to-b from-primary-800/95 via-dark-900/20 to-dark-900/95"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex h-full min-h-[100svh] w-full max-w-6xl flex-col items-center justify-end gap-6 pb-12 text-center sm:gap-8 sm:pb-14 lg:gap-10 lg:pb-16"
      >
        <motion.h1
          variants={item}
          className="font-title text-4xl font-bold leading-[1.05] text-light-100 xs:text-5xl sm:text-6xl md:text-7xl lg:text-7xl"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.35)" }}
        >
          RECOVERY SOLUTIONS
          <br />
          FOR THE GCC
        </motion.h1>

        <motion.p
          variants={item}
          className="max-w-md font-text text-base text-light-300 sm:max-w-xl sm:text-lg lg:max-w-2xl lg:text-xl"
          style={{ textShadow: "0 1px 10px rgba(0,0,0,0.35)" }}
        >
          We build the infrastructure that allows your team to focus on what
          matters most — the vision.
        </motion.p>

        <motion.div
          variants={item}
          className="inline-flex h-8 items-center gap-2 font-highlight text-xl text-light-100 sm:h-9 sm:text-2xl lg:h-10 lg:text-3xl"
        >
          We Speak{" "}
          <span className="inline-block">
            <TextLoop
              className="not-italic overflow-y-clip text-accent-500"
              transition={{
                type: "spring",
                stiffness: 900,
                damping: 80,
                mass: 10,
              }}
              variants={{
                initial: { y: 20, rotateX: 90, opacity: 0 },
                animate: { y: 0, rotateX: 0, opacity: 1 },
                exit: { y: -20, rotateX: -90, opacity: 0 },
              }}
            >
              {languages.map((lang) => (
                <span key={lang.text} className={lang.className}>
                  {lang.text}
                </span>
              ))}
            </TextLoop>
          </span>
        </motion.div>

        <motion.a
          variants={item}
          href="#contact"
          className="group relative inline-flex w-fit items-center justify-center overflow-hidden rounded-full border border-light-100 bg-light-100/5 px-8 py-4 font-text backdrop-blur-md sm:px-10 sm:py-5 lg:px-12 lg:py-6"
        >
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 h-[300%] w-[300%] -translate-x-1/2 translate-y-1/2 scale-0 rounded-full bg-light-100 transition-transform duration-500 ease-out group-hover:scale-100"
          />
          <span className="relative z-10 block h-6 overflow-hidden">
            <span className="flex flex-col transition-transform duration-500 ease-out group-hover:-translate-y-6">
              <span className="h-6 font-text text-base leading-6 text-light-100 sm:text-lg">
                Get in touch
              </span>
              <span className="h-6 font-text text-base leading-6 text-dark-900 sm:text-lg">
                Get in touch
              </span>
            </span>
          </span>
        </motion.a>
      </motion.div>
    </section>
  );
}