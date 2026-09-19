"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Mail,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-6 pb-20 pt-32"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">

        {/* Left Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-300"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
            Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl font-bold leading-[1.05] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl dark:text-white"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
             Retaj
            </span>

            <span className="mt-2 block">
              Frontend Developer
              <span className="text-blue-500">.</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400"
          >
            I build modern, responsive and interactive web experiences using
            React.js and Next.js, with a strong focus on clean UI, performance
            and user experience.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/10 transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-white dark:text-slate-950"
            >
              View My Work

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-6 py-3.5 font-semibold text-slate-800 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              Contact Me
              <Mail size={18} />
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex items-center gap-3"
          >
            <a
              href="https://github.com/RetagMagdy"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-600 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 dark:hover:border-white/20 dark:hover:text-white"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="http://www.linkedin.com/in/retaj-magdy-30069b413"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-600 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 dark:hover:border-white/20 dark:hover:text-blue-400"
            >
              <FaLinkedinIn size={19} />
            </a>

            <a
              href="mailto:rerymagdy78@gmail.com"
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-600 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 dark:hover:border-white/20 dark:hover:text-blue-400"
            >
              <Mail size={19} />
            </a>
          </motion.div>
        </div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative hidden h-[460px] lg:block"
        >
          <div className="absolute inset-10 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/20" />

          <motion.div
            animate={{
              y: [0, -14, 0],
              rotate: [0, 1, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-2xl shadow-slate-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-black/30"
          >
            {/* Window Header */}
            <div className="mb-6 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />

              <span className="ml-auto text-xs text-slate-400">
                developer.tsx
              </span>
            </div>

            {/* Code */}
            <div className="space-y-3 font-mono text-sm leading-6">
              <p className="text-slate-400">
                <span className="text-violet-500">const</span>{" "}
                developer = {"{"}
              </p>

              <p className="pl-5 text-slate-700 dark:text-slate-300">
                name:{" "}
                <span className="text-cyan-500">
                  &quot;Retaj Magdy&quot;
                </span>
                ,
              </p>

              <p className="pl-5 text-slate-700 dark:text-slate-300">
                role:{" "}
                <span className="text-cyan-500">
                  &quot;Frontend Developer&quot;
                </span>
                ,
              </p>

              <p className="pl-5 text-slate-700 dark:text-slate-300">
                stack:{" "}
                <span className="text-cyan-500">
                  [&quot;React&quot;, &quot;Next.js&quot;]
                </span>
                ,
              </p>

              <p className="pl-5 text-slate-700 dark:text-slate-300">
                focus:{" "}
                <span className="text-cyan-500">
                  &quot;Modern UI&quot;
                </span>
                ,
              </p>

              <p className="pl-5 text-slate-700 dark:text-slate-300">
                passion:{" "}
                <span className="text-cyan-500">
                  &quot;Building great products&quot;
                </span>
              </p>

              <p className="text-slate-400">{"};"}</p>
            </div>

            {/* Status */}
            <div className="mt-7 flex items-center gap-2 border-t border-slate-200 pt-4 text-xs text-slate-500 dark:border-white/10">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              Building something awesome...
            </div>
          </motion.div>

          {/* React */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-0 top-8 flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/80 dark:text-white"
          >
            <span className="text-blue-500">⚛</span>
            React.js
          </motion.div>

          {/* Next */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-12 left-0 flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/80 dark:text-white"
          >
            <span className="font-bold">▲</span>
            Next.js
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-slate-400 md:flex"
      >
        Scroll to explore
        <ArrowDown size={16} />
      </motion.a>
    </section>
  );
}