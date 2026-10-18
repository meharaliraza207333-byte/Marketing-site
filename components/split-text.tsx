"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function StaggeredHeadline({
  children,
  className = "",
  delay = 0.1,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <h1 className={className}>{children}</h1>;
  }

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.08,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.h1>
  );
}

export function AnimatedWord({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <span className={`inline-block ${className}`}>{children}</span>;
  }

  return (
    <span className="inline-block overflow-hidden py-1">
      <motion.span
        variants={{
          hidden: { y: "110%", opacity: 0, rotate: 2 },
          visible: {
            y: "0%",
            opacity: 1,
            rotate: 0,
            transition: {
              duration: 0.75,
              ease: [0.21, 0.47, 0.32, 0.98],
            },
          },
        }}
        className={`inline-block ${className}`}
      >
        {children}
      </motion.span>
    </span>
  );
}
