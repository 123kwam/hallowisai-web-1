"use client";
import { Linkedin, Quote } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "@/components/ui/reveal";
import { useLanguage } from "@/components/i18n/language-provider";

export function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="container-tight">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <span className="eyebrow">{t.about.eyebrow}</span>
            <h2 className="section-title mt-6 text-4xl sm:text-6xl">
              {t.about.headingA}{" "}
              <span className="italic text-gradient">{t.about.accent}</span>
            </h2>
            <p className="mt-5 text-slate-400">{t.about.p1}</p>
            <p className="mt-4 text-slate-400">{t.about.p2}</p>

            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost mt-7"
            >
              <Linkedin className="h-4 w-4" />
              {t.about.connect}
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
              <Quote className="h-10 w-10 text-brand-cyan/40" />
              <p className="mt-5 font-display text-xl font-medium leading-relaxed text-slate-100">
                &ldquo;{t.about.quote}&rdquo;
              </p>
              <div className="mt-7 flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan font-display text-lg font-bold text-white">
                  KS
                </div>
                <div>
                  <div className="font-semibold text-white">{t.about.name}</div>
                  <div className="text-sm text-slate-400">{t.about.role}</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* location block — local SEO (Amsterdam / Netherlands) */}
        <Reveal className="mt-16">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-12">
            <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-brand-blue/15 blur-3xl" />
            <div className="relative max-w-3xl">
              <span className="eyebrow">{t.about.location.eyebrow}</span>
              <h2 className="section-title mt-5 text-3xl sm:text-5xl">
                {t.about.location.pre}{" "}
                <span className="italic text-gradient">{t.about.location.city}</span>
                {t.about.location.post}
              </h2>
              <p className="mt-5 max-w-2xl text-slate-400">{t.about.location.body}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
