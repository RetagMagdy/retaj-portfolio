"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-blue-500" />

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-500">
              Contact
            </p>

            <span className="h-px w-10 bg-blue-500" />
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
            Let&apos;s build something{" "}
            <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
              great.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Have a project, opportunity or idea? Feel free to get in touch.
            I&apos;m always open to discussing new opportunities and
            collaborations.
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-14 overflow-hidden rounded-3xl border border-slate-200 bg-white/70 p-8 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03] sm:p-10"
        >
          {/* Background Glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-2">

            {/* Left Side */}
            <div>
              <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
                Get in touch
              </h3>

              <p className="mt-4 max-w-lg leading-7 text-slate-600 dark:text-slate-400">
                Whether you&apos;re interested in collaboration, frontend
                development or discussing a new project, feel free to reach
                out.
              </p>

              <div className="mt-8 space-y-4">

                {/* Email */}
                <a
                  href="mailto:rerymagdy78@gmail.com"
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-1 hover:border-blue-300 dark:border-white/10 dark:bg-white/5 dark:hover:border-blue-500/30"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                    <Mail size={19} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">
                      Email
                    </p>

                    <p className="mt-1 truncate text-sm font-medium text-slate-800 dark:text-slate-200">
                      rerymagdy78@gmail.com
                    </p>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="ml-auto shrink-0 text-slate-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-500"
                  />
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-500">
                    <MapPin size={19} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">
                      Location
                    </p>

                    <p className="mt-1 text-sm font-medium text-slate-800 dark:text-slate-200">
                      Egypt
                    </p>
                  </div>
                </div>

              </div>

              {/* Social Links */}
              <div className="mt-8 flex gap-3">

                {/* GitHub */}
                <a
                  href="https://github.com/RetagMagdy/Medical-Booking-App"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:-translate-y-1 hover:border-slate-300 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 dark:hover:text-white"
                >
                  <FaGithub size={20} />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/retaj-magdy-30069b413"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:-translate-y-1 hover:border-blue-300 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 dark:hover:text-blue-400"
                >
                  <FaLinkedinIn size={19} />
                </a>

              </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-col justify-center rounded-2xl border border-blue-500/10 bg-gradient-to-br from-blue-500/5 via-violet-500/5 to-cyan-500/5 p-7">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500">
                <Send size={24} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-950 dark:text-white">
                Have an opportunity?
              </h3>

              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                Whether it&apos;s a frontend project, internship or
                collaboration, I&apos;d love to hear about it.
              </p>

              <a
                href="mailto:rerymagdy78@gmail.com"
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-400"
              >
                Send me a message
                <ArrowUpRight size={18} />
              </a>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}