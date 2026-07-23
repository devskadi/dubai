"use client";

import { useRef } from "react";
import { useInView } from "motion/react";

import { TextEffect } from "@/components/motion-primitives/text-effect";
import { NumberTicker } from "@/components/ui/number-ticker";

export default function Stats() {
  const textRef = useRef<HTMLDivElement | null>(null);
  const isTextVisible = useInView(textRef, { once: true, amount: 0.3 });

  return (
    <section className="relative bg-light-100 px-32 py-20">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-[70%_30%]">
        <div ref={textRef} className="flex h-full items-center">
          <TextEffect
            per="line"
            as="p"
            segmentWrapperClassName="overflow-hidden block"
            variants={{
              container: {
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { delayChildren: 0.3, staggerChildren: 0.2 },
                },
              },
              item: {
                hidden: {
                  opacity: 0,
                  y: 40,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.4,
                  },
                },
              },
            }}
            trigger={isTextVisible}
            className="font-text text-3xl leading-relaxed text-dark-700"
          >
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco`}
          </TextEffect>
        </div>

        <div className="flex items-center">
          <div className="bg-light-200 rounded-2xl p-10 flex flex-col gap-2 min-w-[280px]">
            <div className="flex items-baseline font-title text-primary-800">
              <span className="text-6xl font-bold">+</span>
              <NumberTicker
                value={3000}
                startValue={2900}
                className="text-6xl font-bold tracking-tight text-primary-800"
              />
            </div>
            <p className="font-text text-sm text-dark-700">
              Delivering results across the GCC
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}