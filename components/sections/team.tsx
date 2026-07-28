"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  HorizontalAccordion,
  HorizontalAccordionItem,
} from "@/components/ui/horizontal-accordion";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  badge: string;
  bio: string;
  initials: string;
  image?: string;
}

// shared across every expanded card — do not vary per member
const CARD_ACCENT = "from-slate-900 via-slate-800 to-slate-700";

const team: TeamMember[] = [
  {
    id: "ian",
    name: "Ian Madrid",
    role: "CEO, S.P. Madrid",
    badge: "15+ Years Experience",
    bio: "Visionary leader driving S.P. Madrid's recovery excellence across the GCC with over 15 years of strategic and operational expertise.",
    initials: "IM",
    image: "/team/sir_ian.png",
  },
  {
    id: "anita",
    name: "Anita",
    role: "Business Unit Director",
    badge: "16+ Years Experience",
    bio: "Leads business development and client partnerships with deep expertise in financial recovery and stakeholder relations.",
    initials: "A",
    image: "/team/anita.png",
  },
  {
    id: "mubarak",
    name: "Mubarak",
    role: "Executive Director",
    badge: "20+ Years Experience",
    bio: "Oversees executive operations and strategic initiatives, ensuring seamless delivery across all recovery mandates.",
    initials: "M",
    image: "/team/mubarak.png",
  },
  {
    id: "ivy",
    name: "Ivy",
    role: "Operations Manager",
    badge: "15+ Years Experience",
    bio: "Manages day-to-day operations and process optimization, ensuring efficiency and quality across all projects.",
    initials: "I",
    image: "/team/ivy.png",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Team() {
  return (
    <motion.section
      id="team"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
      className="bg-light-100 px-32 py-20 flex flex-col gap-24"
    >
      <motion.div variants={item} className="flex flex-col gap-4 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
          Meet the Team
        </h2>
        <p className="text-lg text-slate-500">
          Our dedicated team consists of experts across engineering and
          strategy, each committed to driving results and innovation.
        </p>
      </motion.div>

      <motion.div variants={item}>
        <HorizontalAccordion defaultActiveId="ian" height="560px">
          {team.map((member) => (
            <HorizontalAccordionItem
              key={member.id}
              id={member.id}
              collapsed={<CollapsedCard member={member} />}
              expanded={<ExpandedCard member={member} />}
            />
          ))}
        </HorizontalAccordion>
      </motion.div>
    </motion.section>
  );
}

function CollapsedCard({ member }: { member: TeamMember }) {
  return (
    <div className="group relative h-full w-full overflow-hidden rounded-2xl bg-slate-100 transition-colors hover:bg-slate-200">
      {member.image ? (
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover grayscale"
          sizes="120px"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid h-16 w-16 place-items-center rounded-full bg-slate-400/40 text-lg font-semibold text-slate-500">
            {member.initials}
          </div>
        </div>
      )}

      {member.image && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      )}

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <span
          className={`block text-sm font-semibold uppercase tracking-widest ${
            member.image ? "text-white" : "text-slate-500"
          }`}
          style={{ writingMode: "vertical-rl" }}
        >
          {member.name}
        </span>
      </div>
    </div>
  );
}

function ExpandedCard({ member }: { member: TeamMember }) {
  return (
    <div className="relative h-full w-full">
      {/* card shape + shared gradient — clipped to the rounded corners */}
      <div
        className={`absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br ${CARD_ACCENT}`}
      />

      {/* portrait — sized taller than the card itself, bottom-anchored,
          so the head naturally pokes above the top edge. NOT clipped. */}
      {member.image && (
        <div className="pointer-events-none absolute bottom-0 right-2 h-[122%] w-auto md:right-6 md:h-[128%]">
          <img
            src={member.image}
            alt={member.name}
            className="h-full w-auto object-contain object-bottom"
          />
        </div>
      )}

      {!member.image && (
        <div className="absolute right-8 top-8 grid h-20 w-20 place-items-center rounded-full bg-white/10 text-xl font-semibold text-white backdrop-blur-sm ring-1 ring-white/20">
          {member.initials}
        </div>
      )}

      {/* text scrim, clipped to the card shape, sits above the gradient but below the copy */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
      </div>

      {/* copy */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col p-8 text-white md:p-10">
        <span className="mb-4 inline-flex w-fit items-center rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide backdrop-blur-sm">
          {member.badge}
        </span>
        <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
          {member.role}
        </p>
        <h3 className="mt-1 text-3xl font-bold md:text-4xl">{member.name}</h3>
        <p className="mt-3 max-w-md text-sm text-white/70 md:text-base">
          {member.bio}
        </p>
      </div>
    </div>
  );
}