"use client";

import { motion, type Variants } from "motion/react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

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

const socials = [
  { label: "LinkedIn", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
];

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={container}
      className="relative flex flex-col h-screen"
    >
      <div className="relative">
        <div className="relative overflow-hidden rounded-b-3xl">
          <img
            src="/images/about_placeholder.webp"
            alt="Contact SPM Dubai"
            className="h-[40vh] w-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-800/60" />

          <motion.div
            variants={item}
            className="absolute left-16 bottom-16 flex flex-col gap-4 max-w-2xl"
          >
            <h2 className="font-title text-5xl font-bold text-light-100">
              Reach Out to Us
            </h2>
            <p className="font-text text-xl text-light-200">
              Need support, have a query, or looking to discuss a recovery mandate? Let&apos;s talk.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Information */}
      <motion.div variants={item} className="flex flex-col gap-6 px-20 pt-16 max-w-[60vw]">
        <div>
          <h2 className="font-title text-5xl leading-tight text0-dark-900">
            Contact Information
          </h2>
          <p className="mt-2 font-text text-dark-800 text-base leading-relaxed">
            We&apos;re based in Dubai and serve clients across the GCC,
            Philippines, and Singapore.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Phone className="h-6 w-6 text-accent-500" />
          <span className="font-text text-base text-dark-900">123-456-7890</span>
        </div>

        <div className="flex items-center gap-4">
          <Mail className="h-6 w-6 text-accent-500" />
          <span className="font-text text-base text-dark-900">info@mysite.com</span>
        </div>

        <div className="flex items-center gap-4">
          <MapPin className="h-6 w-6 text-accent-500" />
          <span className="font-text text-base text-dark-900">
            104, Aspin Commercial Tower, Sheikh Zayed Road, Dubai.
          </span>
        </div>

        <div className="flex gap-3 pt-2">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-800 text-light-100 transition-colors hover:bg-accent-500"
            >
              <span className="font-text text-xs">{social.label[0]}</span>
            </a>
          ))}
        </div>
      </motion.div>

      {/* Footer copyright */}
      <motion.p
        variants={item}
        className="border-t border-light-300 px-20 pt-6 pb-10 text-center font-text text-sm text-dark-700"
      >
        © 2026 by S.P. Madrid Dubai
      </motion.p>

      {/* FORM — absolute, inset-0 relative to the SECTION (not the
          image block above). flex + items-center centers it across the
          section's FULL height (image + contact info + footer), which
          is what "vertically centered in the total height of the
          contact section" means. justify-end keeps it pinned right. */}
      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-end px-20">
        <motion.div
          variants={item}
          className="pointer-events-auto w-full max-w-md rounded-3xl bg-light-100 p-8 shadow-2xl"
        >
          <h3 className="font-title text-2xl font-bold text-primary-800">
            Send us a message
          </h3>
          <p className="mt-2 font-text text-sm text-dark-700">
            Get in touch with us for any inquiries or support. We&apos;re
            here to assist you.
          </p>

          <form className="mt-6 flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-text text-sm text-dark-800">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="rounded-lg border border-light-300 px-4 py-2.5 font-text text-sm text-dark-900 outline-none transition-colors focus:border-primary-800"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-text text-sm text-dark-800">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-lg border border-light-300 px-4 py-2.5 font-text text-sm text-dark-900 outline-none transition-colors focus:border-primary-800"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-text text-sm text-dark-800">
                Subject
              </label>
              <input
                type="text"
                placeholder="Enter subject"
                className="rounded-lg border border-light-300 px-4 py-2.5 font-text text-sm text-dark-900 outline-none transition-colors focus:border-primary-800"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-text text-sm text-dark-800">
                Message
              </label>
              <textarea
                rows={3}
                placeholder="Type your message here..."
                className="resize-none rounded-lg border border-light-300 px-4 py-2.5 font-text text-sm text-dark-900 outline-none transition-colors focus:border-primary-800"
              />
            </div>

            <button
              type="submit"
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-primary-800 py-3 font-text text-sm font-semibold text-light-100 transition-colors hover:bg-primary-700"
            >
              Send Message
              <Send className="h-4 w-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}