"use client";

import { motion, type Variants } from "motion/react";
import Image from "next/image";
import { ShieldCheck, ScrollText, FileCheck2, MapPin, Phone } from "lucide-react";

const infoCards = [
  {
    icon: ShieldCheck,
    title: "Data Protection",
    description:
      "Enterprise-grade encryption and data handling aligned with DIFC and ADGM standards",
  },
  {
    icon: ScrollText,
    title: "Regulatory Adherence",
    description:
      "Full compliance with UAE Central Bank guidelines, PDPL, and regional regulatory frameworks.",
  },
  {
    icon: FileCheck2,
    title: "Audit Ready",
    description:
      "Comprehensive audit trails and documentation for all recovery activities and communications.",
  },
];

const offices = [
  {
    city: "Dubai",
    address: "104, Aspin Commercial Tower, Sheikh Zayed Road, Dubai.",
    phone: "+639876543210",
    image: "/images/dubai-office-1.jpeg",
  },
  {
    city: "Manila",
    address: "17th Floor, Chatham House, Salcedo Village, Makati City.",
    phone: "+639876543210",
    image: "/images/ph-office-1.png",
  },
  {
    city: "Singapore",
    address: "Address, Singapore.",
    phone: "+639876543210",
    image: "/images/sg-office-1.png",
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

export default function Bento() {
  return (
    <motion.section
      id="offices"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={container}
      className="bg-primary-800"
    >
      {/* Top: heading + info cards */}
      <div className="grid grid-cols-1 gap-10 px-5 py-14 sm:px-10 sm:py-16 lg:grid-cols-[1fr_2fr] lg:gap-0 lg:px-0 lg:py-20">
        {/* Left: heading */}
        <motion.div
          variants={item}
          className="flex flex-col gap-4 lg:border-r lg:border-light-100/20 lg:py-0 lg:pl-32 lg:pr-8"
        >
          <p className="relative inline-block font-heading text-base uppercase tracking-widest text-light-100 sm:text-lg lg:text-xl">
            Operational Trust
          </p>
          <h2 className="font-title text-2xl leading-tight sm:text-3xl lg:text-4xl">
            <span className="text-light-100">Data Privacy & </span>
            <span className="text-accent-500">Regulatory Compliance</span>
          </h2>
          <p className="font-text text-sm leading-relaxed text-light-100/70 sm:text-base">
            Comprehensive recovery solutions across secured and unsecured portfolios.
          </p>
        </motion.div>

        {/* Right: 3 info cards */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 items-stretch gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-12 lg:pl-8 lg:pr-32"
        >
          {infoCards.map((card) => (
            <motion.div key={card.title} variants={item} className="flex flex-col gap-4">
              <div className="flex min-h-16 items-center justify-between lg:min-h-20">
                <h3 className="font-title text-xl font-bold text-light-100 sm:text-2xl">
                  {card.title}
                </h3>
                <card.icon className="h-5 w-5 shrink-0 text-accent-500" />
              </div>
              <p className="font-text text-sm leading-relaxed text-light-100/70 sm:text-base">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom: edge-to-edge office image row */}
      <motion.div variants={container} className="grid grid-cols-1 sm:grid-cols-3">
        {offices.map((office) => (
          <motion.div
            key={office.city}
            variants={item}
            className="relative flex h-72 flex-col justify-end p-6 sm:h-80 sm:p-8 lg:h-96 lg:p-10"
          >
            <Image
              src={office.image}
              alt={office.city}
              fill
              sizes="(min-width: 640px) 33vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-primary-800/90 via-primary-700/40 to-transparent" />

            <div className="relative flex flex-col gap-3">
              <h3 className="font-title text-2xl font-bold text-light-100 sm:text-3xl">
                {office.city}
              </h3>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-light-100" />
                <span className="font-text text-sm text-light-100">{office.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-light-100" />
                <span className="font-text text-sm text-light-100">{office.phone}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}