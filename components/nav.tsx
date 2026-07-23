"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";

const navVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const links = [
  { label: "HOME", href: "#services" },
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#blog" },
  { label: "CONTACT", href: "#contact" },
];

export default function Nav() {
  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="show"
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-32 h-24 align-items-center"
    >
      <a href="#" className="flex items-center">
        <Image
          src="/logo/All_White.png"
          alt="SPM Dubai"
          width={160}
          height={40}
          priority
          className="h-14 w-auto"
        />
      </a>

      <nav className="hidden md:flex gap-10 font-heading font-medium text-base text-light-100 backdrop-blur px-6 py-4 rounded-xl">
        {links.map((link) => {
          return (
            <a
              key={link.href}
              href={link.href}
              className="group relative w-fit"
            >
              {link.label}
               <span className="absolute left-0 -bottom-1 h-[1.5px] w-full origin-left scale-x-0 bg-light-100 transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          );
        })}
      </nav>
    </motion.header>
  );
}