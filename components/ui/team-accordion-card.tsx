"use client";

const TOP_OVERLAP_PERCENT = 30;
const CROP_BOTTOM_PERCENT = 15;

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
      className="relative isolate h-full transition-[flex-grow] duration-500 ease-in-out"
      style={{ flexGrow: isActive ? 4 : 1, flexBasis: 0, minWidth: 90 }}
    >
      {/* LAYER 1: base gradient background */}
      <div
        className="absolute inset-0 z-0 overflow-hidden shadow-[0_20px_50px_-15px_rgba(8,18,42,0.5)]"
        style={{
          borderBottomLeftRadius: radius,
          borderBottomRightRadius: radius,
          background:
            "linear-gradient(180deg, rgba(8,18,42,0.4) 0%, rgba(8,18,42,0.85) 100%)",
        }}
      />

      {/* LAYER 2: the photo */}
      {isActive ? (
        <div className="absolute inset-0 z-10">
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
                className="block w-auto grayscale-0 transition-all duration-500"
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
        </div>
      ) : (
        <div className="absolute inset-0 z-10 overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={name}
              className="absolute inset-0 h-full w-full object-cover object-top grayscale transition-all duration-500"
              style={{
                borderBottomLeftRadius: radius,
                borderBottomRightRadius: radius,
              }}
            />
          ) : (
            <div className="grid h-full w-full place-items-center">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-light-100/10 text-lg font-semibold text-light-100">
                {initials}
              </div>
            </div>
          )}
        </div>
      )}

      {/* LAYER 3: text content with its own local gradient */}
      <div
        className="absolute inset-0 z-20 overflow-hidden pointer-events-none"
        style={{
          borderBottomLeftRadius: radius,
          borderBottomRightRadius: radius,
        }}
      >
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: isActive
              ? "linear-gradient(to top, rgba(8,18,42,0.94) 0%, rgba(8,18,42,0.6) 50%, rgba(8,18,42,0) 100%)"
              : "linear-gradient(to top, rgba(8,18,42,0.75) 0%, rgba(8,18,42,0) 60%)",
          }}
        />

        <div
          className={`absolute inset-x-0 bottom-0 flex flex-col gap-4 p-8 transition-all duration-500 md:p-10 ${
            isActive
              ? "opacity-100 translate-y-0"
              : "pointer-events-none opacity-0 translate-y-2"
          }`}
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
        </div>

        {!isActive && (
          <div className="absolute left-1/2 bottom-7 -translate-x-1/2">
            <span
              className="block font-heading text-xs font-bold uppercase tracking-[0.2em] text-light-100/90"
              style={{ writingMode: "vertical-rl" }}
            >
              {name}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}