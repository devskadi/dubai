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
      className="bg-light-300 flex flex-col"
    >
      {/* PARENT — only two children now: the image, and the form.
          No spacer div, no gap/padding on this wrapper. Since the form
          is `absolute` it doesn't contribute to the parent's height —
          the parent's height is exactly the image's height, so
          `top-1/2 -translate-y-1/2` on the form now genuinely centers
          it on the image itself (not on some padded phantom area). */}
      <div className="relative">
        <div className="relative overflow-hidden rounded-3xl">
          <img
            src="/images/about_placeholder.webp"
            alt="Contact SPM Dubai"
            className="h-80 w-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-800/60" />

          <motion.div
            variants={item}
            className="absolute left-8 bottom-8 flex flex-col gap-3 max-w-md"
          >
            <h2 className="font-title text-4xl font-bold text-light-100">
              Reach Out to Us
            </h2>
            <p className="font-text text-light-100/80">
              Need support, have a query, or looking to discuss a recovery
              mandate? Let&apos;s talk.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="absolute right-10 top-1/2 z-20 w-full max-w-md -translate-y-1/2 rounded-3xl bg-light-100 p-8 shadow-2xl"
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

      {/* Contact Information */}
      <motion.div variants={item} className="flex flex-col gap-6 px-20">
        <div>
          <h3 className="font-title text-3xl font-bold text-primary-800">
            Contact Information
          </h3>
          <p className="mt-2 font-text text-dark-700">
            We&apos;re based in Dubai and serve clients across the GCC,
            Philippines, and Singapore.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Phone className="h-5 w-5 text-primary-800" />
          <span className="font-text text-dark-900">123-456-7890</span>
        </div>

        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-primary-800" />
          <span className="font-text text-dark-900">info@mysite.com</span>
        </div>

        <div className="flex items-center gap-3">
          <MapPin className="h-5 w-5 text-primary-800" />
          <span className="font-text text-dark-900">
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
        className="border-t border-light-300 pt-6 text-center font-text text-sm text-dark-700"
      >
        © 2026 by S.P. Madrid Dubai
      </motion.p>
    </motion.section>
  );
}