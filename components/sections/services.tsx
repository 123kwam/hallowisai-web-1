"use client";
import { Check, Search, Code2, Cloud, Workflow } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { useLanguage } from "@/components/i18n/language-provider";

const icons = {
  "lead-generation": Search,
  "software-development": Code2,
  "cloud-devops": Cloud,
  "business-automation": Workflow,
} as const;

// non-translatable visual styling, keyed by service id
const gradients: Record<string, { from: string; to: string }> = {
  "lead-generation": { from: "#3b82f6", to: "#22d3ee" },
  "software-development": { from: "#06b6d4", to: "#3b82f6" },
  "cloud-devops": { from: "#0ea5e9", to: "#22d3ee" },
  "business-automation": { from: "#2563eb", to: "#38bdf8" },
};

export function Services() {
  const { t } = useLanguage();
  return (
    <section id="services" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="container-tight">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{t.services.eyebrow}</span>
          <h2 className="section-title mt-6 text-h2">
            {t.services.headingA}{" "}
            <span className="italic text-gradient">{t.services.accent}</span>
          </h2>
          <p className="mt-5 text-body text-slate-300">{t.services.subcopy}</p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {t.services.items.map((service, i) => {
            const Icon = icons[service.id as keyof typeof icons];
            const g = gradients[service.id];
            return (
              <Reveal key={service.id} delay={i * 0.08}>
                <article
                  style={
                    {
                      "--from": g.from,
                      "--to": g.to,
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

                  <h3 className="mt-6 font-display text-h3 font-extrabold uppercase text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-body text-slate-300">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-3 text-base text-slate-300">
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
