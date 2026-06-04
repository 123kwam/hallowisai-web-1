"use client";
import { Linkedin, Quote } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "@/components/ui/reveal";

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="container-tight">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <span className="eyebrow">About</span>
            <h2 className="section-title mt-6 text-4xl sm:text-6xl">
              Built by operators who <span className="italic text-gradient">ship</span>
            </h2>
            <p className="mt-5 text-slate-400">
              HallowisAI is a focused AI agency. We don&apos;t hand you a deck and
              disappear — we architect, build, and run the systems alongside you.
              Senior people, real ownership, measurable outcomes.
            </p>
            <p className="mt-4 text-slate-400">
              Led by Kwame Sakyi, the team blends engineering depth with a
              relentless focus on the metrics that matter to your business.
            </p>

            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost mt-7"
            >
              <Linkedin className="h-4 w-4" />
              Connect with our CEO
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
              <Quote className="h-10 w-10 text-brand-cyan/40" />
              <p className="mt-5 font-display text-xl font-medium leading-relaxed text-slate-100">
                &ldquo;The best businesses don&apos;t just adopt AI — they build
                systems around it. We help you do exactly that, end to end.&rdquo;
              </p>
              <div className="mt-7 flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan font-display text-lg font-bold text-white">
                  KS
                </div>
                <div>
                  <div className="font-semibold text-white">Kwame Sakyi</div>
                  <div className="text-sm text-slate-400">Founder &amp; CEO, HallowisAI</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
