"use client";

import Image from "next/image";

export interface TeamCardProps {
  name: string;
  role: string;
  badge: string;
  bio: string;
  image?: string;
  initials: string;
}

export default function TeamCard({
  name,
  role,
  badge,
  bio,
  image,
  initials,
}: TeamCardProps) {
  return (
    <div className="group relative aspect-[3/4] w-full overflow-hidden rounded-3xl bg-dark-900 ring-1 ring-transparent transition-all duration-500 hover:ring-2 hover:ring-accent-500">
      {image ? (
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
          sizes="(min-width: 768px) 25vw, 100vw"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-dark-800">
          <div className="grid h-20 w-20 place-items-center rounded-full bg-light-100/10 text-xl font-semibold text-light-100">
            {initials}
          </div>
        </div>
      )}

      {/* Bottom scrim — darkens more on hover so the added bio text stays legible */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/20 to-transparent transition-opacity duration-500 group-hover:from-dark-900/95 group-hover:via-dark-900/50" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6">
        <span className="inline-flex w-fit items-center rounded-full border border-light-100/40 px-3 py-1 text-xs font-text text-light-100">
          {badge}
        </span>

        <div>
          <h3 className="font-heading text-2xl font-bold text-light-100">
            {name}
          </h3>
          <p className="font-text text-sm font-semibold uppercase tracking-wide text-light-100/90">
            {role}
          </p>
        </div>

        {/* Bio — collapsed to zero height at rest, expands on hover */}
        <div className="grid grid-rows-[0fr] transition-all duration-500 ease-out group-hover:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <p className="font-text text-sm leading-relaxed text-light-100/80 pt-1">
              {bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}