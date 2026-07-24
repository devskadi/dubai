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

  const scale = useTransform(scrollYProgress, [0, 1], [1.35, 0.95]);

  return (
    <motion.section
      id="services"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
      className="bg-light-100 px-32 py-20 flex flex-col gap-24"
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
          className="relative overflow-hidden rounded-2xl w-3/7 self-stretch"
        >
          <motion.img
            src="/images/about_placeholder.webp"
            alt="About Us"
            style={{ scale }}
            className="absolute inset-0 block w-full h-full object-cover"
          />
        </motion.div>

        <motion.div ref={servicesRef} variants={container} className="flex flex-col w-4/7 gap-12">
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

          <motion.a
            variants={item}
            href="/about"
            className="group mt-2 inline-flex w-fit items-center gap-2 self-end font-title text-2xl uppercase text-dark-900"
          >
            <span className="relative block h-6 overflow-hidden">
              <span className="flex flex-col transition-transform duration-500 ease-out group-hover:-translate-y-6">
                <span className="h-6 leading-6">About us</span>
                <span className="h-6 leading-6">About us</span>
              </span>
            </span>
            <span className="relative block h-6 overflow-hidden">
              <span className="flex flex-col transition-transform duration-500 ease-out group-hover:-translate-y-6">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-6 w-6 stroke-current"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7" />
                  <path d="M9 7h8v8" />
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-6 w-6 stroke-current"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7" />
                  <path d="M9 7h8v8" />
                </svg>
              </span>
            </span>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}