"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";
import { NumberTicker } from "@/components/ui/number-ticker";

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function Word({ children, progress, range }: WordProps) {
  const color = useTransform(progress, range, [
    "var(--color-dark-700)",
    "var(--color-dark-900)",
  ]);

  return (
    <motion.span style={{ color }} className="inline-block mr-[0.3em]">
      {children}
    </motion.span>
  );
}

export default function Stats() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.15"],
  });

  // Spring-smoothed so the whole thing glides rather than steps
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    mass: 0.4,
  });

  const paragraph =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco";

  const words = paragraph.split(" ");

  // Fade width: how long (as a fraction of total scroll) each word
  // takes to go from muted -> full color. Bigger = softer, more
  // overlap between neighboring words = more of a fade, less "typewriter".
  const fadeWidth = 0.35;
  const step = (1 - fadeWidth) / Math.max(words.length - 1, 1);

  return (
    <section className="relative bg-light-100 px-32 py-20">
      <div className="grid grid-cols-1 gap-20 md:grid-cols-[7fr_3fr] w-full">
        <div ref={containerRef} className="flex h-full flex-col justify-center gap-4">
          <motion.p className="font-heading text-2xl text-primary-700">
            BY THE NUMBERS
          </motion.p>
          <p className="font-text text-4xl leading-relaxed">
            {words.map((word, i) => {
              const start = i * step;
              const end = start + fadeWidth;
              return (
                <Word key={i} progress={smoothProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </p>
        </div>

        <div className="rounded-3xl bg-light-200 p-8 flex flex-col gap-2 w-full h-full justify-between">
          <div className="flex font-digits text-accent-500 font-bold">
            <span className="text-7xl font-bold">+</span>
            <NumberTicker
                value={3000}
                startValue={2900}
                className="text-7xl tracking-tight text-accent-500 font-digits font-bold"
            />
          </div>
          <p className="font-heading text-xl text-dark-900">
            Delivering results across the GCC
          </p>
        </div>
      </div>
    </section>
  );
}