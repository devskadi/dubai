"use client";

import { motion } from "motion/react";

const TOP_OVERLAP_PERCENT = 30;
const CROP_BOTTOM_PERCENT = 15;

const EASE = [0.22, 1, 0.36, 1] as const;
const DURATION = 0.5;

export interface TeamAccordionCardProps {
  name: string;
  role: string;
  badge: string;
  bio: string;
  image?: string;
  initials: string;
  isActive: boolean;
  onActivate: () => void;
}

export default function TeamAccordionCard({
  name,
  role,
  badge,
  bio,
  image,
  initials,
  isActive,
  onActivate,
}: TeamAccordionCardProps) {
  const radius = isActive ? 32 : 16;

  return (
    <motion.div
      onMouseEnter={onActivate}
      onFocus={onActivate}
      tabIndex={0}
      className="relative isolate h-full"

      animate={{ flexGrow: isActive ? 4 : 1 }}
      transition={{ duration: DURATION, ease: EASE }}
      style={{ flexBasis: 0, minWidth: 90 }}
    >

      <motion.div
        className="absolute inset-0 z-0 overflow-hidden shadow-[0_20px_50px_-15px_rgba(8,18,42,0.5)]"
        animate={{
          // 📍 BORDER RADIUS (bg card) — eases alongside the crossfade
          borderBottomLeftRadius: radius,
          borderBottomRightRadius: radius,
        }}
        transition={{ duration: DURATION, ease: EASE }}
      >
        {/* 📍 CARD BACKGROUND — CLOSED STATE */}
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(30,41,59,0.5) 0%, rgba(15,23,42,0.9) 100%)",
          }}
          animate={{ opacity: isActive ? 0 : 1 }}
          transition={{ duration: DURATION, ease: EASE }}
        />
        {/* 📍 CARD BACKGROUND — EXPANDED STATE */}
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(8,18,42,0.4) 0%, rgba(8,18,42,0.85) 100%)",
          }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: DURATION, ease: EASE }}
        />
      </motion.div>

      <div className="absolute inset-0 z-10">
        {/* closed-state photo: fixed fill, grayscale */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          style={{
            borderBottomLeftRadius: radius,
            borderBottomRightRadius: radius,
          }}
          animate={{ opacity: isActive ? 0 : 1 }}
          transition={{ duration: DURATION, ease: EASE }}
        >
          {image ? (
            <img
              src={image}
              alt={name}
              className="absolute inset-0 h-full w-full object-cover object-top grayscale"
            />
          ) : (
            <div className="grid h-full w-full place-items-center">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-light-100/10 text-lg font-semibold text-light-100">
                {initials}
              </div>
            </div>
          )}
        </motion.div>

        <motion.div
          className="absolute inset-0"
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: DURATION, ease: EASE }}
          style={{ pointerEvents: isActive ? "auto" : "none" }}
        >
          {image ? (
            <div
              className="absolute bottom-0 right-0 overflow-hidden"
              style={{
                height: `${100 + TOP_OVERLAP_PERCENT}%`,
                borderBottomLeftRadius: radius,
                borderBottomRightRadius: radius,
              }}
            >
              <img
                src={image}
                alt={name}
                className="block w-auto"
                style={{
                  height: `${100 / (1 - CROP_BOTTOM_PERCENT / 100)}%`,
                }}
              />
            </div>
          ) : (
            <div className="grid h-full w-full place-items-center">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-light-100/10 text-lg font-semibold text-light-100">
                {initials}
              </div>
            </div>
          )}
        </motion.div>
      </div>

      <div
        className="absolute inset-0 z-20 overflow-hidden pointer-events-none"
        style={{
          borderBottomLeftRadius: radius,
          borderBottomRightRadius: radius,
        }}
      >

        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(8,18,42,0.75) 0%, rgba(8,18,42,0) 60%)",
          }}
          animate={{ opacity: isActive ? 0 : 1 }}
          transition={{ duration: DURATION, ease: EASE }}
        />

        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(8,18,42,0.94) 0%, rgba(8,18,42,0.6) 50%, rgba(8,18,42,0) 100%)",
          }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: DURATION, ease: EASE }}
        />

        <motion.div
          className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-8 md:p-10"
          animate={
            isActive
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 12 }
          }
          transition={{ duration: DURATION, ease: EASE }}
          style={{ pointerEvents: isActive ? "auto" : "none" }}
        >
          <span className="inline-flex w-fit items-center rounded-full border border-light-100/30 bg-light-100/5 px-4 py-1.5 text-[11px] font-text font-medium uppercase tracking-[0.14em] text-light-100 backdrop-blur-sm">
            {badge}
          </span>

          <div className="flex flex-col gap-1">
            <p className="font-text text-xs font-semibold uppercase tracking-[0.2em] text-light-100/60">
              {role}
            </p>
            <h3 className="font-heading text-3xl font-bold leading-tight text-light-100 md:text-4xl">
              {name}
            </h3>
          </div>

          <p className="max-w-md font-text text-sm leading-relaxed text-light-100/75">
            {bio}
          </p>
        </motion.div>

        <motion.div
          className="absolute left-1/2 bottom-7 -translate-x-1/2"
          animate={{ opacity: isActive ? 0 : 1 }}
          transition={{ duration: DURATION, ease: EASE }}
        >
          <span
            className="block font-heading text-xs font-bold uppercase tracking-[0.2em] text-light-100/90"
            style={{ writingMode: "vertical-rl" }}
          >
            {name}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}