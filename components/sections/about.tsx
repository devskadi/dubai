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
  const servicesRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  return (
    <motion.section
      id="services"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
      className="bg-light-100 p-32 flex flex-col gap-16"
    >
      <motion.div variants={item} className="flex flex-col gap-4">
        <p className="font-heading text-xl text-primary-700 uppercase">
          Operational Trust
        </p>

        <div className="flex gap-32">
          <h2 className="font-title text-5xl font-bold text-accent-500 w-4/6">
            Trusted to run the front line of our business
          </h2>
          <p className="font-text text-xl text-dark-800 w-2/6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam
          </p>
        </div>
      </motion.div>

      <div className="flex w-full gap-32 items-stretch">
        <motion.div
          ref={imageRef}
          variants={item}
          className="overflow-hidden rounded-2xl w-2/5"
        >
          <motion.img
            src="/images/about_placeholder.webp"
            alt="About Us"
            style={{ scale }}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div ref={servicesRef} variants={container} className="flex flex-col w-3/5 gap-12">
          {services.map((service) => (
            <motion.div
              key={service.number}
              variants={item}
              className="flex gap-12 border-b border-accent-500 last:border-b-0 pb-8 items-center"
            >
              <span className="font-heading text-base text-primary-700 border border-primary-700 rounded-full h-14 w-14 flex items-center justify-center shrink-0">
                {service.number}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="font-title w-full text-3xl text-primary-700">
                  {service.title}
                </h3>
                <p className="font-text w-full text-base text-dark-800">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}