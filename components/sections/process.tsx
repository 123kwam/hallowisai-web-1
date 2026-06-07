"use client";
import { Reveal } from "@/components/ui/reveal";
import { useLanguage } from "@/components/i18n/language-provider";

export function Process() {
  const { t } = useLanguage();
  return (
    <section id="process" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="container-tight">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{t.process.eyebrow}</span>
          <h2 className="section-title mt-6 text-4xl sm:text-6xl">
            {t.process.headingA}{" "}
            <span className="italic text-gradient">{t.process.accent}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
            {t.process.support}
          </p>
        </Reveal>

        <div className="relative mt-16 grid gap-6 md:grid-cols-4">
          {/* connecting line */}
          <div className="absolute left-0 top-12 hidden h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent md:block" />

          {t.process.steps.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.1}>
              <div className="relative h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                <div className="flex items-center gap-3">
                  <span className="font-display text-4xl font-bold text-gradient">{step.step}</span>
                </div>
                <h3 className="mt-4 font-display text-xl font-extrabold uppercase tracking-tight text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
