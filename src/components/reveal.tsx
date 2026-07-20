"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

interface RevealProps {
  children: ReactNode;
  /** vertical offset to travel from (px). */
  y?: number;
  /** horizontal offset to travel from (px). */
  x?: number;
  delay?: number;
  duration?: number;
  /** false = animate on mount (hero); true = animate when scrolled into view. */
  onScroll?: boolean;
  once?: boolean;
  style?: CSSProperties;
}

/**
 * Entrance animation wrapper. Motion is a pure enhancement of an already-visible
 * default: we animate transform only and never gate opacity, so content is fully
 * visible in SSR, with JS disabled, on a backgrounded/headless tab, or when
 * prefers-reduced-motion is set (WCAG AA). The worst case is a small resting
 * offset — never a blank section. Callers vary y/x/delay so the site never ships
 * the uniform fade-up-everywhere reflex.
 */
export function Reveal({
  children,
  y = 24,
  x = 0,
  delay = 0,
  duration = 0.6,
  onScroll = true,
  once = true,
  style,
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div style={style}>{children}</div>;
  }

  const motionProps = onScroll
    ? {
        whileInView: { y: 0, x: 0 },
        viewport: { once, margin: "-80px" },
      }
    : { animate: { y: 0, x: 0 } };

  return (
    <motion.div
      initial={{ y, x }}
      transition={{ duration, delay, ease: EASE }}
      style={style}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
