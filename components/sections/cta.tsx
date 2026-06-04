"use client";
import { ArrowRight, Mail } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "@/components/ui/reveal";

export function CTA() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-tight">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-brand-blue/15 via-ink-card to-brand-cyan/10 px-6 py-16 text-center md:px-12 md:py-24">
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
            <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-glow/20 blur-[100px]" />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="section-title text-4xl sm:text-6xl">
                Let&apos;s build the system that <span className="italic text-gradient">scales you</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-slate-300">
                Book a free discovery call. We&apos;ll map your biggest opportunity and
                show you exactly what an AI-powered system would look like for your business.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a href={site.links.calendly} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Book a discovery call
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href={`mailto:${site.email}`} className="btn-ghost">
                  <Mail className="h-4 w-4" />
                  {site.email}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
