"use client";

import { motion } from "framer-motion";
import {
  Award,
  ExternalLink,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const certificates = [
  {
    title: "Web Development Using React.js",
    issuer: "Information Technology Institute (ITI)",
    date: "2026",
    description:
      "Practical training focused on React.js, modern web development, frontend development and Generative AI tools.",
    icon: GraduationCap,
    accent: "from-blue-500 to-cyan-400",
  },
  {
    title: "Frontend Development",
    issuer: "Professional Training",
    date: "2026",
    description:
      "Hands-on frontend development experience with modern JavaScript, React.js, responsive interfaces and UI development.",
    icon: Award,
    accent: "from-violet-500 to-fuchsia-400",
  },
  {
    title: "Generative AI & Modern Development",
    issuer: "Technical Training",
    date: "2026",
    description:
      "Exploring Generative AI, AI-assisted development and modern tools that improve frontend development workflows.",
    icon: Sparkles,
    accent: "from-cyan-400 to-emerald-400",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="px-6 py-28">
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
              Certificates
            </p>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
            Learning &{" "}
            <span className="bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent">
              achievements.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Certifications and training experiences that reflect my continuous
            learning and growth in modern web development.
          </p>
        </motion.div>

        {/* Certificates */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {certificates.map((certificate, index) => {
            const Icon = certificate.icon;

            return (
              <motion.article
                key={certificate.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/70 p-7 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-500/5 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-violet-500/30"
              >
                {/* Top Gradient */}
                <div
                  className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${certificate.accent}`}
                />

                {/* Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-500 transition duration-300 group-hover:scale-110">
                    <Icon size={25} />
                  </div>

                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
                    {certificate.date}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mt-7 text-xl font-bold leading-7 text-slate-950 dark:text-white">
                  {certificate.title}
                </h3>

                <p className="mt-2 text-sm font-medium text-violet-500">
                  {certificate.issuer}
                </p>

                <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {certificate.description}
                </p>

                {/* Footer */}
                <div className="mt-7 flex items-center justify-between border-t border-slate-200 pt-5 dark:border-white/10">
                  <span className="text-xs font-medium text-slate-500">
                    Professional Development
                  </span>

                  <button
                    type="button"
                    className="flex items-center gap-1.5 text-xs font-semibold text-violet-500 transition hover:text-violet-600"
                  >
                    View
                    <ExternalLink size={13} />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:flex-row sm:items-center dark:border-white/10 dark:bg-white/[0.02]"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
            <Sparkles size={20} />
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white">
              Always learning.
            </h3>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Currently improving my frontend skills and exploring modern
              React, Next.js and AI-powered development.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}