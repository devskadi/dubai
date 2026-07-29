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
  const radius = isActive ? 32 : 16;

  return (
    <div
      onMouseEnter={onActivate}
      onFocus={onActivate}
      tabIndex={0}
      className="relative h-full transition-[flex-grow] duration-500 ease-in-out"
      style={{ flexGrow: isActive ? 4 : 1, flexBasis: 0, minWidth: 90 }}
    >
      {/* team-panel-photo — NOT clipped to the panel's own box. When
          active, this box extends ABOVE the panel's top edge, so the
          portion of the photo above y=0 renders freely, outside the
          panel's bounds — that's the "poking out" effect. */}
      <div
        className="absolute inset-x-0 bottom-0 overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          top: isActive ? "-18%" : "0%",
          borderBottomLeftRadius: radius,
          borderBottomRightRadius: radius,
        }}
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
      </div>

      {/* team-panel-info — the gradient "card" layer, strictly matches
          the panel's real bounds (0% to 100%), never extends upward.
          This is what makes the photo above y=0 look like it's escaping
          past a defined edge, rather than just being a taller photo. */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none transition-all duration-500 ease-in-out"
        style={{
          borderBottomLeftRadius: radius,
          borderBottomRightRadius: radius,
        }}
      >
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: isActive
              ? "linear-gradient(to top, rgba(8,18,42,0.94) 0%, rgba(8,18,42,0.6) 50%, rgba(8,18,42,0.12) 100%)"
              : "linear-gradient(to top, rgba(8,18,42,0.75) 0%, rgba(8,18,42,0.1) 60%, rgba(8,18,42,0.12) 100%)",
          }}
        />

        <div
          className={`absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6 transition-opacity duration-500 ${
            isActive ? "opacity-100" : "opacity-0"
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

      {/* team-panel-sliver — collapsed-state vertical name label */}
      <div
        className="absolute left-1/2 bottom-7 -translate-x-1/2 pointer-events-none transition-opacity duration-500"
        style={{ opacity: isActive ? 0 : 1 }}
      >
        <span
          className="block font-heading text-xs font-bold uppercase tracking-widest text-light-100/90"
          style={{ writingMode: "vertical-rl" }}
        >
          {name}
        </span>
      </div>
    </div>
  );
}