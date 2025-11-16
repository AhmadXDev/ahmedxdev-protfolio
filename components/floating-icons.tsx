"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Cpu, 
  Database, 
  GitBranch, 
  Sparkles, 
  Zap,
  Brain,
  Rocket
} from "lucide-react";

const icons = [
  { Icon: Code2, x: "10%", y: "20%", delay: 0 },
  { Icon: Cpu, x: "80%", y: "15%", delay: 0.5 },
  { Icon: Database, x: "15%", y: "70%", delay: 1 },
  { Icon: GitBranch, x: "85%", y: "75%", delay: 1.5 },
  { Icon: Sparkles, x: "50%", y: "10%", delay: 2 },
  { Icon: Zap, x: "90%", y: "45%", delay: 2.5 },
  { Icon: Brain, x: "5%", y: "45%", delay: 3 },
  { Icon: Rocket, x: "70%", y: "85%", delay: 3.5 },
];

export function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, x, y, delay }, index) => (
        <motion.div
          key={index}
          className="absolute opacity-10 dark:opacity-5"
          style={{ left: x, top: y }}
          initial={{ scale: 0, rotate: 0 }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon className="w-12 h-12 md:w-16 md:h-16 text-primary" />
        </motion.div>
      ))}
    </div>
  );
}
