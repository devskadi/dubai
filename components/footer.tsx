"use client";

import { motion, type Variants } from "motion/react";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const companyLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={container}
      className="relative overflow-hidden bg-light-300 pb-10"
    >
      <div className="relative z-10 px-5 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-10 pt-10 sm:gap-12 sm:pt-12 md:grid-cols-3 lg:pt-16">
          <motion.div variants={item} className="flex flex-col gap-6 sm:gap-8 md:col-span-2">
            <div className="flex flex-col gap-4">
              <img
                src="/logo/primary.png"
                alt="SPM Dubai"
                className="h-auto w-40 object-contain sm:w-52 lg:w-64"
              />

              <p className="max-w-sm font-text text-sm text-dark-800">
                Premier debt recovery and legal services across the GCC and
                MENA region.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:max-w-xl">
              <div className="border-t border-dark-900/10 pt-4">
                <p className="font-text text-sm font-semibold uppercase tracking-widest text-accent-500 sm:text-base">
                  Vision
                </p>
                <p className="mt-2 font-text text-sm text-dark-800">
                  To be the Nationwide leader in banking collections, setting
                  the standard for excellence, security, and scalability in
                  the global BPO industry.
                </p>
              </div>

              <div className="border-t border-dark-900/10 pt-4">
                <p className="font-text text-sm font-semibold uppercase tracking-widest text-accent-500 sm:text-base">
                  Mission
                </p>
                <p className="mt-2 font-text text-sm text-dark-800">
                  The company&apos;s mission is to Find, Train, and Change the
                  lives of people.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Company */}
          <motion.div variants={item} className="flex flex-col gap-3 sm:gap-4">
            <p className="font-title text-sm font-bold uppercase text-dark-800 sm:text-base">
              Company
            </p>
            {companyLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-text text-sm text-dark-800 transition-colors hover:text-accent-500"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          variants={item}
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-dark-900/10 pt-6 sm:mt-16 sm:pt-8 md:flex-row"
        >
          <p className="text-center font-text text-xs text-dark-700 sm:text-sm md:text-left">
            © 2026 S.P. Madrid Dubai. All rights reserved. Licensed in UAE.
          </p>
          <div className="flex items-center gap-4 font-text text-xs text-dark-700 sm:text-sm">
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