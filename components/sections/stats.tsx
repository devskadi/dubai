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

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    mass: 0.4,
  });

  const paragraph =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  const words = paragraph.split(" ");

  const fadeWidth = 0.35;
  const step = (1 - fadeWidth) / Math.max(words.length - 1, 1);

  return (
    <section className="bg-light-100 px-32 py-20">
      <div className="flex w-full gap-32 items-stretch">
        <div ref={containerRef} className="flex flex-col justify-center gap-4 w-4/6 p-8 rounded-3xl">
          <p className="font-heading text-xl text-primary-700">
            BY THE NUMBERS
          </p>

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

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="rounded-3xl bg-light-200 p-8 flex flex-col gap-2 w-2/6 justify-between"
        >
          <div className="flex">
            <span className="text-7xl font-bold font-digits text-accent-500">+</span>
            <NumberTicker
                value={3000}
                startValue={2900}
                className="text-7xl tracking-tight text-accent-500 font-digits font-bold"
            />
          </div>
          <p className="font-heading text-xl text-dark-800">
            Delivering results across the GCC
          </p>
        </motion.div>
      </div>
    </section>
  );
}