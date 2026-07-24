"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import createGlobe from "cobe";
import { motion } from "motion/react";
import MilitaryMap from "@/components/ui/globe";

interface Location {
  title: string;
  subheader: string;
  body: string;
  bodyLine2: string;
  lat: number;
  lng: number;
}

const locations: Location[] = [
  {
    title: "Dubai, UAE",
    subheader: "Regional Headquarters",
    body: "104, Aspin Commercial Tower, Sheikh Zayed Road, Dubai.",
    bodyLine2: "Mon–Thu | 8:00AM – 5:00PM",
    lat: 25.2048,
    lng: 55.2708,
  },
  {
    title: "Manila, Philippines",
    subheader: "Regional Headquarters",
    body: "17th Floor, Chatham House, Salcedo Village, Makati City.",
    bodyLine2: "Mon–Thu | 8:00AM – 5:00PM",
    lat: 14.5995,
    lng: 120.9842,
  },
  {
    title: "Singapore",
    subheader: "Regional Headquarters",
    body: "Block, City, Address, Singapore.",
    bodyLine2: "Mon–Thu | 8:00AM – 5:00PM",
    lat: 1.3521,
    lng: 103.8198,
  },
];

const globeCountries = [
  { code: "ARE", name: "United Arab Emirates", enabled: true },
  { code: "PHL", name: "Philippines", enabled: true },
  { code: "SGP", name: "Singapore", enabled: true },
];

const globeMapStyle = {
  oceanColor: "#090b0f",
  landFill: "#262b31",
  landStroke: "#4c545d",
  strokeWidth: 0.5,
  hoverColor: "#5f686f",
  disabledColor: "#1a1f24",
};

const globeTooltip = {
  show: false,
  background: "rgba(18, 20, 23, 0.92)",
  textColor: "#e7ece9",
  borderColor: "rgba(140, 150, 145, 0.32)",
};

const globeGrid = {
  show: true,
  color: "#5b636a",
  opacity: 0.12,
};

const globeLayout = {
  cornerRadius: 0,
  padding: 12,
  showBorder: false,
  borderColor: "rgba(120, 128, 126, 0.24)",
};

const globeInteraction = {
  autoRotate: true,
  autoRotateSpeed: 6,
  rotateX: 0,
  rotateY: 0.25,
  rotateZ: 0,
  enableDrag: true,
  dragSensitivity: 0.4,
  glowColor: "#7ec8ff",
  glowIntensity: 0.3,
  showStars: false,
  showLabels: true,
};

function locationToAngles(lat: number, lng: number): [number, number] {
  return [
    Math.PI - ((lng * Math.PI) / 180 - Math.PI / 2),
    (lat * Math.PI) / 180,
  ];
}

function AccordionIcon({ isOpen }: { isOpen: boolean }) {
  const accentColor = "var(--color-accent-500)";
  return (
    <div className="relative w-6 h-6 flex items-center justify-center shrink-0">
      <svg
        className="absolute inset-0 w-full h-full transition-colors duration-500"
        style={{ color: isOpen ? accentColor : "#9ca3af" }}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="10" strokeDasharray="3 3" />
      </svg>
      <svg
        className="relative w-3 h-3 transition-colors duration-500"
        style={{ color: isOpen ? accentColor : "#9ca3af" }}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
      </svg>
    </div>
  );
}

