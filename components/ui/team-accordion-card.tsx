"use client";

const TOP_OVERLAP_PERCENT = 30;

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
      <div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{
          borderBottomLeftRadius: radius,
          borderBottomRightRadius: radius,
          background:
            "linear-gradient(180deg, rgba(8,18,42,0.4) 0%, rgba(8,18,42,0.85) 100%)",
        }}
      />

      {isActive ? (
        <div className="absolute inset-0 z-10">
          {image ? (
            <img
              src={image}
              alt={name}
              className="absolute bottom-0 right-0 w-auto grayscale-0 transition-all duration-500"
              style={{

                height: `${100 + TOP_OVERLAP_PERCENT}%`,
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

        {!isActive && (
          <div className="absolute left-1/2 bottom-7 -translate-x-1/2">
            <span
              className="block font-heading text-xs font-bold uppercase tracking-widest text-light-100/90"
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