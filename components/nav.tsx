"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";

const navVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const links = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT US", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "CONTACT", href: "#contact" },
];

const TO_EMAILS = ["ab@gmail.com", "another-to@gmail.com"];
const CC_EMAILS = ["bc@gmail.com", "another-cc@gmail.com"];
const BCC_EMAILS = ["cd@gmail.com", "another-bcc@gmail.com"];

const getStartedMailto = `mailto:${TO_EMAILS.join(",")}?${new URLSearchParams({
  cc: CC_EMAILS.join(","),
  bcc: BCC_EMAILS.join(","),
  subject: "Inquiry from SPM Dubai website",
}).toString()}`;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const filled = scrolled || !isDesktop || mobileOpen;

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;

    const headerOffset = isDesktop ? 80 : 64;
    const top =
      target.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({ top, behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="show"
      className="fixed left-0 right-0 top-0 z-50 transition-colors duration-500"
      style={{
        backgroundColor: filled ? "var(--color-light-100)" : "transparent",
        boxShadow: filled ? "0 4px 20px -8px rgba(0,0,0,0.10)" : "none",
      }}
    >
      <div className="grid h-16 grid-cols-2 items-center px-5 sm:px-10 md:grid-cols-3 lg:h-20 lg:px-16">
        {/* Logo — left */}
        <a href="#" className="flex items-center">
          <Image
            src={filled ? "/logo/primary.png" : "/logo/All_White.png"}
            alt="SPM Dubai"
            width={160}
            height={40}
            priority
            className="h-8 w-auto transition-opacity duration-300 lg:h-10"
          />
        </a>

        {/* Desktop nav — centered */}
        <nav className="hidden items-center justify-center gap-6 md:flex lg:gap-9">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="group relative w-fit whitespace-nowrap font-heading text-sm font-medium tracking-[0.15em] transition-colors duration-300"
              style={{
                color: filled ? "var(--color-dark-900)" : "var(--color-light-100)",
              }}
            >
              {link.label}
              <span
                className="absolute -bottom-1 left-0 h-[1.5px] w-full origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                style={{
                  backgroundColor: filled ? "var(--color-accent-500)" : "var(--color-light-100)",
                }}
              />
            </a>
          ))}
        </nav>

        {/* CTA + mobile toggle — right */}
        <div className="flex items-center justify-end gap-4">
          <motion.a
            href={getStartedMailto}
            whileHover="hover"
            whileTap={{ scale: 0.96 }}
            initial="rest"
            animate="rest"
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden items-center gap-2 rounded-full border px-6 py-3 font-heading text-sm font-medium tracking-widest transition-colors duration-300 md:inline-flex"
            style={{
              backgroundColor: filled ? "var(--color-primary-800)" : "rgba(255, 255, 255, 0.1)",
              borderColor: filled ? "var(--color-primary-800)" : "var(--color-light-100)",
              color: "var(--color-light-100)",
              backdropFilter: filled ? "none" : "blur(10px)",
              WebkitBackdropFilter: filled ? "none" : "blur(10px)",
            }}
          >
            <motion.span
              variants={{ rest: { x: 0 }, hover: { x: -2 } }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              Get Started
            </motion.span>
            <motion.span
              variants={{
                rest: { x: 0, opacity: 0.7 },
                hover: { x: 4, opacity: 1 },
              }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center"
            >
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          </motion.a>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="justify-self-end transition-colors duration-300 md:hidden"
            style={{ color: filled ? "var(--color-dark-800)" : "var(--color-light-100)" }}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-light-100 md:hidden"
          >
            <div className="flex flex-col gap-6 px-5 pb-8 pt-2 sm:px-10">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-heading text-base font-medium tracking-widest text-dark-800"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}