"use client";

import { AnimatePresence, motion } from "motion/react";

const TOP_OVERLAP_PERCENT = 30;
const CROP_BOTTOM_PERCENT = 15;

const EASE = [0.22, 1, 0.36, 1] as const;
const WIDTH_DURATION = 0.9;
const FADE_DURATION = 0.8;
const CONTENT_DURATION = 0.6;
const EXIT_FADE_DURATION = 0.4;

// brand color, rgb(11, 57, 105)
const BRAND = "11,57,105";

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
  // 📍 BORDER RADIUS — all four corners, 32 expanded / 24 closed
  const radius = isActive ? 32 : 24;

  return (
    <motion.div
      onMouseEnter={onActivate}
      onFocus={onActivate}
      tabIndex={0}
      className="relative isolate h-full"
      animate={{ flexGrow: isActive ? 4 : 1 }}
      transition={{ duration: WIDTH_DURATION, ease: EASE }}
      style={{ flexBasis: 0, minWidth: 90 }}
    >
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden shadow-[0_20px_50px_-15px_rgba(8,18,42,0.5)]"
        animate={{ borderRadius: radius }}
        transition={{ duration: WIDTH_DURATION, ease: EASE }}
      >
        {/* 📍 CARD BACKGROUND — CLOSED STATE */}
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(30,41,59,0.5) 0%, rgba(15,23,42,0.9) 100%)",
          }}
          animate={{ opacity: isActive ? 0 : 1 }}
          transition={{ duration: FADE_DURATION, ease: EASE }}
        />
        {/* 📍 CARD BACKGROUND — EXPANDED STATE (brand color 0b3969) */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, rgba(${BRAND},0.45) 0%, rgba(${BRAND},0.92) 100%)`,
          }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: FADE_DURATION, ease: EASE }}
        />
      </motion.div>

      <div className="absolute inset-0 z-10">
        {/* closed-state photo — grayscale removed */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          animate={{ opacity: isActive ? 0 : 1, borderRadius: radius }}
          transition={{ duration: FADE_DURATION, ease: EASE }}
        >
          {image ? (
            <img
              src={image}
              alt={name}
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          ) : (
            <div className="grid h-full w-full place-items-center">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-light-100/10 text-lg font-semibold text-light-100">
                {initials}
              </div>
            </div>
          )}
        </motion.div>

        <AnimatePresence initial={false}>
          {isActive && (
            <motion.div
              key="expanded-photo"
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.03, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{
                opacity: 0,
                transition: { duration: EXIT_FADE_DURATION, ease: EASE },
              }}
              transition={{ duration: FADE_DURATION, ease: EASE }}
            >
              {image ? (
                <div
                  className="absolute bottom-0 right-0 overflow-hidden"
                  style={{
                    height: `${100 + TOP_OVERLAP_PERCENT}%`,
                    borderRadius: radius,
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
          )}
        </AnimatePresence>
      </div>

      <motion.div
        className="absolute inset-0 z-20 overflow-hidden pointer-events-none"
        animate={{ borderRadius: radius }}
        transition={{ duration: WIDTH_DURATION, ease: EASE }}
      >
        {/* 📍 TEXT GRADIENT — CLOSED STATE */}
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(8,18,42,0.75) 0%, rgba(8,18,42,0) 60%)",
          }}
          animate={{ opacity: isActive ? 0 : 1 }}
          transition={{ duration: FADE_DURATION, ease: EASE }}
        />

        {/* 📍 TEXT GRADIENT — EXPANDED STATE (brand color 0b3969) */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, rgba(${BRAND},0.96) 0%, rgba(${BRAND},0.65) 50%, rgba(${BRAND},0) 100%)`,
          }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: FADE_DURATION, ease: EASE }}
        />

        <motion.div
          className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-8 md:p-10"
          animate={
            isActive
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 12 }
          }
          transition={{
            duration: CONTENT_DURATION,
            ease: EASE,
            delay: isActive ? 0.15 : 0,
          }}
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
          transition={{ duration: FADE_DURATION, ease: EASE }}
        >
          <span
            className="block font-heading text-xs font-bold uppercase tracking-[0.2em] text-light-100/90"
            style={{ writingMode: "vertical-rl" }}
          >
            {name}
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}