"use client";

import { TextReveal } from "@/components/ui/text-reveal";
import { NumberTicker } from "@/components/ui/number-ticker";

export default function Stats() {
  return (
    <section className="relative bg-light-100 h-[200vh]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 px-32 h-full">
        <TextReveal className="h-full font-title text-3xl leading-snug">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco
        </TextReveal>

        <div className="sticky top-0 h-screen flex items-center">
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