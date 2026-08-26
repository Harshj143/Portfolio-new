"use client";

import { motion, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 22 }}
      animate={seen ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHead({
  n,
  title,
  note,
}: {
  n: string;
  title: string;
  note?: string;
}) {
  return (
    <Reveal>
      <div className="flex items-baseline gap-5 pb-5">
        <span className="mono text-stamp shrink-0">&sect;&thinsp;{n}</span>
        <h2 className="mono text-ink shrink-0">{title}</h2>
        <span className="rule grow translate-y-[-.28rem]" />
        {note && <span className="mono text-ink-3 shrink-0 hidden sm:block">{note}</span>}
      </div>
    </Reveal>
  );
}
