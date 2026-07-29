"use client";

import Image from "next/image";

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
  return (
    <div
      onMouseEnter={onActivate}
      onFocus={onActivate}
      tabIndex={0}
      className="relative h-full overflow-hidden rounded-3xl cursor-pointer transition-[flex-grow] duration-500 ease-in-out"
      style={{ flexGrow: isActive ? 4 : 1, flexBasis: 0, minWidth: 90 }}
    >
      {image ? (
        <Image
          src={image}
          alt={name}
          fill
          className={`object-cover object-top transition-all duration-500 ${
            isActive ? "grayscale-0" : "grayscale"
          }`}
          sizes="(min-width: 768px) 40vw, 100vw"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-dark-800">
          <div className="grid h-16 w-16 place-items-center rounded-full bg-light-100/10 text-lg font-semibold text-light-100">
            {initials}
          </div>
        </div>
      )}

      {/* Bottom scrim, stronger when expanded so the copy stays legible */}
      <div
        className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-500 ${
          isActive
            ? "from-primary-800/95 via-primary-800/30 to-transparent"
            : "from-dark-900/70 via-transparent to-transparent"
        }`}
      />

      {/* Collapsed state: vertical name label */}
      {!isActive && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <span
            className="block font-heading text-xs font-bold uppercase tracking-widest text-light-100/90"
            style={{ writingMode: "vertical-rl" }}
          >
            {name}
          </span>
        </div>
      )}

      {/* Expanded state: full details */}
      <div
        className={`absolute inset-x-0 bottom-0 flex flex-col gap-3 p-8 transition-opacity duration-500 ${
          isActive ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <span className="inline-flex w-fit items-center rounded-full border border-light-100/40 px-3 py-1.5 text-xs font-text uppercase tracking-wide text-light-100">
          {badge}
        </span>

        <div>
          <p className="font-text text-xs font-semibold uppercase tracking-widest text-light-100/70">
            {role}
          </p>
          <h3 className="mt-1 font-heading text-3xl font-bold text-light-100">
            {name}
          </h3>
        </div>

        <p className="max-w-md font-text text-sm leading-relaxed text-light-100/80">
          {bio}
        </p>
      </div>
    </div>
  );
}