function AccordionRow({
  item,
  isOpen,
  onToggle,
}: {
  item: Location;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const accentColor = "var(--color-accent-500)";

  return (
    <div className="relative flex items-start">
      <div className="relative z-10 flex flex-col items-center mt-0.5 mr-4 shrink-0">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-light-100/5 transition-all duration-500"
          style={{
            border: `1px solid ${isOpen ? accentColor : "rgba(255,255,255,0.1)"}`,
            boxShadow: isOpen
              ? `0 0 20px color-mix(in srgb, ${accentColor} 25%, transparent)`
              : "none",
            transform: isOpen ? "scale(1.1)" : "scale(1)",
          }}
        >
          <AccordionIcon isOpen={isOpen} />
        </button>
        <div
          className="absolute top-12 -bottom-3 w-0.5 transition-all duration-500 origin-top"
          style={{
            background: isOpen
              ? `linear-gradient(to bottom, ${accentColor}, transparent)`
              : "transparent",
            transform: isOpen ? "scaleY(1)" : "scaleY(0)",
          }}
        />
      </div>

      <div className="flex-1">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          className="w-full text-left p-4 rounded-2xl backdrop-blur-md transition-all duration-500 relative overflow-hidden"
          style={{
            background: isOpen
              ? "rgba(255,255,255,0.05)"
              : "rgba(255,255,255,0.02)",
            border: `1px solid ${
              isOpen
                ? `color-mix(in srgb, ${accentColor} 25%, transparent)`
                : "rgba(255,255,255,0.1)"
            }`,
            borderBottomLeftRadius: isOpen ? 0 : 16,
            borderBottomRightRadius: isOpen ? 0 : 16,
          }}
        >
          <span
            className="relative z-10 text-2xl font-heading transition-colors duration-300"
            style={{ color: isOpen ? "#f5f5f5" : "#9ca3af" }}
          >
            {item.title}
          </span>
          <div className="relative z-10 text-xs font-text uppercase tracking-widest text-dark-700 mt-1">
            {item.subheader}
          </div>
        </button>

        <div
          className="grid transition-all duration-500 ease-in-out"
          style={{
            gridTemplateRows: isOpen ? "1fr" : "0fr",
            opacity: isOpen ? 1 : 0,
          }}
        >
          <div className="overflow-hidden">
            <div
              className="relative p-5 rounded-b-2xl backdrop-blur-md"
              style={{
                border: `1px solid color-mix(in srgb, ${accentColor} 12.5%, transparent)`,
                borderTop: "none",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <p className="font-text text-sm leading-relaxed text-light-300">
                {item.body}
              </p>
              <p className="font-text text-sm leading-relaxed text-light-300 mt-1">
                {item.bodyLine2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
function Globe({ activeIndex }: { activeIndex: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const phiRef = useRef(0);
  const targetPhiRef = useRef<number | null>(null);
  const targetThetaRef = useRef(0.3);
  const thetaRef = useRef(0.3);
  const sizeRef = useRef(600);

  useEffect(() => {
    const [phi, theta] = locationToAngles(
      locations[activeIndex].lat,
      locations[activeIndex].lng
    );
    targetPhiRef.current = phi;
    targetThetaRef.current = theta;
  }, [activeIndex]);

  useEffect(() => {
    const element = wrapperRef.current;

    if (!element) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      const nextWidth = entries[0]?.contentRect.width;

      if (nextWidth) {
        sizeRef.current = nextWidth;
      }
    });

    observer.observe(element);

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: sizeRef.current * 2,
      height: sizeRef.current * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.35, 0.35, 0.4],
      markerColor: [0.86, 0.63, 0.37],
      glowColor: [0.2, 0.25, 0.35],
      markers: locations.map((loc) => ({
        location: [loc.lat, loc.lng] as [number, number],
        size: 0.06,
      })),
    });

    let frame = 0;

    const render = () => {
      if (pointerInteracting.current === null) {
        phiRef.current += 0.003;
      }

      if (targetPhiRef.current !== null) {
        const diff = targetPhiRef.current - phiRef.current;
        const wrapped = Math.atan2(Math.sin(diff), Math.cos(diff));
        phiRef.current += wrapped * 0.04;

        const thetaDiff = targetThetaRef.current - thetaRef.current;
        thetaRef.current += thetaDiff * 0.04;
      }

      globe.update({
        phi: phiRef.current + pointerInteractionMovement.current,
        theta: thetaRef.current,
        width: sizeRef.current * 2,
        height: sizeRef.current * 2,
      });

      frame = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(frame);
      globe.destroy();
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative w-full aspect-square ml-auto lg:translate-x-10"
      style={{ maxWidth: 760 }}
    >
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current =
            e.clientX - pointerInteractionMovement.current;
          if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = "grab";
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = "grab";
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta * 0.005;
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta * 0.005;
          }
        }}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          cursor: "grab",
          contain: "layout paint size",
        }}
      />
    </div>
  );
}

export default function GlobalPresence() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = useCallback((index: number) => {
    setActiveIndex((prev) => (prev === index ? prev : index));
  }, []);

  return (
    <section className="bg-dark-900 px-32 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col gap-6"
      >
        <p className="font-text text-xs tracking-[0.25em] uppercase text-accent-500">
          Global Presence
        </p>

        <h2 className="font-title text-5xl font-bold leading-tight">
          <span className="text-accent-500">Three Countries.</span>
          <br />
          <span className="text-light-100">One Recovery Engine</span>
        </h2>

        <p className="font-text text-lg text-light-300 max-w-md">
          A follow-the-sun operation connecting the GCC to Asia&apos;s largest
          collections talent hubs.
        </p>

        <div className="relative mt-6 flex flex-col gap-4">
          {locations.map((loc, i) => (
            <AccordionRow
              key={loc.title}
              item={loc}
              isOpen={activeIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full aspect-square ml-auto lg:translate-x-10"
        style={{ maxWidth: 760 }}
      >
        <MilitaryMap
          markers={locations.map((loc, index) => ({
            label: loc.title.split(",")[0],
            description: loc.subheader,
            latitude: loc.lat,
            longitude: loc.lng,
            color: index === activeIndex ? "#E53E3E" : "#7a8086",
          }))}
          countries={globeCountries}
          mapStyle={globeMapStyle}
          tooltip={globeTooltip}
          grid={globeGrid}
          layout={globeLayout}
          interaction={globeInteraction}
        />
      </motion.div>
    </section>
  );
}