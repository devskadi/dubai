"use client";

import { useState } from "react";
import { motion } from "motion/react";
import TeamAccordionCard from "@/components/ui/team-accordion-card";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  badge: string;
  bio: string;
  initials: string;
  image?: string;
}

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
  const [activeId, setActiveId] = useState(team[0].id);

  return (
    <motion.section
      id="team"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
      className="bg-light-100 px-48 py-20 flex flex-col gap-24"
    >
      <motion.div variants={item} className="flex flex-col gap-4">
        <p className="font-heading text-xl text-primary-700 uppercase">
          Frontline
        </p>

        <div className="flex gap-32">
          <h2 className="font-title text-5xl font-bold text-accent-500 w-4/6">
            Meet the team behind the recovery
          </h2>
          <p className="font-text text-xl text-dark-800 w-2/6">
            Our dedicated team consists of experts across engineering and
            strategy, each committed to driving results and innovation.
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={item}
        className="flex h-[50vh] gap-4"
      >
        {team.map((member) => (
          <TeamAccordionCard
            key={member.id}
            name={member.name}
            role={member.role}
            badge={member.badge}
            bio={member.bio}
            image={member.image}
            initials={member.initials}
            isActive={activeId === member.id}
            onActivate={() => setActiveId(member.id)}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}