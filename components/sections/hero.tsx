"use client";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import { useLanguage } from "@/components/i18n/language-provider";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export function Hero() {
  const { t } = useLanguage();
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-28"
    >
      {/* cinematic hero lighting */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-[1]">
        <div className="absolute right-[-10%] top-1/2 h-[46rem] w-[46rem] -translate-y-1/2 rounded-full bg-brand-blue/25 blur-[140px]" />
        <div className="absolute right-[8%] top-[40%] h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-brand-cyan/20 blur-[120px]" />
        <div className="absolute inset-0 vignette" />
        <div className="absolute inset-0 bg-noise opacity-[0.04]" />
      </div>

      <div className="container-tight">
        {/* giant headline */}
        <h1 className="section-title text-display">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="block"
          >
            {t.hero.line1}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="block"
          >
            <span className="font-display italic font-bold text-gradient">
              {t.hero.accent}
            </span>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease }}
            className="block"
          >
            {t.hero.line3}
          </motion.span>
        </h1>

        {/* subcopy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease }}
          className="mt-9 max-w-xl text-body text-slate-300"
        >
          {t.hero.subcopy}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.38, ease }}
          className="mt-11 flex flex-col items-start gap-5 sm:flex-row sm:items-center"
        >
          <a
            href={site.links.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            {t.actions.bookCall}
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#services" className="group link-arrow">
            {t.actions.exploreServices}
            <span className="h-px w-8 bg-white/30 transition-all duration-300 group-hover:w-12 group-hover:bg-brand-cyan" />
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>

      {/* HUD overlay row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="container-tight absolute inset-x-0 bottom-8"
      >
        <div className="flex items-end justify-between">
          <div className="hud flex items-center gap-2.5">
            <span className="inline-block h-1.5 w-1.5 animate-rec-blink rounded-full bg-brand-cyan" />
            REC · HALLOWIS // 2026
          </div>

          {/* scroll cue */}
          <div className="hidden flex-col items-center gap-2 sm:flex">
            <span className="hud">{t.hero.scroll}</span>
            <span className="h-10 w-px overflow-hidden bg-white/15">
              <span className="block h-full w-full animate-scroll-cue bg-brand-cyan" />
            </span>
          </div>

          <div className="hud text-right leading-relaxed">
            N 52.37°
            <br />
            E 4.90°
          </div>
        </div>
      </motion.div>
    </section>
  );
}
