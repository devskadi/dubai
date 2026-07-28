"use client";

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
  accent: string;
}

const team: TeamMember[] = [
  {
    id: "ian",
    name: "Ian Madrid",
    role: "CEO, S.P. Madrid",
    badge: "15+ Years Experience",
    bio: "Visionary leader driving S.P. Madrid's recovery excellence across the GCC with over 15 years of strategic and operational expertise.",
    initials: "IM",
    accent: "from-slate-900 via-slate-800 to-slate-700",
  },
  {
    id: "anita",
    name: "Anita",
    role: "Senior Recovery Associate",
    badge: "10+ Years Experience",
    bio: "Leads case strategy for high-value accounts, combining negotiation skill with a track record of amicable, fast settlements.",
    initials: "A",
    accent: "from-emerald-950 via-emerald-900 to-emerald-800",
  },
  {
    id: "mubarak",
    name: "Mubarak",
    role: "Legal & Compliance Lead",
    badge: "12+ Years Experience",
    bio: "Oversees regulatory compliance and legal escalation across the GCC, keeping every recovery process on solid legal footing.",
    initials: "M",
    accent: "from-indigo-950 via-indigo-900 to-indigo-800",
  },
  {
    id: "ivy",
    name: "Ivy",
    role: "Operations Manager",
    badge: "15+ Years Experience",
    bio: "Manages day-to-day operations and process optimization, ensuring efficiency and quality across all projects.",
    initials: "I",
    accent: "from-rose-950 via-rose-900 to-rose-800",
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
    <div className="group relative h-full w-full bg-slate-100 transition-colors hover:bg-slate-200">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid h-16 w-16 place-items-center rounded-full bg-slate-400/40 text-lg font-semibold text-slate-500 grayscale">
          {member.initials}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <span
          className="block text-sm font-semibold uppercase tracking-widest text-slate-500"
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
    <div
      className={`relative h-full w-full bg-gradient-to-br ${member.accent} p-8 md:p-10 flex flex-col justify-end text-white overflow-hidden`}
    >
      <div className="absolute right-8 top-8 grid h-20 w-20 place-items-center rounded-full bg-white/10 text-xl font-semibold backdrop-blur-sm ring-1 ring-white/20">
        {member.initials}
      </div>

      <span className="mb-4 inline-flex w-fit items-center rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide backdrop-blur-sm">
        {member.badge}
      </span>

      <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
        {member.role}
      </p>
      <h3 className="mt-1 text-3xl md:text-4xl font-bold">{member.name}</h3>
      <p className="mt-3 max-w-md text-sm md:text-base text-white/70">
        {member.bio}
      </p>
    </div>
  );
}