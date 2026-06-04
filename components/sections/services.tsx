"use client";
import { Check, Search, Code2, Cloud, Workflow } from "lucide-react";
import { services } from "@/lib/site";
import { Reveal } from "@/components/ui/reveal";

const icons = {
  "lead-generation": Search,
  "software-development": Code2,
  "cloud-devops": Cloud,
  "business-automation": Workflow,
} as const;

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="container-tight">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">What we do</span>
          <h2 className="section-title mt-6 text-4xl sm:text-6xl">
            Four ways we <span className="italic text-gradient">move you forward</span>
          </h2>
          <p className="mt-4 text-slate-400">
            Every engagement is senior-led and outcome-driven. Pick one capability or
            combine them into an end-to-end system.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((service, i) => {
            const Icon = icons[service.id as keyof typeof icons];
            return (
              <Reveal key={service.id} delay={i * 0.08}>
                <article
                  style={
                    {
                      "--from": service.gradientFrom,
                      "--to": service.gradientTo,
                    } as React.CSSProperties
                  }
                  className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05]"
                >
                  {/* hover glow */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[radial-gradient(circle,var(--to),transparent_70%)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40" />

                  <div className="flex items-center justify-between">
                    <div
                      className="grid h-14 w-14 place-items-center rounded-2xl text-white shadow-lg"
                      style={{
                        backgroundImage:
                          "linear-gradient(135deg, var(--from), var(--to))",
                      }}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/30">
                      S.0{i + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-extrabold uppercase tracking-tight text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-3 text-sm text-slate-300">
                        <span
                          className="grid h-5 w-5 shrink-0 place-items-center rounded-full"
                          style={{
                            backgroundImage:
                              "linear-gradient(135deg, var(--from), var(--to))",
                          }}
                        >
                          <Check className="h-3 w-3 text-white" />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
