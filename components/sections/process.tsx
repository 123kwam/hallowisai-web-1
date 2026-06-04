"use client";
import { processSteps } from "@/lib/site";
import { Reveal } from "@/components/ui/reveal";

export function Process() {
  return (
    <section id="process" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="container-tight">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">How we work</span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
            A clear path from <span className="text-gradient">call to scale</span>
          </h2>
        </Reveal>

        <div className="relative mt-16 grid gap-6 md:grid-cols-4">
          {/* connecting line */}
          <div className="absolute left-0 top-12 hidden h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent md:block" />

          {processSteps.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.1}>
              <div className="relative h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                <div className="flex items-center gap-3">
                  <span className="font-display text-4xl font-bold text-gradient">{step.step}</span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
