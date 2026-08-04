"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "motion/react";
import TeamAccordionCard from "@/components/ui/team-accordion-card";
import TeamMobileCard from "@/components/ui/team-mobile-card";

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

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 56, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Team() {
  const [activeId, setActiveId] = useState(team[0].id);
  const [isMounted, setIsMounted] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const mq = window.matchMedia("(max-width: 1023px)");
    const update = () => setCompact(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <motion.section
      id="team"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={container}
      className="bg-light-100 px-5 py-16 sm:px-10 sm:py-20 lg:px-32"
    >
      <motion.div variants={item} className="flex flex-col gap-4">
        <p className="relative inline-block font-heading text-base uppercase tracking-widest text-dark-700 sm:text-lg lg:text-xl">
          The frontline
        </p>

        <div className="flex flex-col mb-8 gap-4 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="font-title text-3xl leading-tight sm:text-4xl lg:text-5xl">
            <span className="text-primary-800">Meet the team behind the </span>
            <span className="text-accent-500">recovery</span>
          </h2>
          <p className="font-text text-sm text-dark-800 sm:text-base lg:max-w-2/6">
            Our dedicated team consists of experts across engineering and
            strategy, each committed to driving results and innovation.
          </p>
        </div>
      </motion.div>

      {isMounted && (
        <>
          {compact ? (
            <motion.div
              variants={item}
              className="mt-12 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-4"
            >
              {team.map((member) => (
                <TeamMobileCard
                  key={member.id}
                  name={member.name}
                  role={member.role}
                  badge={member.badge}
                  bio={member.bio}
                  image={member.image}
                  initials={member.initials}
                  isActive={activeId === member.id}
                  onActivate={() =>
                    setActiveId((prev) => (prev === member.id ? "" : member.id))
                  }
                />
              ))}
            </motion.div>
          ) : (
            <motion.div variants={item} className="mt-12 flex h-[50vh] gap-4 sm:mt-16">
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
          )}
        </>
      )}
    </motion.section>
  );
}