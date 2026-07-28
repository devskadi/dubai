"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface AccordionContextValue {
  activeId: string;
  setActiveId: (id: string) => void;
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

function useAccordionContext() {
  const ctx = useContext(AccordionContext);
  if (!ctx) {
    throw new Error(
      "HorizontalAccordionItem must be rendered inside a HorizontalAccordion"
    );
  }
  return ctx;
}

interface HorizontalAccordionProps {
  defaultActiveId: string;
  activeId?: string;
  onActiveIdChange?: (id: string) => void;
  children: ReactNode;
  className?: string;
  height?: string;
}

export function HorizontalAccordion({
  defaultActiveId,
  activeId: controlledActiveId,
  onActiveIdChange,
  children,
  className,
  height = "560px",
}: HorizontalAccordionProps) {
  const [uncontrolledActiveId, setUncontrolledActiveId] =
    useState(defaultActiveId);

  const activeId = controlledActiveId ?? uncontrolledActiveId;
  const setActiveId = onActiveIdChange ?? setUncontrolledActiveId;

  return (
    <AccordionContext.Provider value={{ activeId, setActiveId }}>
      <div
        className={cn("flex w-full gap-3 md:gap-4", className)}
        style={{ height }}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

interface HorizontalAccordionItemProps {
  id: string;
  collapsed: ReactNode;
  expanded: ReactNode;
  className?: string;
}

export function HorizontalAccordionItem({
  id,
  collapsed,
  expanded,
  className,
}: HorizontalAccordionItemProps) {
  const { activeId, setActiveId } = useAccordionContext();
  const isActive = activeId === id;

  return (
    <motion.button
      type="button"
      aria-expanded={isActive}
      onClick={() => setActiveId(id)}
      layout
      transition={{ type: "spring", stiffness: 300, damping: 32, mass: 0.9 }}
      className={cn(
        "relative h-full overflow-hidden rounded-2xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        isActive ? "flex-[5]" : "flex-1 min-w-[84px] md:min-w-[110px]",
        className
      )}
    >
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={isActive ? "expanded" : "collapsed"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0"
        >
          {isActive ? expanded : collapsed}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}