"use client";

import { motion, type Variants } from "motion/react";
import { ArrowRight } from "lucide-react";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const companyLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

const otherLinks = [
  { label: "Careers", href: "#" },
  { label: "Team", href: "#team" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
];

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={container}
      className="relative overflow-hidden bg-light-200"
    >
      {/* Giant watermark wordmark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 select-none overflow-hidden"
      >
        <span className="block translate-y-4 text-center font-title text-[10rem] font-bold leading-none text-dark-900/5 md:text-[14rem]">
          S.P. MADRID
        </span>
      </div>

      <div className="relative z-10 px-16 pb-16 pt-56 md:pt-64">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <motion.div variants={item} className="flex flex-col gap-4">
            <div className="flex items-baseline gap-2">
              <span className="font-title text-2xl font-bold text-primary-800">
                SPM
              </span>
              <span className="font-text text-xs tracking-[0.3em] uppercase text-dark-700">
                S.P. Madrid
              </span>
            </div>

            <p className="max-w-xs font-text text-sm text-dark-700">
              Premier debt recovery and legal services across the GCC and
              MENA region.
            </p>
          </motion.div>

          {/* Company */}
          <motion.div variants={item} className="flex flex-col gap-3">
            <p className="font-heading text-base font-bold text-dark-900">
              Company
            </p>
            {companyLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-text text-sm text-dark-700 transition-colors hover:text-accent-500"
              >
                {link.label}
              </a>
            ))}
          </motion.div>

          {/* Other Pages */}
          <motion.div variants={item} className="flex flex-col gap-3">
            <p className="font-heading text-base font-bold text-dark-900">
              Other Pages
            </p>
            {otherLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-text text-sm text-dark-700 transition-colors hover:text-accent-500"
              >
                {link.label}
              </a>
            ))}
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={item} className="flex flex-col gap-3">
            <p className="font-heading text-base font-bold text-dark-900">
              Subscribe to newsletter
            </p>
            <form className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Your email..."
                className="w-full rounded-full border border-dark-900/10 bg-light-100 px-4 py-2.5 font-text text-sm text-dark-900 outline-none transition-colors focus:border-primary-800"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-800 text-light-100 transition-colors hover:bg-primary-700"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          variants={item}
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-dark-900/10 pt-8 md:flex-row"
        >
          <p className="font-text text-sm text-dark-700">
            © 2026 S.P. Madrid Dubai. All rights reserved. Licensed in UAE.
          </p>
          <div className="flex items-center gap-4 font-text text-sm text-dark-700">
            <a href="#" className="transition-colors hover:text-accent-500">
              Privacy Policy
            </a>
            <span>·</span>
            <a href="#" className="transition-colors hover:text-accent-500">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}