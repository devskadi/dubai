"use client";

import { motion, type Variants } from "motion/react";
import { Pencil, Clock, MapPin, Phone, ArrowRight } from "lucide-react";

const infoCards = [
  {
    icon: Pencil,
    title: "Data Protection",
    description:
      "Enterprise-grade encryption and data handling aligned with DIFC and ADGM standards",
  },
  {
    icon: Clock,
    title: "Regulatory Adherence",
    description:
      "Full compliance with UAE Central Bank guidelines, PDPL, and regional regulatory frameworks.",
  },
  {
    icon: MapPin,
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
    image: "/images/gallery-3.jpeg",
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

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={container}
      className="bg-light-100"
    >
      {/* Top: heading + info cards */}
      <div className="grid grid-cols-[1fr_2fr] py-20">

        {/* Left: heading */}
        <motion.div variants={item} className="flex flex-col gap-4 pl-32 pr-8">
         <p className="relative inline-block font-heading text-base text-accent-500 font-semibold uppercase tracking-widest">
            Operational Trust
            <span className="absolute -bottom-1 left-0 h-px w-[60%] bg-accent-500" />
          </p>
          <h2 className="font-title text-4xl leading-tight">
            Data Privacy & Regulatory Compliance
          </h2>
          <p className="font-text text-base leading-relaxed text-dark-800">
            Comprehensive recovery solutions across secured and unsecured portfolios.
          </p>
        </motion.div>

        {/* Right: 3 info cards */}
        <motion.div variants={container} className="grid grid-cols-3 gap-12 items-stretch pr-32 pl-8">
          {infoCards.map((card) => (
            <motion.div key={card.title} variants={item} className="flex flex-col gap-4">
              <div className="flex min-h-20 items-center justify-between">
                <h3 className="font-title text-2xl font-bold text-dark-900">
                  {card.title}
                </h3>
                 <card.icon className="h-5 w-5 shrink-0 text-accent-500" />
              </div>
              <p className="font-text text-base leading-relaxed text-dark-800">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom: edge-to-edge office image row */}
      <motion.div variants={container} className="grid grid-cols-3">
        {offices.map((office) => (
          <motion.div
            key={office.city}
            variants={item}
            className="relative flex h-96 flex-col justify-end p-10"
          >
            <img
              src={office.image}
              alt={office.city}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-primary-800/90 via-primary-700/40 to-transparent" />

            <div className="relative flex flex-col gap-3">
              <h3 className="font-title text-3xl font-bold text-light-100">
                {office.city}
              </h3>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-light-100" />
                <span className="font-text text-sm text-light-100">
                  {office.address}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-light-100" />
                <span className="font-text text-sm text-light-100">
                  {office.phone}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}