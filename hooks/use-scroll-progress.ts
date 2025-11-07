"use client";

import { useScroll, useSpring, useTransform } from "framer-motion";
import { RefObject } from "react";

export function useScrollProgress(ref?: RefObject<HTMLElement>) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return { scrollYProgress, smoothProgress };
}

export function useParallax(ref?: RefObject<HTMLElement>, distance: number = 100) {
  const { scrollYProgress } = useScrollProgress(ref);
  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);

  return y;
}
