"use client";

import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { Globe, Sparkles, Bot } from "lucide-react";

const skills = [
  {
    name: "HTML5",
    category: "Frontend",
    icon: SiHtml5,
    color: "text-orange-500",
  },
  {
    name: "CSS3",
    category: "Styling",
    icon: SiCss,
    color: "text-blue-500",
  },
  {
    name: "JavaScript",
    category: "Language",
    icon: SiJavascript,
    color: "text-yellow-500",
  },
  {
    name: "TypeScript",
    category: "Language",
    icon: SiTypescript,
    color: "text-blue-600",
  },
  {
    name: "React.js",
    category: "Frontend",
    icon: SiReact,
    color: "text-cyan-400",
  },
  {
    name: "Next.js",
    category: "Framework",
    icon: SiNextdotjs,
    color: "text-slate-950 dark:text-white",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    icon: SiTailwindcss,
    color: "text-cyan-500",
  },
  {
    name: "Framer Motion",
    category: "Animation",
    icon: SiFramer,
    color: "text-pink-500",
  },
  {
    name: "REST APIs",
    category: "Integration",
    icon: Globe,
    color: "text-emerald-500",
  },
  {
    name: "Git",
    category: "Version Control",
    icon: SiGit,
    color: "text-orange-600",
  },
  {
    name: "GitHub",
    category: "Development",
    icon: SiGithub,
    color: "text-slate-950 dark:text-white",
  },
  {
    name: "Generative AI",
    category: "AI Tools",
    icon: Bot,
    color: "text-emerald-500",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-violet-500" />

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-500">
              Tech Stack
            </p>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
            Technologies I{" "}
            <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
              work with.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            A modern frontend toolkit focused on building fast, responsive and
            engaging digital experiences.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -7,
                  scale: 1.02,
                }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-500/5 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-violet-500/30"
              >
                {/* Glow */}
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-violet-500/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative flex items-center gap-4">

                  {/* Icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 transition-transform duration-300 group-hover:scale-110 dark:bg-white/5">
                    <Icon
                      size={25}
                      className={skill.color}
                    />
                  </div>

                  {/* Text */}
                  <div className="min-w-0">
                    <h3 className="truncate font-semibold text-slate-900 dark:text-white">
                      {skill.name}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      {skill.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* AI Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 overflow-hidden rounded-2xl border border-violet-500/20 bg-gradient-to-r from-violet-500/10 via-blue-500/10 to-cyan-500/10 p-6"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-500">
                <Sparkles size={23} />
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  AI-powered development
                </h3>

                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  Using Generative AI and modern AI tools to improve development
                  workflows and build smarter experiences.
                </p>
              </div>
            </div>

            <span className="whitespace-nowrap rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-xs font-medium text-violet-600 dark:text-violet-300">
              Exploring AI
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}