"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Monitor,
  Rocket,
  Sparkles,
} from "lucide-react";

const cards = [
  {
    icon: Code2,
    title: "Clean Code",
    text: "I focus on writing clean, maintainable and reusable frontend code.",
  },
  {
    icon: Monitor,
    title: "Responsive UI",
    text: "Interfaces that look and feel great across mobile, tablet and desktop.",
  },
  {
    icon: Rocket,
    title: "Modern Stack",
    text: "Building modern applications with React.js, Next.js and TypeScript.",
  },
  {
    icon: Sparkles,
    title: "Interactive UX",
    text: "Adding thoughtful animations and interactions without sacrificing performance.",
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-blue-500" />

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-500">
              About Me
            </p>
          </div>

          <h2 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
            Turning ideas into{" "}
            <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
              modern digital experiences.
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            I&apos;m Retaj Magdy, a Frontend Developer focused on building
            modern and engaging web experiences. I enjoy turning designs and
            ideas into fast, responsive and interactive interfaces using
            React.js and Next.js.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-blue-500/30"
              >
                {/* Glow */}
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative">

                  {/* Icon */}
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 transition duration-300 group-hover:scale-110 group-hover:bg-blue-500/15">
                    <Icon size={23} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {card.text}
                  </p>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-cyan-500/10 p-6"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
              <Sparkles size={23} />
            </div>

            <div>
              <h3 className="font-semibold text-slate-950 dark:text-white">
                Passionate about modern frontend development
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                I&apos;m continuously improving my skills in React.js,
                Next.js, TypeScript, UI development and AI-powered development
                workflows.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}