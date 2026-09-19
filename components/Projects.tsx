"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "MediBook",
    category: "Medical Booking",
    description:
      "A responsive medical booking web application that allows users to discover doctors, search and filter specialists, view doctor details, book appointments, and manage their appointments.",
    tech: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Axios",
      "Zustand",
      "React Hook Form",
    ],
    github:
      "https://github.com/RetagMagdy/Medical-Booking-App",
    demo:
      "https://medical-booking-app-seven.vercel.app/",
    image: "/projects/medibook.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-28">
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
              Featured Project
            </p>
          </div>

          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
              A project I&apos;ve{" "}
              <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                built.
              </span>
            </h2>

            <p className="max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
              A real-world React application focused on healthcare,
              appointment management and responsive user experience.
            </p>
          </div>
        </motion.div>

        {/* Project Card */}
        <div className="mt-14">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white/70 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/5 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-blue-500/30"
            >

              {/* Image */}
              <div className="relative h-[280px] overflow-hidden bg-slate-100 dark:bg-slate-900 md:h-[400px]">

                <motion.img
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  className="h-full w-full object-cover object-top"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                {/* Category */}
                <div className="absolute left-6 top-6 rounded-full border border-white/30 bg-white/80 px-4 py-2 text-xs font-semibold text-slate-800 shadow-lg backdrop-blur-md dark:bg-slate-950/70 dark:text-white">
                  {project.category}
                </div>

                {/* Open Project */}
                <div className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/80 text-slate-900 shadow-lg backdrop-blur-md transition duration-300 group-hover:rotate-45 dark:bg-slate-950/70 dark:text-white">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              {/* Content */}
              <div className="p-7 md:p-9">

                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">

                  <div>
                    <h3 className="text-3xl font-bold text-slate-950 dark:text-white">
                      {project.title}
                    </h3>

                    <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-400">
                      {project.description}
                    </p>
                  </div>

                  {/* Project Number */}
                  <span className="hidden text-6xl font-bold text-slate-100 dark:text-white/5 md:block">
                    01
                  </span>
                </div>

                {/* Technologies */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-8 flex flex-wrap gap-3">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-1 hover:bg-slate-50 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/5"
                  >
                    <FaGithub size={17} />
                    View Code
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-400"
                  >
                    <ExternalLink size={17} />
                    Live Demo
                  </a>

                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}