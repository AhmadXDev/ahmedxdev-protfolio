"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TrailDot {
  x: number;
  y: number;
  id: string; // Changed to string for unique timestamp-based IDs
}

export function GlowingTrail() {
  const [trail, setTrail] = useState<TrailDot[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newDot: TrailDot = {
        x: e.clientX,
        y: e.clientY,
        id: `${Date.now()}-${Math.random()}`, // Unique ID combining timestamp and random number
      };

      setTrail((prev) => [...prev.slice(-15), newDot]); // Keep last 15 dots (change this number for more/fewer dots)
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Removed lastId dependency

  return (
    <div className="fixed inset-0 pointer-events-none z-9999 hidden md:block">
      {trail.map((dot, index) => {
        const age = trail.length - index;
        const opacity = 1 - age / trail.length;
        const scale = 1 - age / trail.length;

        return (
          <motion.div
            key={dot.id}
            className="absolute w-3 h-3 rounded-full bg-primary" // Dot size (change w-3 h-3 to w-4 h-4 for bigger dots)
            style={{
              left: dot.x - 6, // Center the dot
              top: dot.y - 6,
              opacity: opacity * 0.6, // Trail opacity (change 0.6 to 0.8 for brighter trail)
              scale: scale * 0.8, // Dot scaling (change 0.8 to 1 for consistent size)
              boxShadow: `0 0 ${10 * opacity}px ${5 * opacity}px rgba(59, 130, 246, ${opacity * 0.5})`, // Glow effect (adjust numbers for more/less glow)
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: opacity * 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }} // Fade duration (higher = slower fade)
          />
        );
      })}
    </div>
  );
}
