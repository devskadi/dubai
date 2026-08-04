"use client";

import { motion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

export interface TeamMobileCardProps {
  name: string;
  role: string;
  badge: string;
  bio: string;
  image?: string;
  initials: string;
  isActive: boolean;
  onActivate: () => void;
}

export default function TeamMobileCard({
  name,
  role,
  badge,
  bio,
  image,
  initials,
  isActive,
  onActivate,
}: TeamMobileCardProps) {
  return (
    <button
      type="button"
      onClick={onActivate}
      aria-pressed={isActive}
      className="relative aspect-3/4 w-full overflow-hidden rounded-2xl text-left"
    >
      {image ? (
        <img
          src={image}
          alt={name}
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center bg-primary-800">
          <div className="grid h-16 w-16 place-items-center rounded-full bg-light-100/10 text-lg font-semibold text-light-100">
            {initials}
          </div>
        </div>
      )}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(8,18,42,0.9) 0%, rgba(8,18,42,0.45) 35%, rgba(8,18,42,0.1) 60%, transparent 100%)",
        }}
      />

      <motion.div
        className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-5"
        animate={{
          backdropFilter: isActive ? "blur(8px)" : "blur(0px)",
        }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <span className="inline-flex w-fit items-center rounded-full border border-light-100/30 bg-light-100/5 px-3 py-1 text-[10px] font-text font-medium uppercase tracking-widest text-light-100 backdrop-blur-sm">
          {badge}
        </span>

        <div className="flex flex-col gap-0.5">
          <p className="font-text text-[10px] font-semibold uppercase tracking-widest text-light-100/60">
            {role}
          </p>
          <h3 className="font-title text-2xl font-bold leading-tight text-light-100">
            {name}
          </h3>
        </div>

        <motion.div
          initial={false}
          animate={{
            height: isActive ? "auto" : 0,
            opacity: isActive ? 1 : 0,
            marginTop: isActive ? 8 : 0,
          }}
          transition={{ duration: 0.6, ease: EASE }}
          className="overflow-hidden"
        >
          <p className="font-text text-sm text-light-300">{bio}</p>
        </motion.div>
      </motion.div>
    </button>
  );
}