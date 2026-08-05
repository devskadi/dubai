"use client";

import { motion, type Variants } from "motion/react";
import { Home, CreditCard, CheckCircle2, Globe2 } from "lucide-react";

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

const services = [
  {
    index: "01",
    icon: Home,
    title: "Secured Products",
    description:
      "Specialized recovery for asset-backed lending across the GCC region, ensuring collateral integrity through the full lifecycle.",
    items: ["Housing Finance", "Auto Finance", "Asset-Backed Loans", "Securitized Portfolios"],
  },
  {
    index: "02",
    icon: CreditCard,
    title: "Unsecured Products",
    description:
      "Expert recovery services for credit cards, personal loans and SME financing, with high-touch, brand-safe engagement.",
    items: ["Credit Cards", "SME Loans", "Personal Loans", "Buy Now Pay Later"],
  },
  {
    index: "03",
    icon: CheckCircle2,
    title: "Audit Recovery",
    description:
      "Advanced portfolio analysis and write-off recovery across all asset classes, aligned to central bank requirements.",
    items: ["Portfolio Analysis", "Write-off Recovery", "Compliance Audits", "Legal Settlement"],
  },
  {
    index: "04",
    icon: Globe2,
    title: "Local & International Accounts",
    description:
      "Comprehensive account management extending across domestic borders and overseas jurisdictions with local legal fluency.",
    items: ["Local UAE Collections", "GCC-Wide Recovery", "Cross-Border Litigation", "Overseas Skip Tracing"],
  },
];

export default function Services() {
  return (
    <motion.section
      id="services"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={container}
      className="bg-light-200 px-5 py-16 sm:px-10 sm:py-20 lg:px-32"
    >
      <motion.div variants={item} className="max-w-4xl">
        <span className="relative inline-block font-heading text-base text-dark-700 uppercase tracking-widest sm:text-lg lg:text-xl">
          Capabilities
        </span>
        <h2 className="mt-4 font-title text-3xl leading-tight text-primary-800 sm:mt-6 sm:text-5xl lg:text-7xl">
          Built for financial <span className="text-accent-500">institutions</span>
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        className="mt-12 grid grid-cols-1 gap-x-10 gap-y-14 sm:mt-16 md:grid-cols-2 lg:mt-20 lg:gap-y-16 xl:grid-cols-4"
      >
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <motion.article key={service.index} variants={item} className="group min-w-0">
              <div className="flex items-center justify-between border-b border-dark-900/10 pb-4">
                <span className="font-title text-4xl font-extrabold text-dark-900/30 transition-colors duration-500 group-hover:text-accent-500/70 sm:text-5xl">
                  {service.index}
                </span>
                <Icon strokeWidth={1.2} className="h-6 w-6 shrink-0 text-accent-500" />
              </div>

              <h3 className="mt-6 font-heading text-lg font-bold leading-snug text-dark-900 sm:text-xl">
                {service.title}
              </h3>
              <p className="mt-3 font-text text-sm leading-relaxed text-dark-700">
                {service.description}
              </p>

              <ul className="mt-6 flex flex-col gap-2.5">
                {service.items.map((line) => (
                  <li
                    key={line}
                    className="flex items-center gap-3 font-text text-sm text-dark-800 transition-colors duration-300 hover:text-accent-500"
                  >
                    <span className="h-px w-4 shrink-0 bg-accent-500/60" />
                    {line}
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </motion.div>
    </motion.section>
  );
}