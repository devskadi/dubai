"use client";

import { motion, type Variants } from "motion/react";
import { Pencil, Clock, MapPin, Phone, ArrowRight } from "lucide-react";

const infoCards = [
  {
    icon: Pencil,
    title: "Drop us a line",
    description:
      "Check out cool new spots, try out yummy local foods, and dive into different cultures.",
  },
  {
    icon: Clock,
    title: "Business hours",
    description:
      "Check out cool new spots, try out yummy local foods, and dive into different cultures.",
  },
  {
    icon: MapPin,
    title: "Visit our office",
    description:
      "Check out cool new spots, try out yummy local foods, and dive into different cultures.",
  },
];

const offices = [
  {
    city: "Dubai",
    address: "Level 14, Emaar Square, Dubai, UAE",
    phone: "+971 4 555 0123",
    image: "/images/office_placeholder_1.webp",
  },
  {
    city: "Manila",
    address: "32nd Floor, Ayala Tower, Makati, PH",
    phone: "+63 2 8555 0123",
    image: "/images/office_placeholder_2.webp",
  },
  {
    city: "Riyadh",
    address: "King Fahd Road, Riyadh, KSA",
    phone: "+966 11 555 0123",
    image: "/images/office_placeholder_3.webp",
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
      className="bg-light-100 py-24"
    >
      {/* Top: heading + info cards */}
      <div className="grid grid-cols-2 gap-16 px-40 pb-20">
        {/* Left: heading */}
        <motion.div variants={item} className="flex flex-col gap-6">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-accent-500">
            Contact
          </p>
          <h2 className="font-title text-5xl font-bold leading-tight text-dark-900">
            Get in touch with us for more information
          </h2>
          <p className="font-text text-lg leading-relaxed text-dark-700">
            Contact us for inquiries or support we&apos;re here to help and
            ensure an exceptional experience.
          </p>
          <a
            href="#"
            className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-dark-900 px-6 py-3 font-heading text-sm font-semibold text-light-100 transition-transform duration-300 hover:scale-105"
          >
            See All Blogs
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        {/* Right: 3 info cards */}
        <motion.div variants={container} className="grid grid-cols-3 gap-8">
          {infoCards.map((card) => (
            <motion.div key={card.title} variants={item} className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="font-title text-lg font-bold text-dark-900">
                  {card.title}
                </h3>
                <card.icon className="h-5 w-5 text-dark-700" />
              </div>
              <p className="font-text text-sm leading-relaxed text-dark-700">
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
              className="absolute inset-0 h-full w-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/20 to-transparent" />

            <div className="relative flex flex-col gap-3">
              <h3 className="font-title text-3xl font-bold text-light-100">
                {office.city}
              </h3>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0 text-light-100" />
                <span className="font-text text-sm text-light-100">
                  {office.address}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-light-100" />
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