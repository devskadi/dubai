"use client";

import { motion, useScroll, useTransform, type Variants } from "motion/react";
import { useRef } from "react";

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

const services = [
  {
    number: "01",
    title: "Secured & Unsecured Products",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    number: "02",
    title: "Audit Recovery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    number: "03",
    title: "Local & International Accounts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
];

export default function About() {
  const imageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1, 1.15]);

  return (
    <motion.section
      id="services"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
      className="bg-light-100 px-32 py-24 flex flex-col gap-16"
    >
      <motion.h2
        variants={item}
        className="font-title text-5xl font-bold max-w-xl"
      >
        <span className="text-primary-800">Powering the operational trust</span>{" "}
        <span className="text-accent-500">of our business</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <motion.div
          ref={imageRef}
          variants={item}
          className="overflow-hidden rounded-2xl aspect-[4/5]"
        >
          <motion.img
            src="/images/about_placeholder.webp"
            alt="About Us"
            style={{ scale }}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div variants={container} className="flex flex-col">
          {services.map((service) => (
            <motion.div
              key={service.number}
              variants={item}
              className="flex gap-6 py-8 border-b border-light-300 first:pt-0"
            >
              <span className="font-text text-sm text-dark-700 border border-dark-700 rounded-full h-8 w-8 flex items-center justify-center shrink-0">
                {service.number}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="font-heading text-2xl text-primary-800">
                  {service.title}
                </h3>
                <p className="font-text text-dark-700 max-w-md">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}

          <motion.a
            variants={item}
            href="#about"
            className="font-text text-sm tracking-widest uppercase text-dark-900 mt-8 inline-flex items-center gap-2 w-fit hover:text-accent-500 transition-colors"
          >
            About Us
            <span>↗</span>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}