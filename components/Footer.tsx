"use client";

import { motion } from "framer-motion";
import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/80 px-6 dark:border-white/10">
      <div className="mx-auto max-w-6xl py-10">

        {/* Main Footer */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          {/* Brand */}
          <div>
            <a
              href="#home"
              className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white"
            >
              Retaj
              <span className="text-blue-500">.</span>
            </a>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Frontend Developer building modern web experiences.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-slate-500 transition hover:text-blue-500 dark:text-slate-400 dark:hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">

            {/* GitHub */}
            <a
              href="https://github.com/RetagMagdy/Medical-Booking-App"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:-translate-y-1 hover:border-slate-300 hover:text-slate-950 dark:border-white/10 dark:text-slate-400 dark:hover:text-white"
            >
              <FaGithub size={18} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/retaj-magdy-30069b413"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:-translate-y-1 hover:border-blue-300 hover:text-blue-600 dark:border-white/10 dark:text-slate-400 dark:hover:text-blue-400"
            >
              <FaLinkedinIn size={18} />
            </a>

            {/* Email */}
            <a
              href="mailto:rerymagdy78@gmail.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:-translate-y-1 hover:border-blue-300 hover:text-blue-600 dark:border-white/10 dark:text-slate-400 dark:hover:text-blue-400"
            >
              <Mail size={18} />
            </a>

          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between dark:border-white/10">

          <p className="text-xs text-slate-500 dark:text-slate-500">
            © {year} Retaj Magdy. All rights reserved.
          </p>

          <motion.a
            href="#home"
            whileHover={{ y: -3 }}
            className="flex w-fit items-center gap-2 text-xs font-medium text-slate-500 transition hover:text-blue-500 dark:text-slate-400"
          >
            Back to top
            <ArrowUp size={15} />
          </motion.a>

        </div>

      </div>
    </footer>
  );
}