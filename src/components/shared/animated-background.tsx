"use client";

import { motion, useReducedMotion } from "framer-motion";

export function AnimatedBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.14),transparent_34%),linear-gradient(180deg,transparent,rgba(96,165,250,0.04))]" />
      <motion.div
        className="absolute left-1/2 top-20 h-px w-[760px] -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/40 to-transparent"
        animate={reduceMotion ? undefined : { opacity: [0.2, 0.55, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-x-0 top-0 h-[420px] bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
    </div>
  );
}
