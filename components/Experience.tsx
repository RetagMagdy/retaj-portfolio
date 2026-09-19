"use client";

import { motion } from "framer-motion";
import {
  Award,
  BriefcaseBusiness,
  GraduationCap,
} from "lucide-react";

const experiences = [
  {
    type: "Training",
    title: "Web Development Using React.js",
    organization: "Information Technology Institute (ITI)",
    period: "2026",
    description:
      "Practical frontend development training focused on building modern web interfaces using React.js, modern development practices and Generative AI tools.",
    skills: [
      "React.js",
      "JavaScript",
      "Frontend Development",
      "Generative AI",
    ],
    icon: BriefcaseBusiness,
  },
  {
    type: "Education",
    title: "Bachelor's Degree in Information Technology",
    organization: "Egyptian E-Learning University",
    period: "2023 — 2027",
    description:
      "Studying Information Technology with a focus on programming, web development, databases, software engineering and computer science fundamentals.",
    skills: [
      "Information Technology",
      "Programming",
      "Web Development",
      "Software Engineering",
    ],
    icon: GraduationCap,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-cyan-500" />

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-500">
              Experience
            </p>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
            My learning{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              journey.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            A combination of academic education and practical training that
            continues to shape my journey as a frontend developer.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-16">

          {/* Timeline Line */}
          <div className="absolute left-[23px] top-0 hidden h-full w-px bg-gradient-to-b from-blue-500/50 via-violet-500/30 to-transparent sm:block" />

          <div className="space-y-8">

            {experiences.map((experience, index) => {
              const Icon = experience.icon;

              return (
                <motion.div
                  key={experience.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  className="relative sm:pl-16"
                >

                  {/* Timeline Icon */}
                  <div className="absolute left-0 top-6 hidden h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/20 bg-white text-blue-500 shadow-lg shadow-blue-500/10 sm:flex dark:bg-slate-950">
                    <Icon size={21} />
                  </div>

                  {/* Card */}
                  <div className="group rounded-3xl border border-slate-200 bg-white/70 p-7 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-blue-500/30">

                    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">

                      <div>

                        {/* Type */}
                        <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-300">
                          <Award size={13} />
                          {experience.type}
                        </span>

                        {/* Title */}
                        <h3 className="mt-4 text-2xl font-bold text-slate-950 dark:text-white">
                          {experience.title}
                        </h3>

                        {/* Organization */}
                        <p className="mt-2 font-medium text-slate-600 dark:text-slate-400">
                          {experience.organization}
                        </p>

                      </div>

                      {/* Period */}
                      <div className="shrink-0 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
                        {experience.period}
                      </div>

                    </div>

                    {/* Description */}
                    <p className="mt-6 max-w-3xl leading-7 text-slate-600 dark:text-slate-400">
                      {experience.description}
                    </p>

                    {/* Skills */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}