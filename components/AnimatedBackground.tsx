"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
      {/* Blue Glow */}
      <motion.div
        className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-600/20"
        animate={{
          x: [0, 120, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Violet Glow */}
      <motion.div
        className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-violet-500/10 blur-[120px] dark:bg-violet-600/20"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Cyan Glow */}
      <motion.div
        className="absolute bottom-[-150px] left-1/3 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]"
        animate={{
          x: [0, 100, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:50px_50px] dark:bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)]" />
    </div>
  );
}