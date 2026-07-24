"use client";

import { motion, type Variants } from "motion/react";
import { TextLoop } from "@/components/motion-primitives/text-loop";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden bg-dark-900">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-dubai.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-linear-to-b from-primary-800/95 via-dark-900/20 to-dark-900/95 z-1" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center max-w-6xl h-screen flex justify-end flex-col pb-16 gap-10 items-center"
      >
        <motion.h1
          variants={item}
          className="font-title text-7xl font-bold text-light-100 leading-16"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.35)" }}
        >
          RECOVERY SOLUTIONS
          <br />
          FOR THE GCC
        </motion.h1>

        <motion.p
          variants={item}
          className="font-text text-xl text-light-300"
          style={{ textShadow: "0 1px 10px rgba(0,0,0,0.35)" }}
        >
          We build the infrastructure that allows your team to focus on what
          matters most — the vision.
        </motion.p>

        <motion.div
          variants={item}
          className="text-3xl text-light-100 inline-flex items-center gap-2 font-highlight h-10"
        >
          We Speak{" "}
          <span className="inline-block">
            <TextLoop
              className="overflow-y-clip text-accent-500 not-italic"
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
              <span className="font-arabic">العربية</span>
              <span className="font-highlight italic">Arabic</span>
              <span className="font-highlight italic">English</span>
              <span className="font-hindi">हिन्दी</span>
              <span className="font-highlight italic">Hindu</span>
              <span className="font-highlight italic">Filipino</span>
            </TextLoop>
          </span>
        </motion.div>

        <motion.a
          variants={item}
          href="#contact"
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-light-100 px-12 py-6 font-text backdrop-blur-md bg-light-100/5 w-fit"
        >
          <span
            className="absolute left-1/2 bottom-0 h-[300%] w-[300%] -translate-x-1/2 translate-y-1/2 scale-0 rounded-full bg-light-100 transition-transform duration-500 ease-out group-hover:scale-100"
            aria-hidden="true"
          />
          <span className="relative z-10 block h-6 overflow-hidden">
            <span className="flex flex-col transition-transform duration-500 ease-out group-hover:-translate-y-6">
              <span className="h-6 leading-6 text-light-100 font-text text-lg">Get in touch</span>
              <span className="h-6 leading-6 text-dark-900 font-text text-lg">Get in touch</span>
            </span>
          </span>
        </motion.a>
      </motion.div>
    </section>
  );
}