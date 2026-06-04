"use client";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { site } from "@/lib/site";

const stats = [
  { value: "4", label: "Core capabilities" },
  { value: "24/7", label: "Systems that run themselves" },
  { value: "1:1", label: "Senior-led delivery" },
];

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center pt-32 pb-20">
      <div className="container-tight">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5" />
              AI Agency · Build · Automate · Scale
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-7 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            Intelligent systems that
            <br />
            <span className="text-gradient">scale your business</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mx-auto mt-6 max-w-2xl text-base text-slate-400 sm:text-lg"
          >
            HallowisAI designs and builds AI-powered lead generation, custom software,
            cloud infrastructure, and automation — turning manual operations into
            self-running systems that compound results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a href={site.links.calendly} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book a discovery call
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#services" className="btn-ghost">
              Explore services
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-4"
          >
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl px-4 py-5">
                <dt className="font-display text-2xl font-bold text-white sm:text-3xl">{s.value}</dt>
                <dd className="mt-1 text-xs text-slate-400">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
