"use client";

import { motion } from "framer-motion";

export function GradientOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large animated orb 1 */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(59,130,246,0) 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: ["-25%", "25%", "-25%"],
          y: ["-25%", "25%", "-25%"],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ x: "10%", y: "10%" }}
      />

      {/* Large animated orb 2 */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full right-0 bottom-0"
        style={{
          background: "radial-gradient(circle, rgba(147,51,234,0.2) 0%, rgba(147,51,234,0) 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: ["25%", "-25%", "25%"],
          y: ["25%", "-25%", "25%"],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ x: "-10%", y: "-10%" }}
      />

      {/* Medium animated orb */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(236,72,153,0.25) 0%, rgba(236,72,153,0) 70%)",
          filter: "blur(50px)",
        }}
        animate={{
          x: ["-50%", "50%", "-50%"],
          y: ["50%", "-50%", "50%"],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ left: "50%", top: "50%" }}
      />

      {/* Small pulsing orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-32 h-32 rounded-full"
          style={{
            background: `radial-gradient(circle, rgba(${i * 50},${130 + i * 20},246,0.4) 0%, transparent 70%)`,
            filter: "blur(30px)",
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
}
