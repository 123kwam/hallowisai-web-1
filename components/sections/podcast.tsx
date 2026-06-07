"use client";
import { Play, Mic, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "@/components/ui/reveal";
import { useLanguage } from "@/components/i18n/language-provider";

export function Podcast() {
  const { t } = useLanguage();
  return (
    <section id="podcast" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="container-tight">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 md:p-14">
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-blue/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-brand-cyan/20 blur-3xl" />

            <div className="relative grid items-center gap-10 md:grid-cols-2">
              <div>
                <span className="eyebrow">
                  <Mic className="h-3.5 w-3.5" />
                  {t.podcast.eyebrow}
                </span>
                <h2 className="section-title mt-6 text-h2">
                  {t.podcast.titleA}{" "}
                  <span className="italic text-gradient">{t.podcast.accent}</span>
                </h2>
                <p className="mt-5 max-w-md text-body text-slate-300">{t.podcast.body}</p>
                <a
                  href={site.links.podcast}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-7"
                >
                  <Play className="h-4 w-4" />
                  {t.podcast.watch}
                </a>
              </div>

              <a
                href={site.links.podcast}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative grid aspect-video place-items-center overflow-hidden rounded-2xl border border-white/10 bg-ink-card"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/30 via-transparent to-brand-cyan/30 opacity-60" />
                <div className="absolute inset-0 bg-grid opacity-40" />
                <span className="relative grid h-20 w-20 place-items-center rounded-full bg-white/95 shadow-2xl transition-transform duration-300 group-hover:scale-110">
                  <Play className="h-7 w-7 translate-x-0.5 fill-ink text-ink" />
                </span>
                <span className="absolute right-4 top-4 flex items-center gap-1 text-xs font-medium text-white/80">
                  @tapintowisdom <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
