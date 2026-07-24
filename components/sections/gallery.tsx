"use client";

import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";

// Adjust these to control how fast each row moves (px/sec).
// Lower number = slower movement.
const ROW_ONE_SPEED = 25;
const ROW_TWO_SPEED = 25;

// Adjust this to control the height of each row (and therefore
// each image, since images fill the row height with auto width).
const ROW_HEIGHT = 150; // px

const rowOneImages = [
  "/images/gallery-1.jpeg",
  "/images/gallery-2.jpeg",
  "/images/gallery-3.jpeg",
  "/images/gallery-4.jpeg",
  "/images/gallery-5.jpeg",
];

const rowTwoImages = [
  "/images/gallery-1.jpeg",
  "/images/gallery-2.jpeg",
  "/images/gallery-3.jpeg",
  "/images/gallery-4.jpeg",
  "/images/gallery-5.jpeg",
];

export default function Gallery() {
  return (
    <section className="flex flex-col gap-6 py-6 bg-light-100">
      <InfiniteSlider gap={24} speed={ROW_ONE_SPEED}>
        {rowOneImages.map((src, i) => (
          <div
            key={i}
            className="shrink-0 overflow-hidden rounded-2xl"
            style={{ height: ROW_HEIGHT }}
          >
            <img src={src} alt="" className="h-full w-auto object-cover" />
          </div>
        ))}
      </InfiniteSlider>

      <InfiniteSlider gap={24} speed={ROW_TWO_SPEED} reverse>
        {rowTwoImages.map((src, i) => (
          <div
            key={i}
            className="shrink-0 overflow-hidden rounded-2xl"
            style={{ height: ROW_HEIGHT }}
          >
            <img src={src} alt="" className="h-full w-auto object-cover" />
          </div>
        ))}
      </InfiniteSlider>
    </section>
  );
}